import "./globals.scss";
import type {Metadata} from "next";
import NavbarPresenter from "@/components/presenter/navbar/navbar.presenter";
import React from "react";
import "leaflet/dist/leaflet.css";

export const metadata: Metadata = {
    title: "Touch Grass",
    description: "Find the greener grass!",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                <NavbarPresenter />
                {children}
            </body>
        </html>
    );
}
