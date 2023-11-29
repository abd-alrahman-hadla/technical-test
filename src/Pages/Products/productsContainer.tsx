import React from 'react';
import {Col, Row, Segmented} from "antd";
import {AllProductsSection} from "./AllProductsSection";
import ChoosingMealSection from "./ChoosingMealSection/choosingMealSectionContainer";

const Products = () => {

    return (
        <div className={"container mx-auto mb-[24px]"}>
            <Row>
                <Col span={24} className={"flex justify-center pt-[29px] pb-[24px]"}>
                    <Segmented
                        className={"selected-segmented-text default-segmented-text  bg-white py-[6px] px-[18px]"}
                        defaultValue={"Deals"} size="large"
                        options={['Deals', 'For One', 'For Sharing', 'Sides & desserts', 'Beverages', 'Sandwiches', 'My Favorites']}/>
                </Col>
            </Row>
            <Row justify={"space-between"}>
                <Col span={17}>
                    <AllProductsSection/>
                </Col>
                <Col span={6}>
                    <ChoosingMealSection/>
                </Col>
            </Row>

        </div>
    );
};

export default Products;