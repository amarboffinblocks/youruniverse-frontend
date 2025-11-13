import { FormData } from "@/types/form-types";

export const profileSchema: FormData[] = [
    {
        name: "avatar",
        type: "file",
        required: true,
        cols: 12,
        row: 4,
        rows: "3",
        label: "Avatar"

    },
    {
        name: "username",
        type: "text",
        label: "Username",
        required: false,
        placeholder: "john123",
        disabled: true,
        cols: 12,
        row: 4,
        rows: "3",
        defaultValue: "hello"

    },
    {
        name: "email",
        type: "text",
        label: "Email",
        required: false,
        placeholder: "john@gmail.com",
        cols: 12,
        disabled: true,
        row: 4,
        rows: "3",
        defaultValue: "ben10@gmail.com"

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
        name: "tag-to-avoid",
        type: "multi-select",
        label: "Tags To avoid",
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
        name: "aboutme",
        type: "textarea",
        label: "About Me",
        required: true,
        cols: 12,
        row: 4,
        rows: "3",
        placeholder: "Write something about yourself",
        tokens: false,
    },
    {
        name: "following",
        type: "text",
        label: "Following",
        placeholder: "Enter topics or creators you’re currently following",
        required: true,
        disabled: true,
        cols: 12,
        row: 4,
        rows: "3",
        tokens: false,
    },
    {
        name: "plan",
        label: "Subscription Plan",
        type: "select",
        required: true,
        placeholder: "Choose your subscription plan",
        cols: 12,
        row: 4,
        rules: {
            options: [
                { label: "Basic (Free)", value: "basic" },
                { label: "Pro (Monthly)", value: "pro-monthly" },
                { label: "Pro (Yearly)", value: "pro-yearly" },
                { label: "Enterprise", value: "enterprise" },
            ],
        },
        rows: "3",
    }
]