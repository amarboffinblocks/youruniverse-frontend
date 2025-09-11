"use client";

import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const STAR_COUNT = 250;

type Star = {
    id: number;
    x: number;
    y: number;
    size: number;
    color: string;
};

export default function StarAnimation() {
    const [stars, setStars] = useState<Star[]>([]);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        // Generate stars with random positions and colors
        const generatedStars = Array.from({ length: STAR_COUNT }, (_, i) => ({
            id: i,
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            size: Math.random() * 2 + 1, // size between 1 and 3
            color: Math.random() < 0.15 ? "#552efb" : "#ffffff", // 15% purple stars
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
        <div className="night-sky fixed inset-0 w-full h-full bg-gradient-to-b from-black via-[#000011] to-black overflow-hidden">
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
        // Calculate distance to mouse
        const dx = mousePos.x - star.x;
        const dy = mousePos.y - star.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Influence radius
        const maxDistance = 150;

        if (distance < maxDistance) {
            // Move star slightly towards the mouse
            const factor = (maxDistance - distance) / maxDistance / 5; // scaled movement
            controls.start({
                x: star.x + dx * factor,
                y: star.y + dy * factor,
                opacity: 1,
            });
        } else {
            // Return to original position
            controls.start({
                x: star.x,
                y: star.y,
                opacity: 0.8,
            });
        }
    }, [mousePos, star.x, star.y, controls]);

    return (
        <motion.div
            animate={controls}
            initial={{ x: star.x, y: star.y, opacity: 0.8 }}
            className="absolute rounded-full"
            style={{
                width: `${star.size}px`,
                height: `${star.size}px`,
                backgroundColor: star.color,
            }}
        />
    );
}

