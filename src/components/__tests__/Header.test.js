import { render, screen, fireEvent } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should render Header Component with a login button", ()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
        <Header/>
        </Provider>   
        </BrowserRouter>
        );
    const loginButton = screen.getByRole("button", {name : "Login"});
    //const loginButton = screen.getByText("Login");
    expect(loginButton).toBeInTheDocument();
});

it("Should render Header Component with a Cart items 0", ()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
        <Header/>
        </Provider>   
        </BrowserRouter>
        );
    const cartItems = screen.getByText("Cart - (0 items)");
    //const loginButton = screen.getByText("Login");
    expect(cartItems).toBeInTheDocument();
});

it("Should render Header Component with a Cart item", ()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
        <Header/>
        </Provider>   
        </BrowserRouter>
        );
    const cartItems = screen.getByText(/Cart/);
    //const loginButton = screen.getByText("Login");
    expect(cartItems).toBeInTheDocument();
});

it("Should change Login Button to Logout on click", ()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
        <Header/>
        </Provider>   
        </BrowserRouter>
        );
    const loginButton = screen.getByRole("button", {name : "Login"});
    fireEvent.click(loginButton);
    const logoutButton = screen.getByRole("button", {name : "Logout"});
    //const loginButton = screen.getByText("Login");
    expect(logoutButton).toBeInTheDocument();
});