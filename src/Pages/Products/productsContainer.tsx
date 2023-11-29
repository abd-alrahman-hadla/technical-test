import React from 'react';
import {Col, Row, Segmented} from "antd";
import {SharedProductCard} from "../../SharedSections/SharedProductCard";
import {Text} from "../../Components";
import {useProductsApi} from "../../ReactQuery/Products/useProductsApi";
import {ISharedProductCardProps} from "../../SharedSections/SharedProductCard/interface";
import {SharedSpinner} from "../../SharedSections/SharedSpinner";

const Products = () => {
    const {data, isLoading} = useProductsApi({
        // need pagination
        page: 1,
        limit: 25
    }, {
        onSuccess: (data) => {
            // console.log(data)
        }
    })
    return (
        <div className={"container mx-auto mb-[24px]"}>
            {isLoading ? <SharedSpinner height={"screen"}/> : <>
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
                        <Row justify={"space-between"}>
                            {
                                data?.data?.map((item: ISharedProductCardProps) => {
                                    return <Col key={item.id} lg={{span: 7}}>
                                        <SharedProductCard  {...item}/>
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
            </>}
        </div>
    );
};

export default Products;