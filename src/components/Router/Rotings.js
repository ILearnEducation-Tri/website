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
import DA from "../../pages/da/DA.js";
import ADWD from "../../pages/adwd/ADWD.js";
import GWE from "../../pages/gwe/GWE.js";
import UIUX from "../../pages/uiux/UIUX.js";
import DTP from "../../pages/dtp/DTP.js";
import MGE from "../../pages/mge/MGE.js";
import PDDM from "../../pages/pddm/PDDM.js";
import DDM from "../../pages/ddm/DDM.js";
import CDM from "../../pages/cdm/CDM.js";


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
      path:'/da',
      element:<DA/>,
      errorElement:<Notfound />
    },
    {
      path:'/adwd',
      element:<ADWD/>,
      errorElement:<Notfound />
    },
    {
      path:'/gwe',
      element:<GWE/>,
      errorElement:<Notfound />
    },
    {
      path:'/ui/ux',
      element:<UIUX/>,
      errorElement:<Notfound />
    },
    {
      path:'/dtp',
      element:<DTP/>,
      errorElement:<Notfound />
    },
    {
      path:'/mge',
      element:<MGE/>,
      errorElement:<Notfound />
    },
    {
      path:'/pddm',
      element:<PDDM/>,
      errorElement:<Notfound />
    },
    {
      path:'/ddm',
      element:<DDM/>,
      errorElement:<Notfound />
    },
    {
      path:'/cdm',
      element:<CDM/>,
      errorElement:<Notfound />
    },
    {
      path:'/login',
      element:<Login/>,
      errorElement:<Notfound />
    }
  ])