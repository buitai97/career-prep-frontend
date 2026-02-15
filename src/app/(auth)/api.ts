import api from "@/lib/axios";

interface ICreateUser {
    name: string, email: string, password: string
}

interface ILoginUser {
    email: string, password: string
}

export const registerUser = async (data: ICreateUser) => {
    const response = await api.post("/auth/register", data);
    return response.data;
}

export const loginUser = async (data: ILoginUser) => {
    console.log("Logging in with data:", data);
    const response = await api.post("/auth/login", data);
    console.log("Login response:", response);
    return response.data;
}

export const getCurrentUser = async () => {
    const response = await api.get("/auth/me");
    return response.data;
};

export const logoutUser = async () => {
    const response = await api.post("/auth/logout");
    return response.data;
}