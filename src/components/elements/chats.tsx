import React from 'react'
import ChatMessages from './chat-messages'
import ChatPanel from './chat-panel'

const Chats = () => {
    return (
        <div className='flex h-full flex-1 flex-col relative '>
            <ChatMessages />
            <ChatPanel />
        </div>
    )
}

export default Chats