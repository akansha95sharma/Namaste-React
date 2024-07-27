import { render,screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom"
import { before, beforeEach } from "node:test";

describe("Contact Us Page Test Case", () => {
    beforeAll(()=> {
        console.log("Before All");
    });
    afterAll(()=> {
        console.log("After All");
    });
    beforeEach(()=>{
        console.log("Before Each");
    });
    afterEach(()=>{
        console.log("After Each");
    });
    it('Should load contact us component', () => {
        render(<Contact/>);
        const heading = screen.getByRole("heading");
       // const heading = 
        // Assertion
        expect(heading).toBeInTheDocument();
    });
    
    it('Should load button inside contact component', () => {
        render(<Contact/>);
        const button = screen.getByRole("button");
            // Assertion
        expect(button).toBeInTheDocument();
    });
    
    it('Should load input name inside contact component', () => {
        render(<Contact/>);
        const inputName = screen.getByPlaceholderText("name");
            // Assertion
        expect(inputName).toBeInTheDocument();
    });

    it('Should load 2 input boxes on the Contact component',() => {
        render(<Contact/>);
    
        // Querying
        const inputBoxes = screen.getAllByRole("textbox");
        // Assertion
        expect(inputBoxes.length).toBe(2);
    
    });
});
