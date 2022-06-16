import React from "react";
import { Container } from "react-bootstrap";
import AddProduct from "./components/AddProduct";
import EditProduct from "./components/EditProduct";
import ShowProducts from "./components/ShowProducts";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Container>
          <Routes>
            <Route path="/" element={<ShowProducts />} exact/>
            <Route path="/add" element={<AddProduct />} exact/>
            <Route path="/edit/:id" element={<EditProduct />} exact/>
          </Routes>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
