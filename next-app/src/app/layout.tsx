import "./globals.scss";
import type {Metadata} from "next";
import React from "react";
import "leaflet/dist/leaflet.css";
import "react-leaflet-fullscreen/styles.css";

export const metadata: Metadata = {
    title: "TouchGrass.",
    description: "Time to take a hike.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    );
}
