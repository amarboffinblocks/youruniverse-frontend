"use client"
import React from 'react'
import Container from "@/components/elements/container";
import FilterBar from "@/components/elements/filters";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useState } from "react";
import { PaginationComponent } from "@/components/elements/pagination-element";
import PersonaCard from "@/components/cards/persona-card";
import CharacterCard from "@/components/cards/character-card";
import DataNotFound from '../elements/data-not-found';
const CharacterPage = () => {
  const [page, setPage] = useState(1)

  return (
    <Container className=" h-full flex flex-col"  >
      <div className=" max-w-xl w-full mx-auto">
        <FilterBar />
      </div>
      <Tabs defaultValue="all" className="mt-4 space-y-2 flex-1" >
        <TabsList className="w-full">
          <TabsTrigger value="all">All Characters</TabsTrigger>
          <TabsTrigger value="public">Public Characters</TabsTrigger>
          <TabsTrigger value="private">Private Characters</TabsTrigger>
        </TabsList>
        <TabsContent value="all" >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {
              [1, 2, 3, 4].map((item) => (
                <CharacterCard key={item} />
              ))
            }


          </div>
          <div className=" mt-4 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
            <PersonaCard />
          </div>
        </TabsContent>
        <TabsContent value="public" >
          <DataNotFound />

        </TabsContent>
        <TabsContent value="private" >
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

export default CharacterPage