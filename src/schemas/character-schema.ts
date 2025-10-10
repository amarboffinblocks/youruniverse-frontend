import { FormData } from "@/types/form-types";

export const characterSchema: FormData[] = [
    {
        name: "avatar",
        type: "file",
        required: true,
        cols: 12,
        row: 4,
        rows: "3",
    },
    {
        name: "backgroundImage",
        type: "file",
        required: true,
        cols: 12,
        row: 4,
        rows: "3",
    },
    {
        name: "characterName",
        type: "text",
        label: "Character Name",
        required: true,
        placeholder: "Enter your character's name",
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
        name: "lorebook",
        type: "select",
        required: true,
        placeholder: "Select a lorebook",
        cols: 6,
        row: 4,
        rules: {
            options: [
                { label: "Lorebook 1", value: "lorebook-1" },
                { label: "Lorebook 2", value: "lorebook-2" },
                { label: "Lorebook 3", value: "lorebook-3" },
            ],
        },
        rows: "3",
    },
    {
        name: "tags",
        type: "multi-select",
        label: "Choose Characters Tags",
        required: true,
        placeholder: "Select tags that best describe your character",
        rules: {
            model: "tags"
        },
        cols: 12,
        row: 4,
        rows: "3",
        
    },
    {
        name: "description",
        type: "textarea",
        label: "Description",
        required: true,
        placeholder: "Describe your character's background, story, or key traits",
        cols: 12,
        row: 4,
        rows: "3",
        tokens: true,
    },
    {
        name: "scenario",
        type: "textarea",
        label: "Scenario",
        required: true,
        placeholder: "Describe the scenario or background story",
        cols: 12,
        row: 4,
        rows: "3",
        
        tokens: true,
    },
    {
        name: "personalitySummary",
        type: "textarea",
        label: "Personality Summary",
        required: true,
        placeholder: "Write a short summary of the character's personality",
        cols: 12,
        row: 4,
        rows: "3",
        
        tokens: true,
    },
    {
        name: "firstMessage",
        type: "textarea",
        label: "First Message",
        required: true,
        placeholder: "Write the character's first message",
        cols: 12,
        row: 4,
        rows: "3",
        
        tokens: true,
    },
    {
        name: "alternateMessages",
        type: "multi-entries",
        label: "Alternate Messages",
        required: true,
        placeholder: "Write the character's first message",
        cols: 12,
        row: 4,
        rows: "3",
        tokens: true,
    },
    {
        name: "exampleDialogue",
        type: "textarea",
        label: "Example Dialogue",
        required: true,
        placeholder: "Provide example dialogues for better context",
        cols: 12,
        row: 4,
        rows: "3",
        
        tokens: true,
    },
    {
        name: "authorNotes",
        type: "textarea",
        label: "Author Notes",
        required: true,
        placeholder: "Add notes or instructions for the character",
        cols: 12,
        row: 4,
        rows: "3",
        
        tokens: true,
    },
    {
        name: "characterNotes",
        type: "textarea",
        label: "Character Notes",
        required: true,
        placeholder: "Add any additional details about the character",
        cols: 12,
        row: 4,
        rows: "3",
        
        tokens: true,
    },
];