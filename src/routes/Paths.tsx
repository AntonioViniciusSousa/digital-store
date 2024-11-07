import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProductListingPage from "../pages/ProductListingPage";
import ProductViewPage from "../pages/ProductViewPage";
import PageLayout from "../layouts/PageLayout";
import NotFound from "../pages/NotFound";
import CategoryPage from "../pages/CategoryPage";
import MyOrdersPage from "../pages/MyOrdersPage";

const Paths = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PageLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/productlistingpage" element={<ProductListingPage />} />
            <Route path="/productlistingpage/:id" element={<ProductViewPage />} />
            <Route path="/categorypage" element={<CategoryPage />} />
            <Route path="/myorderspage" element={<MyOrdersPage />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Paths;
