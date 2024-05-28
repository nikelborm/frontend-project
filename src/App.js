import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import AboutItem from "./components/about_item/about-item";
import Footer from "./components/footer/footer";
import Navbar from "./components/nav-bar/nav-bar";
import Search from "./components/search/search";
import AboutPage from "./pages/about-page/about-page";
import CataloguePage from "./pages/catologue-page/catalogue";
import MainPage from "./pages/main-page/main-page";
import BoughtItems from "./pages/selected-items-page/bought-items";
import FavoriteItems from "./pages/selected-items-page/favorite-items";
import ReactQueryProvider from "./providers/react-query";

function App() {
  // TODO: searchingItem
  const searchingItem = null;
  return (
    <div className="app_wrapper">
      <ReactQueryProvider>
        <Navbar />
        <div className="app_content">
          {searchingItem ? (
            <Search />
          ) : (
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/catalogue/*" element={<CataloguePage />} />
              <Route path="/about-resnota/*" element={<AboutPage />} />
              <Route path="/about/:productId" element={<AboutItem />} />

              <Route path="/favorite" element={<FavoriteItems />} />
              <Route path="/bought" element={<BoughtItems />} />

              <Route path="*" element={"Page not found"} />
            </Routes>
          ) }
        </div>
        <Footer />
      </ReactQueryProvider>
    </div>

  );
}

export default App;