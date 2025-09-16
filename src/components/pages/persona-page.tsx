"use client"
import React from 'react'
import Container from "@/components/elements/container";
import FilterBar from "@/components/elements/filters";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useState } from "react";
import { PaginationComponent } from "@/components/elements/pagination-element";
import PersonaCard from "@/components/cards/persona-card";
const PersonaPage = () => {
    const [page, setPage] = useState(1)

    return (
        <Container className="mt-10"  >
            <div className=" max-w-xl mx-auto">
                <FilterBar label="Persona" />
            </div>
            <Tabs defaultValue="all" className="mt-4 space-y-2" >
                <TabsList className="w-full">
                    <TabsTrigger value="all">All Characters</TabsTrigger>
                    <TabsTrigger value="public">Public Characters</TabsTrigger>
                    <TabsTrigger value="private">Private Characters</TabsTrigger>
                </TabsList>
                <TabsContent value="all" >
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
                        {
                            [1, 2, 3, 4].map((item) => (
                                <PersonaCard key={item} />
                            ))
                        }


                    </div>
                </TabsContent>
                <TabsContent value="public">
                    <div className="text-white">
                        <h2>no data found</h2>

                    </div>
                </TabsContent>
                <TabsContent value="private"> <div className="text-white">
                    <h2>no data found</h2>

                </div>.</TabsContent>

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