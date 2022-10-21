import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/home';
import ShortLink from './pages/shortlink';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<ShortLink />} path="/:shortlink" />
          <Route element={<Home />} path="/" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
