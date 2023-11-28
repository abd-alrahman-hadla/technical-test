import React from 'react';
import {bestsellersData} from "./constants";
import {SharedHomeSection} from "../../../SharedSections/SharedHomeSection";
import {IBestsellersItem} from "./interface";
import {SingleBestsellersSection} from "./SingleBestsellersSection";

const BestsellersSection = () => {

    return (
        <div>
            <SharedHomeSection<IBestsellersItem> itemsList={bestsellersData}
                                                 itemRender={SingleBestsellersSection}
                                                 withViewAllButton={false}
                                                 uniqueId={"bestsellers"}
                                                 title={"Bestsellers"}/>
        </div>
    );
};

export default BestsellersSection;