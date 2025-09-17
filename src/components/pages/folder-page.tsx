"use client"
import React, { useState } from 'react'
import { Menu, MoreVertical, Search, } from 'lucide-react'
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
import { PaginationComponent } from '../elements/pagination-element';
import FolderCard from '../cards/folder-card';
const FolderPage = () => {
    const [page, setPage] = useState(1)

    return (
        <div className='flex flex-col h-full pt-10' >
            <div className='space-y-4'>
                <div className='flex flex-1 items-center gap-x-4 '>
                    <div className='flex flex-1 items-center bg-primary/20 backdrop-blur-2xl   border rounded-full pl-4 py-2 border-primary/70'>
                        <Search className='text-muted' />
                        <Input className='border-none bg-transparent backdrop-blur-none focus-visible:ring-0 focus-visible:border-none ' placeholder={`Folder Search by title`} />
                    </div>
                    <div>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button className="rounded-full">
                                    Folder Menu <Menu className="ml-2 h-4 w-4" />
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
                <div className='grid grid-cols-2 gap-4'>
                    <div className='flex flex-1 items-center bg-primary/20 backdrop-blur-2xl   border rounded-full pl-4 py-2 border-primary/70'>
                        <Search className='text-muted' />
                        <Input className='border-none bg-transparent backdrop-blur-none focus-visible:ring-0 focus-visible:border-none ' placeholder={`Folder Search by title`} />
                    </div>
                    <div className='flex flex-1 items-center bg-primary/20 backdrop-blur-2xl   border rounded-full pl-4 py-2 border-primary/70'>
                        <Search className='text-muted' />
                        <Input className='border-none bg-transparent backdrop-blur-none focus-visible:ring-0 focus-visible:border-none ' placeholder={`Folder Search by title`} />
                    </div>
                </div>
            </div>
            <div className='flex-1   mt-10'>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-10 gap-x-4 '>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
                        <FolderCard key={item} />
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

export default FolderPage