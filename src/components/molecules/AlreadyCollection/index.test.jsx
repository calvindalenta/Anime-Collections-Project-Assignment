import { render, screen } from '@testing-library/react'
import { ThemeProvider } from '@emotion/react';
import { lightTheme } from "theme";
import { MemoryRouter as Router } from "react-router-dom";
import AlreadyCollection from '.';

const wrapTheme = (Component) => <ThemeProvider theme={lightTheme}>{Component}</ThemeProvider>

const mockData = {
  histories: [],
  collections: {
    MyCollection1: [{ id: 1, episodes: 25, status: "FINISHED", title: { romaji: "Cowboy Bebop" }}],
    MyDifferentCollection: [{ id: 1, episodes: 25, status: "FINISHED", title: { romaji: "Cowboy Bebop" }}]
  }
}

jest.mock("hooks/useCollection", () => ({
  __esModule: true,
  default: () => [mockData],
}));

describe("AlreadyCollection" , () => {
  test("should render without crashing", () => {
    render(wrapTheme(<AlreadyCollection />))
  })

  test("should display collection if the specified anime already in collection", () => {
    render(wrapTheme(<Router><AlreadyCollection anime_id={1}/></Router>))
    expect(screen.getByText(/MyCollection1/)).toBeInTheDocument()
    expect(screen.getByText(/MyDifferentCollection/)).toBeInTheDocument()
  })
})