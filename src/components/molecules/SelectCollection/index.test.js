import { fireEvent, render, screen } from '@testing-library/react'
import { ThemeProvider } from '@emotion/react';
import { lightTheme } from "theme";
import SelectCollection from '.';

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
    render(wrapTheme(<SelectCollection />))
  })

  test("should select existing by default", () => {
    render(wrapTheme(<SelectCollection />))
    expect(screen.queryByText(/Existing Collection/i)).not.toBeNull()
    expect(screen.queryByText(/Choose Collection/i)).not.toBeNull()
  })

  test("should display the correct input box", async () => {
    render(wrapTheme(<SelectCollection onChange={() =>  null}/>))

    // By default should show existing collections
    expect(screen.queryByText(/Choose Collection/i)).not.toBeNull()

    const elt = screen.getAllByRole("combobox")[0];

    fireEvent.mouseDown(elt)
    expect(await screen.findByText(/New Collection/i)).toBeInTheDocument();
    fireEvent.click(screen.getByText(/New Collection/i))
    // Now the type changes, should show input text instead of select
    expect(await screen.findByPlaceholderText(/Type collection name/i)).not.toBeNull()

    fireEvent.mouseDown(elt)
    expect(await screen.findByText(/Existing Collection/i)).toBeInTheDocument();
    fireEvent.click(screen.getByText(/Existing Collection/i))
    // Now back to existing collection again
    expect(await screen.queryByText(/Choose collection/i)).not.toBeNull()
  })

  test("should display error text when input contains special char", async () => {
    render(wrapTheme(<SelectCollection onChange={() => null }/>))
    const elt = screen.getAllByRole("combobox")[0];

    fireEvent.mouseDown(elt)
    expect(await screen.findByText(/New Collection/i)).toBeInTheDocument();
    fireEvent.click(screen.getByText(/New Collection/i))
    expect(await screen.findByPlaceholderText(/Type collection name/i)).not.toBeNull()
    fireEvent.change(screen.getByPlaceholderText(/Type collection name/i), { target: { value: "My! Collection"} })
    expect(await screen.findByText(/shouldn't include any special characters/i)).not.toBeNull()
  })

  test("should display error text when collection with the same name exists", async () => {
    render(wrapTheme(<SelectCollection onChange={() => null }/>))
    const elt = screen.getAllByRole("combobox")[0];

    fireEvent.mouseDown(elt)
    expect(await screen.findByText(/New Collection/i)).toBeInTheDocument();
    fireEvent.click(screen.getByText(/New Collection/i))
    expect(await screen.findByPlaceholderText(/Type collection name/i)).not.toBeNull()
    fireEvent.change(screen.getByPlaceholderText(/Type collection name/i), { target: { value: "MyCollection1" } })
    expect(await screen.findByText(/same name/i)).not.toBeNull()
  })
})
