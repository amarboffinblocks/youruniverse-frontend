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
        placeholder: "Single words describing your Character or Scenario. Multiple Tags can be entered by separating them with a comma.",
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
        placeholder: " Describe your Characters, Scenario, or Universe here. For Characters please describe their physical and mental characteristics. For Scenario’s, Worlds, or Universe, use this place to establish the foundation. Link Lorebooks to Character Cards to further enhance the experience.",
        cols: 12,
        row: 4,
        rows: "3",
        
        tokens: true,
    },

]