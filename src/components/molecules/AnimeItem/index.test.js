import { render, fireEvent, screen } from '@testing-library/react'
import { ThemeProvider } from '@emotion/react';
import { lightTheme } from "theme";
import AnimeItem from '.';

const wrapTheme = (Component) => <ThemeProvider theme={lightTheme}>{Component}</ThemeProvider>

describe("AnimeItem", () => {
  test("should render without crashing", () => {
    render(wrapTheme(<AnimeItem />))
  })

  test("should show the correct anime info", () => {
    const data = {
      imgSrc: "http://my-image-source",
      title: "Anime Title 1",
      episodes: 12,
      status: "RELEASING",
      genres: ["Slice of life", "Action", "Mystery"]
    }

    render(wrapTheme(<AnimeItem {...data}/>))
    expect(screen.getByRole("img").getAttribute("src")).toEqual(data.imgSrc)
    expect(screen.getByRole("img").getAttribute("alt")).toEqual(data.title)
    expect(screen.getByText(/Episode:/i)).toHaveTextContent(data.episodes)
    expect(screen.getByText(/Status:/i)).toHaveTextContent(/releasing/i)
    expect(screen.getByText(/Genres:/i).innerHTML.split(",").length - 1).toEqual(data.genres.length - 1)
    for(const genre of data.genres){
      expect(screen.getByText(/Genres:/i)).toHaveTextContent(genre)
    }
  })

  test("should be clickable", async () => {
    const mockCallback = jest.fn()
    render(wrapTheme(<AnimeItem onClick={mockCallback} />))
    fireEvent.click(screen.getByText(/Episode:/i))
    expect(mockCallback.mock.calls.length).toEqual(1)
  })

  test("should show 0 episode when no episodes specified", () => {
    render(wrapTheme(<AnimeItem />))
    expect(screen.getByText(/Episode:/i)).toHaveTextContent("0")
  })

  test("should show 'and more' text when genres greater than 5", () => {
    const genres = ["Slice of life", "Action", "Mystery", "Fantasy", "Romance", "Comedy"]
    render(wrapTheme(<AnimeItem genres={genres}/>))
    expect(screen.getByText(/Genres:/i)).toHaveTextContent(/and more/i)
  })
})