import { render, screen } from '@testing-library/react'
import { ThemeProvider } from '@emotion/react';
import { lightTheme } from "theme";
import SelectCollection from '.';

const wrapTheme = (Component) => <ThemeProvider theme={lightTheme}>{Component}</ThemeProvider>

describe("SelectCollection", () => {
  test("should render without crashing", () => {
    render(wrapTheme(<SelectCollection />))
  })

  test("should select existing by default", () => {
    render(wrapTheme(<SelectCollection />))
    expect(screen.queryByText(/Existing Collection/i)).not.toBeNull()
    expect(screen.queryByText(/Choose Collection/i)).not.toBeNull()
  })
})
