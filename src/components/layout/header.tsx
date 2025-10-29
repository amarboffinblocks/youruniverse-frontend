"use client"
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Container from "../elements/container";
import ToolTipElement from "../elements/tooltip-element";
import Chat from "@/components/icons/chat";
import Models from "@/components/icons/models";
import Settings from "@/components/icons/settings";
import Community from "@/components/icons/community";
import ModelSelection from "@/components/icons/model-selection";
import LlmSettings from "@/components/icons/llm-settings";
import CharacterV1 from "@/components/icons/character-v1";
import PersonaV1 from "@/components/icons/persona-v1";
import Lorebook from "@/components/icons/lorebook";
import Forum from "@/components/icons/forum";
import BugReport from "@/components/icons/bug-report";
import Profile from "@/components/icons/profile";
import Background from "@/components/icons/background";
import Download from "@/components/icons/download";
import Subscriptions from "@/components/icons/subscriptions";
import { motion, AnimatePresence } from "framer-motion";
import YourUniverse from "../icons/your-universe";
import { cn } from "@/lib/utils";
import Folders from "../icons/folders";
// ----------------- Types -----------------
interface HeaderItem {
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    title: string;
    href?: string;
    iconClassName?: string;
    dropdown?: {
        icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
        title: string;
        href?: string;
        type?: string
        createdAt?: string
        children?: { id: string; title: string ,createdAt:string}[];
    }[];
}
const folderData = [
    { id: "chat-001", title: "Character Name " , createdAt:'31-01-1998' },
    { id: "chat-002", title: "Character Name " , createdAt:'31-01-1998' },
    { id: "chat-003", title: "Character Name " , createdAt:'31-01-1998'},
];

// ----------------- Data -----------------
const headerItems: HeaderItem[] = [
    {
        icon: Chat,
        title: "Chat",
        iconClassName: "h-16 w-16 text-primary",
        dropdown: [
            { icon: ModelSelection, type: "button", title: "Search Saved Chat" },
            { icon: LlmSettings, type: "button", title: "Saved Chat Menu" },
            {
                icon: Lorebook,
                title: "Folder Name",
                createdAt:'23-02-2002',
                children: folderData, // nested folders
            },
            {
                icon: Lorebook,
                title: "Folder Name",
                createdAt:'23-02-2002',
                children: folderData, // nested folders
            },
        ],
    },
    {
        icon: Models,
        title: "All Models",
        href: "/models",
        iconClassName: "h-24 w-24 text-primary",

        dropdown: [
            { icon: ModelSelection, title: "Model Selection", href: "/models-selection" },
            { icon: LlmSettings, title: "Model Tuning", href: "/models-tuning" },
        ],
    },
    {
        icon: YourUniverse,
        title: "Your Universe",
        href: "/universe",
        iconClassName: "h-24 w-24 text-primary",

        dropdown: [
            { icon: CharacterV1, title: "Characters", href: "/characters" },
            { icon: PersonaV1, title: "Personas", href: "/personas" },
            { icon: Lorebook, title: "Lorebook", href: "/lorebooks" },
            { icon: Folders, title: "Folders", href: "/folders" },

        ],
    },
    {
        icon: Community,
        title: "Community",
        href: "/community",
        iconClassName: "h-18 w-18 text-primary",

        dropdown: [
            { icon: Forum, title: "Forum", href: "/community/forum" },
            { icon: BugReport, title: "Bug & Feature Request", href: "/community/feature-request" },
        ],
    },
    {
        icon: Settings,
        title: "Settings",
        href: "/settings",
        iconClassName: "h-16 w-16 text-primary",

        dropdown: [
            { icon: Profile, title: "Profile", href: "/profile" },
            { icon: Background, title: "Background", href: "/background" },
            { icon: Download, title: "Download", href: "/download" },
            { icon: Subscriptions, title: "Subscriptions", href: "/subscriptions" },
        ],
    },
];

