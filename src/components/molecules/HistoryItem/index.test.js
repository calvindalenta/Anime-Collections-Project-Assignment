import { render, screen } from '@testing-library/react'
import { ThemeProvider } from '@emotion/react';
import { lightTheme } from "theme";
import HistoryItem from '.';
import { MemoryRouter as Router } from 'react-router-dom';

const wrapTheme = (Component) => <ThemeProvider theme={lightTheme}>{Component}</ThemeProvider>

describe("HistoryItem", () => {
  test("should render without crashing", () => {
    render(wrapTheme(<HistoryItem />))
  })

  test("should render the correct type based on the action", () => {
    const data = { 
      action: "add-anime",
      anime: { id: 1, title: "Anime TItle 1"},
      collection: "MyCollection 1"
    }
    const { rerender } = render(wrapTheme(<HistoryItem />))
    rerender(wrapTheme(<Router><HistoryItem {...data} /></Router>))
    expect(screen.queryByText(/added/i)).not.toBeNull()
    expect(screen.queryByText(data.anime.title)).not.toBeNull()
    expect(screen.queryByText(data.collection)).not.toBeNull()
  })
})