import React from 'react'
import { Card, CardDescription } from '../ui/card'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Badge } from '../ui/badge';


const FolderCard = () => {
    return (
        <div className=' rounded-4xl '>
            <Card className='p-4 relative rounded-none rounded-b-3xl h-auto rounded-tr-3xl border-t-8 border-t-primary bg-primary/30  space-y-3'>
                <span className=' absolute bg-primary -left-[1px]  -top-8   w-fit rounded-tl-3xl rounded-tr-3xl px-4 py-1.5  text-sm   '>

                    Character Folder
                </span>
                <div className='space-y-1'>
                    <h2 className='text-lg text-white/80 '>Folder Name</h2>
                    <div className="flex gap-2 flex-wrap ">
                        {["AI", "Chatbot", "NLP", "ML"].map((tag, idx) => (
                            <Badge
                                key={idx}
                            >
                                {tag}
                            </Badge>
                        ))}
                    </div>
                </div>
                <CardDescription className=' line-clamp-3  p-0 text-xs'>
                    This folder holds all design files and creative assets for the product team. Wireframes, prototypes, and design systems are stored here. Everything is kept organized for smooth collaboration. Access anytime to stay aligned with the design workflow.

                </CardDescription>
                <div className=' space-y-2 '>
                    <Accordion
                        type="single"
                        collapsible
                        className="w-full"
                    >
                        {
                            [1, 2, 3, 4, 5].map((char) => (
                                <AccordionItem key={char} value={"item-1" + char} className=' border-gray-600 '>
                                    <AccordionTrigger className='text-white/80  py-2 cursor-pointer'>
                                        <div className='flex items-center gap-x-2'>
                                            <Avatar className="cursor-pointer size-6 hover:scale-105 duration-500  transition brightness-60">

                                                <AvatarImage
                                                    src="https://github.com/shadcn.png"
                                                    alt="@shadcn"
                                                    className="object-cover"
                                                />
                                                <AvatarFallback className="cursor-pointer rounded-none w-full h-48 hover:scale-105 duration-500  transition brightness-75">
                                                    CN
                                                </AvatarFallback>
                                            </Avatar>

                                            Product Information
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent className=" text-balance">
                                        <p className='text-muted line-clamp-3'>
                                            Our flagship product combines cutting-edge technology with sleek
                                            design. Built with premium materials, it offers unparalleled
                                            performance and reliability.
                                        </p>

                                    </AccordionContent>
                                </AccordionItem>
                            ))
                        }
                    </Accordion>

                </div>

            </Card>
        </div>
    )
}

export default FolderCard