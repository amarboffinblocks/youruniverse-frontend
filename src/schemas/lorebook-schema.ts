import { FormData } from "@/types/form-types";

export const lorebookSchema: FormData[] = [
    {
        name: "avatar",
        type: "file",
        required: true,
        cols: 12,
        row: 4,
        rows: "3",
        
    },
    {
        name: "lorebookName",
        type: "text",
        label: "Lorebook Name",
        required: true,
        placeholder: "Enter the lorebook name",
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
                { label: "Private", value: "private" },
                { label: "Public", value: "public" },
            ],
        },
        cols: 3,
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
        cols: 3,
        row: 4,
        defaultValue: "SFW",
    },
    {
        name: "connectToCharater",
        type: "select",
        required: true,
        placeholder: "Connect to charater",
        cols: 6,
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
        name: "connectToPersona",
        type: "select",
        required: true,
        placeholder: "Connect to Persona",
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
        name: "tags",
        type: "multi-select",
        label: "Choose Tags",
        required: true,
        placeholder: "Select tags that best describe your lorebook",
        rules: {
            model: "tags"
        },
        cols: 12,
        row: 4,
        rows: "3",
        
    },
     {
        name: "keyword",
        type: "multi-entries",
        label: "Keyword or Term ",
        required: true,
        placeholder: "Write the Keywords",
        cols: 12,
        row: 4,
        rows: "3",
        tokens: true,
    },
    {
        name: "context",
        type: "textarea",
        label: "Context",
        placeholder: "Write the content related to keywords",
        required: true,
        cols: 12,
        row: 4,
        rows: "3",
        
        tokens: true,
    },
]