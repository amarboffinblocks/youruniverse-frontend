import { Search } from 'lucide-react'
import React from 'react'
import { Input } from '../ui/input'

interface Props {
    placeholder?: string
}
const SearchField: React.FC<Props> = ({ placeholder = "", ...props }) => {
    return (
        <div className='flex flex-1  items-center bg-primary/20 backdrop-blur-2xl   border rounded-full pl-4 py-2 border-primary/70'>
            <Search className='text-muted' />
            <Input className='border-none bg-transparent backdrop-blur-none focus-visible:ring-0 focus-visible:border-none ' placeholder={placeholder} {...props} />
        </div>
    )
}

export default SearchField