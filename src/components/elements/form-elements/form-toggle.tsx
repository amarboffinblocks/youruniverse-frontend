"use client";

import * as React from "react";
import { useField } from "formik";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { FieldRules } from "@/types/form-types";



interface FormToggleProps {
    name: string;
    defaultValue?: string | string[]|boolean| undefined;
    className?: string;
    rules?: FieldRules;
}

const FormToggle: React.FC<FormToggleProps> = ({
    name,
    defaultValue,
    rules,
    className = "",
}) => {
    const [field, , helpers] = useField(name);
    const { value } = field;
    const { setValue } = helpers;

    const options = rules?.options || [];

    const activeValue = value || defaultValue || options[0]?.value;

    const handleChange = (val: string) => {
        if (val) setValue(val);
    };

    return (
        <ToggleGroup
            type="single"
            value={activeValue}
            onValueChange={handleChange}
            className={`flex gap-2 bg-primary/40 backdrop-blur-3xl px-2 py-1 rounded-full ${className}`}
        >
            {options.map(({ label, value }) => (
                <ToggleGroupItem
                    key={value}
                    value={value}
                    className={`flex-1 !rounded-full hover:bg-primary/30 text-white h-7 px-4 !text-sm cursor-pointer font-medium transition-all ${activeValue === value ? "bg-primary" : "bg-transparent"
                        }`}
                >
                    {label}
                </ToggleGroupItem>
            ))}
        </ToggleGroup>
    );
};

export default FormToggle;
