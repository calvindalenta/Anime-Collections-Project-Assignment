import { fireEvent, render, screen } from '@testing-library/react'
import { ThemeProvider } from '@emotion/react';
import { lightTheme } from "theme";
import InputCollection from '.';

const wrapTheme = (Component) => <ThemeProvider theme={lightTheme}>{Component}</ThemeProvider>

const mockData = {
  histories: [],
  collections: {
    MyCollection1: [{ id: 1, episodes: 25, status: "FINISHED", title: { romaji: "Cowboy Bebop" }}]
  }
}

jest.mock("hooks/useCollection", () => ({
  __esModule: true,
  default: () => [mockData],
}));

describe("SelectCollection", () => {
  test("should render without crashing", () => {
    render(wrapTheme(<InputCollection />))
  })

  test("should display error text when input contains special char", async () => {
    render(wrapTheme(<InputCollection onChange={() => null }/>))
    fireEvent.change(screen.getByPlaceholderText(/Type collection name/i), { target: { value: "My! Collection"} })
    expect(await screen.findByText(/shouldn't include any special characters/i)).not.toBeNull()
  })

  test("should display error text when collection with the same name exists", async () => {
    render(wrapTheme(<InputCollection onChange={() => null }/>))
    fireEvent.change(screen.getByPlaceholderText(/Type collection name/i), { target: { value: "MyCollection1" } })
    expect(await screen.findByText(/same name/i)).not.toBeNull()
  })
})

