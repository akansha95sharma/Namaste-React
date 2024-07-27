import { fireEvent, render } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockResListData.json"
import {act} from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json:() => {
            return Promise.resolve(MOCK_DATA); 
        }
    })
});

it("Should Search Res List for burger text input", async() => {
    await act(async() => render(
        <BrowserRouter>
        <Body />
        </BrowserRouter>
        ));
        const cardsBeforeSearch = screen.getAllByTestId("resCard");
        expect(cardsBeforeSearch.length).toBe(20); 
        const searchBtn = screen.getByRole("button", {name : 'Search'});
        //console.log(searchBtn);
        const searchInput = screen.getByTestId("searchInput");
        fireEvent.change(searchInput,{ target: {value: "burger"}});
        fireEvent.click(searchBtn);
       // expect(searchBtn).toBeInTheDocument();
       const cards = screen.getAllByTestId("resCard");
       expect(cards.length).toBe(4);
});
it("Should filter Top Rated Restaurant", async() => {
    await act(async() => render(
        <BrowserRouter>
        <Body />
        </BrowserRouter>
        ));
        const cardsBeforeFilter = screen.getAllByTestId("resCard");
        expect(cardsBeforeFilter.length).toBe(20); 
        const topRatedBtn = screen.getByRole("button", {name : 'Top Rated Restaurants'});
        fireEvent.change(searchInput,{ target: {value: "burger"}});
        fireEvent.click(topRatedBtn);
       // expect(searchBtn).toBeInTheDocument();
       const cardsAfterFilter = screen.getAllByTestId("resCard");
       expect(cardsAfterFilter.length).toBe(13);
});