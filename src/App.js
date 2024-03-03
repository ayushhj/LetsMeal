import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import { RouterProvider, createBrowserRouter, Outlet } from 'react-router-dom';
//import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';
import { Provider } from 'react-redux';
import appStore from '../Utils/appStore'
import {Cart} from './components/Cart';

//Lazt loading is not required here we are doing just for the learning purpose
const About = lazy(() => import("./components/About"));



const Applayout = () => {
  return (
    <Provider store={appStore} >
    <div className='app'>
    <Header/>
    <Outlet/>
    </div>
    </Provider>
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
      },
      {
        path: "/cart",
        element: <Cart/>
      }

    ],
    errorElement:<Error/>
  }

])

// create root using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));
// passing react element inside root
root.render(<RouterProvider router={appRouter}/>);