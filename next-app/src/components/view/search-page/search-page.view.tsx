import React from "react";
import {PopulatedServerTrailWithID} from "@/models/server/trail/trail";
import "./search-page.view.scss";
import SearchResultView from "@/components/view/search-result/search-result.view";
import Link from "next/link";
import SmallSearchBarPresenter from "@/components/presenter/small-search-bar/small-search-bar.presenter";

interface SearchPageViewProps {
    trails: PopulatedServerTrailWithID[];
    location: string;
}

const TrailPageView: React.FC<SearchPageViewProps> = props => {
    const {trails, location} = props;

    return (
        <div className={"search-page-wrapper"}>
            <div className="search-page-container">
                <div className={"search-page-title-row"}>
                    <div className={"search-page-title"}>{trails.length} trails in {location} </div>
                    <div className={"search-page-auxilliary-title-content"}>
                        <SmallSearchBarPresenter initialValue={location}></SmallSearchBarPresenter>
                    </div>
                </div>
                {trails.map((trail) => (
                    <Link key={trail._id.toString()} href={"/trail/" + trail._id.toString()}>
                        <SearchResultView trail={trail}/>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default TrailPageView;
