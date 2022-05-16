import { Routes, Route } from "react-router-dom";
import { HOME_ROUTE, COLLECTIONS_ROUTE, getAnimeDetailRoute } from "utils/route";
import Home from "pages/Home";
import AnimeDetail from "pages/AnimeDetail";
import Collections from "pages/Collections";

function App() {
  return (
    <Routes>
      <Route path={HOME_ROUTE} element={<Home />} />
      <Route path={getAnimeDetailRoute(":anime_id")} element={<AnimeDetail />} />
      <Route path={COLLECTIONS_ROUTE} element={<Collections />} />
    </Routes>
  );
}

export default App;
