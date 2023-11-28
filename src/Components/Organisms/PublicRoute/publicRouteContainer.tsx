import React from 'react';
import {Outlet} from 'react-router-dom'
import {SharedLayout} from "../../../Layout/SharedLayout";
import {AppContextsContextProvider} from "../../../Context/appContexts";

const PublicRoute = () => {

    return (
        <div>
            <AppContextsContextProvider>
                <SharedLayout>
                    <Outlet/>
                </SharedLayout>
            </AppContextsContextProvider>
        </div>
    );
};

export default PublicRoute;