// ----------------- Component -----------------
const Header: React.FC = () => {
    const [openDropdown, setOpenDropdown] = useState<number | null>(null);
      const [openSubDropdown, setOpenSubDropdown] = useState<number | null>(null);
    const [glowIndex, setGlowIndex] = useState<number | null>(null);
    const [pulsingIndex, setPulsingIndex] = useState<number | null>(null);
    const dropdownRef = useRef(null);

    useEffect(() => {
       function handleClickOutside(e: MouseEvent) {
  if (dropdownRef.current && !(dropdownRef.current as HTMLElement).contains(e.target as Node)) {
    setOpenDropdown(null);
    setOpenSubDropdown(null);
  }
}

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [dropdownRef]);

    const handleSelect = () => {
        setOpenDropdown(null);
        setOpenSubDropdown(null);
        setGlowIndex(null)
    };


    const toggleDropdown = (idx: number) => {
        setOpenDropdown(openDropdown === idx ? null : idx);
    };

    const handleIconClick = (idx: number) => {
        setGlowIndex(idx);
        setPulsingIndex(idx);
        setOpenDropdown(openDropdown === idx ? null : idx);
        // After 3 pulses (approx 2.4s), stop pulse and keep steady glow
        setTimeout(() => {
            setPulsingIndex(null);
        }, 2400);
    };
    return (
        <header className="sticky top-0 z-50   ">
            <Container className="flex justify-center items-center py-6">
                <div className="flex items-center gap-8">
                    {headerItems.map((item, idx) => {
                        const Icon = item.icon;
                        const hasDropdown = !!item.dropdown;


                        return (
                            <div key={idx} className="relative ">
                                {hasDropdown ? (
                                    <div className="relative">
                                        <ToolTipElement discription={item.title}>
                                            <button
                                                type="button"
                                                onMouseEnter={() => setGlowIndex(idx)}   // soft glow start
                                                onMouseLeave={() => {
                                                    if (glowIndex !== idx) setGlowIndex(null);
                                                }}
                                                onClick={() => handleIconClick(idx)}     // pulse + glow
                                                className="focus:outline-none"
                                            >
                                                <Icon
                                                    className={cn(
                                                        "hover:brightness-110 transition-all duration-500 cursor-pointer",
                                                        item.iconClassName,
                                                        glowIndex === idx && pulsingIndex !== idx && "animate-soft-glow",
                                                        pulsingIndex === idx && "animate-pulse-glow",
                                                        glowIndex === idx && pulsingIndex === null && "animate-steady-glow"
                                                    )}
                                                />
                                            </button>
                                        </ToolTipElement>

                                        <AnimatePresence>
                                            {openDropdown === idx && (
                                                <motion.div
                                                    ref={dropdownRef}
                                                    className="absolute left-1/2 top-20 transform -translate-x-1/2 p-2 z-50"
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    exit={{ opacity: 0 }}
                                                >
                                                    <ul className="flex flex-col gap-6 items-center">
                                                        {item.dropdown?.map((drop, dIdx) => {
                                                            const DropIcon = drop.icon;
                                                            return (
                                                                <motion.li
                                                                    key={dIdx}
                                                                    initial={{ opacity: 0, y: -50 }}
                                                                    animate={{
                                                                        opacity: 1,
                                                                        y: 0,
                                                                        transition: {
                                                                            duration: 0.8,
                                                                            delay: dIdx * 0.1,
                                                                            type: "spring",
                                                                            stiffness: 120,
                                                                        },
                                                                    }}
                                                                    exit={{ opacity: 0, y: -30, transition: { duration: 0.2 } }}
                                                                >
                                                                    <ToolTipElement discription={drop.title}>
                                                                        <Link href={drop.href} onClick={handleSelect}>
                                                                            <DropIcon className={cn("w-16 h-16 text-primary hover-glow"  )} />
                                                                        </Link>
                                                                    </ToolTipElement>
                                                                </motion.li>
                                                            );
                                                        })}
                                                    </ul>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>

                                    </div>
                                ) : (
                                    <ToolTipElement discription={item.title}>
                                        <Link href={item.href} onMouseEnter={() => setGlowIndex(idx)}   // soft glow start
                                            onMouseLeave={() => {
                                                if (glowIndex !== idx) setGlowIndex(null);
                                            }}
                                            onClick={() => handleIconClick(idx)}  >
                                            <Icon className={cn("transition-all duration-500 cursor-pointer", item.iconClassName,
                                                glowIndex === idx && pulsingIndex !== idx && "animate-soft-glow",
                                                pulsingIndex === idx && "animate-pulse-glow",
                                                glowIndex === idx && pulsingIndex === null && "animate-steady-glow")} />
                                        </Link>
                                    </ToolTipElement>
                                )}
                            </div>
                        );
                    })}
                </div>
            </Container>
        </header>
    );
};

export default Header;