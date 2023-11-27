import React from 'react';
import {Outlet, useLocation} from 'react-router-dom'
import {SharedLayout} from "../../../Layout/SharedLayout";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import {AppContextsContextProvider} from "../../../Context/appContexts";

const PublicRoute = () => {
    const location = useLocation()

    return (
        <div>
            <AppContextsContextProvider>
                <SharedLayout>
                    <TransitionGroup>
                        <CSSTransition
                            key={location.pathname}
                            timeout={{
                                enter: 100,
                                exit: 500,
                            }}
                        >
                            <Outlet/>
                        </CSSTransition>
                    </TransitionGroup>
                </SharedLayout>
            </AppContextsContextProvider>
        </div>
    );
};

export default PublicRoute;