import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./page/HomePage/HomePage.jsx";
import CatalogPage from "./page/CatalogPage/CatalogPage.jsx";
import CampersDetailPage from "./page/CampersDetailPage/CampersDetailPage.jsx";
import NotFoundPage from "./page/NotFoundPage/NotFoundPage.jsx";
import Navigation from "./components/Navigation/Navigation.jsx";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="catalog/:id" element={<CampersDetailPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
