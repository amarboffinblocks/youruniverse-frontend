/**
 * API Client
 * Centralized HTTP client with error handling, interceptors, and retry logic
 */
import axios, { AxiosInstance, AxiosError, InternalAxiosRequestConfig } from "axios";
import { ApiError } from "./types";

/**
 * Get the base API URL from environment variables
 * Falls back to a default if not set
 */
const getBaseURL = (): string => {
  if (typeof window !== "undefined") {
    return "http://localhost:8000";
  }
  return "http://localhost:8000";
};

/**
 * Create axios instance with default configuration
 */
const createApiClient = (): AxiosInstance => {
  const client = axios.create({
    baseURL: getBaseURL(),
    timeout: 30000,
    headers: {
      "Content-Type": "application/json",
    },
  });

  /**
   * Request interceptor
   * Adds common headers, authentication tokens, and handles request transformation
   */
  client.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      // Add access token if available
      if (typeof window !== "undefined") {
        const accessToken = localStorage.getItem("access_token");
        if (accessToken && !config.headers.Authorization) {
          config.headers.Authorization = `Bearer ${accessToken}`;
        }
      }

      // Add idempotency key for POST/PUT/PATCH requests if not present
      if (["post", "put", "patch"].includes(config.method?.toLowerCase() || "") && !config.headers["Idempotency-Key"]) {
        const uuid = typeof crypto !== "undefined" && crypto.randomUUID
          ? crypto.randomUUID()
          : `${Date.now()}-${Math.random().toString(36).substring(2, 15)}`;
        config.headers["Idempotency-Key"] = uuid;
      }

      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  /**
   * Response interceptor
   * Handles error transformation and common error cases
   */
  client.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error: AxiosError) => {
      const apiError: ApiError = {
        success: false,
        error: error.message || "An unexpected error occurred",
        statusCode: error.response?.status,
      };

      // Handle different error scenarios
      if (error.response) {
        const data = error.response.data as { message?: string | { code?: number; message?: string }; error?: string | { code?: number; message?: string } };

        // Safely extract message as string
        let messageStr: string | undefined;
        if (typeof data.message === "string") {
          messageStr = data.message;
        } else if (data.message && typeof data.message === "object" && "message" in data.message && typeof data.message.message === "string") {
          messageStr = data.message.message;
        }

        // Safely extract error as string
        let errorStr: string | undefined;
        if (typeof data.error === "string") {
          errorStr = data.error;
        } else if (data.error && typeof data.error === "object" && "message" in data.error && typeof data.error.message === "string") {
          errorStr = data.error.message;
        }

        apiError.message = messageStr || errorStr || error.message;
        apiError.error = errorStr || messageStr || error.message;

        // Handle 401 Unauthorized - token expired
        if (error.response.status === 401) {
          // Token refresh logic can be handled here if needed
          // For now, we'll let individual hooks handle it
        }
      } else if (error.request) {
        apiError.error = "Network error. Please check your connection.";
        apiError.message = "Unable to reach the server. Please try again later.";
      } else {
        apiError.error = error.message || "Request configuration error";
      }

      return Promise.reject(apiError);
    }
  );

  return client;
};

/**
 * Export singleton API client instance
 */
export const apiClient = createApiClient();

/**
 * Helper function to generate idempotency key
 */

export const generateIdempotencyKey = (): string => {
  if (typeof crypto !== "undefined" && crypto.randomUUID) {
    return crypto.randomUUID();
  }
  return `${Date.now()}-${Math.random().toString(36).substring(2, 15)}-${Math.random().toString(36).substring(2, 15)}`;
};

