import { LOGO_URL } from "../utils/contants";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
    //let btnName = "Login";
    const [btnNameReact,setBtnNameReact] = useState("Login");
    const onlineStatus = useOnlineStatus();
    /// useeffect hook is called every time our component is render if we don't have dependency array
    // if dependency array is empty = [] => useEffect is called on initial render(just one).
    // if dependency array is [btnNameReact] => is called everytime btnNameReact is updated
    useEffect(()=>{
       // console.log("useEffect called")
    },[btnNameReact]);
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src= {LOGO_URL}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Online Status: {onlineStatus ? "✅" : "🔴"}</li>
                    <li>
                    <Link to="/">Home</Link></li>
                    <li>
                    <Link to="/about">About Us</Link>
                    </li>
                    <li>
                    <Link to="/contact">Contact Us</Link>
                    </li>
                    <li>
                    <Link to="/grocery">Grocery</Link>
                    </li>
                    <li>Cart</li>
                    <button className="login" onClick={()=>{ 
                        btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login");}}>{btnNameReact}</button>
                </ul>
            </div>
        </div>
    )
}
export default Header;