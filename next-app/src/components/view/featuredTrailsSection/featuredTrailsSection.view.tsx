import Image from "next/image";
import { ITrail } from "@/models/shared/trail/trail.interface";
import FeaturedTrails from "../featuredTrails/featuredTrails.view";
import "./featuredTrailsSection.view.scss";

interface FeaturedTrailsSectionViewProps {
    trailsFeatured: ITrail[];
}

const FeaturedTrailsSectionView: React.FC<FeaturedTrailsSectionViewProps> = (props) => {
    return (
        <div className="homepage-section" id="featured-trails-section">
            <div className="featured-trails-column">
                <div className="featured-trails-part">
                    <div className="featured-trails-header">
                        <div className="text-featured-trails"><b>Featured hiking trails</b></div>
                        <div className="text-more"><b>&gt; More</b></div>
                    </div>
                    <FeaturedTrails trailsFeatured={props.trailsFeatured}></FeaturedTrails>
                </div>
                <div className="it-is-time-part">
                    <Image className="walking-guy" src="/img/walking-guy.svg" alt="walking-guy" width={200} height={200}/>
                    <div className="text-it-is-time-to-take-a-hike">
                        <div className="text-it-is-time"><b>It&apos;s time to</b></div>
                        <div className="text-take-a-hike-dot">
                            <div className="text-take-a-hike"><b>take a hike</b></div>
                            <div className="text-dot"><b>.</b></div>
                        </div>
                    </div>
                    <div className="register-column">
                        <div className="text-register">Registering only takes one minute.</div>
                        <button className="button-sign-up">Sign up</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedTrailsSectionView;