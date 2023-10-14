"use client";
import React, {useEffect} from "react";
import HeroSectionView from "@/components/view/hero-section/hero-section.view";
import FeaturedTrailsSectionView from "@/components/view/featuredTrailsSection/featuredTrailsSection.view";
import StatisticsSectionView from "@/components/view/statisticsSection/statisticsSection.view";
import {ITrail} from "@/models/shared/trail/trail.interface";
import hookScrollFadeIn from "@/utils/Animations/scrollFadeIn";

interface MainPageViewProps {
    featuredTrails: [ITrail, ITrail, ITrail];
    statistics: {
        users: number;
        trails: number;
        locations: number;
    }
}

const MainPageView: React.FC<MainPageViewProps> = props => {
    const {featuredTrails, statistics} = props;

    useEffect(()=>{
        hookScrollFadeIn();
    }, []);

    return (
        <>
            <HeroSectionView/>
            <FeaturedTrailsSectionView trailsFeatured={featuredTrails}/>
            <StatisticsSectionView numberOfUsers={statistics.users} numberOfTrails={statistics.trails}
                                   numberOfLocations={statistics.locations}/>
        </>
    );
};

export default MainPageView;
