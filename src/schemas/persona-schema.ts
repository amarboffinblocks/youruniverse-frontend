import { FormData } from "@/types/form-types";

export const personaSchema: FormData[] = [
    {
        name: "avatar",
        type: "file",
        required: true,
        cols: 12,
        row: 4,
        rows: "3",
        defaultValue: "",
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
        defaultValue: "",
    },
    {
        name: "details",
        type: "textarea",
        label: "Persona Details",
        required: true,
        cols: 12,
        row: 4,
        rows: "3",
        defaultValue: "",
        tokens: true,
    },
    {
        name: "catchphrases",
        type: "textarea",
        label: "Catchphrases ",
        required: true,
        cols: 12,
        row: 4,
        rows: "3",
        defaultValue: "",
        tokens: true,
    },

    {
        name: "lorebook",
        type: "select",
        required: true,
        placeholder: "Connect to Lorebook",
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
        defaultValue: "",
    },


]