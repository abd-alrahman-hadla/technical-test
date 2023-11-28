import React from 'react';
import {LoadingOutlined} from '@ant-design/icons';
import {ImageSection} from "./ImageSection";
import {TopDealsSection} from "./TopDealsSection";

const Home = () => {

    const loadingIndicator = <LoadingOutlined style={{fontSize: 24, color: "#f8f8f8"}} spin/>;
    return (
        <div>
            <ImageSection/>
            <div className={"max-w-[1200px] mx-auto"}>

                <TopDealsSection/>
            </div>
        </div>
    );
};

export default Home;