import Chats from '@/components/elements/chats'
import Container from '@/components/elements/container'
import React from 'react'

const page = () => {
    return (
        <div className='flex-1 text-white '>
            <Container className='h-full w-full '>
                <Chats />
            </Container>
        </div>
    )
}

export default page