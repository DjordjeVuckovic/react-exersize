import {Profile} from "./Profile";
import React from "react";

export function Gallery() {
    return <section>
        <h1>Amazing scientists</h1>
        <div className="gallery">
        <Profile/>
        <Profile/>
        <Profile/>
        </div>
    </section>;
}