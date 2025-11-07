"use client";

import { cn } from "@/lib/utils";
import { useField } from "formik";
import { UserRound } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

interface FormImageUploadProps {
    name: string;
    label?: string;
    acceptedFormats?: string;
    className?: string;
}

const FormImageUpload: React.FC<FormImageUploadProps> = ({
    name,
    label,
    acceptedFormats = "image/*",
    className,
}) => {
    const [field, meta, helpers] = useField<File | null>(name);
    const { setValue, setTouched } = helpers;
    console.log(field)

    const [preview, setPreview] = useState<string | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null;
        if (file) {
            setPreview(URL.createObjectURL(file));
            setValue(file); // update Formik value
        }
        setTouched(true);
    };

    return (
        <div className="text-center space-y-2">
           

            <label
                className={cn(
                    "cursor-pointer relative rounded-full w-30 h-30 overflow-hidden flex flex-col items-center justify-center border border-primary bg-primary/30 backdrop-blur-3xl p-2 hover:bg-primary/40",
                    meta.touched && meta.error && "border-destructive bg-destructive/20",
                    className
                )}
            >
                {preview ? (
                    <Image
                        src={preview}
                        alt="Preview"
                        fill
                        className="w-full h-full object-cover"
                    />
                ) : (
                    <UserRound
                        fill={meta.error ? "#fb2c36" : "#552EFB"}
                        className={cn(
                            "size-28 opacity-80 stroke-0 absolute -bottom-4 left-1/2 -translate-x-1/2",
                            meta.error && "!text-destructive/80"
                        )}
                    />
                )}

                <input
                    type="file"
                    accept={acceptedFormats}
                    onChange={handleFileChange}
                    className="hidden"
                />
            </label>
 {label && (
                <p className="text-sm font-medium text-center pr-2 text-muted-foreground">
                    {label}
                </p>
            )}
            {meta.touched && meta.error && (
                <p className="text-sm text-destructive">{meta.error}</p>
            )}
        </div>
    );
};

export default FormImageUpload;
