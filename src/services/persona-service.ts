import { api } from "@/lib/axios";

export const personaService = {
  createPersona: async (payload: FormData) => {
    const { data } = await api.post("/personas/create", payload, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return data;
  },

  updatePersona: async (id: string, payload: FormData) => {
    const { data } = await api.patch(`/personas/${id}/update`, payload, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return data;
  },

  deletePersona: async (id: string) => {
    const { data } = await api.delete(`/personas/${id}/delete`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return data;
  },

  getAllPersonas: async () => {
    const { data } = await api.get("/personas", {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return data;
  },

  getPersonaById: async (id: string) => {
    const { data } = await api.get(`/personas/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return data?.data;
  },
  
deletePersonaById: async (ids: string[]) => {
  console.log(ids,'check')
  const { data } = await api.delete(`/personas/delete`, {
    data: { ids }, // axios requires `data` field for DELETE body
    headers: {
      "Content-Type": "application/json",
    },
  });
  return data?.data;
}
}