"use client"
import React from 'react'
import Container from "@/components/elements/container";
import FilterBar from "@/components/elements/filters";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useState } from "react";
import { PaginationComponent } from "@/components/elements/pagination-element";
import LorebookCard from "@/components/cards/lorebook-card";
import DataNotFound from '../elements/data-not-found';
const LorebookPage = () => {
    const [page, setPage] = useState(1)

    return (
        <Container className=" flex flex-col h-full "  >
            <div className=" max-w-xl mx-auto">
                <FilterBar label="Lorebook" />
            </div>
            <Tabs defaultValue="all" className="mt-4 space-y-2 flex-1" >
                <TabsList className="w-full">
                    <TabsTrigger value="all">All Characters</TabsTrigger>
                    <TabsTrigger value="public">Public Characters</TabsTrigger>
                    <TabsTrigger value="private">Private Characters</TabsTrigger>
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