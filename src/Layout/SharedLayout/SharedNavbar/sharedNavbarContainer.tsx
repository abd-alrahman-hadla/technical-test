import React from 'react';
import {Button, Image, Layout} from 'antd';
import {HiOutlineMenuAlt3} from "react-icons/hi";
import {Red_Logo_Image} from "../../../Constants/sharedImagesConstants";
import {Text} from "../../../Components";

const {Header} = Layout;

const SharedNavbar = ({...props}: any) => {
    let buttonNumber: string[] = Array(5).fill('')
    return (
        <Header
            className={"h-[54px] bg-white shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] mb-2"}>
            <div className={"container flex items-center justify-between h-full min-mx-auto"}>
                <div className={"flex items-center gap-[10px]"}>
                    <HiOutlineMenuAlt3/>
                    <Image src={Red_Logo_Image} preview={false} draggable={false}/>
                    <div className={"flex gap-[14px]"}>
                        {
                            buttonNumber?.map((item, index) => {
                                return (
                                    <Button key={index}
                                            className={"bg-white h-[38px] w-[84px] !border-#F5F5F7 border-2 rounded-[8px] hover:!border-primaryColor"}/>
                                )
                            })
                        }
                    </div>
                </div>
                <div className={"flex items-center"}>
                    <Button
                        className={"bg-[#FEF2F4] px-[16px] h-[38px] !border-primaryColor border-2 rounded-[8px] hover:!border-primaryColor"}>
                        <Text className={"!text-primaryColor"}>عربي</Text>
                    </Button>

                </div>
            </div>
        </Header>
    );
};

export default SharedNavbar;