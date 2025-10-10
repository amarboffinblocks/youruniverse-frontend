import { FormData } from "@/types/form-types";

export const personaSchema: FormData[] = [
    {
        name: "avatar",
        type: "file",
        required: true,
        cols: 12,
        row: 4,
        rows: "3",
        
    },
    {
        name: "name",
        type: "text",
        label: "Persona Name",
        required: true,
        placeholder: "Enter the persona name",
        rules: {
            min: 4,
            max: 20
        },
        cols: 12,
        row: 4,
        rows: "3",
        
    },
    
    {
        name: "tagline",
        type: "text",
        label: " Tagline",
        required: true,
        placeholder: "Enter the tagline",
        cols: 12,
        row: 4,
        rows: "3",
        
    },
     {
        name: "lorebook",
        type: "select",
        required: true,
        label:"Select Lorebook",
        placeholder: "Connect to Lorebook",
        cols: 12,
        row: 4,
        rules: {
            options: [
                { label: "Luna AI", value: "luna-ai" },
                { label: "Astro Bot", value: "astro-bot" },
                { label: "Neo Guide", value: "neo-guide" },
                { label: "Zara Mentor", value: "zara-mentor" },
            ],
        },
        rows: "3",
        
    },
    {
        name: "details",
        type: "textarea",
        label: "Persona Details",
        placeholder: "Enter the some details about persona",

        required: true,
        cols: 12,
        row: 4,
        rows: "3",
        
        tokens: true,
    },
    {
        name: "catchphrases",
        type: "multi-entries",
        label: "Catchphrases ",
        required: true,
        placeholder: "Write the relative catchphrases",
        cols: 12,
        row: 4,
        rows: "3",
        tokens: true,
    },
   
   


]