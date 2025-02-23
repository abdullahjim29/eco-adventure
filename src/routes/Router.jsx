import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import UpdateProfile from "../layouts/UpdateProfile";
import UserProfile from "../layouts/UserProfile";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AdventureDetail from "../pages/AdventureDetail";
import PrivateRoute from "../layouts/PrivateRoute";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: '/',
                element: <Home/>,
                loader: () => fetch('/public/adventure.json'),
            },
            {
                path: '/update-profile',
                element: <PrivateRoute><UpdateProfile/></PrivateRoute>
            },
            {
                path: '/user-profile',
                element: <PrivateRoute><UserProfile/></PrivateRoute>
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