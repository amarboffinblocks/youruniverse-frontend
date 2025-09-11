"use client"
import React, { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Switch } from '@/components/ui/switch'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from '@/components/ui/button'
import { Menu, Search } from 'lucide-react'
const filters = () => {
    const [isSFW, setSFW] = useState(false)
    return (
        <div className=' space-y-4'>
            <div className='flex items-center gap-6 w-full '>
                <div className='w-full'>
                    <div className='flex  items-center bg-primary/20 backdrop-blur-md   border rounded-full pl-4 py-2 border-primary'>
                        <Search className='text-muted' />
                        <Input className='border-none bg-transparent backdrop-blur-none focus-visible:ring-0 focus-visible:border-none ' placeholder='Search for Character name or description' />
                    </div>
                </div>


            </div>
            <div className='flex items-center justify-center gap-6 w-full '>
                <div className='flex w-full  items-center bg-primary/20 backdrop-blur-md   border rounded-full   pl-4 py-2 border-primary'>
                    <Search className='text-muted' />
                    <Input className='border-none bg-transparent backdrop-blur-none focus-visible:ring-0 focus-visible:border-none ' placeholder='Search for Character bt Tags' />
                </div>
                {/* Public/Private Toggle */}
                <div className="flex  items-center gap-2">
                    <Switch
                        checked={isSFW}
                        onCheckedChange={(checked) => setSFW(checked)}
                    />
                    <span className="text-sm text-muted-foreground">
                        {isSFW ? "SFW" : "NSFW"}
                    </span>
                </div>
                <div>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button >
                                Character Menu <Menu />
                            </Button>
                        </DropdownMenuTrigger>

                        <DropdownMenuContent className="w-64" align="end">
                            <DropdownMenuLabel>Character Menu</DropdownMenuLabel>
                            <DropdownMenuGroup>
                                <DropdownMenuItem>Show Favorites Only</DropdownMenuItem>
                                <DropdownMenuItem>Alphabetical Order (A–Z)</DropdownMenuItem>
                                <DropdownMenuItem>Alphabetical Order (Z–A)</DropdownMenuItem>
                                <DropdownMenuItem>Date – Oldest to Newest</DropdownMenuItem>
                                <DropdownMenuItem>Date – Newest to Oldest</DropdownMenuItem>
                                <DropdownMenuItem>Rating</DropdownMenuItem>
                            </DropdownMenuGroup>

                            <DropdownMenuSeparator />

                            <DropdownMenuGroup>
                                <DropdownMenuLabel>Set Default View</DropdownMenuLabel>
                                <DropdownMenuItem>Saved Characters</DropdownMenuItem>
                                <DropdownMenuItem>Public Characters</DropdownMenuItem>
                                <DropdownMenuItem>Folders</DropdownMenuItem>
                            </DropdownMenuGroup>

                            <DropdownMenuSeparator />

                            <DropdownMenuGroup>
                                <DropdownMenuItem>Create Folder</DropdownMenuItem>
                                <DropdownMenuItem>Create Character</DropdownMenuItem>
                                <DropdownMenuSub>
                                    <DropdownMenuSubTrigger>Import Character</DropdownMenuSubTrigger>
                                    <DropdownMenuPortal>
                                        <DropdownMenuSubContent>
                                            <DropdownMenuItem>Import Single Character</DropdownMenuItem>
                                            <DropdownMenuItem>Bulk Import Characters</DropdownMenuItem>
                                        </DropdownMenuSubContent>
                                    </DropdownMenuPortal>
                                </DropdownMenuSub>
                            </DropdownMenuGroup>

                            <DropdownMenuSeparator />

                            <DropdownMenuGroup >
                                <DropdownMenuSub >
                                    <DropdownMenuSubTrigger>Delete Character</DropdownMenuSubTrigger>
                                    <DropdownMenuPortal>
                                        <DropdownMenuSubContent >
                                            <DropdownMenuItem>Delete Character Only</DropdownMenuItem>
                                            <DropdownMenuItem>Delete Character and Chat</DropdownMenuItem>
                                            <DropdownMenuItem>Delete Character and Saved Chat</DropdownMenuItem>
                                        </DropdownMenuSubContent>
                                    </DropdownMenuPortal>
                                </DropdownMenuSub>
                            </DropdownMenuGroup>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>

        </div>
    )
}

export default filters