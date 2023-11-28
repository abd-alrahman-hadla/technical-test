import React from 'react';
import {topDealsData} from "./constants";
import {Top_Deals_Icon} from "../../../Constants/sharedImagesConstants";
import {SharedHomeSection} from "../../../SharedSections/SharedHomeSection";
import {ITopDealsItem} from "./interface";
import {SingleTopDealsSection} from "./SingleTopDealsSection";

const TopDealsSection = () => {

    return (
        <SharedHomeSection<ITopDealsItem> itemsList={topDealsData}
                                          itemRender={SingleTopDealsSection}
                                          withViewAllButton={true}
                                          uniqueId={"top-deals"}
                                          title={"Top Deals"} topIcon={Top_Deals_Icon}/>
    );
};

export default TopDealsSection;