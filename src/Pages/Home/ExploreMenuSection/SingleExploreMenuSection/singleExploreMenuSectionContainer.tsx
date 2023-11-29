import React from 'react';
import {Image} from "antd";
import {ISingleExploreMenuSectionProps} from "./interface";
import {Text} from "../../../../Components";

const SingleExploreMenuSection = ({...props}: ISingleExploreMenuSectionProps) => {
    const {image, label, onClick} = props
    return (
        <div onClick={onClick}
             className={`relative flex justify-center items-center min-w-[190px] mt-[48px] h-[186px] bg-explore-menu bg-no-repeat bg-center`}>
            <Image wrapperClassName={"absolute top-[-22px] right-[15px]"} src={image} draggable={false}
                   preview={false} width={154} height={126}/>
            <Text className={"!text-secondaryColor !font-semibold !text-md mt-[70px]"}>
                {label}
            </Text>
        </div>
    );
};

export default SingleExploreMenuSection;