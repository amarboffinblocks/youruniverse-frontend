  import { FormData } from "@/types/form-types";
  
  export const FolderSchema: FormData[] = [
  {
        name: "folderName",
        type: "text",
        label: "Folder Name",
        required: true,
        placeholder: "Enter your Folder's name",
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
        placeholder: "Select tags ",
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
        placeholder: "Describe the folder ",
        cols: 12,
        row: 4,
        rows: "3",
        
        tokens: true,
    },

]