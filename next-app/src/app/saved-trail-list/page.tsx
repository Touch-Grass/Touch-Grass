import React from "react";
import NavbarPresenter from "@/components/presenter/navbar/navbar.presenter";
export const dynamic = "force-dynamic";
export default function MyTrails() {
    return (
        <>
            <NavbarPresenter fixed={false}/>
            <main>
                <div className='trail-container'>
                    <div className='trail-list-heading'><h1>My Trails</h1></div>
                </div>
            </main>
        </>
    );
}
