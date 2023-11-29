import React from 'react';
import {topDealsData} from "./constants";
import {Top_Deals_Icon} from "../../../Constants/sharedImagesConstants";
import {SharedHomeSection} from "../../../SharedSections/SharedHomeSection";
import {SingleTopDealsSection} from "./SingleTopDealsSection";
import {ITopDealsItem} from "./interface";
import {useNavigate} from "react-router-dom";
import {RoutersEnum} from "../../../Constants/routersConstants";

const TopDealsSection = () => {
    const navigate = useNavigate()

    return (
        <SharedHomeSection<ITopDealsItem> itemsList={topDealsData}
                                          itemRender={SingleTopDealsSection}
                                          withViewAllButton={true}
                                          uniqueId={"top-deals"}
                                          onItemClick={() => {
                                              navigate(RoutersEnum.Products)
                                          }}
                                          title={"Top Deals"} topIcon={Top_Deals_Icon}/>
    );
};

export default TopDealsSection;