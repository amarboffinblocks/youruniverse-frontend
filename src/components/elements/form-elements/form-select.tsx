"use client";

import * as React from "react";
import { useField } from "formik";
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectGroup,
    SelectItem,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { FieldRules } from "@/types/form-types";

interface FormSelectProps {
    name: string;
    label?: string;
    placeholder?: string;
    defaultValue?: string |string[]|undefined;
    className?: string;
    rules?: FieldRules
}

const FormSelect: React.FC<FormSelectProps> = ({
    name,
    label,
    placeholder = "Select an option",
    rules,
    defaultValue,
    className = "",
}) => {
    const [field, meta, helpers] = useField(name);
    const { value } = field;
    const { setValue } = helpers;
    const options = rules?.options || [];
    const activeValue = value || defaultValue || options[0]?.value || "";

    return (
        <div className="w-full space-y-2">
            {label && (
                <Label htmlFor={name} className={cn("block text-sm font-medium")}>{label}</Label>
            )}

            <Select value={activeValue} onValueChange={setValue}>
                <SelectTrigger className={cn("w-full", className)}>
                    <SelectValue placeholder={placeholder} />
                </SelectTrigger>

                <SelectContent>
                    <SelectGroup>
                        {options.map((opt) => (
                            <SelectItem key={opt.value} value={opt.value}>
                                {opt.label}
                            </SelectItem>
                        ))}
                    </SelectGroup>
                </SelectContent>
            </Select>

            <p className={cn("text-xs text-destructive bg-red-200", meta.touched && meta.error ? "visible" : "invisible")}>{meta.error || "placeholder"}</p>

        </div>
    );
};

export default FormSelect;
