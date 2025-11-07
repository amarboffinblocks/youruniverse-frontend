"use client"
import React from 'react'
import ChatMessages from './chat-messages'
import ChatPanel from './chat-panel'
interface Props {
  setPreviewModel?: (value: boolean) => void;
}
const Chats: React.FC<Props> = ({setPreviewModel = () => {}}) => {
    return (
        <div className='flex h-full flex-1 flex-col relative '>
            <ChatMessages setPreviewModel={setPreviewModel}/>
            <ChatPanel />
        </div>
    )
}

export default Chats