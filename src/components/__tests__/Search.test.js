import { fireEvent, render, screen } from "@testing-library/react"
import Body from "../Body"
import { Provider } from "react-redux"
import MOCK_DATA from '../../components/mocks/resListMock.json';
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA)
        }
    })
});

it("should render the body component and search res list for burger input", async () => {
    await act(async () => render(<BrowserRouter><Body /></BrowserRouter>))

    const searchBtn = screen.getByRole("button", { name: "Search" })
    expect(searchBtn).toBeInTheDocument
    const searchInput = screen.getByTestId("searchInput")
    fireEvent.change(searchInput, { target: { value: "Burger" } })
    fireEvent.click(searchBtn)
    const resCardLength = screen.getAllByTestId("resCard").length
   // console.log(screen.getAllByTestId("resCard"))
    expect(resCardLength).toBe(2)
})