import React, {useState} from 'react';
import {bestsellersData} from "./constants";
import {SharedHomeSection} from "../../../SharedSections/SharedHomeSection";
import {IBestsellersItem} from "./interface";
import {SingleBestsellersSection} from "./SingleBestsellersSection";
import {SharedProductModal} from "../../../SharedSections/SharedProductModal";

const BestsellersSection = () => {
    const [isModalVisible, setIsModalVisible] = useState(false)
    return (
        <>
            <SharedHomeSection<IBestsellersItem> itemsList={bestsellersData}
                                                 itemRender={SingleBestsellersSection}
                                                 withViewAllButton={false}
                                                 uniqueId={"bestsellers"}
                                                 onItemClick={(itemId) => {
                                                     setIsModalVisible(true)
                                                 }}
                                                 title={"Bestsellers"}/>
            <SharedProductModal isOpen={isModalVisible} onCancel={() => {
                setIsModalVisible(false)
            }}/>
        </>
    );
};

export default BestsellersSection;