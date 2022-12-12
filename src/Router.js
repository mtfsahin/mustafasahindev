import { createBrowserRouter } from "react-router-dom";
import App from './App';
import Home from './Home';
import "./index.css";


const router=createBrowserRouter([
    {
        path:'/',
        element:<Home />
    },
    {
        path:'/about',
        element:<Home />
    }
])

export default router;