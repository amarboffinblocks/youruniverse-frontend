import React from 'react'
import FormTextarea from './form-textarea'
import { Plus, Trash2 } from 'lucide-react'
import FormInputField from './form-Input-field'

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
            <div className=''>
                <FormInputField label='Keywords or Terms' placeholder="Enter the keywords or Terms"  name='keyword' />
            </div>
            <FormTextarea name='context' placeholder='Enter the relavent context about the character' label='Context' />
        </div>

         <div className='border  border-primary rounded-2xl p-4 relative    '>
            <button
                type='button'
                className=' text-destructive absolute top-[44%] -translate-y-[34%] -left-16 cursor-pointer'
            >
                <Trash2 className='size-10' />
            </button>
              <div className=''>
                <FormInputField label='Keywords or Terms' placeholder="Enter the keywords or Terms"  name='keyword' />
            </div>
            <FormTextarea name='context' placeholder='Enter the relavent context about the character' label='Context' />
        </div>
        </div>
    )
}

export default EntriesField