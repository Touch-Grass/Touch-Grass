"use client";

import React, {useState} from "react";
import SmallSearchBarView from "@/components/view/small-search-bar/small-search-bar.view";
import {useRouter} from "next/navigation";

interface SmallSearchBarPresenterProps {
    initialValue: string;
}

const SmallSearchBarPresenter: React.FC<SmallSearchBarPresenterProps> = props => {
    const [value, setValue] = useState<string>(props.initialValue);

    const router = useRouter();

    return (
        <SmallSearchBarView value={value} setValue={setValue} onSearch={() => {
            const trimmedSearchString = value.trim();
            if (trimmedSearchString) {
                router.push(`/search?l=${encodeURIComponent(trimmedSearchString)}`);
            }
        }}></SmallSearchBarView>
    );
};

export default SmallSearchBarPresenter;
