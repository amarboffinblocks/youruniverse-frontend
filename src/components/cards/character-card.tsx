"use client";
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FolderPlus, HeartPlus, Link2, MoreVertical, Save, Share2, SquarePen, Upload } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuPortal, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import Chat from "../icons/chat";
import Rating from "../elements/rating";
import { Checkbox } from "../ui/checkbox";

interface CharacterCardProps {
    item?: number
}

const CharacterCard: React.FC<CharacterCardProps> = ({ ...props
}) => {
    return (
        <Card
            {...props}
            className={cn(" rounded-4xl  border overflow-hidden bg-primary/20 backdrop-filter backdrop-blur-lg  hover:border-primary hover:bg-primary/40 hover:shadow-2xl duration-300 relative")}
        >
            <CardHeader className="p-0 m-0 relative">
                <div className="w-full absolute top-3 z-10 flex items-start  justify-between px-4  text-white ">
                    <div className="flex flex-col items-center gap-1 justify-center">
                        <Checkbox
                            id="terms"
                            className="bg-gray-900 border-primary/80 data-[state=checked]:bg-gray-900 cursor-pointer data-[state=checked]:text-white text-white rounded-full size-6"
                        />


                    </div>

                    <div className="flex items-center gap-1">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button
                                    size="icon"
                                    variant="ghost"
                                    className="bg-gray-900 size-6"
                                >
                                    <MoreVertical className="size-3" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                                align="end"
                            // className=" bg-gray-900 text-white border border-gray-800"
                            >
                                <DropdownMenuSub>
                                    <DropdownMenuSubTrigger className="w-full  space-x-4"><Link2 className="w-4 h-4 mr-2 text-white" /> Link</DropdownMenuSubTrigger>
                                    <DropdownMenuPortal>
                                        <DropdownMenuSubContent>
                                            <DropdownMenuItem><Link2 className="w-4 h-4 mr-2 text-white" />Link to Persona</DropdownMenuItem>
                                            <DropdownMenuItem><Link2 className="w-4 h-4 mr-2 text-white" />Link to Lorebook</DropdownMenuItem>
                                        </DropdownMenuSubContent>
                                    </DropdownMenuPortal>
                                </DropdownMenuSub>

                                <DropdownMenuItem className="hover:bg-gray-800 transition cursor-pointer">
                                    <FolderPlus className="w-4 h-4 mr-2 text-white" /> Add to Folder
                                </DropdownMenuItem>
                                <DropdownMenuItem className="hover:bg-gray-800 transition cursor-pointer">
                                    <Share2 className="w-4 h-4 mr-2 text-white" /> Share
                                </DropdownMenuItem>
                                <DropdownMenuItem className="hover:bg-gray-800 transition cursor-pointer">
                                    <Upload className="w-4 h-4 mr-2 text-white" /> Export
                                </DropdownMenuItem>
                                <DropdownMenuItem className="hover:bg-gray-800 transition cursor-pointer">
                                    <HeartPlus className="w-4 h-4 mr-2 text-white" /> Favourite
                                </DropdownMenuItem>
                                <DropdownMenuItem className="hover:bg-gray-800 transition cursor-pointer">
                                    <Save className="w-4 h-4 mr-2 text-white" /> Save
                                </DropdownMenuItem>
                                <DropdownMenuItem className="hover:bg-gray-800 transition cursor-pointer">
                                    <SquarePen className="w-4 h-4 mr-2 text-white" /> Edit
                                </DropdownMenuItem>
                                <DropdownMenuItem className="hover:bg-gray-800 transition cursor-pointer">
                                    <Chat className=" mr-2 w-4  h-4 text-white " /> Chat With Me
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>

                </div>
                <Avatar className="cursor-pointer rounded-none w-full h-48 hover:scale-105 duration-500  transition brightness-60">
                    <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                        className="object-cover"
                    />
                    <AvatarFallback className="cursor-pointer rounded-none w-full h-48 hover:scale-105 duration-500  transition brightness-75">
                        CN
                    </AvatarFallback>
                </Avatar>


            </CardHeader>

            {/* Content */}
            <CardContent className="space-y-2 px-4 ">
                <div className="flex justify-between items-center">
                    <CardTitle className="text-white/80 text-xl font-semibold">Tony Stark</CardTitle>
                    <span className="text-xs text-gray-400">Tokens: 1000</span>
                </div>
                <div className=" -mt-1 flex items-center gap-2 text-gray-400 ">
                    <Rating value={3.5} size={14} readOnly={true} />
                    <span className="text-xs">(25k)</span>
                </div>
                <div className="flex gap-2 flex-wrap ">
                    {["AI", "Chatbot", "NLP", "ML", "Data"].map((tag, idx) => (
                        <Badge
                            key={idx}
                        >
                            {tag}
                        </Badge>
                    ))}
                </div>
                <CardDescription className="text-gray-400 text-sm line-clamp-3">
                    Lyriana is a tall, ethereal sorceress with long silver hair that glimmers like moonlight. Her piercing violet eyes seem to hold the mysteries of forgotten worlds, and she carries herself with regal grace. Draped in flowing robes embroidered with celestial patterns, she wields a staff crowned by a radiant crystal that hums softly with arcane energy.
                </CardDescription>
                <div className="w-full  flex items-center justify-between text-xs text-gray-300">

                    <span className="">(Private) </span>
                    <span className="">-- Author Name </span>
                </div>
            </CardContent>

            <CardFooter className="flex mt-2 justify-between px-4 py-2  border-t border-primary/70 text-[10px] text-gray-500">
                <div>
                    Created:- 20-08-2023
                </div>
                <div>
                    Updated:- 20-08-2023
                </div>
            </CardFooter>
        </Card>
    );
};

export default CharacterCard;
