import React from 'react';
import {exploreMenuData} from "./constants";
import {SharedHomeSection} from "../../../SharedSections/SharedHomeSection";
import {IExploreMenuItem} from "./interface";
import {SingleExploreMenuSection} from "./SingleExploreMenuSection";
import {Explore_Menu_Icon} from "../../../Constants/sharedImagesConstants";

const ExploreMenuSection = () => {

    return (
        <SharedHomeSection<IExploreMenuItem> itemsList={exploreMenuData}
                                             itemRender={SingleExploreMenuSection}
                                             withViewAllButton={true}
                                             uniqueId={"explore-menu"}
                                             title={"EXPLORE MENU"}
                                             topIcon={Explore_Menu_Icon}
        />
    );
};

export default ExploreMenuSection;