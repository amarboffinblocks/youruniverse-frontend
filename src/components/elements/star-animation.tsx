"use client";

import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const STAR_COUNT = 200;
const RADIUS = 150; // Cursor ke pass ka area jisme stars move karenge

type Star = {
    id: number;
    x: number;
    y: number;
    size: number;
    color: string;
    depth: number;
};

export default function StarField() {
    const [stars, setStars] = useState<Star[]>([]);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const generatedStars = Array.from({ length: STAR_COUNT }, (_, i) => ({
            id: i,
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            size: Math.random() * 2 + 1,
            color: Math.random() < 0.15 ? "#38bdf8" : "#ffffff",
            depth: Math.random() * 2 + 1,
        }));
        setStars(generatedStars);
    }, []);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div className="fixed inset-0 bg-black overflow-hidden">
            {stars.map((star) => (
                <StarComponent key={star.id} star={star} mousePos={mousePos} />
            ))}
        </div>
    );
}

function StarComponent({
    star,
    mousePos,
}: {
    star: Star;
    mousePos: { x: number; y: number };
}) {
    const controls = useAnimation();

    useEffect(() => {
        const dx = mousePos.x - star.x;
        const dy = mousePos.y - star.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < RADIUS) {
            // Sirf pass ke stars ko move karo
            controls.start({
                x: star.x + dx * 0.2,
                y: star.y + dy * 0.2,
                transition: { type: "spring", stiffness: 80, damping: 12 },
            });
        } else {
            // Baaki stars wapas apni jagah aa jayein
            controls.start({
                x: star.x,
                y: star.y,
                transition: { type: "spring", stiffness: 80, damping: 12 },
            });
        }
    }, [mousePos, star.x, star.y, controls]);

    return (
        <motion.div
            animate={controls}
            initial={{ x: star.x, y: star.y }}
            className="absolute rounded-full"
            style={{
                width: `${star.size}px`,
                height: `${star.size}px`,
                backgroundColor: star.color,
                boxShadow: `0 0 ${star.size * 4}px ${star.color}`,
            }}
        />
    );
}
