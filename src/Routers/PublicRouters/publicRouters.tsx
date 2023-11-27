import {RouteObject} from 'react-router-dom'
import {RoutersEnum} from "../../Constants/routersConstants";
import {Home} from "../../Pages/Home";

const PublicRouters: RouteObject[] = [
    {
        element: <Home/>,
        path: RoutersEnum.Home,
    },
]
export default PublicRouters