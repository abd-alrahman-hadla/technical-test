import React from 'react';
import {ImageSection} from "./ImageSection";
import {TopDealsSection} from "./TopDealsSection";
import {BestsellersSection} from "./BestsellersSection";
import {ExploreMenuSection} from "./ExploreMenuSection";
import {BannersSection} from "./BannersSection";

const Home = () => {

    return (
        <div>
            <ImageSection/>
            <div className={"container mx-auto flex flex-col gap-[32px] mt-[27px] mb-[28px]"}>
                <ExploreMenuSection/>
                <TopDealsSection/>
                <BestsellersSection/>
                <BannersSection/>
            </div>
        </div>
    );
};

export default Home;