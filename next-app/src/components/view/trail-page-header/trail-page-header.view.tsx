import React from "react";
import Image from "next/image";
import "./trail-page-header.view.scss";

interface TrailPageHeaderViewProps {
    name: string;
    imageURL: string;
}

/**
 * This view showcases the difficulty of a trail as a progress bar.
 * @param props {TrailPageHeaderViewProps} The properties of this progress bar.
 */
const TrailPageHeaderView: React.FC<TrailPageHeaderViewProps> = (props: TrailPageHeaderViewProps) => {
    const {name, imageURL} = props;

    return (
        <div className={"trail-header"}>
            <img  src={imageURL}
                   width={1000}
                   height={1000}
                   alt={"Trail image"}></img>
            <div className={"trail-header-overlay"}></div>
            <div className={"trail-header-label"}>{name}</div>
        </div>
    );
};

export default TrailPageHeaderView;
