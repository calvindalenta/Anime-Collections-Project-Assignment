const { gql } = require("@apollo/client");

const SEARCH_ANIME_QUERY = gql`
query SearchAnime($search: String) {
  Page (page: 1, perPage: 10) {
    pageInfo {
      total
      currentPage
      lastPage
      hasNextPage
      perPage
    }
    media (type: ANIME, isAdult: false, search: $search) {
      id,
      status,
      genres,
      episodes,
      title {
        romaji,
        english,
        native
      },
      coverImage {
        extraLarge
        large
        medium
        color
      },
    }
  }
}
`

export default SEARCH_ANIME_QUERY