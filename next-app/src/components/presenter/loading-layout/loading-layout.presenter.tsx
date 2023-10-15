"use client";

import LoadingLayoutView from "@/components/view/loading-layout/loading-layout.view";
import { access } from "fs";

interface LoadingLayoutPresenterProps {
    active:boolean;
}

const LoadingLayoutPresenter: React.FC<LoadingLayoutPresenterProps> = props => {
    return (
        <LoadingLayoutView active={props.active} />
    );
};

export default LoadingLayoutPresenter;
