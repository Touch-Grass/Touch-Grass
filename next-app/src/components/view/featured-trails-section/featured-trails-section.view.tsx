import Link from "next/link";
import FeaturedTrailView from "@/components/view/featured-trail/featured-trail.view";
import "./featured-trails-section.view.scss";
import {ServerTrailWithID} from "@/models/server/trail/trail";

interface FeaturedTrailsSectionViewProps {
    trails: ServerTrailWithID[];
}

const FeaturedTrailsSectionView: React.FC<FeaturedTrailsSectionViewProps> = (props) => {
    const {trails} = props;

    return (

        <div className={"featured-trails-section"}>
            <div className="featured-trails-column">
                <div className="featured-trails-part">
                    <div className="featured-trails-header">Featured hiking trails</div>
                    <div className="featured-trails-view-container scroll-fade-in">
                        {trails.map(trail => (
                            <Link key={trail._id.toString()} href={"/trail/" + trail._id.toString()}>
                                <FeaturedTrailView trail={trail}/>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedTrailsSectionView;
