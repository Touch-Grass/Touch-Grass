import React from "react";
import "./page.scss";

export default function FourOhFour() {
    return (
        <div className={"missing-wrapper"}>
            <div className={"missing-tagline"}>
                <img src={"/img/walking-guy.svg"} width={0} height={0} />
                <div className={"missing-tagline-text"}>
                    <div className={"missing-tagline-code"}>404</div>
                    <div className={"missing-tagline-slogan"}>Take a hike.</div>
                </div>
            </div>
            <div className={"missing-explanation"}>
                <div className={"missing-explanation-main-line"}>
                    Looks like you got lost in the forest, because
                    we couldn’t find what you were looking for.
                </div>
                <div className={"missing-explanation-cta"}>
                    But we do know the path back home. <a href={"/"}>Follow us.</a>
                </div>
            </div>
        </div>
    );
}
