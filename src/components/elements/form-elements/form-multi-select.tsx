"use client";

import React from "react";
import { useField } from "formik";
import { Label } from "@/components/ui/label";
import { MultiSelect } from "@/components/ui/multi-select";
import { cn } from "@/lib/utils";

interface MultiSelectOption {
    label: string;
    value: string;
}
const options = [
    { label: "Creative", value: "creative" },
    { label: "Funny", value: "funny" },
    { label: "Serious", value: "serious" },
    { label: "Fantasy", value: "fantasy" },
    { label: "Sci-Fi", value: "sci-fi" },
    { label: "Friendly", value: "friendly" },
    { label: "Professional", value: "professional" },
    { label: "Adventurous", value: "adventurous" },
    { label: "Mysterious", value: "mysterious" },
    { label: "Brave", value: "brave" },
    { label: "Intelligent", value: "intelligent" },
    { label: "Curious", value: "curious" },
    { label: "Kind", value: "kind" },
    { label: "Charming", value: "charming" },
    { label: "Heroic", value: "heroic" }
];
interface FormMultiSelectProps {
    name: string;
    label?: string;
    options?: MultiSelectOption[];
    placeholder?: string;
    defaultValue?: string[];
    className?: string;
    maxCount?: number;
    singleLine?: boolean;
}

const FormMultiSelect: React.FC<FormMultiSelectProps> = ({
    name,
    label,
    // options,
    placeholder = "Select options",
    defaultValue = [],
    className = "",
    maxCount,
    singleLine = true,
}) => {
    const [field, meta, helpers] = useField<string[]>(name);
    const { value } = field;
    const { setValue } = helpers;

    // Use Formik value -> defaultValue -> empty array
    const selectedValue = value || defaultValue;

    return (
        <div className={cn("w-full space-y-1", className)}>
            {label && <Label className="block text-sm font-medium">{label}</Label>}

            <MultiSelect
                options={options}
                value={selectedValue}
                onValueChange={setValue}
                placeholder={placeholder}
                maxCount={maxCount}
                singleLine={singleLine}
            />
            <p className={cn("text-xs text-destructive bg-red-200", meta.touched && meta.error ? "visible" : "invisible")}>{meta.error || "placeholder"}</p>

        </div>
    );
};

export default FormMultiSelect;
