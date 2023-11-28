import React from 'react';
import {topDealsData} from "./constants";
import {Top_Deals_Image} from "../../../Constants/sharedImagesConstants";
import {SingleTopDeals} from "./SingleTopDealsSection";
import {SharedHomeSection} from "../../../SharedSections/SharedHomeSection";
import {ITopDealsItem} from "./interface";

const TopDealsSection = () => {

    return (
        <div>
            <SharedHomeSection<ITopDealsItem> itemsList={topDealsData}
                                              itemRender={SingleTopDeals}
                                              withViewAllButton={true}
                                              title={"Top Deals"} topIcon={Top_Deals_Image}/>
        </div>
    );
};

export default TopDealsSection;