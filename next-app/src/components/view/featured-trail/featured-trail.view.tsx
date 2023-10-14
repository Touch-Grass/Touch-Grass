import Image from "next/image";
import "./featured-trail.view.scss";
import {ServerTrailWithID} from "@/models/server/trail/trail";

interface FeaturedTrailViewProps {
    trail: ServerTrailWithID;
}

const FeaturedTrailView: React.FC<FeaturedTrailViewProps> = (props) => {
    const {trail} = props;

    return (
        <div className="featured-trail" key={trail.name}>
            <Image
                className="featured-trail-image"
                alt={trail.name}
                src="/img/featured-trail.jpg"
                height={350}
                width={350}
            />
            <div className="featured-trail-location">{trail.location}</div>
            <div className="featured-trail-name"><b>{trail.name}</b></div>
            <div className="featured-trail-details">
                <div className="featured-trail-detail">{trail.length}km</div>
                <div className="featured-trail-detail">{trail.duration}h</div>
                <div className="featured-trail-detail">{trail.difficulty}</div>
            </div>
        </div>
    );
};

export default FeaturedTrailView;
