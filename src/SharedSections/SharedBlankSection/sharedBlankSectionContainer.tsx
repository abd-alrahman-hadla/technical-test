import React from 'react';
import {ISharedBlankSectionProps} from "./interface";

const SharedBlankSection = ({color, number}: ISharedBlankSectionProps) => {

    return (
        <div className={"flex gap-[8px]"}>
            {
                Array(number).fill("").map((item, index) => {
                    return <div key={index} className={`bg-${color} h-[14px] w-[10px]`}/>
                })
            }
        </div>
    );
};

export default React.memo(SharedBlankSection);