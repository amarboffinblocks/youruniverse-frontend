import React from "react";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";

interface Props {
    min?: number;
    max?: number;
    label?: string;
    value?: number;
    step?: number;
    onValueChange?: (value: number[]) => void;
}

const SliderElement: React.FC<Props> = ({
    min = 0,
    max = 100,
    label = "",
    value = 0.4,
    step = 0.01,
    onValueChange,
    ...props
}) => {
    return (
        <div className=" flex-1 w-full text-white">
            {label && (
                <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">{label}</span>
                    <span className="text-sm">{value}</span>
                </div>
            )}

            <Slider
                min={min}
                max={max}
                defaultValue={[value]}
                step={step}
                aria-label={label || "slider"}
                {...props}
            />

            <Label className="flex justify-between opacity-70 text-xs mt-1">
                <span>min: {min}</span>
                <span>max: {max}</span>
            </Label>
        </div>
    );
};

export default SliderElement;
