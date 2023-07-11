import React from "react";
import Res from "../Body/Res";
import Body from "../Body";
import About from "../Body/About";
import Contact from "../Body/Contact";
import Header from "../Header";
import RestaurantMenu from "../Body/RestaurantMenu";
import Footer from "../Footer";
import { Routes, Route } from "react-router-dom";
import "../../styles.css";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" exact element={<Body />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="restaurant" element={<Res />} />
        <Route path="restaurant/:restId" element={<RestaurantMenu />} />
      </Routes>
      <Footer />
    </>
  );
}
