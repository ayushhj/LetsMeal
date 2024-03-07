import{render,screen} from "@testing-library/react"
import "@testing-library/jest-dom"
import Header from "../Header"
import { Provider } from "react-redux"
import appStore from "../../../Utils/appStore"
import { BrowserRouter } from "react-router-dom"

test("Should render Header component with",()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
        </BrowserRouter>
    )

    const offer = screen.getByText("Offers")
    expect(offer).toBeInTheDocument

} )

it("should render Header component with Card items 0", () => {
    render(<BrowserRouter><Provider store={appStore}><Header /></Provider></BrowserRouter>)
    const cartButton = screen.getByText("(0)")
    // Assertion
    expect(cartButton).toBeInTheDocument();
})