"use client"
import React from 'react'
import Container from "@/components/elements/container";
import FilterBar from "@/components/elements/filters";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useState } from "react";
import { PaginationComponent } from "@/components/elements/pagination-element";
import LorebookCard from "@/components/cards/lorebook-card";
import DataNotFound from '../elements/data-not-found';
import { Input } from '@/components/ui/input'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from '@/components/ui/button'
import { Menu, Search } from 'lucide-react'
import Link from 'next/link'

const LorebookPage = () => {
    const [page, setPage] = useState(1)

    return (
        <Container className=" flex flex-col h-full "  >
            <div className="max-w-2xl mx-auto w-full">
                       <div className='space-y-4'>
            <div className='flex items-center gap-6 w-full '>
                <div className='w-full'>
                    <div className='flex  items-center bg-primary/20 backdrop-blur-2xl   border rounded-full pl-4 py-2 border-primary/70'>
                        <Search className='text-muted' />
                        <Input className='border-none bg-transparent backdrop-blur-none focus-visible:ring-0 focus-visible:border-none ' placeholder={`Search for Lorebook name or description`} />
                    </div>
                </div>
    
                <div>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button className='h-12 rounded-full'>
                                Lorebook Menu <Menu />
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
                                <Link href={"/folders"}><DropdownMenuItem>Folders</DropdownMenuItem></Link>
                            </DropdownMenuGroup>

                            <DropdownMenuSeparator />

                            <DropdownMenuGroup>
                                <Link href={"/folder-creation"}>   <DropdownMenuItem>  Create Folder</DropdownMenuItem></Link>

                                <Link href={"/charactereditor"}>   <DropdownMenuItem> Create Character</DropdownMenuItem></Link>
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
            <div className='flex items-center justify-center gap-6 w-full '>
                <div className='flex w-full  items-center bg-primary/20 backdrop-blur-2xl   border rounded-full   pl-4 py-2 border-primary/70'>
                    <Search className='text-muted' />
                    <Input className='border-none bg-transparent backdrop-blur-none focus-visible:ring-0 focus-visible:border-none ' placeholder={`Search for Lorebook by Tags`} />
                </div>
                <div className='flex w-full  items-center bg-primary/20 backdrop-blur-2xl   border rounded-full   pl-4 py-2 border-primary/70'>
                    <Search className='text-muted' />
                    <Input className='border-none bg-transparent backdrop-blur-none focus-visible:ring-0 focus-visible:border-none ' placeholder={`Search for for Tags to ignore`} />
                </div>
 
            </div>

        </div>
            </div>
            <Tabs defaultValue="all" className="mt-4 space-y-2 flex-1" >
                <TabsList className="w-full">
                    <TabsTrigger value="all">All Lorebook</TabsTrigger>
                    <TabsTrigger value="public">Public Lorebook</TabsTrigger>
                    <TabsTrigger value="private">Private Lorebook</TabsTrigger>
                </TabsList>
                <TabsContent value="all" >
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
                        {
                            [1, 2, 3, 4].map((item) => (
                                <LorebookCard key={item} />
                            ))
                        }


                    </div>

                </TabsContent>
                <TabsContent value="public">
                    <DataNotFound />
                </TabsContent>
                <TabsContent value="private">
                    <DataNotFound />
                </TabsContent>

            </Tabs>
            <div className="mt-6">

                <PaginationComponent
                    currentPage={page}
                    totalPages={10}
                    onPageChange={(p) => setPage(p)}
                />
            </div>
        </Container>
    )
}

export default LorebookPage