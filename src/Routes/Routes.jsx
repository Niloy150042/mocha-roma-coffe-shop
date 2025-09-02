import { createBrowserRouter } from "react-router-dom";
import Homelayout from "../Homelaylout/Homelayout";
import AddCoffe from "../components/AddCoffe";
import UpdateCoffe from "../components/UpdateCoffe";
import Coffies from "../components/Coffies";

const router = createBrowserRouter([{
    path: '/',
    element: <Homelayout></Homelayout>
},
{
    path:'/addcoffe',
    element:<AddCoffe></AddCoffe>
},
{
    path :'/coffies',
    element:<Coffies></Coffies>

},
{
    path:'/updatecoffe/:id',
    element:<UpdateCoffe></UpdateCoffe>,
    loader:({params})=>fetch(`http://localhost:5000/coffe/${params.id}`),
    
    
}])

export default router