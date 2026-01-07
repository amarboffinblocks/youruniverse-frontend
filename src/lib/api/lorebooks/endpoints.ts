/**
 * Lorebook API Endpoints
 * All lorebook-related API calls
 */
import { apiClient } from "../shared/client";
import { ApiResponse } from "../shared/types";
import type {
  CreateLorebookRequest,
  CreateLorebookResponse,
} from "./types";
import { getAccessToken } from "@/lib/utils/token-storage";

/**
 * Create a new lorebook
 */
export const createLorebook = async (
  data: CreateLorebookRequest
): Promise<ApiResponse<CreateLorebookResponse>> => {
  const accessToken = getAccessToken();
  if (!accessToken) {
    throw new Error("No access token available");
  }

  const response = await apiClient.post<ApiResponse<CreateLorebookResponse>>(
    "/api/v1/lorebooks",
    data,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    }
  );

  return response.data;
};

