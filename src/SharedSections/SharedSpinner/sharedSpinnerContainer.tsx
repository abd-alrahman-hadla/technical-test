import React from 'react';
import {ISharedSpinnerProps} from "./interface";
import {Spin} from "antd";

const SharedSpinner = ({height}: ISharedSpinnerProps) => {

    return (
        <div className={`flex-center min-h-${height}`}>
            <Spin className={"default-spin"}/>
        </div>
    );
};

export default React.memo(SharedSpinner);