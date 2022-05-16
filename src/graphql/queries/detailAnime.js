import { gql } from "@apollo/client"

const DETAIL_ANIME_QUERY = gql`
query DetailAnime($id: Int) {
  Media (id: $id, type: ANIME, isAdult: false) {
    id,
    averageScore,
    duration,
    description,
    startDate {
      year
      month
      day
    },
    endDate {
      year
      month
      day
    },
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
`

export default DETAIL_ANIME_QUERY