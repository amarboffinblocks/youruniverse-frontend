/**
 * Lorebook API Types
 * Type definitions for lorebook-related endpoints
 */

import { ApiResponse } from "../shared/types";

/**
 * Lorebook Rating
 */
export type LorebookRating = "SFW" | "NSFW";

/**
 * Lorebook Visibility
 */
export type LorebookVisibility = "public" | "private";

/**
 * Lorebook Entry
 */
export interface LorebookEntry {
  keyword: string;
  context: string;
  priority?: number;
  isEnabled?: boolean;
}

/**
 * Avatar Object
 */
export interface Avatar {
  url: string;
}

/**
 * Create Lorebook Request
 */
export interface CreateLorebookRequest {
  name: string;
  description?: string;
  visibility: LorebookVisibility;
  rating: LorebookRating;
  avatar?: Avatar;
  tags?: string[];
  entries?: LorebookEntry[];
}

/**
 * Lorebook Response Data
 */
export interface Lorebook {
  id: string;
  name: string;
  description?: string;
  visibility: LorebookVisibility;
  rating: LorebookRating;
  avatar?: Avatar | null;
  tags?: string[];
  entries?: LorebookEntry[];
  createdAt: string;
  updatedAt: string;
  userId: string;
}

/**
 * Create Lorebook Response
 */
export interface CreateLorebookResponse {
  lorebook: Lorebook;
  message?: string;
}

