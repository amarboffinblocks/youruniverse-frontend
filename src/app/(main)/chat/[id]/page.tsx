"use client"
import Chats from '@/components/elements/chats'
import Container from '@/components/elements/container'
import CharacterPreviewForm from '@/components/forms/character-preview-form'
import { Button } from '@/components/ui/button'
import React, { useState } from 'react'

const Page = () => {
    const[previewModel,setPreviewModel]=useState<boolean>(false)
    return (
        <div className='flex-1 flex flex-col-reverse lg:flex-row text-white '>

            <Container className='h-full  w-full '>
                <Chats setPreviewModel={setPreviewModel}/>
            </Container>
            {
                previewModel?
                <Container className=' xl:max-w-lg h-fit sticky  top-0 w-full'>
                    <div className='flex justify-between items-center w-full'>
                        <p className='font-bold text-2xl text-primary'>Character Preview</p>
                        <Button onClick={()=>setPreviewModel(false)}>Close</Button>
                    </div>
                    <CharacterPreviewForm />
            </Container>:''
            }

        </div>
    )
}

export default Page