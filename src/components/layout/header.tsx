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
// ----------------- Types -----------------
interface HeaderItem {
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    title: string;
    href: string;
    dropdown?: {
        icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
        title: string;
        href: string;
    }[];
}

// ----------------- Data -----------------
const headerItems: HeaderItem[] = [
    {
        icon: Chat,
        title: "Chat",
        href: "/chat/character-id",
    },
    {
        icon: Models,
        title: "All Models",
        href: "/models",
        dropdown: [
            { icon: ModelSelection, title: "Model Selection", href: "/models-selection" },
            { icon: LlmSettings, title: "Model Tuning", href: "/models-tuning" },
        ],
    },
    {
        icon: Settings,
        title: "Your Universe",
        href: "/universe",
        dropdown: [
            { icon: CharacterV1, title: "Characters", href: "/characters" },
            { icon: PersonaV1, title: "Personas", href: "/persona" },
            { icon: Lorebook, title: "Lorebook", href: "/lorebook" },
        ],
    },
    {
        icon: Community,
        title: "Community",
        href: "/community",
        dropdown: [
            { icon: Forum, title: "Forum", href: "/community/forum" },
            { icon: BugReport, title: "Bug & Feature Request", href: "/community/bugs" },
        ],
    },
    {
        icon: Settings,
        title: "Settings",
        href: "/settings",
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
    const dropdownRef = useRef(null);

    useEffect(() => {
        function handleClickOutside() {
            if (dropdownRef.current) {
                setOpenDropdown(null); // Close when clicking outside
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [dropdownRef]);

    const handleSelect = () => {
        setOpenDropdown(null); // Close dropdown after selecting
    };


    const toggleDropdown = (idx: number) => {
        setOpenDropdown(openDropdown === idx ? null : idx);
    };
    return (
        <header className="sticky top-0 z-50 relative  ">
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
                                                onClick={() => toggleDropdown(idx)}
                                                className="focus:outline-none"
                                            >
                                                <Icon className="h-16 w-16 text-primary  hover:text-primary transition-colors cursor-pointer " />
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
                                                                            <DropIcon className="w-16 h-16 text-primary" />
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
                                        <Link href={item.href} >
                                            <Icon className="h-16 w-16  transition-colors cursor-pointer" />
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