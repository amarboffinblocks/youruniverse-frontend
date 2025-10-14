import React from 'react'

import { Card } from '../ui/card'

import Image from 'next/image'

import { Label } from '../ui/label'

import { Input } from '../ui/input'

import { Button } from '../ui/button'

import Link from 'next/link'

import PasswordField from '../elements/form-elements/password-field'

const LoginForm = () => {

    return (
        <div className='w-full max-w-md '>
              <div className="flex flex-col gap-10 w-full h-[250px] relative py-5">
                <div className="relative w-full h-[60%] ">
                    <Image
                        src="/logo1.png"
                        alt="universe-logo"
                        fill
                        priority
                        className="object-contain transform scale-250"
                    />
                </div>
                <div className="relative w-[85%] h-[40%] mx-auto">
                    <Image
                        src="/logoname.png"
                        alt="universe-logo"
                        fill
                        priority
                        className="object-contain "
                    />
                </div>
            </div>
            <Card className='px-6 py-8 text-center bg-primary/20  space-y-4'>
                <div>
                    <h2 className='text-2xl  font-semibold tracking-widest text-white/90'>Welcome Back</h2>
                    <p className='text-sm text-muted'>Login in to Your Universe</p>
                </div>
                <div className=' space-y-2'>
                    <Label htmlFor='username'>Email or Username *</Label>
                    <Input placeholder=' Enter your Email or Username' />
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
                    <p className='text-muted font-semibold ' > {`Don’t have Your own Universe?`}</p>
                    <Link href={"/sign-up"} className='underline text-primary text-sm italic'>Create Your Universe Here</Link>
                </div>
                <div className='text-center flex items-center gap-1 justify-center '>
                    <p className='text-muted font-semibold ' > {`Issue’s signing in?`}</p>
                    <Link href={""} className='underline text-primary text-sm italic'>Contact us here</Link>
                </div>
               

            </Card>
        </div>

    )

}

export default LoginForm
