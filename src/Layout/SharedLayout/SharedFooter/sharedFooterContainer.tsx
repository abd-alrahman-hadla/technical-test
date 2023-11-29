import React from 'react';
import {Button, Image, Layout} from 'antd';
import {White_Logo_Image} from "../../../Constants/sharedImagesConstants";
import {Text} from "../../../Components";
import {footerItems, footerSocialMedia} from "./constants";
import {SharedBlankSection} from "../../../SharedSections/SharedBlankSection";

const {Footer} = Layout;

const SharedFooter = ({...props}: any) => {
    return (
        <Footer
            className={"h-[282px] bg-secondaryColor p-0"}>
            <div className={"flex justify-center mt-[27px]"}>
                <Image src={White_Logo_Image} preview={false} draggable={false}/>
            </div>
            <div className={"flex justify-center m-auto text-center w-[543px]"}>
                <Text className={"!text-[#ADAEB1] font-bold max-sm:text-sm mt-[31px] mb-[27px]"}>
                    Items availability, prices, participation, delivery areas and charges, purchase
                    requirements for delivery may vary.
                </Text>
            </div>
            <div className={"flex-center gap-[70px] container mx-auto text-center"}>
                {
                    footerItems?.map((item, index) => {
                        return (
                            <Text key={index} className={"text-white font-regular max-sm:text-sm cursor-pointer"}>
                                {item}
                            </Text>
                        )
                    })
                }
            </div>
            <div className={"flex items-center justify-center mt-[24px] mb-[24px] gap-[55px]"}>
                {
                    footerSocialMedia?.map((item, index) => {
                        return <Button type={"text"}
                                       className={"w-[16px] h-[16px] bg-transparent hover:!bg-transparent focus:!bg-transparent"}
                                       key={index} onClick={() => {
                            // handle click
                            // item.href
                        }} icon={item?.icon}/>
                    })
                }
            </div>
            <div className={"text-center"}>
                <Text className={"!text-[#ADAEB1] font-medium  max-sm:text-sm"}>
                    ©KFC, Inc. All rights reserved.
                </Text>
            </div>
            <div className={"flex justify-center mt-[10px] items-end"}>
                <SharedBlankSection color={"white"} number={3}/>
            </div>
        </Footer>
    );
};

export default SharedFooter;