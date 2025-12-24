/**
 * useCurrentUser Hook
 * Custom hook for fetching current user profile with TanStack Query
 * Handles authentication and automatic token refresh
 */
"use client";

import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getCurrentUser } from "@/lib/api/user";
import { queryKeys } from "@/lib/api/shared/query-keys";
import { getAccessToken } from "@/lib/utils/token-storage";
import { useRefreshToken } from "../auth/use-refresh-token";
import type { GetCurrentUserResponse } from "@/lib/api/user";
import type { ApiError } from "@/lib/api/shared/types";

interface UseCurrentUserOptions {
  enabled?: boolean;
  onSuccess?: (data: GetCurrentUserResponse) => void;
  onError?: (error: ApiError) => void;
  retry?: boolean;
}

/**
 * Custom hook for fetching current user profile
 * Automatically handles token refresh on 401 errors
 */
export const useCurrentUser = (options: UseCurrentUserOptions = {}) => {
  const {
    enabled = true,
    onSuccess: onSuccessCallback,
    onError: onErrorCallback,
    retry = true,
  } = options;

  const queryClient = useQueryClient();
  const { refreshAsync } = useRefreshToken({
    onTokenExpired: () => {
      queryClient.removeQueries({ queryKey: queryKeys.auth.all });
    },
  });

  const accessToken = getAccessToken();

  const query = useQuery({
    queryKey: queryKeys.user.current(),
    queryFn: async () => {
      if (!accessToken) {
        throw new Error("No access token available");
      }

      try {
        const response = await getCurrentUser(accessToken);
        return response.data;
      } catch (error: any) {
        // If 401, try to refresh token and retry
        if (error.statusCode === 401 && retry) {
          try {
            await refreshAsync();
            const newToken = getAccessToken();
            if (newToken) {
              const retryResponse = await getCurrentUser(newToken);
              return retryResponse.data;
            }
          } catch (refreshError) {
            // Refresh failed, clear cache
            queryClient.removeQueries({ queryKey: queryKeys.auth.all });
            throw refreshError;
          }
        }
        throw error;
      }
    },
    enabled: enabled && !!accessToken,
    staleTime: 1000 * 60 * 5, // 5 minutes
    gcTime: 1000 * 60 * 10, // 10 minutes
    retry: (failureCount, error) => {
      const apiError = error as unknown as ApiError;
      if (apiError?.statusCode === 401 || apiError?.statusCode === 403) {
        return false;
      }
      return failureCount < 2;
    },
    retryDelay: 1000,
  });

  // Execute callbacks
  if (query.data && onSuccessCallback) {
    onSuccessCallback(query.data);
  }

  if (query.error && onErrorCallback) {
    onErrorCallback(query.error as unknown as ApiError);
  }

  return {
    user: query.data?.user,
    data: query.data,
    isLoading: query.isLoading,
    isError: query.isError,
    error: query.error ? (query.error as unknown as ApiError) : null,
    isFetching: query.isFetching,
    refetch: query.refetch,
  };
};

