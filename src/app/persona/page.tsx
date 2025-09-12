

"use client"
import BreadcrumbElements from "@/components/elements/breadcrumb-elements";
import Container from "@/components/elements/container";
import FilterBar from "@/components/elements/filters";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { EllipsisVertical, FilePlus2, FolderPlus, Heart, Link2, MessageCircleMore, MoreVertical, Share2, ShieldCheck, SquarePen, ThumbsDown, ThumbsUp, Upload, UsersRound } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useState } from "react";
import { PaginationComponent } from "@/components/elements/pagination-element";

export default function page() {
    const [page, setPage] = useState(1)
    return (
        <div className="flex-1 flex flex-col relative">
            <div className="flex-1">
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
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                                {
                                    [1, 2, 3, 4].map((item) => (
                                        <Card
                                            key={item}
                                            className={cn(" rounded-4xl  border border-gray-800 overflow-hidden  hover:border-primary hover:bg-primary/20 hover:shadow-2xl duration-300 relative", item === 3 && "border-primary bg-primary/20")}
                                        >
                                            {/* Header with Avatar + Action Menu */}
                                            <CardHeader className="p-0 m-0 relative">
                                                <div className="w-full absolute top-3 z-10 flex items-center  justify-between px-4  text-white ">
                                                    <div className="bg-gray-900 backdrop-blur-2xl rounded-full">
                                                        <Button
                                                            size="icon"
                                                            className=" size-6 bg-transparent "
                                                        >

                                                            <Heart className="size-3" />
                                                        </Button>
                                                        <Button
                                                            size="icon"
                                                            variant="ghost"
                                                            className="bg-transparent size-6"
                                                        >

                                                            <ThumbsUp className="size-3" />
                                                        </Button>
                                                        <Button
                                                            size="icon"
                                                            variant="ghost"
                                                            className="bg-transparent size-6"
                                                        >

                                                            <ThumbsDown className="size-3" />
                                                        </Button>
                                                    </div>
                                                    <div>
                                                        <DropdownMenu>
                                                            <DropdownMenuTrigger asChild>
                                                                <Button
                                                                    size="icon"
                                                                    variant="ghost"
                                                                    className="bg-gray-900 size-6"
                                                                >
                                                                    <MoreVertical className="size-3" />
                                                                </Button>
                                                            </DropdownMenuTrigger>
                                                            <DropdownMenuContent
                                                                align="end"
                                                            // className=" bg-gray-900 text-white border border-gray-800"
                                                            >
                                                                <DropdownMenuItem className="hover:bg-gray-800 transition cursor-pointer">
                                                                    <Link2 className="w-4 h-4 mr-2" /> Link
                                                                </DropdownMenuItem>
                                                                <DropdownMenuItem className="hover:bg-gray-800 transition cursor-pointer">
                                                                    <FolderPlus className="w-4 h-4 mr-2" /> Add to Folder
                                                                </DropdownMenuItem>
                                                                <DropdownMenuItem className="hover:bg-gray-800 transition cursor-pointer">
                                                                    <Share2 className="w-4 h-4 mr-2" /> Share
                                                                </DropdownMenuItem>
                                                                <DropdownMenuItem className="hover:bg-gray-800 transition cursor-pointer">
                                                                    <Upload className="w-4 h-4 mr-2" /> Export
                                                                </DropdownMenuItem>
                                                                <DropdownMenuItem className="hover:bg-gray-800 transition cursor-pointer">
                                                                    <SquarePen className="w-4 h-4 mr-2" /> Edit
                                                                </DropdownMenuItem>
                                                                <DropdownMenuItem className="hover:bg-gray-800 transition cursor-pointer">
                                                                    <MessageCircleMore className="w-4 h-4 mr-2" /> Chat With Me
                                                                </DropdownMenuItem>
                                                            </DropdownMenuContent>
                                                        </DropdownMenu>
                                                    </div>
                                                </div>
                                                <Avatar className="cursor-pointer rounded-none w-full h-48 hover:scale-105 duration-500  transition brightness-75">
                                                    <AvatarImage
                                                        src="https://github.com/shadcn.png"
                                                        alt="@shadcn"
                                                        className="object-cover"
                                                    />
                                                    <AvatarFallback className="cursor-pointer rounded-none w-full h-48 hover:scale-105 duration-500  transition brightness-75">
                                                        CN
                                                    </AvatarFallback>
                                                </Avatar>


                                            </CardHeader>

                                            {/* Content */}
                                            <CardContent className="space-y-3 px-4 ">
                                                <div className="flex justify-between items-center">
                                                    <CardTitle className="text-white/80 text-xl font-semibold">Tony Stark</CardTitle>
                                                    <span className="text-xs text-gray-400">Tokens: 1000</span>
                                                </div>
                                                <div className="flex gap-2 flex-wrap ">
                                                    {["AI", "Chatbot", "NLP", "ML", "Data", "jddfjk", "dkksjfkl"].map((tag, idx) => (
                                                        <Badge
                                                            key={idx}
                                                        >
                                                            {tag}
                                                        </Badge>
                                                    ))}
                                                </div>
                                                <CardDescription className="text-gray-400 text-sm line-clamp-3">
                                                    Lyriana is a tall, ethereal sorceress with long silver hair that glimmers like moonlight. Her piercing violet eyes seem to hold the mysteries of forgotten worlds, and she carries herself with regal grace. Draped in flowing robes embroidered with celestial patterns, she wields a staff crowned by a radiant crystal that hums softly with arcane energy.
                                                </CardDescription>
                                            </CardContent>

                                            <CardFooter className="flex mt-3 justify-between px-4 py-2  border-t border-gray-800 text-[10px] text-gray-500">
                                                <div>
                                                    Created:- 20-08-2023
                                                </div>
                                                <div>
                                                    Updated:- 20-08-2023
                                                </div>
                                            </CardFooter>
                                        </Card>
                                    ))
                                }


                            </div>
                            <div className=" mt-4 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
                                <Card className="w-full rounded-4xl  duration-500 gap-4 cursor-pointer border shadow-sm hover:shadow-md p-4">
                                    <CardHeader className="p-0">
                                        <div className="flex gap-3 items-start">
                                            <Avatar className="size-24 aspect-square rounded-full border">
                                                <AvatarImage
                                                    src="https://github.com/shadcn.png"
                                                    alt="@shadcn"
                                                    className="object-cover"
                                                />
                                                <AvatarFallback className="rounded-md">
                                                    TN
                                                </AvatarFallback>
                                            </Avatar>

                                            <div className="flex-1 space-y-1">
                                                <div className="flex justify-between items-center">
                                                    <h2 className="font-semibold text-lg flex gap-1 items-center text-white">

                                                        Tony Stark
                                                    </h2>
                                                    <div className="text-xs bg-accent p-[6px] rounded-lg text-muted-foreground items-center flex gap-2">

                                                        <ThumbsUp size={15} className="cursor-pointer"
                                                        />{"10k"}
                                                        <ThumbsDown size={15} className="cursor-pointer"
                                                        />{''}


                                                        <DropdownMenu>
                                                            <DropdownMenuTrigger >

                                                                <EllipsisVertical className=" hover:text-accent-foreground" size={15} />

                                                            </DropdownMenuTrigger>
                                                            <DropdownMenuContent align="start">
                                                                <DropdownMenuItem className="hover:bg-gray-800 transition cursor-pointer">
                                                                    <Link2 className="w-4 h-4 mr-2" /> Link
                                                                </DropdownMenuItem>
                                                                <DropdownMenuItem className="hover:bg-gray-800 transition cursor-pointer">
                                                                    <FolderPlus className="w-4 h-4 mr-2" /> Add to Folder
                                                                </DropdownMenuItem>
                                                                <DropdownMenuItem className="hover:bg-gray-800 transition cursor-pointer">
                                                                    <Share2 className="w-4 h-4 mr-2" /> Share
                                                                </DropdownMenuItem>
                                                                <DropdownMenuItem className="hover:bg-gray-800 transition cursor-pointer">
                                                                    <Upload className="w-4 h-4 mr-2" /> Export
                                                                </DropdownMenuItem>
                                                                <DropdownMenuItem className="hover:bg-gray-800 transition cursor-pointer">
                                                                    <SquarePen className="w-4 h-4 mr-2" /> Edit
                                                                </DropdownMenuItem>
                                                                <DropdownMenuItem className="hover:bg-gray-800 transition cursor-pointer">
                                                                    <MessageCircleMore className="w-4 h-4 mr-2" /> Chat With Me
                                                                </DropdownMenuItem>
                                                            </DropdownMenuContent>
                                                        </DropdownMenu>

                                                    </div>

                                                </div>
                                                <div className="flex flex-wrap gap-2 mt-2">
                                                    {["AI", "Chatbot", "NLP", "ML", "Data"].map((tag: string) =>
                                                        < Badge key={tag} >
                                                            {tag}
                                                        </Badge>
                                                    )
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </CardHeader>
                                    <CardContent className="space-y-0 h-full p-0 m-0">
                                        <div className="text-sm text-muted line-clamp-3">
                                            Lyriana is a tall, ethereal sorceress with long silver hair that glimmers like moonlight. Her piercing violet eyes seem to hold the mysteries of forgotten worlds, and she carries herself with regal grace. Draped in flowing robes embroidered with celestial patterns, she wields a staff crowned by a radiant crystal that hums softly with arcane energy.
                                        </div>


                                    </CardContent>
                                    <CardFooter className="p-0 flex justify-between  items-center">
                                        <div className="flex items-center gap-2">

                                        </div>
                                        <Button className="cursor-pointer whitespace-pre-wrap max-w-[200px] "  > <FilePlus2 />Chat with Tony Stark </Button>
                                    </CardFooter>
                                    <div className="text-xs text-muted-foreground flex w-full border-t border-primary pt-4 justify-between">
                                        <span>

                                            Created on 12-09-2025
                                        </span>
                                        <span>
                                            Updated on 16-09-2025

                                        </span>

                                    </div>
                                </Card>
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
            </div>
            <BreadcrumbElements />
        </div>
    );
}
