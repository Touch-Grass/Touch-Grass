import Image from "next/image";
import { ITrail } from "@/models/shared/trail/trail.interface";
import "./featuredTrails.view.scss";

interface FeaturedTrailsViewProps{
    trailsFeatured: ITrail[];
    onFeaturedTrailClicked: (featuredTrail: ITrail) => void;
}

const FeaturedTrailsView: React.FC<FeaturedTrailsViewProps> = (props) => {
    function renderTrail(trail: ITrail){
        return(
            <div className="featured-trail" key={trail.name}>
                <Image 
                    className="featured-trail-image" 
                    alt={trail.name} 
                    src="/img/featured-trail.jpg" 
                    onClick={() => props.onFeaturedTrailClicked(trail)} 
                    height={180} 
                    width={180}
                />
                <div className="featured-trail-location">{trail.location}</div>
                <div className="featured-trail-name"><b>{trail.name}</b></div>
                <div className="featured-trail-details">
                    <div className="featured-trail-detail">{trail.length}km</div>
                    <div className="featured-trail-detail">{trail.duration}h</div>
                    <div className="featured-trail-detail">Level {trail.difficulty}</div>
                </div>
            </div>
        );
    }
    return (
        <div className="featured-trails-container">
            {props.trailsFeatured.map(renderTrail)}
        </div>
    );
};

export default FeaturedTrailsView;