import { render, screen } from '@testing-library/react'
import { ThemeProvider } from '@emotion/react'
import { lightTheme } from 'theme'
import BulkAddSteps from '.'

const wrapTheme = (Component) => <ThemeProvider theme={lightTheme}>{Component}</ThemeProvider>

describe("BulkAddSteps", () => {
  beforeAll(() => {
    global.matchMedia = global.matchMedia || function () {
      return {
        addListener: jest.fn(),
        removeListener: jest.fn(),
      };
    };
  });

  test("should render without crashing", () => {
    render(wrapTheme(<BulkAddSteps />))
  })

  test("should render the correct step", () => {
    const data = {
      stepOne: <p>One</p>,
      stepTwo: <p>Two</p>
    }
    const { rerender } = render(wrapTheme(<BulkAddSteps {...data} curStep={0}/>))
    expect(screen.getByText(/one/i)).not.toBeNull()
    rerender(wrapTheme(<BulkAddSteps {...data} curStep={1}/>))
    expect(screen.getByText(/two/i)).not.toBeNull()
  })

  test("should not render steps above 2", () => {
    const data = {
      stepOne: <p>One</p>,
      stepTwo: <p>Two</p>
    }
    render(wrapTheme(<BulkAddSteps {...data} curStep={2}/>))
    expect(screen.queryByText(/one/i)).toBeNull()
    expect(screen.queryByText(/two/i)).toBeNull()
  })

  test("should not render steps below 0", () => {
    const data = {
      stepOne: <p>One</p>,
      stepTwo: <p>Two</p>
    }
    render(wrapTheme(<BulkAddSteps {...data} curStep={-1}/>))
    expect(screen.queryByText(/one/i)).toBeNull()
    expect(screen.queryByText(/two/i)).toBeNull()
  })
})