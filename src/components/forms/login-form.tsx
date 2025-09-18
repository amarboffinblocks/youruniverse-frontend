import React from 'react'
import { Card } from '../ui/card'
import Image from 'next/image'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import Field from '../elements/form-elements/field'
import { Button } from '../ui/button'
import Link from 'next/link'

const LoginForm = () => {
    return (
        <div className='w-full max-w-sm '>
            <div className="relative w-full h-50 ">
                <Image
                    src="/logo/logo.png"
                    alt="universe-logo"
                    fill
                    priority
                    className="object-contain"
                />
            </div>
            <Card className='px-6 py-8 text-center bg-primary/20  space-y-4'>
                <div>
                    <h2 className='text-2xl  font-semibold tracking-widest text-white/90'>Welcome Back</h2>
                    <p className='text-sm text-muted'>Login in to Your Universe</p>
                </div>
                <div className=' space-y-2'>
                    <Label htmlFor='username'>Email or Username *</Label>
                    <Field placeholder='Enter your email or username' />
                </div>
                <div className='space-y-2'>
                    <Label htmlFor='password'>Password</Label>
                    <Input placeholder='Enter your password' />
                </div>
                <div>
                    <Link href={""} className='underline text-primary italic float-end text-sm'>Forgot Password?</Link>
                </div>
                <div className=''>
                    <Button className='w-full'>Sign in</Button>
                </div>
                <div className='text-center'>
                    <p className='text-muted font-semibold ' > Don't have Your Own Universe?</p>
                    <Link href={"/sign-up"} className='underline text-primary text-sm italic'>Create Your Universe Here</Link>

                </div>

            </Card>
        </div>
    )
}

export default LoginForm