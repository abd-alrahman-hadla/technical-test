import React from 'react';
import {ISharedPageSpinnerProps} from "./interface";
import {SharedSpinner} from "../SharedSpinner";

const SharedPageSpinner = ({...props}: ISharedPageSpinnerProps) => {

    return (
        <div className="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-50">
            <SharedSpinner height={"0"}/>
        </div>
    );
};

export default React.memo(SharedPageSpinner);