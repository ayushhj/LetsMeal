import { render, screen } from "@testing-library/react"
import RestaurantCard from "../RestaurantCard"
import MOCK_DATA from "../mocks/resCardMock.json"
import '@testing-library/jest-dom'


it("should render RestaurantCard component with Props data", () => {
    render(<RestaurantCard resData={MOCK_DATA} />)


    const name = screen.getByText("McDonald's")

    expect(name).toBeInTheDocument()
});