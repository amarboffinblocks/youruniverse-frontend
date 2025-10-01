import React from "react";
import { cn } from "@/lib/utils";
import FormTextarea from "./form-textarea";
import { FormData } from "@/types/form-types";
import FormInputField from "./form-Input-field";
import FormToggle from "./form-toggle";
import FormSelect from "./form-select";
import FormMultiSelect from "./form-multi-select";
import FormImageUpload from "./image-upload";

interface FormFieldsProps extends FormData { }

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

const FormFields: React.FC<FormFieldsProps> = ({ cols = 12, ...rest }) => {
    const colSpanClass = `col-span-${cols}`;

    return (

        <div className={cn(colSpanClass)}>
            <FieldRenderer {...rest} />
        </div>
    );
};

export default FormFields;
