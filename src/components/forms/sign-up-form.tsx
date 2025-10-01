import React from 'react'
import { Card } from '../ui/card'
import Image from 'next/image'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import Link from 'next/link'
import PasswordField from '../elements/form-elements/password-field'

const SignUpForm = () => {
    return (
        <div className='w-full max-w-md '>
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
                    <h2 className='text-2xl  font-semibold  text-white/90'>Your Universe Registration</h2>
                </div>
                <div className=' space-y-2'>
                    <Label htmlFor='username'>Username</Label>
                    <Input placeholder='Enter your  username' />
                </div>
                <div className=' space-y-2'>
                    <Label htmlFor='email'>Email</Label>
                    <Input placeholder='Enter your  email' />
                </div>
                <div className='space-y-2'>
                    <Label htmlFor='password'>Password</Label>
                    <PasswordField placeholder='Enter your password' />
                </div>
                <div className='space-y-2'>
                    <Label htmlFor='confirm-password'>Confirm Password</Label>
                    <PasswordField placeholder=' Please confirm your password here.' />
                </div>
                <div className='py-4  border border-primary rounded-2xl text-center'>
                    <h2 className='text-white'>Subscription Plans</h2>
                </div>
                <div className='py-2'>
                    <Button className='w-full'>Register Your Universe</Button>
                </div>
                <div className='flex flex-col items-center'>
                    <div className='text-muted  font-semibold flex items-center gap-x-1 ' > Already have an account?<Link className='text-primary italic underline text-sm  font-normal' href={"/sign-in"}>Sign in</Link> </div>
                </div>
                <Link href={""} className='underline text-primary text-sm italic'>{`Issues creating Your Universe? Contact us here.`}</Link>

            </Card>
        </div>
    )
}

export default SignUpForm