const { gql } = require("@apollo/client");

const GET_ANIME_QUERY = gql`
query GetAnime($page: Int, $perPage: Int) {
  Page (page: $page, perPage: $perPage) {
    pageInfo {
      total
      currentPage
      lastPage
      hasNextPage
      perPage
    }
    media (type: ANIME, sort: START_DATE_DESC, status_in: RELEASING, isAdult: false, countryOfOrigin: JP) {
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

export default GET_ANIME_QUERY