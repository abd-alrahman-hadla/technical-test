import React from 'react';
import {Col, Row} from "antd";
import {ISharedProductCardProps} from "../../../SharedSections/SharedProductCard/interface";
import {SharedProductCard} from "../../../SharedSections/SharedProductCard";
import {useProductsApi} from "../../../ReactQuery/Products/useProductsApi";
import {SharedSpinner} from "../../../SharedSections/SharedSpinner";

const AllProductsSection = () => {
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
        <>
            {isLoading ? <SharedSpinner height={"screen"}/> :
                <Row justify={"space-between"}>
                    {
                        data?.data?.map((item: ISharedProductCardProps) => {
                            return <Col key={item.id} lg={{span: 7}}>
                                <SharedProductCard  {...item}/>
                            </Col>
                        })
                    }
                </Row>}
        </>
    );
};

export default AllProductsSection;