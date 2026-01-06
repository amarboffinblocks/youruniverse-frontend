"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { ShootingStars } from "@/components/elements/shooting-stars";
import { StarsBackground } from "@/components/elements/stars-background";

export default function StarsWrapper() {
    const pathname = usePathname();

    const hiddenPaths = ["/about", "/blog"];
    const isHidden = hiddenPaths.some((path) => pathname === path || pathname?.startsWith(`${path}/`));

    if (isHidden) {
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
