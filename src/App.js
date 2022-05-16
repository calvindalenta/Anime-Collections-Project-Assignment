import { useContext } from "react";
import { ThemeProvider } from "@emotion/react";
import { Routes, Route } from "react-router-dom";
import { HOME_ROUTE, COLLECTIONS_ROUTE, getAnimeDetailRoute, getCollectionDetailRoute } from "utils/route";
import Home from "pages/Home";
import AnimeDetail from "pages/AnimeDetail";
import Collections from "pages/Collections";
import CollectionDetail from "pages/CollectionDetail";
import { DarkModeContext } from "context/DarkModeProvider";
import { darkTheme, lightTheme } from "theme";

function App() {
  const { darkMode } = useContext(DarkModeContext)

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Routes>
        <Route path={HOME_ROUTE} element={<Home />} />
        <Route path={getAnimeDetailRoute(":anime_id")} element={<AnimeDetail />} />
        <Route path={COLLECTIONS_ROUTE} element={<Collections />} />
        <Route path={getCollectionDetailRoute(":name")} element={<CollectionDetail />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
