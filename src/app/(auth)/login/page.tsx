import { cookies } from "next/headers";

export default async function Dashboard() {
    const token = (await cookies()).get("token");
    
    return <div>Protected Dashboard </div>;
}