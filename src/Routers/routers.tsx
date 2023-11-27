import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {PublicRouters} from "./PublicRouters";
import {PublicRoute} from "../Components";
import {Error404} from "../Pages/Error404";

export const routers = createBrowserRouter([
    {
        path: "/",
        element: <PublicRoute/>,
        errorElement: <Error404/>,
        children: PublicRouters
    },
])

const MainRouter = () => {
    return <RouterProvider router={routers}/>
}

export default MainRouter