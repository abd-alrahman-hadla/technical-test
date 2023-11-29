import React from 'react';
import {IBannersSectionProps} from "./interface";
import {bannersData} from "./constants";
import {Col, Row} from "antd";
import {SharedBannerCard} from "../../../SharedSections/SharedBannerCard";

const BannersSection = ({...props}: IBannersSectionProps) => {
        return (
            <Row justify={"space-around"} gutter={[16, 76]}>
                {
                    bannersData?.map((item, index) => {
                        return (
                            <Col key={index} span={11}>
                                <SharedBannerCard {...item}/>
                            </Col>
                        )
                    })
                }
            </Row>
        );
    }
;

export default BannersSection;