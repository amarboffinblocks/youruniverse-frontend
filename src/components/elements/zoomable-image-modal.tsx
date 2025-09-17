"use client";

import React, { createContext, useContext, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ZoomableImageModalContextProps {
    open: boolean;
    setOpen: (open: boolean) => void;
    setStartPos: (pos: { x: number; y: number } | null) => void;
    startPos: { x: number; y: number } | null;
}

const ZoomableImageModalContext = createContext<ZoomableImageModalContextProps | null>(null);

export const ZoomableImageModal = ({ children }: { children: React.ReactNode }) => {
    const [open, setOpen] = useState(false);
    const [startPos, setStartPos] = useState<{ x: number; y: number } | null>(null);

    return (
        <ZoomableImageModalContext.Provider value={{ open, setOpen, startPos, setStartPos }}>
            {children}
        </ZoomableImageModalContext.Provider>
    );
};

export const ZoomableImageModalTrigger = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const ctx = useContext(ZoomableImageModalContext);
    if (!ctx) throw new Error("ZoomableImageModalTrigger must be inside ZoomableImageModal");

    const { setOpen, setStartPos } = ctx;

    const handleClick = (e: React.MouseEvent) => {
        const rect = (e.target as HTMLElement).getBoundingClientRect();
        setStartPos({ x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 });
        setOpen(true);
    };

    return <div onClick={handleClick}>{children}</div>;
};

export const ZoomableImageModalContent = ({
    draggable = true,
    className = "",
    imageUrl = ""
}: {
    draggable?: boolean;
    className?: string;
    imageUrl: string
}) => {
    const ctx = useContext(ZoomableImageModalContext);
    if (!ctx) throw new Error("ZoomableImageModalContent must be inside ZoomableImageModal");

    const { open, setOpen, startPos } = ctx;

    const handleClose = () => setOpen(false);

    return (
        <AnimatePresence>
            {open && startPos && (
                <motion.div
                    className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={handleClose}
                >
                    <motion.img
                        src={imageUrl}
                        alt="Zoomed"
                        className={`max-w-[80%] max-h-[70%] bg-red-300 size-80 rounded-full shadow-lg cursor-grab ${className}`}
                        initial={{
                            x: startPos.x - window.innerWidth / 2,
                            y: startPos.y - window.innerHeight / 2,
                            scale: 0, // thoda chota start size
                            opacity: 0,
                        }}
                        animate={{ x: 0, y: 0, scale: 1, opacity: 1 }}
                        exit={{
                            x: startPos.x - window.innerWidth / 2,
                            y: startPos.y - window.innerHeight / 2,
                            scale: 0.2, // exit pe bhi chota ho ke jaye
                            opacity: 0,
                        }}
                        transition={{
                            duration: 0.6,
                        }}
                        drag={draggable}
                        dragMomentum={false}
                        onClick={(e) => e.stopPropagation()}
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
};
