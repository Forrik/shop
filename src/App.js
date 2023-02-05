import React from "react";
import Footer from "./components/Footer/Footer.jsx";
import Header from "./components/Header/Header.jsx";
import diskDB from "./components/assets/db.json";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/pages/Home.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./components/pages/NotFound.jsx";
import Cart from "./components/pages/Cart.jsx";
import About from "./components/pages/About.jsx";

export const SearchContext = React.createContext();

function App() {
  const [searchValue, setSearchValue] = React.useState("");

  return (
    <div className="wrapper">
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />{" "}
        </Routes>

        <Footer />
      </SearchContext.Provider>
    </div>
  );
}

export default App;
