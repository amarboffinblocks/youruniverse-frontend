"use client"
import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { EllipsisVertical, FolderPlus, Heart, HeartPlus, Link2, MessageCircleMore, Save, Share2, SquarePen, Upload } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Rating from '../elements/rating';
import { Checkbox } from '../ui/checkbox';

const LorebookCard: React.FC = ({ ...props }) => {
    const [liked, setLiked] = useState<boolean>(false)
    return (
        <Card {...props} className="w-full rounded-[3rem] relative duration-500 gap-4 cursor-pointer border shadow-sm hover:shadow-md p-4">
            <div className="text-xs absolute  right-4 bg-accent px-2 py-1.5 rounded-full  items-center flex gap-x-2">
                <Checkbox
                    id="terms"
                    className="bg-gray-900 border-none data-[state=checked]:bg-gray-900 cursor-pointer data-[state=checked]:text-white text-white rounded-full size-5"
                />


                <div className="flex items-center gap-1">
                    < Heart onClick={() => setLiked(prev => !prev)} size={26} fill={!liked ? "#101828" : "red"} stroke="0" />
                    <DropdownMenu>
                        <DropdownMenuTrigger className='cursor-pointer'>
                            <EllipsisVertical className=" hover:text-accent-foreground" size={15} />

                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="start">
                            <DropdownMenuItem className="hover:bg-gray-800 transition cursor-pointer">
                                <Link2 className="w-4 h-4 mr-2" /> Link
                            </DropdownMenuItem>
                            <DropdownMenuItem className="hover:bg-gray-800 transition cursor-pointer">
                                <FolderPlus className="w-4 h-4 mr-2" /> Add to Realm
                            </DropdownMenuItem>
                            <DropdownMenuItem className="hover:bg-gray-800 transition cursor-pointer">
                                <Share2 className="w-4 h-4 mr-2" /> Share
                            </DropdownMenuItem>
                            <DropdownMenuItem className="hover:bg-gray-800 transition cursor-pointer">
                                <Upload className="w-4 h-4 mr-2" /> Export
                            </DropdownMenuItem>

                            <DropdownMenuItem className="hover:bg-gray-800 transition cursor-pointer">
                                <HeartPlus className="w-4 h-4 mr-2 text-white" /> Favourite
                            </DropdownMenuItem>
                            <DropdownMenuItem className="hover:bg-gray-800 transition cursor-pointer">
                                <Save className="w-4 h-4 mr-2 text-white" /> Save
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
            <div className='flex gap-x-2 items-center'>
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
                <div>
                    <h2 className="font-semibold text-lg  text-white">

                        Tony Stark
                    </h2>
                    <div className=" flex items-center gap-2 text-gray-400 ">
                        <Rating value={3.5} size={18} readOnly={true} />
                        {'( 25k )'}
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2">
                        {["AI", "Chatbot", "NLP", "ML", "Data",].map((tag: string) =>
                            < Badge key={tag} >
                                {tag}
                            </Badge>
                        )
                        }
                    </div>
                </div>
            </div>
            <CardContent className='space-y-2'>
                <CardDescription className=' line-clamp-3'>
                    Lyriana is a tall, ethereal sorceress with long silver hair that glimmers like moonlight. Her piercing violet eyes seem to hold the mysteries of forgotten worlds, and she carries herself with regal grace. Draped in flowing robes embroidered with celestial patterns, she wields a staff crowned by a radiant crystal that hums softly with arcane energy.
                </CardDescription>
                <Button className="cursor-pointer float-end  "  > <MessageCircleMore />Chat with Tony Stark </Button>

            </CardContent>
            <CardFooter className='text-xs text-muted flex justify-between border-t pt-4 border-primary'>
                <span>
                    Created on 12-09-2025
                </span>
                <span>
                    Updated on 16-09-2025

                </span>
            </CardFooter>

        </Card>
    )
}

export default LorebookCard 