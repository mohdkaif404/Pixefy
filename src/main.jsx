import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from "react-router"
import { Home } from './pages/Home.jsx'
import { Liked } from '../../Liiked.jsx'
import { Image } from './pages/image.jsx'
import { Ai } from './pages/Ai.jsx'
import { store } from './store/ReduxStore.jsx'
import { Provider } from 'react-redux'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path:"/",
        element:<Home/>,
      },
      {
        path:"/liked",
        element:<Liked/>
      },
      {
        path:"/generate",
        element:<Ai/>
      },
      {
        path:"/images/:id",
        element:<Image/>
      }

    ]
  },
]);

createRoot(document.getElementById('root')).render(

  <Provider store={store}><RouterProvider router={router}></RouterProvider></Provider>
  
  
)
