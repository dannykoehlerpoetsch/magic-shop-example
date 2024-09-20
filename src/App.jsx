import { useState } from "react";
import Header from "./components/Header/Header";
import Layout from "./components/Layout/Layout";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router } from "react-router-dom";
import CartProvider from "./context/CartContext";

import "./App.css";

function App() {
  return (
    <Router>
      <CartProvider>
        <Header />
        <main>
          <Layout />
        </main>
        <Footer />
      </CartProvider>
    </Router>
  );
}

export default App;
