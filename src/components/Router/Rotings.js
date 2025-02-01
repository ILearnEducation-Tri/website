import { createBrowserRouter } from "react-router-dom"
import App from '../../App.js'
import MDDA from "../../pages/mdda/MDDA.js";
import Login from '../../pages/login/login.js';
import Notfound from "../../pages/NotFound/notfound.js";
import MDMA from "../../pages/mdma/MDMA.js";
import DMA from "../../pages/dma/DMA.js";
import VFX from "../../pages/vfx/VFX.js";
import MDGD from "../../pages/mdgd/MDGD.js";
import DVE from "../../pages/dve/DVE.js";


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
      path:'/mdma',
      element:<MDMA/>,
      errorElement:<Notfound />
    },
    {
      path:'/dma',
      element:<DMA/>,
      errorElement:<Notfound />
    },
    {
      path:'/mdgd',
      element:<MDGD/>,
      errorElement:<Notfound />
    },
    {
      path:'/vfx',
      element:<VFX/>,
      errorElement:<Notfound />
    },
    {
      path:'/dve',
      element:<DVE/>,
      errorElement:<Notfound />
    },
    {
      path:'/login',
      element:<Login/>,
      errorElement:<Notfound />
    }
  ])