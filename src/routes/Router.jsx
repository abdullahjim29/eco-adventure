import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import UpdateProfile from "../layouts/UpdateProfile";
import UserProfile from "../layouts/UserProfile";
import AdventureExperience from "../components/AdventureExperience";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AdventureDetail from "../pages/AdventureDetail";
import PrivateRoute from "../layouts/PrivateRoute";

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
            {
                path: '/auth/login',
                element: <Login/>
            },
            {
                path: '/auth/register',
                element: <Register/>
            },
            {
                path: '/adventure-details/:id',
                element: <PrivateRoute><AdventureDetail/></PrivateRoute>,
                loader: ({params}) => fetch(`/public/adventure.json/${params.id}`)
            }
        ]
    },
])

export default router;