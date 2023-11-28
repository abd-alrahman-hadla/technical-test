import React from 'react';
import {Text, Title} from "../../../../Components";
import {Divider, Image} from "antd";
import {ISingleTopDealsProps} from "./interface";
import {Product_Image} from "../../../../Constants/sharedImagesConstants";

const SingleTopDeals = ({...props}: ISingleTopDealsProps) => {
    const {name, id, price, ingredients, isLiked} = props
    return (
        <div
            className={"relative min-w-[215px] h-[251px] bg-white rounded-[15px] px-[9px] pb-[14px] flex flex-col justify-between"}>
            <Image wrapperClassName={"absolute top-[-100px]"} src={Product_Image} draggable={false}
                   preview={false} width={204} height={158}/>
            <div>
                <Title className={"!text-[#393F52] !text-md mt-[61px]"}>
                    {name}
                </Title>
                <Divider className={"my-[9px]"}/>
                <Text className={"!text-[#6A6E8E] text-sm"}>
                    {ingredients}
                </Text>
            </div>
            <div>
                <div className={"bg-[#F0F4FA] h-[37px] flex justify-center items-center"}>
                    <Text className={"!text-[#393F52] font-bold text-[10px]"}>
                        {price}
                    </Text>
                </div>
            </div>
        </div>
    );
};

export default SingleTopDeals;