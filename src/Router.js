import { createBrowserRouter } from "react-router-dom";
import App from './App';
import Home from './Home';

const router=createBrowserRouter([
    {
        path:'/',
        element:<App />,
        errorElement: <div>Hatasayfası </div>,
        children:[
            {
                path:'deneme',
                element:<div>Deneme sayfası</div>
            },{
                path:'test',
                element:<div>TEst sayfası</div>
            }
        ]
    },
    {
        path:'/home',
        element:<Home />
    }
])

export default router;