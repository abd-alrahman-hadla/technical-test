import React from 'react';
import {ISingleTopDealsSectionProps} from "./interface";
import {SharedProductCard} from "../../../../SharedSections/SharedProductCard";

const SingleTopDealsSection = ({...props}: ISingleTopDealsSectionProps) => {
    return (
        <SharedProductCard {...props}/>
    );
};
export default SingleTopDealsSection;