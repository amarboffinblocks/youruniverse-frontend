import React from 'react'
import { Card } from '../ui/card'
import Image from 'next/image'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import Field from '../elements/form-elements/field'
import { Button } from '../ui/button'
import Link from 'next/link'
import PasswordField from '../elements/form-elements/password-field'

const LoginForm = () => {
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
                    <h2 className='text-2xl  font-semibold tracking-widest text-white/90'>Welcome Back</h2>
                    <p className='text-sm text-muted'>Login in to Your Universe</p>
                </div>
                <div className=' space-y-2'>
                    <Label htmlFor='username'>Email or Username *</Label>
                    <Input placeholder='Enter your username & email' />
                </div>
                <div className='space-y-2'>
                    <Label htmlFor='password'>Password *</Label>
                    <PasswordField placeholder="Enter Your Password" />
                </div>
                <div>
                    <Link href={""} className='underline text-primary italic float-end text-sm'>Forgot Password?</Link>
                </div>
                <div className=''>
                    <Button className='w-full'>Sign in</Button>
                </div>
                <div className='text-center flex flex-col '>
                    <p className='text-muted font-semibold ' > {`Don't have Your Own Universe?`}</p>
                    <Link href={"/sign-up"} className='underline text-primary text-sm italic'>Create Your Universe Here</Link>
                </div>
                <Link href={""} className='underline text-primary text-sm italic'>{`Issue's signing in contact us here`}</Link>

            </Card>
        </div>
    )
}

export default LoginForm