"use client"
import React from "react";
import Field from "../elements/form-elements/field";
import { Label } from "../ui/label";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuPortal,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import { Card, CardDescription } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";
interface Props {
    characterId?: string;
}

const FolderForm: React.FC<Props> = () => {

    return (
        <div className="py-10 h-full space-y-10 ">
            <form className=" flex gap-x-4">
                <div className=" flex-1 space-y-2">
                    <div className="flex gap-x-2 ">
                        <div className="space-y-2 flex-1">
                            <Label>Folder Name</Label>
                            <Field placeholder="Enter Folder Name" name="characterName" />
                        </div>
                        <div className="mt-5">
                            <DropdownMenu >
                                <DropdownMenuTrigger asChild>
                                    <Button className="rounded-full">
                                        Folder Menu <Menu className="ml-2 h-4 w-4" />
                                    </Button>
                                </DropdownMenuTrigger>

                                <DropdownMenuContent className="w-72" align="end">
                                    <DropdownMenuGroup>
                                        {/* Show Favorites */}
                                        <DropdownMenuItem>Show Favorite Characters Only</DropdownMenuItem>

                                        {/* Sorting Options */}
                                        <DropdownMenuSub>
                                            <DropdownMenuSubTrigger>Alphabetical Order</DropdownMenuSubTrigger>
                                            <DropdownMenuPortal>
                                                <DropdownMenuSubContent>
                                                    <DropdownMenuItem>A - Z</DropdownMenuItem>
                                                    <DropdownMenuItem>Z - A</DropdownMenuItem>
                                                </DropdownMenuSubContent>
                                            </DropdownMenuPortal>
                                        </DropdownMenuSub>

                                        <DropdownMenuSub>
                                            <DropdownMenuSubTrigger>Date</DropdownMenuSubTrigger>
                                            <DropdownMenuPortal>
                                                <DropdownMenuSubContent>
                                                    <DropdownMenuItem>Oldest to Newest</DropdownMenuItem>
                                                    <DropdownMenuItem>Newest to Oldest</DropdownMenuItem>
                                                </DropdownMenuSubContent>
                                            </DropdownMenuPortal>
                                        </DropdownMenuSub>

                                        {/* Link Character */}
                                        <DropdownMenuSub>
                                            <DropdownMenuSubTrigger>Link Character to Folder</DropdownMenuSubTrigger>
                                            <DropdownMenuPortal>
                                                <DropdownMenuSubContent>
                                                    <DropdownMenuItem>Bulk Link Characters from Saved Characters</DropdownMenuItem>
                                                </DropdownMenuSubContent>
                                            </DropdownMenuPortal>
                                        </DropdownMenuSub>

                                        {/* Delete Folder */}
                                        <DropdownMenuSub>
                                            <DropdownMenuSubTrigger>Delete Folder</DropdownMenuSubTrigger>
                                            <DropdownMenuPortal>
                                                <DropdownMenuSubContent>
                                                    <DropdownMenuItem>Delete Folder and Characters</DropdownMenuItem>
                                                    <DropdownMenuItem variant="destructive">
                                                        Delete Folder, Characters, and Conversation History
                                                    </DropdownMenuItem>
                                                </DropdownMenuSubContent>
                                            </DropdownMenuPortal>
                                        </DropdownMenuSub>
                                    </DropdownMenuGroup>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>

                    </div>

                    <div className="space-y-2">
                        <Label>Tag Name</Label>
                        <Field
                            placeholder="Enter Tag Name"
                            name="personalitySummary"
                        />
                    </div>

                    <div className="space-y-2">
                        <Label>Description</Label>
                        <Field
                            as="textarea"
                            placeholder="Brief Description of Folder"
                            name="firstMessage"
                        />
                    </div>
                </div>
            </form>

            <div className=" border border-primary bg-primary/30 backdrop-blur-md  h-full w-full max-h-[490px] rounded-4xl py-4   ">
                <div className="overflow-y-auto h-full px-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 overflow-y-auto">
                        {Array.from({ length: 20 }, (_, i) => i + 1).map((item) => (
                            <Card
                                key={item}
                                className="rounded-2xl border border-gray-800 bg-[#0c0046] text-white p-4 flex items-center gap-4 hover:border-primary hover:bg-primary/10 duration-300"
                            >

                                <div className="flex flex-col">
                                    <div className="flex  gap-x-4 ">
                                        <Avatar className="size-16 aspect-square rounded-full border">
                                            <AvatarImage
                                                src="https://github.com/shadcn.png"
                                                alt="character"
                                                className="object-cover"
                                            />
                                            <AvatarFallback className="rounded-full">CN</AvatarFallback>
                                        </Avatar>
                                        <div className="flex flex-col">
                                            <h2 className="font-semibold  text-gray-300 text-lg">Character Name</h2>
                                            <div className="flex gap-2 flex-wrap ">
                                                {["AI", "Chatbot", "NLP", "ML", "Data"].map((tag, idx) => (
                                                    <Badge
                                                        key={idx}
                                                    >
                                                        {tag}
                                                    </Badge>
                                                ))}
                                            </div>

                                        </div>
                                    </div>
                                    <CardDescription className="text-gray-400 text-xs line-clamp-2 mt-2">
                                        Short description about the character goes here. This should
                                        summarize the character in 1–2 lines.
                                    </CardDescription>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default FolderForm;
