import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ProductsFormPage } from "./pages/ProductsFormPage";
import { ProductsPage } from "./pages/ProductsPage";
import { Navigation } from "./components/Navigation";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Navigate to="/productos" />} />
        <Route path="/productos" element={<ProductsPage />} />
        <Route path="/productos-form" element={<ProductsFormPage />} />
        <Route path="/productos/:id" element={<ProductsFormPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
