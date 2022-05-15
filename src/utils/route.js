export const HOME_ROUTE = "/"
export const ANIME_ROUTE = "/anime"
export const COLLECTIONS_ROUTE = "/collections"

export const getAnimeDetailRoute = (anime_id) => `${ANIME_ROUTE}/${anime_id}`
export const getCollectionDetailRoute = (collection_id) => `${COLLECTIONS_ROUTE}/${collection_id}`