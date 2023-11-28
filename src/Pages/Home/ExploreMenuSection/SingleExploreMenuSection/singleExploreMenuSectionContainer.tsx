import React from 'react';
import {Image} from "antd";
import {ISingleExploreMenuSectionProps} from "./interface";
import {Text} from "../../../../Components";

const SingleExploreMenuSection = ({...props}: ISingleExploreMenuSectionProps) => {
    const {image, label} = props
    return (
        <div
            className={`relative flex justify-center items-center min-w-[190px] h-[186px] bg-explore-menu bg-no-repeat bg-center`}>
            <Image wrapperClassName={"absolute top-[-19px] right-[15px]"} src={image} draggable={false}
                   preview={false} width={154} height={126}/>
            <Text className={"!text-[#393F52] !font-semibold !text-md mt-[70px]"}>
                {label}
            </Text>
        </div>
    );
};

export default SingleExploreMenuSection;