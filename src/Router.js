import { createBrowserRouter } from "react-router-dom";
import App from './App';
import Home from './Home';


const router=createBrowserRouter([
    {
        path:'/',
        element:<App />,
        errorElement: <div>Hatasayfası </div>,
    },
    {
        path:'/home',
        element:<Home />
    }
])

export default router;