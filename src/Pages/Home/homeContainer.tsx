import React from 'react';
import {LoadingOutlined} from '@ant-design/icons';
import {ImageSection} from "./ImageSection";

const Home = () => {

    const loadingIndicator = <LoadingOutlined style={{fontSize: 24, color: "#f8f8f8"}} spin/>;
    return (
        <div>
            <ImageSection/>
        </div>
    );
};

export default Home;