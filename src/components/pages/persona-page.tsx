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
import PersonaCard from '../cards/persona-card';
import Rating from '../elements/rating';
import SearchField from '../elements/search-field';
import { ToggleSwitch } from '../elements/toggle-switch';

const PersonaPage = () => {
    const [page, setPage] = useState(1)

    return (
        <Container className="flex flex-col h-full "  >
            <div className="max-w-3xl mx-auto w-full">
                <div className='space-y-4'>
                    <div className='flex items-center gap-6 w-full '>
                        <div className='w-full'>
                            <div className='flex  items-center bg-primary/20 backdrop-blur-2xl   border rounded-full pl-4 py-2 border-primary/70'>
                                <Search className='text-muted' />
                                <Input className='border-none bg-transparent backdrop-blur-none focus-visible:ring-0 focus-visible:border-none ' placeholder={`Search for Persona name or description`} />
                            </div>
                        </div>

                        <div>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button className="rounded-full">
                                        Persona Menu <Menu className="ml-2 h-4 w-4" />
                                    </Button>
                                </DropdownMenuTrigger>

                                <DropdownMenuContent className="w-72" align="end">
                                    <DropdownMenuGroup>
                                        <DropdownMenuItem>Show Favorites Only</DropdownMenuItem>
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
                                        <DropdownMenuSub >
                                            <DropdownMenuSubTrigger>By Rating</DropdownMenuSubTrigger>
                                            <DropdownMenuPortal>
                                                <DropdownMenuSubContent className="text-white">
                                                    {[5, 4, 3, 2, 1].map((star: number) => (
                                                        <DropdownMenuItem key={star}>
                                                            <div className="flex items-center gap-2">
                                                                <Rating value={star} size={14} readOnly />
                                                                <span className="text-xs">({star} Star)</span>
                                                            </div>
                                                        </DropdownMenuItem>
                                                    ))}
                                                </DropdownMenuSubContent>
                                            </DropdownMenuPortal>
                                        </DropdownMenuSub>

                                        <DropdownMenuSub>
                                            <DropdownMenuSubTrigger>Set Default View</DropdownMenuSubTrigger>
                                            <DropdownMenuPortal>
                                                <DropdownMenuSubContent>
                                                    <DropdownMenuItem>All Personas</DropdownMenuItem>
                                                    <DropdownMenuItem>Public Personas</DropdownMenuItem>
                                                    <DropdownMenuItem>Saved Personas</DropdownMenuItem>
                                                    <DropdownMenuItem>Private Personas</DropdownMenuItem>
                                                    <DropdownMenuItem>Favourite Personas</DropdownMenuItem>
                                                </DropdownMenuSubContent>
                                            </DropdownMenuPortal>
                                        </DropdownMenuSub>

                                        <DropdownMenuSub>
                                            <DropdownMenuSubTrigger>Create / Import</DropdownMenuSubTrigger>
                                            <DropdownMenuPortal>
                                                <DropdownMenuSubContent>
                                                    <Link href="/personas/create" passHref>
                                                        <DropdownMenuItem>Create Persona</DropdownMenuItem>
                                                    </Link>
                                                    <DropdownMenuItem>Import Single Persona</DropdownMenuItem>
                                                    <DropdownMenuItem>Bulk Import Personas</DropdownMenuItem>
                                                </DropdownMenuSubContent>
                                            </DropdownMenuPortal>
                                        </DropdownMenuSub>

                                        <DropdownMenuSub>
                                            <DropdownMenuSubTrigger>Delete Persona</DropdownMenuSubTrigger>
                                            <DropdownMenuPortal>
                                                <DropdownMenuSubContent>
                                                    <DropdownMenuItem>Delete Selected Persona (s)</DropdownMenuItem>

                                                </DropdownMenuSubContent>
                                            </DropdownMenuPortal>
                                        </DropdownMenuSub>
                                    </DropdownMenuGroup>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </div>
                    <div className='flex items-center justify-center gap-4 w-full '>
                        <SearchField placeholder='Search for Persona by Tags' />
                        <SearchField placeholder='Tags to exclude from search' />
                        <ToggleSwitch
                            options={[
                                { label: "NSFW", value: "NSFW" },
                                { label: "SFW", value: "SFW" },
                            ]}
                            defaultValue='SFW'
                        />
                    </div>
                </div>
            </div>
            <Tabs defaultValue="all" className="mt-4 space-y-2 flex-1" >
                <TabsList className="w-full">
                    <TabsTrigger value="all">All </TabsTrigger>
                    <TabsTrigger value="public">Public </TabsTrigger>
                    <TabsTrigger value="private">Private </TabsTrigger>
                    <TabsTrigger value="saved">Saved </TabsTrigger>
                    <TabsTrigger value="favourite">Favourites </TabsTrigger>

                </TabsList>
                <TabsContent value="all" >
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        {
                            [1, 2, 3, 4].map((item) => (
                                <PersonaCard key={item} />
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
                <TabsContent value="saved">
                    <DataNotFound />

                </TabsContent>
                <TabsContent value="favourite" >
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

export default PersonaPage