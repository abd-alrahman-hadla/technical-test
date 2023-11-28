import React from 'react';
import {ISharedHomeSectionProps} from "./interfaces";
import {HorizontalScrollSection} from "../HorizontalScrollSection";
import {Button, Image, Space} from "antd";
import {Text, Title} from "../../Components";
import {BsArrowRightSquare} from "react-icons/bs";

function SharedHomeSection<Item extends { id: string }>({...props}: ISharedHomeSectionProps<Item>) {
    const {
        uniqueId,
        title,
        itemRender,
        itemsList,
        topIcon,
        withViewAllButton = true,
        onViewAllClick,
        onItemClick
    } = props

    const ItemRender: any = itemRender
    return (
        <div>
            <div className={"flex justify-between mb-[32px]"}>
                <div className={"flex flex-col justify-start"}>
                    <Space className={"items-center"}>
                        <Title className={"!text-md !font-bold !text-[#393F52] !m-0"}>
                            {title}
                        </Title>
                        {
                            topIcon &&
                            <Image src={topIcon} preview={false} draggable={false}/>
                        }
                    </Space>
                    <div className={"bg-[#E4002B] mt-[3px] w-[34px] h-[2px]"}/>
                </div>
                {
                    withViewAllButton ?
                        <Button type={"text"}
                                onClick={onViewAllClick}
                                className={"flex gap-[9px] items-center bg-transparent hover:!bg-transparent focus:!bg-transparent"}
                        >

                            <Text className={"!text-md !font-bold text-[#427EFF]"}>
                                View All
                            </Text>
                            <BsArrowRightSquare className={"text-md text-[#427EFF]"}/>
                        </Button>
                        : <span/>
                }
            </div>
            <HorizontalScrollSection uniqueId={uniqueId}>
                {
                    itemsList?.map((item) => {
                        return (
                            <ItemRender onClick={() => {
                                onItemClick && onItemClick(item?.id)
                            }} key={item.id} {...item}/>
                        )
                    })
                }
            </HorizontalScrollSection>
        </div>
    );
}

export default SharedHomeSection;