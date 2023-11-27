import React from 'react';
import {Layout} from 'antd';
import {Outlet} from 'react-router-dom'
import {SharedNavbar} from "./SharedNavbar";

const {Content} = Layout;

const SharedLayout = ({...props}: any) => {
    return (
        <Layout className={"overflow-x-hidden bg-inherit"}>
            <SharedNavbar/>
            <Content className={"min-h-screen"}><Outlet/></Content>
        </Layout>
    );
};

export default SharedLayout;