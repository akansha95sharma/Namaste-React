import React from "react";
import ReactDOM from "react-dom/client";   
import Header from "./components/Header";
import Body from "./components/Body";



 // not using keys (not acceptable) <<< index as key <<< unique id's (best practices)

const AppLayout = () => {
    return (
        <div className = "app">
        <Header />
        <Body />
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);


///React Component
///Class Based Component - old
 /// Functional Component - new