import React from 'react';
import {Image} from "antd";
import {SharedBlankSection} from "../../../SharedSections/SharedBlankSection";
import {Text} from "../../../Components";
import {Choose_Meal_Image} from "../../../Constants/sharedImagesConstants";

const ChoosingMealSection = () => {

    return (
        <div className={"h-[376px] bg-white rounded-t-lg mt-[65px]"}>
            <div className={"relative h-[44px] bg-[#F5FAFF] rounded-t-lg flex-center"}>
                <Text className={"!text-secondaryColor font-semibold text-[18px]"}>
                    Choose Your Meal
                </Text>
                <div className={"absolute top-0 right-[20px]"}>
                    <SharedBlankSection color={"primaryColor"} number={3}/>
                </div>
            </div>
            <div className={"flex-center mt-[15px]"}>
                <Image src={Choose_Meal_Image} preview={false} draggable={false}/>
            </div>
        </div>
    );
};

export default ChoosingMealSection;