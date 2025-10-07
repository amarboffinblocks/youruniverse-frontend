import React from "react";
import { cn } from "@/lib/utils";
import FormTextarea from "./form-textarea";
import { FormData } from "@/types/form-types";
import FormInputField from "./form-Input-field";
import FormToggle from "./form-toggle";
import FormSelect from "./form-select";
import FormMultiSelect from "./form-multi-select";
import FormImageUpload from "./image-upload";

interface FormFieldsProps extends FormData {
  cols?: FormData["cols"];
}

const FieldRenderer: React.FC<FormFieldsProps> = ({ type, ...props }) => {
    switch (type) {
        case "textarea":
            return <FormTextarea {...props} />;
        case "text":
            return <FormInputField {...props} />
        case "toggle":
            return <FormToggle {...props} />
        case "select":
            return <FormSelect {...props} />
        case "multi-select":
            return <FormMultiSelect {...props} />
        case "file":
            return <FormImageUpload {...props} />
        default:
            return null;
    }
};

const colSpanClasses: Record<number, string> = {
    1: "col-span-1",
    2: "col-span-2",
    3: "col-span-3",
    4: "col-span-4",
    5: "col-span-5",
    6: "col-span-6",
    7: "col-span-7",
    8: "col-span-8",
    9: "col-span-9",
    10: "col-span-10",
    11: "col-span-11",
    12: "col-span-12",
};

const FormFields: React.FC<FormFieldsProps> = ({ cols = 12, ...rest }) => {
    const colClass = colSpanClasses[cols] || "col-span-12";

    return (

        <div className={cn(colClass)}>
            <FieldRenderer {...rest} />
        </div>
    );
};

export default FormFields;
