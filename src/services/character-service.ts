import { api } from "@/lib/axios";


export const characterService = {
  createCharacter: async (payload: FormData) => {
    const { data } = await api.post('/characters/create', payload, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return data;
  },

  importCharacter: async (payload: FormData) => {
    const { data } = await api.post('/characters/import-character', payload, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return data;
  },
  updateCreater: async (id: string, payload: FormData) => {
    const { data } = await api.put(`/characters/update/${id}`, payload, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return data;
  },

  getAllCharacters: async () => {
    const { data } = await api.get('/characters', {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return data;
  },


  getCharacterById: async (id: string) => {
    const { data } = await api.get(`/characters/${id}`, {
      headers: {
        'Content-Type': 'application/json', // explicitly set for clarity
      },
    });
    return data?.data;
  },


  deleteCharacter: async (id: string) => {
    const { data } = await api.delete(`/characters/${id}`, {
      headers: {
        'Content-Type': 'application/json', // explicitly set for clarity
      },
    });
    return data
  },
};
