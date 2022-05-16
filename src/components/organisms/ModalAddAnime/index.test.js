import { fireEvent, render, screen } from '@testing-library/react'
import { ThemeProvider } from '@emotion/react';
import { lightTheme } from "theme";
import ModalAddAnime from '.';

const wrapTheme = (Component) => <ThemeProvider theme={lightTheme}>{Component}</ThemeProvider>

const mockData = {
  histories: [],
  collections: {
    MyCollection1: [{ id: 1, episodes: 25, status: "FINISHED", title: { romaji: "Cowboy Bebop" }}]
  }
}

jest.mock("hooks/useCollection", () => ({
  __esModule: true,
  default: () => [mockData, null, { createCollection: () => null, addAnime: () => null }],
}));

describe("ModalAddAnime", () => {
  test("should render without crashing", () => {
    render(wrapTheme(<ModalAddAnime visible/>))
  })

  test("should show the anime title", () => {
    render(wrapTheme(<ModalAddAnime visible title="My Anime Title"/>))
    expect(screen.getByText(/My Anime Title/i)).toBeInTheDocument()
  })

  test("should be unable to save initially", () => {
    render(wrapTheme(<ModalAddAnime visible/>))
    expect(screen.getAllByRole("button")[1]).toBeDisabled()
  })

  test("should be able to save after choosing existing collection", async () => {
    render(wrapTheme(<ModalAddAnime visible/>))
    expect(screen.queryByText(/Choose Collection/i)).not.toBeNull()

    const elt = screen.getAllByRole("combobox")[1];
    fireEvent.mouseDown(elt)
    expect((await screen.findAllByText(/MyCollection1/i))[1]).toBeInTheDocument();
    fireEvent.click(screen.getAllByText(/MyCollection1/i)[1])
    expect((await screen.findAllByRole("button"))[1]).toBeEnabled()
  })

  test("should be able to save after typing new collection", async () => {
    render(wrapTheme(<ModalAddAnime visible/>))

    const elt = screen.getAllByRole("combobox")[0];
    fireEvent.mouseDown(elt)
    expect(await screen.findByText(/New Collection/i)).toBeInTheDocument();
    fireEvent.click(screen.getByText(/New Collection/i))
    expect(await screen.findByPlaceholderText(/Type collection name/i)).not.toBeNull()
    fireEvent.change(screen.getByPlaceholderText(/Type collection name/i), { target: { value: "MyDifferentCollection" } })
    expect((await screen.findAllByRole("button"))[1]).toBeEnabled()
  })

  test("should not be able to save after typing a name that has already existed", async () => {
    render(wrapTheme(<ModalAddAnime visible/>))

    const elt = screen.getAllByRole("combobox")[0];
    fireEvent.mouseDown(elt)
    expect(await screen.findByText(/New Collection/i)).toBeInTheDocument();
    fireEvent.click(screen.getByText(/New Collection/i))
    expect(await screen.findByPlaceholderText(/Type collection name/i)).not.toBeNull()
    fireEvent.change(screen.getByPlaceholderText(/Type collection name/i), { target: { value: "MyCollection1" } })
    expect((await screen.findAllByRole("button"))[1]).toBeDisabled()
  })

  test("should not be able to save after typing a name that includes special chars", async () => {
    render(wrapTheme(<ModalAddAnime visible/>))

    const elt = screen.getAllByRole("combobox")[0];
    fireEvent.mouseDown(elt)
    expect(await screen.findByText(/New Collection/i)).toBeInTheDocument();
    fireEvent.click(screen.getByText(/New Collection/i))
    expect(await screen.findByPlaceholderText(/Type collection name/i)).not.toBeNull()
    fireEvent.change(screen.getByPlaceholderText(/Type collection name/i), { target: { value: "My!Collection@" } })
    expect((await screen.findAllByRole("button"))[1]).toBeDisabled()
  })
})

