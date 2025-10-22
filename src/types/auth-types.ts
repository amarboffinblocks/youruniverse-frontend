
export interface LoginUserData {
    identifier: string;
    password: string;
}

export interface RegisterUserData {
    username: string;
    email: string;
    password: string;
}

export interface User {
    id: string;
    username: string;
    email: string;
    createdAt?: string;
    updatedAt?: string;
}

export interface LoginResponse {
    success: boolean;
    token: string;
    user: User;
    message?: string;
}

export interface RegisterResponse {
    activationToken: any;
    success: boolean;
    user: User;
    message?: string;
}
