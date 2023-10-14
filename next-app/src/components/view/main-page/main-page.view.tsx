"use client";
import React, {useEffect} from "react";
import HeroSectionView from "@/components/view/hero-section/hero-section.view";
import FeaturedTrailsSectionView from "@/components/view/featuredTrailsSection/featuredTrailsSection.view";
import StatisticsSectionView from "@/components/view/statisticsSection/statisticsSection.view";
import {ITrail} from "@/models/shared/trail/trail.interface";
import hookScrollFadeIn from "@/utils/Animations/scrollFadeIn";
import HeroSectionPresenter from "@/components/presenter/hero-section/hero-section.presenter";

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
            <HeroSectionPresenter></HeroSectionPresenter>
            <FeaturedTrailsSectionView trailsFeatured={featuredTrails}/>
            <StatisticsSectionView numberOfUsers={statistics.users} numberOfTrails={statistics.trails}
                                   numberOfLocations={statistics.locations}/>
        </>
    );
};

export default MainPageView;
