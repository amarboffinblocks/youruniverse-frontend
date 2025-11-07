"use client"
import React from 'react'
import Container from "@/components/elements/container";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useState } from "react";
import { PaginationComponent } from "@/components/elements/pagination-element";
import DataNotFound from '../elements/data-not-found';
import { Input } from '@/components/ui/input'
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
import { Button } from '@/components/ui/button'
import { Menu, Search } from 'lucide-react'
import Link from 'next/link'
import CharacterCard from '../cards/character-card';

const LorebookPage = () => {
    const [page, setPage] = useState(1)

    return (
        <Container className=" flex flex-col h-full "  >
            <div className="max-w-3xl mx-auto w-full">
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
                                    <Button className="rounded-full">
                                        Lorebook Menu <Menu className="ml-2 h-4 w-4" />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="w-72" align="end">
                                    <DropdownMenuGroup>
                                        <DropdownMenuItem>Show Favorites Only</DropdownMenuItem>
                                         <DropdownMenuSub>
                                            <DropdownMenuSubTrigger >Set Default View</DropdownMenuSubTrigger>
                                            <DropdownMenuPortal>
                                                <DropdownMenuSubContent>
                                                    <DropdownMenuItem>Saved Lorebooks</DropdownMenuItem>
                                                    <DropdownMenuItem>Public Lorebooks</DropdownMenuItem>
                                                </DropdownMenuSubContent>
                                            </DropdownMenuPortal>
                                        </DropdownMenuSub>
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
                                            <DropdownMenuSubTrigger>Date Order</DropdownMenuSubTrigger>
                                            <DropdownMenuPortal>
                                                <DropdownMenuSubContent>
                                                    <DropdownMenuItem>Oldest First</DropdownMenuItem>
                                                    <DropdownMenuItem>Newest First</DropdownMenuItem>
                                                </DropdownMenuSubContent>
                                            </DropdownMenuPortal>
                                        </DropdownMenuSub>

                                        <DropdownMenuItem >Duplicate Selected Lorebook</DropdownMenuItem>
                                       

                                        <DropdownMenuSub>
                                            <DropdownMenuSubTrigger>Create / Import</DropdownMenuSubTrigger>
                                            <DropdownMenuPortal>
                                                <DropdownMenuSubContent>
                                                    <Link href="/lorebooks/create" passHref>
                                                        <DropdownMenuItem>Create Lorebook</DropdownMenuItem>
                                                    </Link>
                                                    <DropdownMenuItem>Import Single Lorebook</DropdownMenuItem>
                                                    <DropdownMenuItem>Bulk Import Lorebooks</DropdownMenuItem>
                                                </DropdownMenuSubContent>
                                            </DropdownMenuPortal>
                                        </DropdownMenuSub>

                                        <DropdownMenuSub>
                                            <DropdownMenuSubTrigger>Delete Lorebook</DropdownMenuSubTrigger>
                                            <DropdownMenuPortal>
                                                <DropdownMenuSubContent>
                                                    <DropdownMenuItem>Delete Selected Lorebook (s)</DropdownMenuItem>
                                             
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
                            <Input className='border-none bg-transparent backdrop-blur-none focus-visible:ring-0 focus-visible:border-none ' placeholder={`Tags to exclude from search`} />
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
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        {
                            [1, 2, 3, 4].map((item) => (
                                <CharacterCard key={item} />
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