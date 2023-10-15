import Image from "next/image";
import "./featured-trail.view.scss";
import {ServerTrailWithID} from "@/models/server/trail/trail";
import moment from "moment/moment";

interface FeaturedTrailViewProps {
    trail: ServerTrailWithID;
}

const FeaturedTrailView: React.FC<FeaturedTrailViewProps> = (props) => {
    const {trail} = props;
    const duration = moment.duration(trail.duration, "minutes");

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
                <div className="featured-trail-detail">{trail.length.toFixed(1)}km</div>
                <div className="featured-trail-detail">{Math.floor(duration.hours())}h {Math.round(duration.minutes())}m</div>
            </div>
        </div>
    );
};

export default FeaturedTrailView;
