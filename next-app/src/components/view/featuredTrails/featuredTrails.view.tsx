import Image from "next/image";
import { ITrail } from "@/models/shared/trail/trail.interface";
import "./featuredTrails.view.scss";

interface FeaturedTrailsProps{
    trailsFeatured: ITrail[];
}

function renderTrail(trail: ITrail){
    return(
        <div className="featured-trail">
            <Image className="featured-trail-image" alt={trail.name} src="/img/featured-trail.jpg" height={180} width={180}/>
            <div className="featured-trail-location">{trail.location}</div>
            <div className="featured-trail-name"><b>{trail.name}</b></div>
            <div className="featured-trail-details">
                <div className="featured-trail-detail">{trail.length}km</div>
                <div className="featured-trail-detail">{trail.duration}h</div>
                <div className="featured-trail-detail">{trail.difficulty}</div>
            </div>
        </div>
    );
}

export default function FeaturedTrails(props: FeaturedTrailsProps){
    return (
        <div className="featured-trails-container">
            {props.trailsFeatured.map(renderTrail)}
        </div>
    );
}