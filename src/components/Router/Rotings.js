import { createBrowserRouter } from "react-router-dom"
import App from '../../App.js'
import MDDA from "../../pages/mdda/MDDA.js";
import Login from '../../pages/login/login.js';
import Notfound from "../../pages/NotFound/notfound.js";


export const router = createBrowserRouter([
    {
      path:'/',
      element:<App/>,
      errorElement:<Notfound />
    },
    {
      path:'/mdda',
      element:<MDDA/>,
      errorElement:<Notfound />
    },
    {
      path:'/login',
      element:<Login/>,
      errorElement:<Notfound />
    }
  ])