import { render, fireEvent, screen } from '@testing-library/react'
import { ThemeProvider } from '@emotion/react';
import { lightTheme } from "theme";
import Header from '.';

const wrapTheme = (Component) => <ThemeProvider theme={lightTheme}>{Component}</ThemeProvider>

describe("Header", () => {
  test("should render without crashing", () => {
    render(wrapTheme(<Header />))
  })

  test("should not show button and logo when collapsed is false", () => {
    render(wrapTheme(<Header collapsed={false}/>))
    expect(screen.queryByText(process.env.REACT_APP_TITLE)).toBeNull()
    expect(screen.queryByRole("button")).toBeNull()
  })

  test("icon button should be clickable", () => {
    const mockFn = jest.fn()
    render(wrapTheme(<Header collapsed onClick={mockFn}/>))
    fireEvent.click(screen.getByRole("button"))
    expect(mockFn.mock.calls.length).toEqual(1)
  })
})