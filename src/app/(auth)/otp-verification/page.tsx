"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Formik, Form, ErrorMessage } from 'formik';
import { Timer } from 'lucide-react';
import { useState, useEffect, useCallback } from 'react';
import Link from "next/link";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import Image from "next/image";

interface Otp{
    otp:string
}

const VerifyOTP = () => {
    const [otp, setOtp] = useState('');
    const [timeLeft, setTimeLeft] = useState(60);

    useEffect(() => {
        if (timeLeft <= 0) return;
        const timer = setInterval(() => setTimeLeft(prev => Math.max(0, prev - 1)), 1000);
        return () => clearInterval(timer);
    }, [timeLeft]);

    const handleSubmit = async (values: Otp) => {
        // Mock verification logic
        console.log("Verifying OTP:", values);

        // ✅ Navigate after verification success
        // setTimeout(() => {
        //     router.push("/dashboard"); // change to your target route
        // }, 800);
    };

    const resendOTP = useCallback(() => {
        setTimeLeft(60);
    }, []);

    return (
        <div className="flex justify-center items-center h-screen">
            <div className='w-full max-w-md pb-10 '>
                <div className="relative w-full h-50 ">
                    <Image
                        src="/logo/logo.png"
                        alt="universe-logo"
                        fill
                        priority
                        className="object-contain"
                    />
                </div>
                <Card className="px-6 py-8 text-center bg-primary/20  space-y-4 w-full ">
                    <CardHeader>
                        <CardTitle className="text-2xl text-center">Verify OTP</CardTitle>
                        <CardDescription className="text-center">
                            Enter the 4-digit code sent to your email
                        </CardDescription>
                    </CardHeader>

                    <CardContent>
                        <Formik
                            initialValues={{ otp: '' }}
                            onSubmit={handleSubmit}
                        >
                            {({ isSubmitting, setFieldValue }) => (
                                <Form className="space-y-2">
                                    <div className="space-y-2 flex items-center justify-center">
                                        <InputOTP
                                            maxLength={4}
                                            onChange={(value) => {
                                                setOtp(value);
                                                setFieldValue('otp', value);
                                            }}
                                        >
                                            {[1, 2, 3, 4].map((item, index: number) => (

                                                <InputOTPGroup key={index}>
                                                    <InputOTPSlot index={index} />
                                                </InputOTPGroup>
                                            ))}
                                        </InputOTP>
                                        <ErrorMessage
                                            name="otp"
                                            component="div"
                                            className="text-sm  text-center"
                                        />
                                    </div>

                                    <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                                        <Timer className="h-4 w-4" />
                                        <span>
                                            {timeLeft > 0
                                                ? `Resend code in ${timeLeft}s`
                                                : "Didn't receive a code?"}
                                        </span>
                                        {timeLeft <= 0 && (
                                            <Button
                                                type="button"
                                                onClick={resendOTP}
                                                className="text-primary hover:underline"
                                                variant="ghost"
                                            >
                                                Resend
                                            </Button>
                                        )}
                                    </div>

                                    <Button
                                        type="submit"
                                        className="w-full"
                                        disabled={isSubmitting || otp.length !== 4}
                                    >
                                        Verify
                                    </Button>
                                </Form>
                            )}
                        </Formik>
                    </CardContent>

                    <CardFooter className="flex flex-col items-center space-y-2">
                        <p className="text-sm text-gray-600">
                            Wrong email?{" "}
                            <Link href="/register" className="font-medium text-primary hover:underline">
                                Go back
                            </Link>
                        </p>
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
};

export default VerifyOTP;
