"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { ShootingStars } from "@/components/elements/shooting-stars";
import { StarsBackground } from "@/components/elements/stars-background";

export default function StarsWrapper() {
    const pathname = usePathname();
    const hiddenPaths = ["/about", "/blog"];

    // Normalize path to handle trailing slashes if any, though nextjs usually handles it.
    // Checking if the current path starts with /about or /blog might be safer if there are subpages.
    // But strict check is fine for now based on request.

    if (hiddenPaths.includes(pathname)) {
        return null;
    }

    const isRegisterPage = pathname === "/sign-up";
    const starClass = isRegisterPage ? "fixed inset-0 z-0" : undefined;

    return (
        <>
            <ShootingStars className={starClass} />
            <StarsBackground className={starClass} />
        </>
    );
}
