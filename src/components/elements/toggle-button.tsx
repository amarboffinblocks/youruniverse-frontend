"use client";

import React, { useState } from "react";
import { Switch } from "@/components/ui/switch";

interface ToggleButtonProps {
    defaultChecked?: boolean;
    labelOn?: string;
    labelOff?: string;
    onToggle?: (checked: boolean) => void;
    className?: string;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({
    defaultChecked = false,
    labelOn = "On",
    labelOff = "Off",
    onToggle,
    className = "",
}) => {
    const [checked, setChecked] = useState(defaultChecked);

    const handleToggle = (value: boolean) => {
        setChecked(value);
        if (onToggle) onToggle(value); // callback if needed
    };

    return (
        <div className={`flex items-center gap-2 ${className}`}>
            <Switch checked={checked} onCheckedChange={handleToggle} />
            <span className="text-sm text-muted-foreground">
                {checked ? labelOn : labelOff}
            </span>
        </div>
    );
};

export default ToggleButton;
