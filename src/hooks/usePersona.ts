import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setCredentials } from "@/store/features/auth/authSlice";
import { personaService } from "@/services/persona-service";
import {  useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const usePersonaCreate = () => {
    const router = useRouter();

    return useMutation({
        mutationFn: personaService.createPersona,
        onSuccess: (data) => {
            console.log("persona response:", data);
            toast.success("Persona Created successful!");
        },
        onError: (error: any) => {
          console.log(error,'persona error')
        },
    });
};

export const useGetAllPersonas = () => {
  return useQuery({
    queryKey: ["personas"],
    queryFn: personaService.getAllPersonas,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};

export const useGetPersonasById = (id: string) => {
  return useQuery({
    queryKey: ["personas", id],
    queryFn: () => personaService.getPersonaById(id),
    enabled: !!id, // optional safety check
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};

export const useDeletedPernaById = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (ids: string[]) => personaService.deletePersonaById(ids),
    onSuccess: () =>{ toast.success("Persona deleted successfully!")
      queryClient.invalidateQueries({ queryKey: ["personas"] });
      
    },
    onError:()=>{
      toast.error('Something went wrong')
    }
  });
};
