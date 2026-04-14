export interface LoginRequest {
    email: string;
    password: string;
}

export interface UserInfo {
    email: string;
    is_host: boolean;
}

export interface LoginResponse {
    refresh_token: string;
    access_token: string;
    user: UserInfo;
}

