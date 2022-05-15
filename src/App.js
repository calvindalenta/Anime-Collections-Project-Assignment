import { Routes, Route } from "react-router-dom";
import { HOME_ROUTE } from "utils/route";
import Home from "pages/Home";

function App() {
  return (
    <Routes>
      <Route path={HOME_ROUTE} element={<Home />} />
    </Routes>
  );
}

export default App;
