import { cn } from "@/lib/utils";
import React from "react";

interface ContainerProps {
    children: React.ReactNode;
    className?: string
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
    return (
        <div className={cn("mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ", className)}>
            {children}
        </div>
    );
};

export default Container;
