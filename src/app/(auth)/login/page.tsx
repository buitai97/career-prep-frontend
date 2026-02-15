"use client"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { loginUser } from "@/app/(auth)/api";
import { useRouter } from "next/navigation";

const schema = z.object({
    email: z.email(),
    password: z.string(),
});

type FormData = z.infer<typeof schema>;

export default function LoginPage() {
    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(schema),
    });

    const onSubmit = async (data: FormData) => {
        try {
            await loginUser(data);
            router.push("/dashboard");
        } catch (error: any) {
            console.log(error.response?.data);
        }
        router.push("/dashboard");
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <input {...register("email")} placeholder="Email" />
            {errors.email && <p>{errors.email.message}</p>}

            <input
                {...register("password")}
                type="password"
                placeholder="Password"
            />
            {errors.password && <p>{errors.password.message}</p>}

            <button type="submit">Login</button>
        </form>
    );
}