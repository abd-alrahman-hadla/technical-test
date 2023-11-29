import {RouteObject} from 'react-router-dom'
import {RoutersEnum} from "../../Constants/routersConstants";
import {Home} from "../../Pages/Home";
import {Products} from "../../Pages/Products";

const PublicRouters: RouteObject[] = [
    {
        element: <Home/>,
        path: RoutersEnum.Home,
    },
    {
        element: <Products/>,
        path: RoutersEnum.Products,
    },
]
export default PublicRouters