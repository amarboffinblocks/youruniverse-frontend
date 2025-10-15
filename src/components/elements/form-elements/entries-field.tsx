import React from 'react'
import MessageListManager from './message-list-manager'
import FormTextarea from './form-textarea'
import { Plus, Trash2 } from 'lucide-react'

const EntriesField = () => {
    return (
        <div className='space-y-6'>

        <div className='border  border-primary rounded-2xl p-4 relative    '>
            <button
                type='button'
                className='text-primary absolute top-[44%] -translate-y-[34%] -left-16 cursor-pointer'
            >
                <Plus className='size-14' />
            </button>
            <div className='pl-14'>
                <MessageListManager label='keyword' name='keyword' onChange={(messages: string[]) => console.log(messages)} />
            </div>
            <FormTextarea name='context' label='Context' />
        </div>

         <div className='border  border-primary rounded-2xl p-4 relative    '>
            <button
                type='button'
                className=' text-destructive absolute top-[44%] -translate-y-[34%] -left-16 cursor-pointer'
            >
                <Trash2 className='size-10' />
            </button>
            <div className='pl-14'>
                <MessageListManager label='keyword' name='keyword' onChange={(messages: string[]) => console.log(messages)} />
            </div>
            <FormTextarea name='context' label='Context' />
        </div>
        </div>
    )
}

export default EntriesField