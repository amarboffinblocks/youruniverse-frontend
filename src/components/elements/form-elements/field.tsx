import React, { useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

interface BaseProps {
    as?: "input" | "textarea";
    tokens?: number;
    errorMessage?: string;
    className?: string;
}

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
    as?: "input";
};

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
    as: "textarea";
};

type FieldProps = BaseProps & (InputProps | TextareaProps);

const Field: React.FC<FieldProps> = ({
    as = "input",
    tokens,
    errorMessage,
    className,
    ...props
}) => {
    const Component = (as === "textarea" ? Textarea : Input) as React.ElementType;

    const errorClasses = useMemo(
        () =>
            errorMessage
                ? "border-destructive focus-visible:border-destructive bg-destructive/20"
                : "",
        [errorMessage]
    );

    return (
        <div className="space-y-1">
            <Component
                className={cn(className, errorClasses)}
                aria-invalid={!!errorMessage}
                aria-describedby={errorMessage ? "error-message" : undefined}
                {...props}
            />
            <div className="flex justify-between items-center text-sm text-muted-foreground px-1">
                {errorMessage && (
                    <p id="error-message" className="text-destructive text-sm">
                        {errorMessage}
                    </p>
                )}
                {tokens && <span className={cn("ml-auto  text-xs", errorMessage && "text-destructive")}>
                    {tokens} tokens
                </span>}
            </div>
        </div>
    );
};

export default React.memo(Field);