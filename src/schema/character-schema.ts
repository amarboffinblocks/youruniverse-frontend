export type FieldType =
    | "text"
    | "textarea"
    | "file"
    | "select"
    | "radio"
    | "checkbox"
    | "multi-select"
    | "switch"
    | "toggle";
 
export interface FieldOption {
    label?: string;
    value: string | number | boolean;
}
 
export interface FieldRules {
    min?: number;
    max?: number;
    accept?: string[];
    options?: FieldOption[];
    model?: string;
    field?: string;
}
 
export interface FormData {
    name: string;
    type: FieldType;
    label?: string;
    placeholder?: string;
    required?: boolean;
    multiple?: boolean;
    value?: string | number | boolean | string[];
    help?: string;
    rules?: FieldRules;
    row?: number;
    cols?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    rows?: string;
    defaultValue?: any;
    tokens?: boolean
}
export const characterSchema:FormData[] = [
    {
        name: "characterName",
        type: "text",
        label: "Character Name",
        required: true,
        placeholder: "Enter your character's name",
        cols: 12,
        row: 4,
        rows: "3",
        defaultValue: "",
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
    },  {
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
    }, {
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
        defaultValue: "",
    },
     {
        name: "tagName",
        type: "multi-select",
        label: "Choose Characters Tags",
        required: true,
        placeholder: "Select tags that best describe your character",
        cols: 12,
        row: 4,
        rows: "3",
        defaultValue: "",
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
        defaultValue: "",
        tokens: true,
    },
    {
        name: "scenario",
        type: "textarea",
        label: "Scenario",
        required: true,
        placeholder:"Describe the scenario or background story",
        cols: 12,
        row: 4,
        rows: "3",
        defaultValue: "",
        tokens: true,
    },
    {
        name: "personalitySummary",
        type: "textarea",
        label: "Personality Summary",
        required: true,
        placeholder:"Write a short summary of the character's personality",
        cols: 12,
        row: 4,
        rows: "3",
        defaultValue: "",
        tokens: true,
    },
    {
        name: "firstMessage",
        type: "textarea",
        label: "First Message",
        required: true,
        placeholder:"Write the character's first message",
        cols: 12,
        row: 4,
        rows: "3",
        defaultValue: "",
        tokens: true,
    },
     {
        name: "exampleDialogue",
        type: "textarea",
        label: "Example Dialogue",
        required: true,
        placeholder:"Provide example dialogues for better context",
        cols: 12,
        row: 4,
        rows: "3",
        defaultValue: "",
        tokens: true,
    },
     {
        name: "authorNotes",
        type: "textarea",
        label: "Author Notes",
        required: true,
        placeholder:"Add notes or instructions for the character",
        cols: 12,
        row: 4,
        rows: "3",
        defaultValue: "",
        tokens: true,
    },
     {
        name: "characterNotes",
        type: "textarea",
        label: "Character Notes",
        required: true,
        placeholder:"Add any additional details about the character",
        cols: 12,
        row: 4,
        rows: "3",
        defaultValue: "",
        tokens: true,
    },
];