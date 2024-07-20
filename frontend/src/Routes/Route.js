import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom"
import App from "../App.js"
import Dashboard from "../components/Dashboard/Dashbaord.js";
import AboutUs from '../pages/About.js';
import Login from "../auth/login/Login.js";

const Routes = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <App />,
            children: [
                {
                    path: 'dashboard',
                    element: <Dashboard />
                },
                {
                    // when route match slash redirect to composnent
                    path: '/',
                    element: <AboutUs />
                },
                {
                    path: 'about-us',
                    element: <AboutUs />
                },
                {
                    path: 'login',
                    element: <Login />
                }
            ]
        }
    ]);
    return (
        <RouterProvider router={router}>
            <Navigate to={'/about-us'} replace/>
        </RouterProvider>
    )
}

export default Routes;