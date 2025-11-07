"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FolderPlus , Link2, MoreVertical, Share2, SquarePen, Upload } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import React from "react";
import { cn } from "@/lib/utils";
import { Checkbox } from "../ui/checkbox";
import Link from "next/link";
import { formatDateToDDMMYYYY } from "@/utils/format-date";
import { useDispatch } from "react-redux";
import { addPersonaId } from "@/store/features/persona/slice";
import { Persona } from "../../types/persona-types";

interface PersonaCardProps {
    item: Persona;
}

const PersonaCard: React.FC<PersonaCardProps> = ({ item }) => {
    const dispatch = useDispatch();

    const handleSelect = () => {
        if (!item?.id) return;
        dispatch(addPersonaId(item.id));
    };

    return (
        <Card className={cn("rounded-4xl border overflow-hidden bg-primary/20 backdrop-blur-lg hover:border-primary hover:bg-primary/40 hover:shadow-2xl duration-300 relative")}>
            <CardHeader className="p-0 m-0 relative">
                <div className="absolute top-3 left-0 right-0 z-10 flex items-center justify-between px-4 text-white">
                    <Checkbox
                        className="bg-gray-900 border-none data-[state=checked]:bg-gray-900 cursor-pointer data-[state=checked]:text-white text-white rounded-full size-5"
                        onClick={handleSelect}
                    />

                    <div className="flex items-center gap-1">

                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button size="icon" variant="ghost" className="bg-gray-900 size-6">
                                    <MoreVertical className="size-3" />
                                </Button>
                            </DropdownMenuTrigger>

                            <DropdownMenuContent align="end">
                                <DropdownMenuItem><Link2 className="w-4 h-4 mr-2 text-white" />Link</DropdownMenuItem>
                                <DropdownMenuItem><FolderPlus className="w-4 h-4 mr-2 text-white" />Add to Folder</DropdownMenuItem>
                                <DropdownMenuItem><Share2 className="w-4 h-4 mr-2 text-white" />Share</DropdownMenuItem>
                                <DropdownMenuItem><Upload className="w-4 h-4 mr-2 text-white" />Export</DropdownMenuItem>
                                    <Link href={`/personas/${item.id}/edit`}>
                                <DropdownMenuItem>
                                    <SquarePen className="w-4 h-4 mr-2 text-white" />Edit
                                    </DropdownMenuItem>
                                    </Link>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>

                    <Avatar className="cursor-pointer rounded-none w-full h-48 hover:scale-105 duration-500 transition">
                        <AvatarImage src={item?.avatar?.url} alt="Persona Avatar" className="object-cover" />
                        <AvatarFallback>NA</AvatarFallback>
                    </Avatar>
            </CardHeader>

                <CardContent className="space-y-2 px-4">
                    <div className="flex justify-between items-center">
                        <CardTitle className="text-white/80 text-xl font-semibold">{item.name}</CardTitle>
                        <span className="text-xs text-gray-400">Tokens: {item.tokens}</span>
                    </div>

                    <CardDescription className="text-gray-400 text-sm line-clamp-3">
                        {item?.persona_details}
                    </CardDescription>

                    <div className="w-full flex items-center justify-end text-xs text-gray-300">
                        <span>-- {item?.creator_name}</span>
                    </div>
                </CardContent>

                <CardFooter className="flex mt-3 justify-between px-4 py-2 border-t border-primary/70 text-[10px] text-gray-500">
                    <div>Created: {formatDateToDDMMYYYY(item?.created_at)}</div>
                    <div>Updated: {formatDateToDDMMYYYY(item?.updated_at)}</div>
                </CardFooter>
        </Card>
    );
};

export default PersonaCard;
