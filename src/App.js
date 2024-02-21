import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import { RouterProvider, createBrowserRouter, Outlet } from 'react-router-dom';
//import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';


//Lazt loading is not required here we are doing just for the learning purpose
const About = lazy(() => import("./components/About"));



const Applayout = () => {
  return (
    <div className='app'>
    <Header/>
    <Outlet/>
    </div>
  )
}

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<Applayout/>,
    children:[
      {
        path:"/",
        element:<Body/>
      },
      {
        path:"/about",
        element: <Suspense fallback={<h1>Loading...</h1>} > <About/> </Suspense> 
      },
      {
        path:"/contact",
        element: <Contact/>
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu/>
      }
    ],
    errorElement:<Error/>
  }

])

// create root using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));
// passing react element inside root
root.render(<RouterProvider router={appRouter}/>);