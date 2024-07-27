import { act } from "react-dom/test-utils";
import {fireEvent, render,screen} from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA_NAME from "../mocks/mockResMenu.json";
import appStore from "../../utils/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Cart from "../Cart";

global.fetch = jest.fn(() => {
    Promise.resolve({
        json: () => Promise.resolve(MOCK_DATA_NAME)
    })
})
it("Should load Restaurant Menu Component", async () => {
    await act(async () => render(
        <BrowserRouter>
        <Provider store= {appStore}>
        <Header />
        <RestaurantMenu />
        <Cart />
        </Provider>
        </BrowserRouter>
        ));
    const accordionHeader = screen.getByText("Veg Pizza (14)");
    fireEvent.click(accordionHeader);
    expect(screen.getAllByTestId("foodItems").length).toBe(14);
    const addBtns = screen.getAllByRole("button", {name : "Add +"});
    fireEvent.click(addBtns[0]);
    expect(screen.getByText("Cart - (1 items)")).toBeInTheDocument();
    fireEvent.click(addBtns[1]);
    expect(screen.getByText("Cart - (2 items)")).toBeInTheDocument();
    expect(screen.getAllByTestId("fooditems").length).toBe(16);
    fireEvent.click(screen.getByRole("button",{name: "Clear Cart"}));
    expect(screen.getAllByTestId("fooditems").length).toBe(14);
    expect(screen.getByText("Cart is empty Add Items to the cart!")).toBeInTheDocument();
})