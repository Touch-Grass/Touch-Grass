"use client";
import React, {useState} from "react";
import HeroSectionView from "@/components/view/hero-section/hero-section.view";
import {useRouter} from "next/navigation";

interface HeroSectionPresenterProps {

}

const HeroSectionPresenter: React.FC<HeroSectionPresenterProps> = props => {
    const [searchString, setSearchString] = useState<string>("");

    const router = useRouter();

    return (
        <HeroSectionView searchString={searchString}
                         onSearch={() => {
                             const trimmedSearchString = searchString.trim();
                             if (trimmedSearchString) {
                                 router.push(`/search?l=${encodeURIComponent(trimmedSearchString)}`);
                             }
                         }}
                         onSearchStringChange={setSearchString}></HeroSectionView>
    );
};

export default HeroSectionPresenter;
