"use client"
import React, { useState } from 'react'
import { Card } from '../ui/card'
import Image from 'next/image'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import Link from 'next/link'
import PasswordField from '../elements/form-elements/password-field'
import { useRegister } from "@/hooks/useAuth";
import { toast } from "react-toastify";

const SignUpForm = () => {
    const registerMutation = useRegister();

    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            toast.error("Passwords do not match!");
            return;
        }

        registerMutation.mutate(
            {
                username: formData.username,
                email: formData.email,
                password: formData.password,
            },
            {
                onSuccess: () => {
                    setFormData({
                        username: "",
                        email: "",
                        password: "",
                        confirmPassword: "",
                    });
                },
                onError: (error: any) => {
                    console.log(error?.details || "Something went wrong");
                },
            }
        );
    };


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
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <h2 className='text-2xl  font-semibold  text-white/90'>Your Universe Registration</h2>
                    </div>
                    <div className='space-y-2'>
                        <Label htmlFor='username'>Username</Label>
                        <Input
                            id="username"
                            name="username"
                            placeholder="Enter your username"
                            value={formData.username}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className=' space-y-2'>
                        <Label htmlFor='email'>Email</Label>
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className='space-y-2'>
                        <Label htmlFor='password'>Password</Label>
                        <PasswordField
                            id="password"
                            name="password"
                            placeholder="Enter your password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className='space-y-2'>
                        <Label htmlFor='confirm-password'>Confirm Password</Label>
                        <PasswordField
                            id="confirmPassword"
                            name="confirmPassword"
                            placeholder="Please confirm your password here."
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className='py-4  border border-primary rounded-2xl text-center'>
                        <h2 className='text-white'>Subscription Plans</h2>
                    </div>
                    <div className="py-2">
                        <Button
                            className="w-full"
                            type="submit"
                            disabled={registerMutation.isPending}
                        >
                            {registerMutation.isPending ? "Registering..." : "Register Your Universe"}
                        </Button>
                    </div>
                    {registerMutation.isError && (
                        <p className="text-red-500 text-sm">
                            {registerMutation.error?.message || "Something went wrong"}
                        </p>
                    )}
                    {registerMutation.isSuccess && (
                        <p className="text-green-400 text-sm">
                            Registration successful!
                        </p>
                    )}
                    <div className='flex flex-col items-center'>
                        <div className='text-muted  font-semibold flex items-center gap-x-1'> Already have an account?<Link className='text-primary italic underline text-sm  font-normal' href={"/sign-in"}>Sign in</Link> </div>
                    </div>
                    <Link href={""} className='underline text-primary text-sm italic'>{`Issues creating Your Universe? Contact us here.`}</Link>
                </form>
            </Card>
        </div>
    )
}

export default SignUpForm