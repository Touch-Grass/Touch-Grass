"use client";
import {useEffect} from "react";
import {useRouter} from "next/navigation";

interface LogoutProps {
}

const LogoutView: React.FC<LogoutProps> = () => {
    const router = useRouter();

    useEffect(() => {
        router.refresh();
        router.push("/");
    }, [router]);

    return (
        <>
            <main className="logout">
            </main>
        </>
    );
};

export default LogoutView;
