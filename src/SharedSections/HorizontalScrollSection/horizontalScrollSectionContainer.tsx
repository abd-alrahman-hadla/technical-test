import React, {useEffect} from 'react';
import {IHorizontalScrollSectionProps} from "./interfaces";
import {handleMouseEvent} from "../../Helpers/CustomEvents/customEventsHelpers";

const HorizontalScrollSection = ({children}: IHorizontalScrollSectionProps) => {
    useEffect(() => {
        handleMouseEvent(".horizontal-section-scroll")
    }, []);
    return (
        <div
            className={"horizontal-section-scroll cursor-grab pb-[32px] select-none flex gap-[42px] max-w-full overflow-auto scroll-color"}>
            {children}
        </div>
    );
};

export default HorizontalScrollSection;