import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import UpdateProfile from "../layouts/UpdateProfile";
import UserProfile from "../layouts/UserProfile";
import AdventureExperience from "../components/AdventureExperience";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            {
                path: '/',
                element: <Home/>,
                loader: () => fetch('/public/adventure.json'),
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