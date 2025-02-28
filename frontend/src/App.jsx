import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from './pages/Index.jsx'
import Layout from "./pages/Layout.jsx";
import Home from "./components/Home.jsx"
import Projects from "./components/Projects.jsx"
import Templates from "./components/Templates.jsx";
import CreateDesign from "./components/CreateDesign.jsx";
import Main from "./pages/Main.jsx";

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
  },
  {
    path : '/design/:id/edit',
    element : <Main/>
  },
])


function App(){
  return <RouterProvider router={router} />
}

export default App
