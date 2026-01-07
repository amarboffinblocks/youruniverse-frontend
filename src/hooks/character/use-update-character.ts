/**
 * useUpdateCharacter Hook
 * Custom hook for updating a character with TanStack Query
 * Handles mutation, error states, success callbacks, and cache invalidation
 */
"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { updateCharacter } from "@/lib/api/characters";
import { queryKeys } from "@/lib/api/shared/query-keys";
import type { UpdateCharacterRequest, UpdateCharacterResponse } from "@/lib/api/characters";
import type { ApiError } from "@/lib/api/shared/types";

/**
 * Mutation options for updating a character
 */
interface UseUpdateCharacterOptions {
  /**
   * Character ID to update
   */
  characterId: string;

  /**
   * Callback fired on successful character update
   * @param data - Character update response data
   */
  onSuccess?: (data: UpdateCharacterResponse) => void;

  /**
   * Callback fired on character update error
   * @param error - API error object
   */
  onError?: (error: ApiError) => void;

  /**
   * Whether to show toast notifications (default: true)
   */
  showToasts?: boolean;
}

/**
 * Custom hook for updating a character
 * @param options - Configuration options for the mutation
 * @returns Mutation object with status, data, and mutation function
 */
export const useUpdateCharacter = (options: UseUpdateCharacterOptions) => {
  const {
    characterId,
    onSuccess: onSuccessCallback,
    onError: onErrorCallback,
    showToasts = true,
  } = options;

  const queryClient = useQueryClient();

  /**
   * Update character mutation
   * Uses TanStack Query's useMutation with advanced features:
   * - Retry logic (3 attempts with exponential backoff)
   * - Error handling with toast notifications
   * - Success handling with cache invalidation
   */
  const mutation = useMutation({
    mutationFn: async (data: UpdateCharacterRequest) => {
      if (!characterId) {
        throw new Error("Character ID is required for update");
      }
      return await updateCharacter(characterId, data);
    },

    /**
     * Retry configuration
     * Retries failed requests up to 3 times with exponential backoff
     */
    retry: (failureCount, error) => {
      // Don't retry on 4xx errors (client errors)
      if ((error as ApiError).statusCode && (error as ApiError).statusCode! >= 400 && (error as ApiError).statusCode! < 500) {
        return false;
      }
      // Retry up to 3 times for network/server errors
      return failureCount < 3;
    },

    retryDelay: (attemptIndex) => {
      // Exponential backoff: 1s, 2s, 4s
      return Math.min(1000 * 2 ** attemptIndex, 4000);
    },

    /**
     * On mutation success
     * Handles success state, cache invalidation, and callbacks
     */
    onSuccess: (response) => {
      const { data } = response;

      // Invalidate character list queries to refetch with updated character
      queryClient.invalidateQueries({ queryKey: queryKeys.characters.all });

      // Update the character in cache for immediate access
      if (data.character) {
        queryClient.setQueryData(
          queryKeys.characters.detail(data.character.id),
          { character: data.character }
        );
      }

      // Show success toast
      if (showToasts) {
        toast.success("Character Updated", {
          description: data.message || "Your character has been updated successfully.",
          duration: 5000,
        });
      }

      // Execute custom success callback
      if (onSuccessCallback) {
        onSuccessCallback(data);
      }
    },

    /**
     * On mutation error
     * Handles error state, error messages, and callbacks
     */
    onError: (error: ApiError) => {
      // Extract error message
      const errorMessage =
        error.message ||
        error.error ||
        "Failed to update character. Please try again.";

      // Show error toast
      if (showToasts) {
        toast.error("Update Failed", {
          description: errorMessage,
          duration: 5000,
        });
      }

      // Execute custom error callback
      if (onErrorCallback) {
        onErrorCallback(error);
      }
    },

    /**
     * On mutation settle (both success and error)
     * Can be used for cleanup or analytics
     */
    onSettled: () => {
      // Refetch character lists to ensure consistency
      queryClient.invalidateQueries({ queryKey: queryKeys.characters.lists() });
    },
  });

  /**
   * Update character function wrapper
   * Provides a cleaner API for calling the mutation
   */
  const update = (data: UpdateCharacterRequest) => {
    return mutation.mutate(data);
  };

  /**
   * Update character async function wrapper
   * Returns a promise for use in async/await patterns
   */
  const updateAsync = (data: UpdateCharacterRequest) => {
    return mutation.mutateAsync(data);
  };

  return {
    /**
     * Mutation function
     * Call this to trigger character update
     */
    updateCharacter: update,

    /**
     * Async mutation function
     * Returns a promise
     */
    updateCharacterAsync: updateAsync,

    /**
     * Mutation status
     * - idle: Not started
     * - pending: In progress
     * - error: Failed
     * - success: Completed successfully
     */
    status: mutation.status,

    /**
     * Whether mutation is currently pending
     */
    isLoading: mutation.isPending,

    /**
     * Whether mutation completed successfully
     */
    isSuccess: mutation.isSuccess,

    /**
     * Whether mutation failed
     */
    isError: mutation.isError,

    /**
     * Response data (available after success)
     */
    data: mutation.data?.data,

    /**
     * Error object (available after error)
     */
    error: mutation.error as ApiError | null,

    /**
     * Reset mutation state
     * Useful for clearing error/success states
     */
    reset: mutation.reset,
  };
};

