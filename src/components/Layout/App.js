import React, { lazy, Suspense } from "react";
import Res from "../Body/Res";
import Body from "../Body";
import About from "../Body/About";
import Contact from "../Body/Contact";
import Header from "../Header";
import RestaurantMenu from "../Body/RestaurantMenu";
import Footer from "../Footer";
import { Routes, Route } from "react-router-dom";
import "../../styles.css";
import ProfileFunc from "../Body/Profile";
import Profile from "../Body/ProfileClass";
import ShimmerUI from "../../shared/ShimmerUI";
//import Instamart from "../Instamart";


//dynamic import=> upon render it will "suspend loading" and hence first time once component is loaded and we try
// to access instamart error comes and once after rendering instamart loads
const Instamart = lazy(() => import("../Instamart"))

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" exact element={<Body />} />
        <Route path="about" element={<About />} />
        <Route path="about/profile" element={<Profile />} />
        <Route path="contact" element={<Contact />} />
        <Route path="restaurant" element={<Res />} />
        <Route path="instamart" element={<Suspense fallback={<ShimmerUI />}>
          <Instamart /></Suspense >} />
        < Route path="restaurant/:restId" element={< RestaurantMenu />} />
      </Routes >

      <Footer />
    </>
  );
}
