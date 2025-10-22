import { api } from "@/lib/axios";
import { LoginUserData, RegisterUserData, LoginResponse, RegisterResponse } from "@/types/auth-types";

export const loginUser = async (data: LoginUserData): Promise<LoginResponse> => {
    const res = await api.post("/users/login", data);
    return res.data;
};

export const registerUser = async (data: RegisterUserData): Promise<RegisterResponse> => {
    const res = await api.post("/users/signup", data);
    return res.data;
};

export const otpVerify = async (data: { activation_token: string; activation_code: string }) => {
    console.log("OTP Verify Payload:", data);
    const res = await api.post("/users/activate-user", data);
    return res.data;
};

export const emailVerification = async (data: { email: string }) => {
    const res = await api.post(`/users/validate-user-email?email=${data.email}`);
    return res.data;
};

export const resetPassword = async (data: { activation_token: string, password: string }) => {
    const res = await api.put("/users/forget-password", data);
    return res.data;
}