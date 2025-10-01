"use client"
import React, { useMemo } from "react";
import { useField } from "formik";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";

interface FormInputFieldProps {
    name: string;
    label?: string;
    className?: string
}

const FormInputField: React.FC<FormInputFieldProps> = ({
    name,
    label,
    className,
    ...props
}) => {
    const [field, meta] = useField(name);

    const errorMessage = meta.touched && meta.error ? meta.error : "";
    const errorClasses = useMemo(
        () =>
            errorMessage
                ? "border-destructive focus-visible:border-destructive bg-destructive/20"
                : "",
        [errorMessage]
    );


    return (
        <div className="w-full space-y-2">
            {label && (
                <Label
                    htmlFor={name}
                    className={cn(errorMessage && "text-destructive")}
                >
                    {label}
                </Label>
            )}

            <Input
                id={name}
                {...field}
                {...props}
                className={cn(errorClasses, className)}
            />

            <div className="flex justify-between items-center text-xs px-1 text-white">
                <span
                    id={`${name}-error`}
                    className={cn(
                        "text-destructive",
                        errorMessage ? "visible" : "invisible"
                    )}
                >
                    {errorMessage || "placeholder"}
                </span>

            </div>
        </div>
    );
};

export default FormInputField;
