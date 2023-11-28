import React from 'react';
import {Col, Row, Segmented} from "antd";
import {topDealsData} from "../Home/TopDealsSection/constants";
import {SharedProductCard} from "../../SharedSections/SharedProductCard";
import {Text} from "../../Components";

const Products = () => {

    return (
        <div className={"container mx-auto mb-[24px]"}>
            <Row>
                <Col span={24} className={"flex justify-center pt-[29px] pb-[24px]"}>
                    <Segmented className={"selected-segmented-text default-segmented-text  bg-white py-[6px] px-[18px]"}
                               defaultValue={"Deals"} size="large"
                               options={['Deals', 'For One', 'For Sharing', 'Sides & desserts', 'Beverages', 'Sandwiches', 'My Favorites']}/>
                </Col>
            </Row>
            <Row justify={"space-between"}>
                <Col span={17}>
                    <Row justify={"space-between"}>
                        {
                            topDealsData?.map((item) => {
                                return <Col span={7}>
                                    <SharedProductCard key={item.id} {...item}/>
                                </Col>
                            })
                        }
                    </Row>
                </Col>
                <Col span={6}>
                    <div className={"h-[332px] bg-white rounded-t-lg mt-[65px]"}>
                        <div className={"h-[44px] bg-[#F5FAFF] rounded-t-lg flex-center"}>
                            <Text className={"!text-[#393F52] font-semibold text-[18px]"}>
                                Choose Your Meal
                            </Text>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Products;