import { Routes, Route } from "react-router-dom";
import { HOME_ROUTE, ANIME_ROUTE } from "utils/route";
import Home from "pages/Home";
import AnimeDetail from "pages/AnimeDetail";

function App() {
  return (
    <Routes>
      <Route path={HOME_ROUTE} element={<Home />} />
      <Route path={`${ANIME_ROUTE}/:anime_id`} element={<AnimeDetail />} />
    </Routes>
  );
}

export default App;
