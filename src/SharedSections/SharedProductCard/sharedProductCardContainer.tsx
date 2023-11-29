import React from 'react';
import {Divider, Image} from "antd";
import {Product_Image} from "../../Constants/sharedImagesConstants";
import {Text, Title} from "../../Components";
import {ISharedProductCardProps} from "./interface";

const SharedProductCard = ({...props}: ISharedProductCardProps) => {
    const {name, price, ingredients, onClick} = props
    return (
        <div onClick={onClick}
             className={"relative min-w-[215px] h-[251px] bg-white rounded-[15px] px-[9px] pb-[14px] mt-[128px] flex flex-col justify-between"}>
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
                <div className={"bg-[#F0F4FA] h-[37px] flex-center"}>
                    <Text className={"!text-[#393F52] font-bold text-[10px]"}>
                        {price?.split(".")[0]} QAR
                    </Text>
                </div>
            </div>
        </div>
    );
};

export default React.memo(SharedProductCard);