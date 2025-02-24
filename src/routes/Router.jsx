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
import ForgetPassword from "../pages/ForgetPassword";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: '/',
                element: <Home/>,
                loader: () => fetch('/adventure.json'),
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
                loader: ({params}) => fetch(`/adventure.json/${params.id}`)
            },
            {
                path: '/forget-password',
                element: <ForgetPassword/>
            }
        ]
    },
])

export default router;