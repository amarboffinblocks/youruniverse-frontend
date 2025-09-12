import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { EllipsisVertical, FilePlus2, FolderPlus, Heart, Link2, MessageCircleMore, MoreVertical, Share2, ShieldCheck, SquarePen, ThumbsDown, ThumbsUp, Upload, UsersRound } from "lucide-react";
const LorebookCard = () => {
    return (
        <Card className="w-full rounded-4xl  duration-500 gap-4 cursor-pointer border shadow-sm hover:shadow-md p-4">
            <CardHeader className="p-0">
                <div className="flex gap-3 items-start">
                    <Avatar className="size-24 aspect-square rounded-full border">
                        <AvatarImage
                            src="https://github.com/shadcn.png"
                            alt="@shadcn"
                            className="object-cover"
                        />
                        <AvatarFallback className="rounded-md">
                            TN
                        </AvatarFallback>
                    </Avatar>

                    <div className="flex-1 space-y-1">
                        <div className="flex justify-between items-center">
                            <h2 className="font-semibold text-lg flex gap-1 items-center text-white">

                                Tony Stark
                            </h2>
                            <div className="text-xs bg-accent p-[6px] rounded-lg text-muted-foreground items-center flex gap-2">

                                <ThumbsUp size={15} className="cursor-pointer"
                                />{"10k"}
                                <ThumbsDown size={15} className="cursor-pointer"
                                />{''}


                                <DropdownMenu>
                                    <DropdownMenuTrigger >

                                        <EllipsisVertical className=" hover:text-accent-foreground" size={15} />

                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="start">
                                        <DropdownMenuItem className="hover:bg-gray-800 transition cursor-pointer">
                                            <Link2 className="w-4 h-4 mr-2" /> Link
                                        </DropdownMenuItem>
                                        <DropdownMenuItem className="hover:bg-gray-800 transition cursor-pointer">
                                            <FolderPlus className="w-4 h-4 mr-2" /> Add to Folder
                                        </DropdownMenuItem>
                                        <DropdownMenuItem className="hover:bg-gray-800 transition cursor-pointer">
                                            <Share2 className="w-4 h-4 mr-2" /> Share
                                        </DropdownMenuItem>
                                        <DropdownMenuItem className="hover:bg-gray-800 transition cursor-pointer">
                                            <Upload className="w-4 h-4 mr-2" /> Export
                                        </DropdownMenuItem>
                                        <DropdownMenuItem className="hover:bg-gray-800 transition cursor-pointer">
                                            <SquarePen className="w-4 h-4 mr-2" /> Edit
                                        </DropdownMenuItem>
                                        <DropdownMenuItem className="hover:bg-gray-800 transition cursor-pointer">
                                            <MessageCircleMore className="w-4 h-4 mr-2" /> Chat With Me
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>

                            </div>

                        </div>
                        <div className="flex flex-wrap gap-2 mt-2">
                            {["AI", "Chatbot", "NLP", "ML", "Data"].map((tag: string) =>
                                < Badge key={tag} >
                                    {tag}
                                </Badge>
                            )
                            }
                        </div>
                    </div>
                </div>
            </CardHeader>
            <CardContent className="space-y-0 h-full p-0 m-0">
                <div className="text-sm text-muted line-clamp-3">
                    Lyriana is a tall, ethereal sorceress with long silver hair that glimmers like moonlight. Her piercing violet eyes seem to hold the mysteries of forgotten worlds, and she carries herself with regal grace. Draped in flowing robes embroidered with celestial patterns, she wields a staff crowned by a radiant crystal that hums softly with arcane energy.
                </div>


            </CardContent>
            <CardFooter className="p-0 flex justify-between  items-center">
                <div className="flex items-center gap-2">

                </div>
                <Button className="cursor-pointer whitespace-pre-wrap max-w-[200px] "  > <FilePlus2 />Chat with Tony Stark </Button>
            </CardFooter>
            <div className="text-xs text-muted-foreground flex w-full border-t border-primary pt-4 justify-between">
                <span>

                    Created on 12-09-2025
                </span>
                <span>
                    Updated on 16-09-2025

                </span>

            </div>
        </Card>
    )
}

export default LorebookCard