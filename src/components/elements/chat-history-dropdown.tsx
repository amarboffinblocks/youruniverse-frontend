"use client";

import { ChevronRight, Edit3, FolderPlus, Menu, Save, Trash2, XCircle } from "lucide-react";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Input } from "../ui/input";
import React, { useState } from "react";

const chatFolders = [
    {
        id: "folder_001",
        name: "Project Discussions",
        date: "2025-11-12",
        chats: [
            { id: "chat_001", name: "UI Update Chat", date: "2025-11-12" },
            { id: "chat_002", name: "API Integration Notes", date: "2025-11-11" },
        ],
    },
    {
        id: "folder_002",
        name: "Personal Ideas",
        date: "2025-11-10",
        chats: [
            { id: "chat_003", name: "AI Voice Concept", date: "2025-11-10" },
            { id: "chat_004", name: "UI Theme Exploration", date: "2025-11-09" },
        ],
    },
    {
        id: "folder_003",
        name: "Bug Reports",
        date: "2025-11-08",
        chats: [
            { id: "chat_005", name: "Validation Issue Fix", date: "2025-11-08" },
            { id: "chat_006", name: "Redux Optimization", date: "2025-11-07" },
        ],
    },
];

const ChatHistoryDropdown = () => {
    const [openFolder, setOpenFolder] = useState<string | null>(null);
    const [checked, setChecked] = useState<Record<string, boolean>>({});

    const toggleChecked = (id: string) => {
        setChecked((prev) => ({ ...prev, [id]: !prev[id] }));
    };

    return (
        <div className="border rounded-2xl border-primary bg-primary/30 backdrop-blur-sm w-full p-4">
            <div className="space-y-1">
                {/* Search Bar */}
                <div className="flex gap-x-2 items-center" >
                    <Input
                        type="text"
                        placeholder="Search"
                        className="rounded-xl !bg-transparent w-full"
                    />
                    <DropdownMenu

                    >
                        <DropdownMenuTrigger asChild  >
                            <Button
                                size="icon"
                                className="rounded-xl "
                            >
                                <Menu className="h-5 w-5" />
                            </Button>
                        </DropdownMenuTrigger>

                        <DropdownMenuContent
                            className="w-64 rounded-xl p-1 shadow-lg"
                            align="end"
                            sideOffset={6}
                            onPointerDown={(e) => e.preventDefault()}
                            onClick={(e) => e.preventDefault()}
                        >
                            <DropdownMenuLabel className="px-3 py-1.5 text-sm font-semibold text-muted-foreground">
                                Chat Options
                            </DropdownMenuLabel>
                            <DropdownMenuSeparator className="bg-primary" />

                            <DropdownMenuItem className="flex items-center gap-2 cursor-pointer">
                                <Save className="w-4 h-4 " />
                                <span>Save Current Chat</span>
                            </DropdownMenuItem>

                            <DropdownMenuItem className="flex items-center gap-2 cursor-pointer">
                                <FolderPlus className="w-4 h-4 " />
                                <span>Create Chat Folder</span>
                            </DropdownMenuItem>

                            <DropdownMenuItem className="flex items-center gap-2 cursor-pointer">
                                <Edit3 className="w-4 h-4 " />
                                <span>Rename Selected Chat or Folder</span>
                            </DropdownMenuItem>

                            <DropdownMenuSeparator className="bg-primary" />

                            <DropdownMenuItem variant="destructive" className="flex items-center gap-2 text-destructive cursor-pointer">
                                <Trash2 className="w-4 h-4" />
                                <span>Delete Current Chat</span>
                            </DropdownMenuItem>

                            <DropdownMenuItem variant="destructive" className="flex items-center gap-2 text-destructive cursor-pointer">
                                <XCircle className="w-4 h-4" />
                                <span>Delete Selected Chats & Folders</span>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

                </div>

                {/* Folder List */}
                <div className="mt-4">
                    <h2 className="text-white">Folders</h2>
                </div>
                <div className=" border border-primary rounded-xl">
                    {chatFolders.map((folder) => (
                        <div
                            key={folder.id}
                            className="flex items-center gap-2 w-full border-b border-primary last:border-none py-2 px-4 hover:bg-primary/20 cursor-pointer"
                        >
                            {/* Folder checkbox */}
                            <Checkbox
                                id={`folder-${folder.id}`}
                                className="bg-black/30 border-primary data-[state=checked]:bg-gray-900 cursor-pointer data-[state=checked]:text-white text-white rounded-full size-5"
                            />

                            {/* Dropdown per folder */}
                            <DropdownMenu
                                open={openFolder === folder.id}
                                modal={false}
                                onOpenChange={(isOpen) =>
                                    setOpenFolder(isOpen ? folder.id : null)
                                }
                            >
                                <DropdownMenuTrigger asChild>
                                    <button className="flex items-center justify-between w-full text-start text-white group ">
                                        <span className="flex-1">{folder.name}</span>
                                        <ChevronRight
                                            className={`ml-2 h-4 w-4 transition-transform duration-300 ${openFolder === folder.id ? "rotate-90" : ""
                                                }`}
                                        />
                                    </button>
                                </DropdownMenuTrigger>

                                <DropdownMenuContent
                                    className="w-72"
                                    side="right"
                                    align="start"
                                    sideOffset={4}
                                    onCloseAutoFocus={(e) => e.preventDefault()}
                                >
                                    <DropdownMenuGroup className="p-2 space-y-1">
                                        {folder.chats.map((chat) => (
                                            <DropdownMenuItem
                                                key={chat.id}
                                                onPointerDown={(e) => e.preventDefault()}
                                                onClick={(e) => e.preventDefault()}
                                                className="flex items-center border border-primary cursor-pointer gap-2 rounded-xl py-2 px-3 hover:bg-primary/20 focus:bg-primary/20"
                                            >
                                                <Checkbox
                                                    id={`chat-${chat.id}`}
                                                    checked={!!checked[chat.id]}
                                                    onCheckedChange={() => toggleChecked(chat.id)}
                                                    className="bg-black/30 border-primary data-[state=checked]:bg-gray-900 cursor-pointer data-[state=checked]:text-white text-white rounded-full size-5"
                                                />
                                                <span className="flex-1 text-left" onPointerDown={(e) => e.stopPropagation()}>{chat.name}</span>
                                            </DropdownMenuItem>
                                        ))}
                                    </DropdownMenuGroup>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ChatHistoryDropdown;
