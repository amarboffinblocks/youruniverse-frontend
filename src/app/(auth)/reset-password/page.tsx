"use client";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
    CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Formik, Field, Form, ErrorMessage } from "formik";
import Image from "next/image";
import Link from "next/link";
import { z } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";

const ForgetEmail = () => {

    // ✅ Zod validation schema
    const validationSchema = z
        .object({
            password1: z
                .string()
                .min(6, "Password must be at least 6 characters")
                .nonempty("Password is required"),
            password: z
                .string()
                .min(6, "Password must be at least 6 characters")
                .nonempty("Password is required"),
        })
        .refine((data) => data.password === data.password1, {
            message: "Passwords must match",
            path: ["password"], // attach error to confirm field
        });

    // ✅ Submit handler
    const handleSubmit = async (values: { password1: string; password: string }) => {
        console.log(values)
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <div className='w-full max-w-md pb-20 '>
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
                        <CardTitle className="text-2xl text-center">Forget Password</CardTitle>
                        <CardDescription className="text-center">
                            Enter your new password
                        </CardDescription>
                    </CardHeader>

                    <CardContent>
                        <Formik
                            initialValues={{ password1: "", password: "" }}
                            validationSchema={toFormikValidationSchema(validationSchema)} // ✅ Zod + Formik adapter
                            onSubmit={handleSubmit}
                        >
                            {({  }) => (
                                <Form className="space-y-4">
                                    {/* New Password Field */}
                                    <div className="space-y-2">
                                        <Label htmlFor="password1">New Password</Label>
                                        <Field
                                            as={Input}
                                            id="password1"
                                            name="password1"
                                            type="password"
                                            placeholder="••••••••"
                                        />
                                        <ErrorMessage
                                            name="password1"
                                            component="div"
                                            className="text-sm text-red-500"
                                        />
                                    </div>

                                    {/* Confirm Password Field */}
                                    <div className="space-y-2">
                                        <Label htmlFor="password">Confirm Password</Label>
                                        <Field
                                            as={Input}
                                            id="password"
                                            name="password"
                                            type="password"
                                            placeholder="••••••••"
                                        />
                                        <ErrorMessage
                                            name="password"
                                            component="div"
                                            className="text-sm text-red-500"
                                        />
                                    </div>

                                    {/* Submit Button */}
                                    <Button
                                        type="submit"
                                        className="w-full"
                                    //   disabled={isSubmitting || isPending}
                                    >
                                        {/* {isPending ? "Updating..." : "Confirm"} */}
                                        Confirm
                                    </Button>
                                </Form>
                            )}
                        </Formik>
                    </CardContent>

                    <CardFooter className="flex flex-col items-center space-y-2">
                        <p className="text-sm text-gray-600">
                            Don’t have an account?{" "}
                            <Link
                                href="/register"
                                className="font-medium text-primary hover:underline"
                            >
                                Sign up
                            </Link>
                        </p>
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
};

export default ForgetEmail;
