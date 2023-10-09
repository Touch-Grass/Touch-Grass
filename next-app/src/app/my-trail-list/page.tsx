"use client";
import React, {useState} from "react";
import NavbarPresenter from "@/components/presenter/navbar/navbar.presenter";

export default function MyTrails() {
    return (
        <>
            <NavbarPresenter />
            <main>
                <div className="trail-list-container">
                    <div className="trail-list-heading">
                        <h1>My Trails</h1>
                    </div>
                    <div className="trail-container">
                        <img src="../../../public/minecraft-grass.png"/>
                        <div className="trail-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nec mollis enim. Integer
                            nunc nunc, ullamcorper a ante in, tincidunt congue neque. Nunc mollis tincidunt tortor
                            sollicitudin lobortis. Nam lorem diam, pellentesque at sodales vitae, sagittis vel tortor.
                            Curabitur vitae consectetur lectus, ut congue urna. Fusce vehicula enim eget lorem varius, sit
                            amet egestas orci mollis. Suspendisse vel massa sapien. Pellentesque quis ornare massa, ac
                            viverra elit. Cras venenatis at odio quis lobortis. Quisque laoreet efficitur est quis sagittis.
                            Vivamus tincidunt nibh volutpat lorem condimentum ullamcorper.
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
