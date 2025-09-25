"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";

interface PasswordFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
}

const PasswordField: React.FC<PasswordFieldProps> = ({ ...props }) => {
    const [showPassword, setShowPassword] = useState(false);

    return (

        <div className="relative">
            <Input
                type={showPassword ? "text" : "password"}
                {...props}
                className={`pr-10`}
            />
            <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute cursor-pointer inset-y-0 right-2 flex items-center text-muted hover:text-white focus:outline-none"
            >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
        </div>
    );
};

export default PasswordField;
