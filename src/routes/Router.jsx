import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import UpdateProfile from "../layouts/UpdateProfile";
import UserProfile from "../layouts/UserProfile";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/update-profile',
                element: <UpdateProfile/>
            },
            {
                path: '/user-profile',
                element: <UserProfile/>
            },
        ]
    },
])

export default router;