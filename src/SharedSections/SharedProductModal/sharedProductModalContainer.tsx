import React from 'react';
import {Button, Image, Modal} from "antd";
import {Product_Image} from "../../Constants/sharedImagesConstants";
import {Text, Title} from "../../Components";
import {ISharedProductModalProps} from "./interface";
import {AiOutlineClose} from "react-icons/ai";
import {SharedBlankSection} from "../SharedBlankSection";

const SharedProductModal = ({data, isOpen, onCancel}: ISharedProductModalProps) => {

    return (
        <Modal
            open={isOpen}
            onCancel={onCancel}
            destroyOnClose={true}
            centered={true}
            maskClosable={true}
            closable={false}
            keyboard={true}
            footer={<></>}
            width={548}
            className={"default-modal"}
        >
            <Button onClick={onCancel}
                    className={"absolute z-[1001]  bg-[white] top-[-60px] left-[260px] transform-translate(-translate-x, -translate-y)"}
                    icon={<AiOutlineClose className={"text-black"}/>}/>
            <div className={"flex justify-center  items-end"}>
                <SharedBlankSection color={"#E4002B"} number={3}/>
            </div>
            <div className={"bg-white rounded-[8px] h-[330px] relative mt-[160px]"}>
                <Image width={222} height={222} src={Product_Image}
                       wrapperClassName={"absolute right-[100px] top-[-120px]"}
                       draggable={false} preview={false}/>
                <div className={"pt-[130px] flex-1 flex-col-center gap-[8px]"}>
                    <Title className={"!text-[#393F52] !text-[16px] !font-bold"}>
                        {data?.name}
                    </Title>
                    <Text className={"!text-[#6A6E8E] text-sm"}>
                        {data?.ingredients}
                    </Text>
                </div>
                <div
                    className={"bg-[#E4002B] h-[54px] flex-center w-[87%] absolute bottom-[-25px] mx-[24px] rounded-[8px] mt-auto"}>
                    <Text className={"!text-white font-bold text-md"}>
                        {data?.price} QAR
                    </Text>
                </div>
            </div>


        </Modal>
    );
};

export default React.memo(SharedProductModal);