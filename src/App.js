import React, {lazy, Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";   
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter,RouterProvider, Outlet } from "react-router-dom";
//import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import {UserContext} from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
import Demo from "./components/Demo";
import Demo2 from "./components/Demo2";
//import Grocery from "./components/Grocery";
 // not using keys (not acceptable) <<< index as key <<< unique id's (best practices)
// Chunking
// Code Splitting
// Dynamic Bundling
// lazy loading
// on demand loading
// dynamic import

const Grocery = lazy(()=>import("./components/Grocery"));
const About = lazy(()=>import("./components/About"));
const AppLayout = () => {
    const [userName,setUserName] = useState();
    //authentication
    useEffect(()=>{
        const data = {
            name:"Akansha Sharma"
        };
        setUserName(data.name);
    },[])
    console.log(UserContext.Provider);
    return (
        <Provider store={appStore}>
        <UserContext.Provider value={{loggedInUser:userName, setUserName}}>
        
        <div className = "app">
        <Header />
        <Outlet />
        </div>
        </UserContext.Provider>
        </Provider>
    );
}
const appRouter = createBrowserRouter([
    {
        path:"/",
        element: <AppLayout />,
        children:[
            {
                path:"/",
                element: <Body />
            },
            {
                path:"/about",
                element: <Suspense fallback={<h1>Loading...</h1>}><About/></Suspense>
            },
            {
                path:"/contact",
                element: <Contact/>
            },
            {
                path:"/grocery",
                element:<Suspense fallback={<h1>Loading...</h1>}><Grocery /></Suspense>
            },
            {
                path:"/restaurants/:resId",
                element: <RestaurantMenu />
            },
            {
                path:"/cart",
                element: <Cart />
            },
            {
                path:"/demo",
                element: <Demo/>  
            },
            {
                path:"/demo2",
                element: <Demo2/>  
            }
        ],
        errorElement:<Error/>
    }
    
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);


///React Component
///Class Based Component - old
 /// Functional Component - new