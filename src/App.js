import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import User from "./pages/User";
import Cart from "./pages/Cart";
import {UserProvider} from "./context/UserContext";
import {ShopContextProvider} from "./context/ShopContext";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <ShopContextProvider>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/"  element={<Homepage/>} />
          <Route path="/product/:productID" element={<h1>Product_detail</h1>} />
          <Route path="/user" element={<User/>} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>

      </Router>
        </ShopContextProvider>
    </UserProvider>

    </div>
  );
}

export default App;
