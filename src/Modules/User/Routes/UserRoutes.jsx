import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Contact from "../Pages/Contact";
import About from "../Pages/About";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Nopage from "../Pages/Nopage";
import Navbar from "../Component/layout/Navbar";
import Footer from "../Component/layout/Footer";
import Logout from "../Pages/Logout";
import BookStatus from "../Pages/BookStatus";
import Payment from "../Pages/Payment";
// import Money from "../Component/Money";

export default function UserRoutes() {
  return (
    <Routes>
      <Route
        path="/*"
        element={
          <>
            <Navbar />
            <Routes>
              <Route path="/*" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              {/* <Route path="/Money/:id" element={<Money />} /> */}
              <Route path="/Payment/:id" element={<Payment />} />
              <Route path="/BookStatus" element={<BookStatus />} />
              <Route path="*" element={<Nopage />} />
            </Routes>
            <Footer />
          </>
        }
      />
      <Route path="/logout" element={<Logout />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}
