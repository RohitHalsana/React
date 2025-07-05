import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
// import { BrowserRouter } from 'react-router'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ReactDOM from 'react-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import Github from './components/Github/Github.jsx'
import Login from './components/Login/Login.jsx'
import Register from './components/Register/Register.jsx'
import User from './components/User/User.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: "",
        element: <Home/>
      },
      { 
        path: "about",
        element: <About/>
      },
      {
        path: "contact",
        element: <Contact/>
      },
      {
        path: "github",
        element: <Github/>
      },
      {
        path: "login",
        element: <Login/>
      },
      {
        path: "register",
        element: <Register/>
      },
      // {
      //   path: "user",
      //   element: <User/>
      // },
      {
        path: "user/:userid",
        element: <User/>
      },      
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <BrowserRouter> */}
       <RouterProvider router = {router}/>
    {/* </BrowserRouter> */}
  </StrictMode>,
)
