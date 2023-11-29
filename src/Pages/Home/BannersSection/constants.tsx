import {ISharedBannerCardProps} from "../../../SharedSections/SharedBannerCard/interface";
import {Banner_Product_Image} from "../../../Constants/sharedImagesConstants";
import React from "react";
import {Text} from "../../../Components";
import {Image} from "antd";
import WhiteLogoImage from "../../../Assets/Images/White-Logo-Image.svg";

export const bannersData: ISharedBannerCardProps[] = [
    {
        blankDivsColor: "white",
        blankDivsPlacement: "top-right",
        blankDivsNumber: 3,
        backgroundColor: "primaryColor",
        imagePlacement: "right",
        imageSrc: Banner_Product_Image,
        anotherSection: <div className={"pl-[15px] flex-col-center text-left h-full"}>
            <Text className={"!font-bold text-xl"}>Favorites</Text>
            <Text className={"!font-regular text-md"}>Order from your favorite list of items</Text>
        </div>,
    },
    {
        blankDivsColor: "primaryColor",
        blankDivsPlacement: "top-left",
        blankDivsNumber: 3,
        backgroundColor: "white",
        imagePlacement: "right",
        imageSrc: Banner_Product_Image,
        anotherSection: <div className={"pl-[15px] flex-col-center text-center h-full"}>
            <Text className={"!text-primaryColor !font-bold text-[16px]"}>Twister
                Box Meal
            </Text>
        </div>,
    },
    {
        blankDivsColor: "primaryColor",
        blankDivsPlacement: "bottom-left",
        blankDivsNumber: 3,
        backgroundColor: "white",
        imagePlacement: "right",
        imageSrc: Banner_Product_Image,
        anotherSection: <div className={"pl-[15px] flex-col-center text-center h-full"}>
            <Text className={"!font-bold !text-secondaryColor text-[45px]"}>Twister
                Box Meal
            </Text>
        </div>,
    },
    {
        blankDivsColor: "white",
        blankDivsPlacement: "top-right",
        blankDivsNumber: 3,
        backgroundColor: "primaryColor",
        imagePlacement: "left",
        imageSrc: Banner_Product_Image,
        anotherSection: <div className={"pr-[15px] flex-col-center text-center h-full"}>
            <Image src={WhiteLogoImage} height={300} preview={false} draggable={false}/>
        </div>,
    },
]