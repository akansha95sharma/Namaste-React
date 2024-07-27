import { LOGO_URL } from "../utils/contants";
import { useState,useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import {UserContext} from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
    //let btnName = "Login";
    const [btnNameReact,setBtnNameReact] = useState("Login");
    const onlineStatus = useOnlineStatus();
    const loggedInUser = useContext(UserContext);

    // Subscribing to the store using a selector
    const cartItems = useSelector((store)=> store.cart.items);

    //console.log(loggedInUser);
    /// useeffect hook is called every time our component is render if we don't have dependency array
    // if dependency array is empty = [] => useEffect is called on initial render(just one).
    // if dependency array is [btnNameReact] => is called everytime btnNameReact is updated
    useEffect(()=>{
       // console.log("useEffect called")
    },[btnNameReact]);
    console.log(loggedInUser);
    return (
        <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-50">
            <div className="logo-container">
                <img className="w-56" src= {LOGO_URL}/>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
                    <li className="px-4">
                    <Link to="/">Home</Link></li>
                    <li className="px-4">
                    <Link to="/about">About Us</Link>
                    </li>
                    <li className="px-4">
                    <Link to="/contact">Contact Us</Link>
                    </li>
                    <li className="px-4">
                    <Link to="/grocery">Grocery</Link>
                    </li>
                    <li className="px-4 font-bold text-xl">
                    <Link to="/cart">Cart - ({cartItems.length} items)</Link>
                    </li>
                    <li className="px-4">{loggedInUser.loggedInUser}</li>
                    <button className="login" onClick={()=>{ 
                        btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login");}}>{btnNameReact}</button>
                </ul>
            </div>
        </div>
    )
}
export default Header;