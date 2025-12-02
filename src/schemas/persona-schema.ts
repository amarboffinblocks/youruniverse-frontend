import { FormData } from "@/types/form-types";

export const personaSchema: FormData[] = [
    {
        name: "avatar",
        type: "file",
        required: true,
        cols: 12,
        row: 4,
        rows: "3",
        label:"Avatar"
        
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
        name: "visiable",
        type: "toggle",
        required: true,
        rules: {
            options: [
                { label: "Public", value: "public" },
                { label: "Private", value: "private" },],
        },
        cols: 4,
        row: 4,
        defaultValue: "private",
    },

    {
        name: "rating",
        type: "toggle",
        required: true,
        rules: {
            options: [
                { label: "NSFW", value: "NSFW" },
                { label: "SFW", value: "SFW" },],
        },
        cols: 4,
        row: 4,
        defaultValue: "SFW",
    },
    {
        name: "favourite",
        type: "checkbox",
        required: true,
        label: 'Add To Favourites',
        cols: 4,
        row: 4,
        // defaultValue: false,
    },
    
 {
        name: "tags",
        type: "multi-select",
        label: "Persona Tags",
        required: true,
        placeholder: "Single words that describe your persona",
        rules: {
            model: "tags"
        },
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
        placeholder: "Enter your Persona information here, or in other words, who would you like to be in Your Universe. The Character will use this to know more about you. ",

        required: true,
        cols: 12,
        row: 4,
        rows: "3",
        
        tokens: true,
    },

   

]