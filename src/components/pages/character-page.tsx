"use client"
import React, { Fragment } from 'react'
import Container from "@/components/elements/container";
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
import { Menu } from 'lucide-react'
import Link from 'next/link'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useState } from "react";
import { PaginationComponent } from "@/components/elements/pagination-element";
import CharacterCard from "@/components/cards/character-card";
import DataNotFound from '../elements/data-not-found';
import SearchField from '../elements/search-field';
import { ToggleSwitch } from '../elements/toggle-switch';
const CharacterPage = () => {
  const [page, setPage] = useState(1)

  return (
    <Container className=" h-full flex flex-col"  >
      <div className=" max-w-3xl w-full mx-auto">
        <div className=' space-y-4'>
          <div className='flex items-center gap-x-4 w-full '>
            <SearchField placeholder={`Search by Character name or description`} />
            <div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="rounded-full">
                    Character Menu <Menu className="ml-2 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent className="w-72" align="end">
                  <DropdownMenuGroup>
                    <DropdownMenuItem>Show Favorites only</DropdownMenuItem>
                    <DropdownMenuSub>
                      <DropdownMenuSubTrigger >Set Default View</DropdownMenuSubTrigger>
                      <DropdownMenuPortal>
                        <DropdownMenuSubContent>
                          <DropdownMenuItem>Private Characters</DropdownMenuItem>
                          <DropdownMenuItem>Public Characters</DropdownMenuItem>
                          <DropdownMenuItem>Public & Private Characters</DropdownMenuItem>
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
                          <DropdownMenuItem>Oldest to Newest</DropdownMenuItem>
                          <DropdownMenuItem>Newest to Oldest</DropdownMenuItem>
                        </DropdownMenuSubContent>
                      </DropdownMenuPortal>
                    </DropdownMenuSub>
                    <DropdownMenuItem >Duplicate Selected Character (s)</DropdownMenuItem>
                    <DropdownMenuSub>
                      <DropdownMenuSubTrigger>Create / Import</DropdownMenuSubTrigger>
                      <DropdownMenuPortal>
                        <DropdownMenuSubContent>
                          <Link href={"/characters/create"} passHref>
                            <DropdownMenuItem>Create Character</DropdownMenuItem>
                          </Link>
                          <Link href={"/folders/create"} passHref>
                            <DropdownMenuItem>Create Folder</DropdownMenuItem>
                          </Link>
                          <DropdownMenuItem>Import Character</DropdownMenuItem>
                          <DropdownMenuItem>Bulk Import Characters</DropdownMenuItem>
                        </DropdownMenuSubContent>
                      </DropdownMenuPortal>
                    </DropdownMenuSub>

                    <DropdownMenuSub >
                      <DropdownMenuSubTrigger>Delete Character</DropdownMenuSubTrigger>
                      <DropdownMenuPortal>
                        <DropdownMenuSubContent>
                          <DropdownMenuItem>Delete selected Character (s) only</DropdownMenuItem>
                          <DropdownMenuItem>Delete selected Character (s) and current chat</DropdownMenuItem>
                          <DropdownMenuItem>Delete selected Character (s), saved chat and current chat</DropdownMenuItem>
                        </DropdownMenuSubContent>
                      </DropdownMenuPortal>
                    </DropdownMenuSub>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <div className='flex items-center justify-center gap-4 w-full '>
            <SearchField placeholder='Search by Character tags' />
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
          <TabsTrigger value="all">All Characters</TabsTrigger>
          <TabsTrigger value="public">Public Characters</TabsTrigger>
          <TabsTrigger value="private">Private Characters</TabsTrigger>
        </TabsList>
        <TabsContent value="all" >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {
              [1, 2, 3, 4].map((item: number) => (
                <Fragment key={item}>
                  {item == 2 ? <CharacterCard key={item} saved={true} /> : <CharacterCard key={item} />}
                </Fragment>
              ))
            }
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