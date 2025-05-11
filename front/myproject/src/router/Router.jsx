import { createBrowserRouter } from "react-router";
import Layout from "../layouts/Layout";
import Admin from "../pages/admin/Admin";
import Basket from "../pages/basket/Basket";
import Wish from "../pages/wishlist/Wish";
import Home from "../pages/home/Home";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path: "/",
                element: <Home/>
            }
        ]
    },
    {
        path: "/admin",
        element: <Admin/>
    },
    {
        path: "/basket",
        element: <Basket/>
    },
    {
        path: "/wish",
        element: <Wish/>
    }
])