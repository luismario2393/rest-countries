import { Home } from "./components/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Country } from "./components/Country";
import { Header } from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path=":cca3" element={<Country />} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
