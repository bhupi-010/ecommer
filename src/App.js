import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import React from "react";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route path="/"  element={<Homepage/>} />
          <Route path="/product/:productID" element={<h1>Product_detail</h1>} />
            <Route path="/cart" element={<h1>Cart</h1>} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>

      </Router>

    </div>
  );
}

export default App;
