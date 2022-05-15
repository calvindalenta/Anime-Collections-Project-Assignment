import { render, screen } from '@testing-library/react'
import { ThemeProvider } from '@emotion/react';
import { lightTheme } from "theme";
import HistoryList from '.';
import { MemoryRouter as Router } from 'react-router-dom';

const wrapTheme = (Component) => <ThemeProvider theme={lightTheme}>{Component}</ThemeProvider>

const mockData = {
  histories: [
    { action: "add-anime", anime: { id: 1, title: "Test1" }, collection: "Collection1"},
    { action: "remove-anime", anime: { id: 1, title: "Test1" }, collection: "Collection1"}
  ],
  collections: {}
}

jest.mock("hooks/useCollection", () => ({
  __esModule: true,
  default: () => [mockData],
}));

describe("HistoryList", () => {
  test("should render without crashing", () => {
    render(wrapTheme(<Router><HistoryList /></Router>))
  })

  test("should render added and remove anime", () => {
    render(wrapTheme(<Router><HistoryList /></Router>))
    expect(screen.queryByText(/Added/i)).not.toBeNull()
    expect(screen.queryByText(/Removed/i)).not.toBeNull()
  })
})