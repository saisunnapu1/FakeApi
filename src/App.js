import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./containers/Header";
import ProducDetail from "./containers/ProductDetail";
import ProductListing from "./containers/ProductListing";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductListing />} />
          <Route path="/product/:productId" element={<ProducDetail />} />
          <Route>404 Not found!</Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
