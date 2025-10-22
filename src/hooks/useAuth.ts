import { useMutation } from "@tanstack/react-query";
import { registerUser, loginUser, otpVerify, emailVerification, resetPassword } from "@/services/auth-service";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setCredentials } from "@/store/features/auth/authSlice";

export const useRegister = () => {
    const router = useRouter();

    return useMutation({
        mutationFn: registerUser,
        onSuccess: (data) => {
            console.log("Register response:", data);

            if (data?.activationToken) {
                // Store activation token in localStorage
                localStorage.setItem("activationToken", data.activationToken);
            }

            toast.success(data?.message || "Registration successful!");
            router.push("/otp-verification");
        },
        onError: (error: any) => {
            if (
                error.response?.status === 422 &&
                Array.isArray(error.response?.data?.detail)
            ) {
                const details = error.response.data.detail;
                const firstMessage = details[0]?.msg || "Validation error occurred";
                toast.error(firstMessage);
            } else if (error.response?.data?.message) {
                toast.error(error.response.data.message);
            } else {
                toast.error(error.message || "Something went wrong!");
            }
        },
    });
};

export const useLogin = () => {
    const dispatch = useDispatch();
    const router = useRouter();

    return useMutation({
        mutationFn: loginUser,
        onSuccess: (data) => {
            dispatch(setCredentials({ user: data.user, token: data.token }));
            localStorage.setItem("token", data.token);
            toast.success("Login successful!");
            router.push("/chat");
        },
        onError: (error: any) => {
            if (error.response?.data?.detail) {
                toast.error(error.response.data.detail);
            } else if (error.message) {
                toast.error(error.message);
            } else {
                toast.error("Login failed!");
            }
        },
    });
};

export const useOtpVerify = () => {
    const dispatch = useDispatch();
    const router = useRouter();

    return useMutation({
        mutationFn: otpVerify,
        onSuccess: (data: any) => {
            console.log("✅ OTP Verify Response:", data);

            if (data?.token) {
                localStorage.setItem("token", data.token);
            }

            if (data?.user) {
                dispatch(setCredentials({ user: data.user, token: data.token }));
            }

            toast.success(data?.message || "OTP verified successfully!");
            router.push("/chat");
        },
        onError: (error: any) => {
            console.log("Error", error)
            const message =
                error?.response?.data?.detail ||
                error?.response?.data?.message ||
                error?.message ||
                "OTP verification failed!";
            toast.error(message);
        },
    });
};

export const useEmailVerification = () => {
    const dispatch = useDispatch();
    const router = useRouter();

    return useMutation({
        mutationFn: emailVerification,
        onSuccess: (data: any) => {
            console.log("✅ Email Verify Response:", data);

            if (data?.token) {
                localStorage.setItem("token", data.token);
            }

            if (data?.user) {
                dispatch(setCredentials({ user: data.user, token: data.token }));
            }

            toast.success(data?.message);
            router.push("/reset-password");
        },
        onError: (error: any) => {
            console.log("Error", error)
            const message =
                error?.response?.data?.detail ||
                error?.response?.data?.message ||
                error?.message ||
                "email verification failed!";
            toast.error(message);
        },
    });
}

export const useResetPassword = () => {
    const router = useRouter();

    return useMutation({
        mutationFn: resetPassword,
        onSuccess: (data) => {
            toast.success(data.message || "Password reset successful!");
            router.push("/sign-in");

        },
        onError: (error: any) => {
            console.error("❌ Reset Password Error:", error);
            const message =
                error?.response?.data?.message ||
                error?.message ||
                "Password reset failed. Please try again.";
            toast.error(message);
        },
    });
};