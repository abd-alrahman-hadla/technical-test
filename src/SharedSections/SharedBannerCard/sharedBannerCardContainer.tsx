import React from 'react';
import {ISharedBannerCardProps} from "./interface";
import {Col, Image, Row} from "antd";
import {SharedBlankSection} from "../SharedBlankSection";
import {blankDivsPlacementStyle} from "./constants";

const SharedBannerCard = ({...props}: ISharedBannerCardProps) => {
    const {
        blankDivsColor,
        blankDivsPlacement,
        backgroundColor,
        imagePlacement,
        imageSrc,
        anotherSection,
        blankDivsNumber
    } = props

    return (
        <Row className={`bg-${backgroundColor} relative rounded-lg h-[309px]`}>
            <Col span={12} order={imagePlacement === "left" ? 1 : 2}>
                <Image height={300} src={imageSrc} preview={false} draggable={false}/>
            </Col>
            <Col span={12} order={imagePlacement === "left" ? 2 : 1}>
                {anotherSection}
            </Col>
            <div className={`absolute ${blankDivsPlacementStyle[blankDivsPlacement]}`}>
                <SharedBlankSection number={blankDivsNumber} color={blankDivsColor}/>
            </div>
        </Row>
    );
};

export default React.memo(SharedBannerCard);