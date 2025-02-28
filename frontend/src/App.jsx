/* eslint-disable no-unused-vars */
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from './pages/Index.jsx'
import Layout from "./pages/Layout.jsx";
import Home from "./components/Home.jsx"
import Projects from "./components/Projects.jsx"
import Templates from "./components/Templates.jsx";
import CreateDesign from "./components/CreateDesign.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children : [
      {
        path:'/',
        element: <Home/>
      },
      {
        path:'/projects',
        element: <Projects/>
      },
      {
        path:'/templates',
        element: <Templates/>
      },
    ]
  },
  {
    path : '/design/create',
    element : <CreateDesign/>
  }
])


function App(){
  return <RouterProvider router={router} />
}

export default App
