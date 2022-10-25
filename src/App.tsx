import { HashRouter, Routes, Route } from "react-router-dom";
import { PageLayout } from "./components/PageLayout";
import { List } from "./components/List";
import { Login } from "./components/Login";
import { Join } from "./components/Join";
import "./App.css";
import { Error } from "./components/Error";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="" element={<PageLayout />}>
          <Route index element={<List />} />
          <Route path="login" element={<Login />} />
          <Route path="join" element={<Join />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
