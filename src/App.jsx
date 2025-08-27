import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hero from "./components/hero";
import NavBar from "./components/navBar";
import Footer from "./components/footer";
import Products from "./components/products";
import ProductInfo from './pages/productInfo.jsx';
import Card from './pages/card.jsx';

import { Provider } from "react-redux";
import store from "./app/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Products />
            </>
          } />
          <Route path="/product/:id" element={<ProductInfo />} />
          <Route path="/card" element={<Card />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
