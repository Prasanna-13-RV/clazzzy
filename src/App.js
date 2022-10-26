import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./Pages/Home";
import "./index.css";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import Products from "./Pages/Products";
import Total_Products from "./Pages/Admin/Total_Products";
import Create_Products from "./Pages/Admin/Create_Products";
import Update_Products from "./Pages/Admin/Update_Products";
import View_Products from "./Pages/Admin/View_Products";
import SingleProduct from "./Pages/SingleProduct";
import AddToCart from "./Pages/AddToCart";
import Contact from "./Pages/Contact";
import Profile from "./Pages/Profile";
import Dashboard from "./Pages/Admin/Dashboard";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} current={"true"} />
                <Route path="/login" element={<Login />} current={"true"} />
                <Route path="/register" element={<Register />} current={"true"} />
                <Route path="/products" element={<Products />} />
                <Route path="/addtocart" element={<AddToCart />} />
                <Route path="/addtocart" element={<AddToCart />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/profile/:id" element={<Profile />} />
                <Route path="/admin/dashboard" element={<Dashboard />} />
                <Route
                    path="/singleproduct/:productid"
                    element={<SingleProduct />}
                />
                <Route
                    path="/admin/totalproducts"
                    element={<Total_Products />}
                />
                <Route
                    path="/admin/createproducts"
                    element={<Create_Products />}
                />
                <Route
                    path="/admin/updateproducts/:productid"
                    element={<Update_Products />}
                />
                <Route
                    path="/admin/viewproducts/:productid"
                    element={<View_Products />}
                />
            </Routes>
        </Router>
    );
}

export default App;
