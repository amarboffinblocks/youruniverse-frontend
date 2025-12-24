"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useQueryClient } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import { isAuthenticated, getAccessToken } from "@/lib/utils/token-storage";
import { useCurrentUser } from "@/hooks/user/use-current-user";
import { useRefreshToken } from "@/hooks/auth/use-refresh-token";

interface ProtectedRouteProps {
  children: React.ReactNode;
  redirectTo?: string;
  requireAuth?: boolean;
}

/**
 * ProtectedRoute Component
 * Protects routes that require authentication
 * - Checks for valid access token
 * - Validates token by fetching current user
 * - Attempts token refresh if token is expired
 * - Redirects to login if authentication fails
 */
export const ProtectedRoute = ({
  children,
  redirectTo = "/sign-in",
  requireAuth = true,
}: ProtectedRouteProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const queryClient = useQueryClient();
  const [isChecking, setIsChecking] = useState(true);
  const [isAuthorized, setIsAuthorized] = useState(false);

  const accessToken = getAccessToken();
  const { refresh } = useRefreshToken({
    onSuccess: () => {
      setIsAuthorized(true);
      setIsChecking(false);
    },
    onError: () => {
      setIsAuthorized(false);
      setIsChecking(false);
      router.push(`${redirectTo}?redirect=${encodeURIComponent(pathname)}`);
    },
  });

  const {
    data: user,
    isLoading: isLoadingUser,
    isError: isUserError,
    refetch: refetchUser,
  } = useCurrentUser({
    enabled: !!accessToken && requireAuth,
    retry: false,
  });

  useEffect(() => {
    const checkAuth = async () => {
      // If route doesn't require auth, allow access
      if (!requireAuth) {
        setIsAuthorized(true);
        setIsChecking(false);
        return;
      }

      // Check if user has access token
      if (!accessToken) {
        setIsAuthorized(false);
        setIsChecking(false);
        router.push(`${redirectTo}?redirect=${encodeURIComponent(pathname)}`);
        return;
      }

      // Wait for user query to complete
      if (isLoadingUser) {
        return;
      }

      // If user data is loaded successfully, authorize
      if (user && !isUserError) {
        setIsAuthorized(true);
        setIsChecking(false);
        return;
      }

      // If user query failed, try to refresh token
      if (isUserError) {
        try {
          await refresh();
        } catch (error) {
          // Refresh failed, redirect to login
          setIsAuthorized(false);
          setIsChecking(false);
          router.push(`${redirectTo}?redirect=${encodeURIComponent(pathname)}`);
        }
      }
    };

    checkAuth();
  }, [
    accessToken,
    user,
    isLoadingUser,
    isUserError,
    requireAuth,
    redirectTo,
    pathname,
    router,
    refresh,
  ]);

  // Show loading state while checking authentication
  if (isChecking || isLoadingUser) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-background">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <p className="text-sm text-muted-foreground">Verifying authentication...</p>
        </div>
      </div>
    );
  }

  // If not authorized, don't render children (redirect will happen)
  if (!isAuthorized) {
    return null;
  }

  // Render protected content
  return <>{children}</>;
};

