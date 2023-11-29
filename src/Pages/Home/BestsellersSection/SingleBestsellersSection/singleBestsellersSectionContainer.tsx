import React from 'react';
import {Image} from "antd";
import {ISingleBestsellersSectionProps} from "./interface";
import {Bestsellers_Image} from "../../../../Constants/sharedImagesConstants";

const SingleBestsellersSection = ({...props}: ISingleBestsellersSectionProps) => {
    const {onClick} = props
    return (
        <Image onClick={onClick} wrapperClassName={"min-w-[215px] mt-[32px] "} src={Bestsellers_Image} draggable={false}
               preview={false} width={222} height={300}/>
    );
};

export default SingleBestsellersSection;