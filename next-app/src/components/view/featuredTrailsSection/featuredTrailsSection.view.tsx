import Image from "next/image";
import { ITrail } from "@/models/shared/trail/trail.interface";
import FeaturedTrailsView from "../featuredTrails/featuredTrails.view";
import "./featuredTrailsSection.view.scss";
import Link from "next/link";
import hookScrollFadeIn from "@/utils/Animations/scrollFadeIn";

interface FeaturedTrailsSectionViewProps {
    trailsFeatured: ITrail[];
    goToFeaturedTrail: (featuredTrail: ITrail) => void;
}

const FeaturedTrailsSectionView: React.FC<FeaturedTrailsSectionViewProps> = (props) => {
    hookScrollFadeIn();
    return (
        <div className="homepage-section" id="featured-trails-section">
            <div className="featured-trails-column">
                <div className="featured-trails-part">
                    <div className="featured-trails-header">
                        <div className="text-featured-trails"><b>Featured hiking trails</b></div>
                        <div className="text-more"><b>&gt; More</b></div>
                    </div>
                    <div className="featured-trails-view-container scroll-fade-in">
                        <FeaturedTrailsView trailsFeatured={props.trailsFeatured} onFeaturedTrailClicked={(trail) => props.goToFeaturedTrail(trail)}/>
                    </div>
                </div>
                <div className="it-is-time-part">
                    <Image className="walking-guy scroll-fade-in" src="/img/walking-guy.svg" alt="walking-guy" width={200} height={200}/>
                    <div className="text-it-is-time-to-take-a-hike">
                        <div className="text-it-is-time scroll-fade-in"><b>It&apos;s time to</b></div>
                        <div className="text-take-a-hike-dot scroll-fade-in">
                            <div className="text-take-a-hike"><b>take a hike</b></div>
                            <div className="text-dot"><b>.</b></div>
                        </div>
                    </div>
                    <div className="register-column scroll-fade-in">
                        <div className="text-register">Registering only takes one minute.</div>
                        <button className="button-sign-up"><Link href='/register'>Sign up</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedTrailsSectionView;