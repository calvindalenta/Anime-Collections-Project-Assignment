import { Routes, Route } from "react-router-dom";
import { HOME_ROUTE, COLLECTIONS_ROUTE, getAnimeDetailRoute, getCollectionDetailRoute } from "utils/route";
import Home from "pages/Home";
import AnimeDetail from "pages/AnimeDetail";
import Collections from "pages/Collections";
import CollectionDetail from "pages/CollectionDetail";

function App() {
  return (
    <Routes>
      <Route path={HOME_ROUTE} element={<Home />} />
      <Route path={getAnimeDetailRoute(":anime_id")} element={<AnimeDetail />} />
      <Route path={COLLECTIONS_ROUTE} element={<Collections />} />
      <Route path={getCollectionDetailRoute(":name")} element={<CollectionDetail />} />
    </Routes>
  );
}

export default App;
