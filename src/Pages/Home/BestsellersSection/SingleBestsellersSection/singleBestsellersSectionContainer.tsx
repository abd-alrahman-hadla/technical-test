import React from 'react';
import {Image} from "antd";
import {ISingleBestsellersSectionProps} from "./interface";

const SingleBestsellersSection = ({...props}: ISingleBestsellersSectionProps) => {
    const {image, onClick} = props
    return (
        <Image onClick={onClick} wrapperClassName={"min-w-[215px] mt-[32px] "} src={image} draggable={false}
               preview={false} width={222} height={300}/>
    );
};

export default SingleBestsellersSection;