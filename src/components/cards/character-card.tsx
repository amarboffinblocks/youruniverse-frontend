"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Link2, FolderPlus, Share2, MoreVertical } from "lucide-react";
import clsx from "clsx";
import React from "react";

interface CharacterCardProps {
    character: {
        name: string;
        description: string;
        tags: string[];
        totalTokens: number;
        image?: string;
        createdAt?: string;
        updatedAt?: string;
        isLinked?: boolean;
    };
    onLink?: () => void;
    onAddToFolder?: () => void;
    onShare?: () => void;
    onClick?: () => void;
}

const CharacterCard: React.FC<CharacterCardProps> = ({
    character,
    onLink,
    onAddToFolder,
    onShare,
    onClick,
}) => {
    const { name, description, tags, totalTokens, image, createdAt, updatedAt, isLinked } = character;

    return (
        <Card
            onClick={onClick}
        >
            

        </Card>
    );
};

export default CharacterCard;
