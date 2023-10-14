"use client";
import React, {useEffect} from "react";
import FeaturedTrailsSectionView from "@/components/view/featured-trails-section/featured-trails-section.view";
import StatisticsSectionView from "@/components/view/statisticsSection/statisticsSection.view";
import hookScrollFadeIn from "@/utils/Animations/scrollFadeIn";
import HeroSectionPresenter from "@/components/presenter/hero-section/hero-section.presenter";
import {ServerTrailWithID} from "@/models/server/trail/trail";
import MidPageCTASectionView from "@/components/view/mid-page-cta-section/mid-page-cta-section.view";

interface MainPageViewProps {
    featuredTrails: ServerTrailWithID[];
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
            <FeaturedTrailsSectionView trails={featuredTrails}/>
            <MidPageCTASectionView></MidPageCTASectionView>
            <StatisticsSectionView numberOfUsers={statistics.users} numberOfTrails={statistics.trails}
                                   numberOfLocations={statistics.locations}/>
        </>
    );
};

export default MainPageView;
