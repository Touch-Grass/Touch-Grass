"use client";
import React, {useEffect} from "react";
import FeaturedTrailsSectionView from "@/components/view/featured-trails-section/featured-trails-section.view";
import StatisticsView from "@/components/view/statistics/statistics.view";
import hookScrollFadeIn from "@/utils/Animations/scrollFadeIn";
import HeroSectionPresenter from "@/components/presenter/hero-section/hero-section.presenter";
import {ServerTrailWithID} from "@/models/server/trail/trail";
import MidPageCTASectionView from "@/components/view/mid-page-cta-section/mid-page-cta-section.view";
import MidPageImageSeparatorView from "@/components/view/mid-page-image-separator/mid-page-image-separator.view";

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
            <MidPageImageSeparatorView></MidPageImageSeparatorView>
            <StatisticsView numberOfUsers={statistics.users} numberOfTrails={statistics.trails}
                            numberOfLocations={statistics.locations}/>
        </>
    );
};

export default MainPageView;
