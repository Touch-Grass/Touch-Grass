import React from "react";
import HeroSectionView from "@/components/view/hero-section/hero-section.view";
import FeaturedTrailsSectionView from "@/components/view/featuredTrailsSection/featuredTrailsSection.view";
import StatisticsSectionView from "@/components/view/statisticsSection/statisticsSection.view";
import {ITrail} from "@/models/shared/trail/trail.interface";

interface MainPageViewProps {
    featuredTrails: [ITrail, ITrail, ITrail];
}

const MainPageView: React.FC<MainPageViewProps> = props => {
    const {featuredTrails} = props;

    return (
        <>
            <HeroSectionView/>
            <FeaturedTrailsSectionView trailsFeatured={featuredTrails}/>
            <StatisticsSectionView numberOfUsers={100} numberOfTrails={69} numberOfLocations={42}/>
        </>
    );
};

export default MainPageView;
