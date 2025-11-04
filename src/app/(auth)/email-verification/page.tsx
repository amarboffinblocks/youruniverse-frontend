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
import { useEmailVerification } from "@/hooks/useAuth";

const EmailVerification = () => {
    const validationSchema = z.object({
        email: z.string().email("Invalid email").nonempty("Email is required"),
    });

    const emailVerificationMutation = useEmailVerification();

    const handleSubmit = async (values: { email: string }) => {
        console.log("📩 Form Submitted:", values);

        emailVerificationMutation.mutate(
            { email: values.email },
            {
                onSuccess: (data) => {
                    console.log("✅ Verification Success:", data);
                },
                onError: (error: any) => {
                    console.error("❌ Verification Failed:", error?.message);
                },
            }
        );
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
                        <CardTitle className="text-2xl text-center">
                            Email Verification
                        </CardTitle>
                        <CardDescription className="text-center">
                            Please verify your email address
                        </CardDescription>
                    </CardHeader>

                    <CardContent>
                        <Formik
                            initialValues={{ email: "" }}
                            validationSchema={toFormikValidationSchema(validationSchema)}
                            onSubmit={handleSubmit}
                        >
                            {({ isSubmitting }) => (
                                <Form className="space-y-4">
                                    {/* Email Field */}
                                    <div className="space-y-2">
                                        <Label htmlFor="email">Email</Label>
                                        <Field
                                            as={Input}
                                            id="email"
                                            name="email"
                                            type="email"
                                            placeholder="your@email.com"
                                        />
                                        <ErrorMessage
                                            name="email"
                                            component="div"
                                            className="text-sm text-red-500"
                                        />
                                    </div>

                                    {/* Submit Button */}
                                    <Button
                                        type="submit"
                                        className="w-full"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? "Verifying..." : "Verify Now"}
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

export default EmailVerification;
