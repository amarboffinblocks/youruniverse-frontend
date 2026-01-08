/**
 * useDeleteLorebook Hook
 * Custom hook for deleting a lorebook with TanStack Query
 */
"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { deleteLorebook } from "@/lib/api/lorebooks";
import { queryKeys } from "@/lib/api/shared/query-keys";
import type { ApiError } from "@/lib/api/shared/types";

interface UseDeleteLorebookOptions {
  /**
   * Callback fired on successful lorebook deletion
   */
  onSuccess?: () => void;

  /**
   * Callback fired on deletion error
   */
  onError?: (error: ApiError) => void;

  /**
   * Whether to show toast notifications (default: true)
   */
  showToasts?: boolean;
}

export const useDeleteLorebook = (options?: UseDeleteLorebookOptions) => {
  const {
    onSuccess: onSuccessCallback,
    onError: onErrorCallback,
    showToasts = true,
  } = options || {};

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (lorebookId: string) => {
      await deleteLorebook(lorebookId);
    },
    retry: (failureCount, error) => {
      // Don't retry on 4xx errors
      if ((error as ApiError).statusCode && (error as ApiError).statusCode! >= 400 && (error as ApiError).statusCode! < 500) {
        return false;
      }
      return failureCount < 3;
    },
    retryDelay: (attemptIndex) => {
      return Math.min(1000 * 2 ** attemptIndex, 4000);
    },
    onSuccess: () => {
      // Invalidate lorebook queries to refetch without deleted lorebook
      queryClient.invalidateQueries({ queryKey: queryKeys.lorebooks.all });

      if (showToasts) {
        toast.success("Lorebook Deleted", {
          description: "Lorebook has been permanently deleted.",
          duration: 5000,
        });
      }

      if (onSuccessCallback) {
        onSuccessCallback();
      }
    },
    onError: (error: ApiError) => {
      const errorMessage =
        error.message ||
        error.error ||
        "Failed to delete lorebook. Please try again.";

      if (showToasts) {
        toast.error("Deletion Failed", {
          description: errorMessage,
          duration: 5000,
        });
      }

      if (onErrorCallback) {
        onErrorCallback(error);
      }
    },
  });

  return {
    deleteLorebook: mutation.mutate,
    deleteLorebookAsync: mutation.mutateAsync,
    isLoading: mutation.isPending,
    isSuccess: mutation.isSuccess,
    isError: mutation.isError,
    error: mutation.error as ApiError | null,
    reset: mutation.reset,
  };
};
