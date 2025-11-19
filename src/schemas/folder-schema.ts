  import { FormData } from "@/types/form-types";
  
  export const FolderSchema: FormData[] = [
  {
        name: "folderName",
        type: "text",
        label: "Realm Name",
        required: true,
        placeholder: "Enter your Realm's name",
        rules: {
            min: 4,
            max: 20
        },
        cols: 12,
        row: 4,
        rows: "3",
    },

        {
        name: "tags",
        type: "multi-select",
        label: "Tags",
        required: true,
        placeholder: "Single words describing your Realm, the Characters or Universe.",
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
        placeholder: " Describe your Realm, the characters or Universe here. This will help the AI to understand more about the group. ",
        cols: 12,
        row: 4,
        rows: "3",
        
        tokens: true,
    },

]