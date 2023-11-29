import React from 'react';
import {exploreMenuData} from "./constants";
import {SharedHomeSection} from "../../../SharedSections/SharedHomeSection";
import {IExploreMenuItem} from "./interface";
import {SingleExploreMenuSection} from "./SingleExploreMenuSection";
import {Explore_Menu_Icon} from "../../../Constants/sharedImagesConstants";
import {RoutersEnum} from "../../../Constants/routersConstants";
import {useNavigate} from "react-router-dom";

const ExploreMenuSection = () => {
    const navigate = useNavigate()

    return (
        <SharedHomeSection<IExploreMenuItem> itemsList={exploreMenuData}
                                             itemRender={SingleExploreMenuSection}
                                             withViewAllButton={true}
                                             uniqueId={"explore-menu"}
                                             title={"EXPLORE MENU"}
                                             onItemClick={() => {
                                                 navigate(RoutersEnum.Products)
                                             }}
                                             topIcon={Explore_Menu_Icon}
        />
    );
};

export default ExploreMenuSection;