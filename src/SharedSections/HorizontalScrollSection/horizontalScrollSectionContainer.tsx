import React, {useEffect} from 'react';
import {IHorizontalScrollSectionProps} from "./interfaces";
import {handleMouseEvent} from "../../Helpers/CustomEvents/customEventsHelpers";

const HorizontalScrollSection = ({children, uniqueId}: IHorizontalScrollSectionProps) => {
    useEffect(() => {
        handleMouseEvent(`.horizontal-section-scroll-${uniqueId}`)
    }, []);

    return (
        <div
            className={`horizontal-section-scroll-${uniqueId} cursor-grab pb-[32px] select-none flex gap-[42px] max-w-full overflow-auto scroll-color`}>
            {children}
        </div>
    );
};

export default HorizontalScrollSection;