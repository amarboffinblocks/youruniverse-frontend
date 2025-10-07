import { FormData } from "@/types/form-types";

export const profileSchema: FormData[] = [
    {
        name: "avatar",
        type: "file",
        required: true,
        cols: 12,
        row: 4,
        rows: "3",
        
    },
    {
        name: "username",
        type: "text",
        label: "Username",
        required: true,
        placeholder: "Enter your username",
        cols: 12,
        row: 4,
        rows: "3",
        
    },
    {
        name: "email",
        type: "email",
        label: "Email",
        required: true,
        placeholder: "Enter your email",
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
        name: "theme",
        type: "select",
        required: true,
        placeholder: "Choose your theme",
        cols: 6,
        row: 4,
        rules: {
            options: [
                { label: "Dark Purple", value: "dark-purple" },
                { label: "White", value: "white" },
                { label: "Yellow", value: "yellow" },
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
        name: "tag-to-avoid",
        type: "multi-select",
        label: "Tags To Avoid",
        required: true,
        placeholder: "Tags To Avoid",
        rules: {
            model: "tags"
        },
        cols: 12,
        row: 4,
        rows: "3",
        
    },
    {
        name: "tags",
        type: "multi-select",
        label: "Tags To follow",
        required: true,
        placeholder: "Tags to follow",
        rules: {
            model: "tags"
        },
        cols: 12,
        row: 4,
        rows: "3",
        
    },
    {
        name: "following",
        type: "textarea",
        label: "Following",
        required: true,
        cols: 12,
        row: 4,
        rows: "3",
        
        tokens: false,
    },
    {
        name: "subscription",
        type: "textarea",
        label: "Subscription",
        required: true,
        cols: 12,
        row: 4,
        rows: "3",
        
        tokens: true,
    },
]