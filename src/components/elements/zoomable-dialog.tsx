"use client";

import React, { createContext, useContext, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ZoomableDialogContextProps {
    open: boolean;
    setOpen: (open: boolean) => void;
    startPos: { x: number; y: number } | null;
    setStartPos: (pos: { x: number; y: number } | null) => void;
}

const ZoomableDialogContext = createContext<ZoomableDialogContextProps | null>(null);

export const ZoomableDialog = ({ children }: { children: React.ReactNode }) => {
    const [open, setOpen] = useState(false);
    const [startPos, setStartPos] = useState<{ x: number; y: number } | null>(null);

    return (
        <ZoomableDialogContext.Provider value={{ open, setOpen, startPos, setStartPos }}>
            {children}
        </ZoomableDialogContext.Provider>
    );
};

export const ZoomableDialogTrigger = ({ children }: { children: React.ReactNode }) => {
    const ctx = useContext(ZoomableDialogContext);
    if (!ctx) throw new Error("ZoomableDialogTrigger must be inside ZoomableDialog");

    const { setOpen, setStartPos } = ctx;

    const handleClick = (e: React.MouseEvent) => {
        const rect = (e.target as HTMLElement).getBoundingClientRect();
        setStartPos({ x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 });
        setOpen(true);
    };

    return <div onClick={handleClick}>{children}</div>;
};

export const ZoomableDialogContent = ({
    children,
    draggable = true,
    className = "",
    closeOnOutsideClick = true,
}: {
    children: React.ReactNode;
    draggable?: boolean;
    className?: string;
    closeOnOutsideClick?: boolean;
}) => {
    const ctx = useContext(ZoomableDialogContext);
    if (!ctx) throw new Error("ZoomableDialogContent must be inside ZoomableDialog");

    const { open, setOpen, startPos } = ctx;

    const handleClose = () => closeOnOutsideClick && setOpen(false);

    return (
        <AnimatePresence>
            {open && startPos && (
                <motion.div
                    className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={handleClose}
                >
                    <motion.div
                        className={`p-6 backdrop-blur-lg ${className}`}
                        initial={{
                            x: startPos.x - window.innerWidth / 2,
                            y: startPos.y - window.innerHeight / 2,
                            scale: 0.4,
                            opacity: 0,
                        }}
                        animate={{
                            x: 0,
                            y: 0,
                            scale: 1,
                            opacity: 1,
                            transition: { type: "spring", stiffness: 160, damping: 22 },
                        }}
                        exit={{
                            x: startPos.x - window.innerWidth / 2,
                            y: startPos.y - window.innerHeight / 2,
                            scale: 0.4,
                            opacity: 0,
                        }}
                        drag={draggable}
                        dragMomentum={false}
                        onClick={(e) => e.stopPropagation()}
                        style={{
                            maxWidth: "90%",
                            maxHeight: "90%",
                            overflow: "auto",
                        }}
                    >
                        {children}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
