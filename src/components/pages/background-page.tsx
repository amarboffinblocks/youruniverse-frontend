"use client"
import React, { useState } from 'react'
import {  Menu,  Search } from 'lucide-react'
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
import { Button } from '../ui/button'
import BackgroundCard from '../cards/background-card';
import { PaginationComponent } from '../elements/pagination-element';
const BackgroundPage = () => {
    const [page, setPage] = useState(1)

    return (
        <div className='flex flex-col h-full ' >
            <div className='w-full flex items-center gap-x-4 mt-10'>
                <div className='flex flex-1 items-center bg-primary/20 backdrop-blur-2xl   border rounded-full pl-4 py-2 border-primary/70'>
                    <Search className='text-muted' />
                    <Input className='border-none bg-transparent backdrop-blur-none focus-visible:ring-0 focus-visible:border-none ' placeholder={`Background Search by title`} />
                </div>
                <div>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button className="rounded-full">
                                Background Menu <Menu className="ml-2 h-4 w-4" />
                            </Button>
                        </DropdownMenuTrigger>

                        <DropdownMenuContent className="w-72" align="end" >
                            <DropdownMenuGroup>
                                <DropdownMenuItem>Link to Account</DropdownMenuItem>
                                <DropdownMenuItem>Make Global Default for Account</DropdownMenuItem>
                                <DropdownMenuItem>Duplicate</DropdownMenuItem>

                                {/* Add To submenu */}
                                <DropdownMenuSub>
                                    <DropdownMenuSubTrigger>Add to</DropdownMenuSubTrigger>
                                    <DropdownMenuPortal>
                                        <DropdownMenuSubContent>
                                            <DropdownMenuItem>Character</DropdownMenuItem>
                                            <DropdownMenuItem>Persona</DropdownMenuItem>
                                            <DropdownMenuItem>LoreBook</DropdownMenuItem>
                                            <DropdownMenuItem>Folder</DropdownMenuItem>
                                        </DropdownMenuSubContent>
                                    </DropdownMenuPortal>
                                </DropdownMenuSub>

                                <DropdownMenuSub>
                                    <DropdownMenuSubTrigger>Import</DropdownMenuSubTrigger>
                                    <DropdownMenuPortal>
                                        <DropdownMenuSubContent>
                                            <DropdownMenuItem>Bulk Import</DropdownMenuItem>
                                        </DropdownMenuSubContent>
                                    </DropdownMenuPortal>
                                </DropdownMenuSub>

                                <DropdownMenuSub>
                                    <DropdownMenuSubTrigger>Export</DropdownMenuSubTrigger>
                                    <DropdownMenuPortal>
                                        <DropdownMenuSubContent>
                                            <DropdownMenuItem>Bulk Export</DropdownMenuItem>
                                        </DropdownMenuSubContent>
                                    </DropdownMenuPortal>
                                </DropdownMenuSub>

                                <DropdownMenuItem>Share</DropdownMenuItem>
                                <DropdownMenuItem variant='destructive' >Delete</DropdownMenuItem>
                            </DropdownMenuGroup>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>


            <div className='flex-1 mt-10'>
                <div className='grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4  gap-4'>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
                        <BackgroundCard key={item} />
                    ))}
                </div>

            </div>
            <div className="mt-6">
                <PaginationComponent
                    currentPage={page}
                    totalPages={10}
                    onPageChange={(p) => setPage(p)}
                />
            </div>

        </div>
    )
}

export default BackgroundPage