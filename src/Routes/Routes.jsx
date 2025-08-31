import { createBrowserRouter } from "react-router-dom";
import Homelayout from "../Homelaylout/Homelayout";
import AddCoffe from "../components/AddCoffe";

const router = createBrowserRouter([{
    path: '/',
    element: <Homelayout></Homelayout>
},
{
    path:'/addcoffe',
    element:<AddCoffe></AddCoffe>
}])

export default router