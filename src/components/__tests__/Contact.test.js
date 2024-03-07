import{render,screen} from "@testing-library/react"
import "@testing-library/jest-dom"
import Contact from "../Contact"

test("Should load the compoenet" , ()=>{
    render(<Contact/>)
    const heading = screen.getByRole("heading")

    expect(heading).toBeInTheDocument();
})
