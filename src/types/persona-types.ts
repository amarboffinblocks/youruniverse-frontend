export interface PersonaAvatar {
  url: string;
  public_id: string;
}

export interface LorebookEntry {
  keys: string;
  content: string;
}

export interface Lorebook {
  name: string;
  tagline: string;
  avatar: PersonaAvatar;
  character_note: string;
  created_by: string;
  description: string;
  entries: LorebookEntry[];
  publish_as: string;
  rating: string;
  tags: string[];
  visibility: string;
}

export interface Persona {
  id: string;
  name: string;
  tagline: string;
  persona_details: string;
  avatar: PersonaAvatar;
  created_by: string;
  created_at: string;
  updated_at: string;
  creator_name: string;
  tokens: string;
  lorebook: Lorebook;
}