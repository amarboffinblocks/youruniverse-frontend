"use client"
import { Avatar } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { AvatarImage } from "@radix-ui/react-avatar";
import { CloudUpload, ImageUp, UserRound } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

interface ImageUploadProps {
    onUpload?: (file: File | null) => void;
    acceptedFormats?: string;
    className?: string;
    errorMessage?: string
}

const ImageUpload: React.FC<ImageUploadProps> = ({
    onUpload,
    acceptedFormats = "image/*",
    errorMessage,
    className
}) => {
    const [preview, setPreview] = useState<string | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null;
        if (file) {
            setPreview(URL.createObjectURL(file));
        }
        onUpload?.(file);
    };


    return (
        <div className="text-center space-y-2">
            <label
                className={cn("cursor-pointer relative rounded-full w-30 h-30 overflow-hidden flex flex-col items-center justify-center border  border-primary bg-primary/30 backdrop-blur-3xl p-2 text-center hover:bg-primary/40 ", errorMessage && "border-destructive bg-destructive/20", className)}
            >
                {preview ? (
                    <Image src={preview} alt="" fill className="w-full h-full object-center " />
                ) : (
                    <UserRound fill={errorMessage ? "#fb2c36" : "#552EFB"} className={cn("text-muted size-28 opacity-80  stroke-0 absolute -bottom-4 left-1/2 -translate-x-1/2 ", errorMessage && "!text-destructive/80")} />
                    // <ImageUp className="size-18" />
                )}
                <input
                    type="file"
                    accept={acceptedFormats}
                    onChange={handleFileChange}
                    className="hidden"
                />
            </label>
            {
                errorMessage && <p className="text-sm text-destructive w-30  ">{errorMessage}</p>
            }

        </div>
    );
};

export default ImageUpload;
