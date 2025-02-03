import { Route, Router, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import "./App.css";
import Layout from "./components/Layout/Layout.jsx";
import Loader from "./components/Loader/Loader.jsx";

const HomePage = lazy(() => import("./page/HomePage/HomePage.jsx"));
const CatalogPage = lazy(() => import("./page/CatalogPage/CatalogPage.jsx"));
const CampersDetailPage = lazy(() =>
  import("./page/CampersDetailPage/CampersDetailPage.jsx")
);
const NotFoundPage = lazy(() => import("./page/NotFoundPage/NotFoundPage.jsx"));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="catalog/:id" element={<CampersDetailPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;
