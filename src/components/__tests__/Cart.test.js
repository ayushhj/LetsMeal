import { fireEvent, render, screen } from "@testing-library/react"
import RestaurantMenu from "../RestaurantMenu"
import { act } from "react-dom/test-utils"
import { BrowserRouter } from "react-router-dom"
import MOCK_DATA from '../../components/mocks/resMenuMock.json'
import { Provider } from "react-redux"
import appStore from "../../../Utils/appStore"
import "@testing-library/jest-dom";
//import Header from "../Header"
global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => Promise.resolve(MOCK_DATA)
    })
})

it("should load restaurant menu component", async () => {
    await act(async () => render(
    <BrowserRouter>
    <Provider store={appStore}>
        {/* <Header/> */}
        <RestaurantMenu />
    </Provider>
    </BrowserRouter>))

    const accordionHeader = screen.getByText("Recommended (19)")
    fireEvent.click(accordionHeader)

    const menuItem = screen.getAllByTestId("menuItem")

    expect(menuItem.length).toBe(19)

    // const addbtns = screen.getAllByRole("button",{name:"Add +"});
    // fireEvent.click(addbtns[0]);
    // expect(screen.getByText("1")).toBeInTheDocument()

})