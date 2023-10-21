import React from "react";
import {PopulatedServerTrailWithID} from "@/models/server/trail/trail";
import "./my-trails-page.view.scss";
import Link from "next/link";
import SearchResultView from "@/components/view/search-result/search-result.view";

interface SearchPageViewProps {
    trails: PopulatedServerTrailWithID[];
}

const TrailPageView: React.FC<SearchPageViewProps> = props => {
    const {trails} = props;

    return (
        <div className={"my-trails-page-wrapper"}>
            <div className="my-trails-page-container">
                <div className={"my-trails-page-title-row"}>
                    <div className={"my-trails-page-title"}>You have created {trails.length} trails</div>
                </div>
                {trails.length === 0 ? (<div className={"my-trails-page-not-found"}>No trails created so far. :(</div>) : (<></>)}
                {trails.map((trail) => (
                    <Link key={trail._id.toString()} href={"/trail/" + trail._id.toString()}>
                        <SearchResultView trail={trail} locationInsteadOfUser={true}/>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default TrailPageView;
