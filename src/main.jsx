import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter,RouterProvider, Navigate } from 'react-router-dom'
import Home from './exercicios/React-Router-primeiros-testes/Home.jsx'
import Contacts from './exercicios/React-Router-primeiros-testes/Contacts.jsx'
import Error from './exercicios/React-Router-primeiros-testes/Error.jsx'
import DetalhesdeContacto from './exercicios/React-Router-primeiros-testes/DetalhesdeContacto.jsx'


const router = createBrowserRouter([
  /*{
    path: "/",
    element: <Home/>
  },
  {
    path: "contacts",
    element: <Contacts/>
  },
  {
    path: "/",
    element: <App/>,
    children:[
      {
        index: true,
        element: <Home/>
      },
      {
        path: "contacts",
        element: <Contacts/>
      },
      {
        path: "contacts/:id",
        element: <DetalhesdeContacto/>
      },
      {
        path: "oldElement",
        element: <Navigate to= "/contacts" />
      }
    ],
    errorElement: <Error/>
  }*/
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router}/>
  </StrictMode>,
)
