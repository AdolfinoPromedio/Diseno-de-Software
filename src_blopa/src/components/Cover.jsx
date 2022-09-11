import React from "react";
import Image from 'react-bootstrap/Image'
import NavigationBar from "./NavigationBar";
import Footer from "./Footer";
import CoverCarousel from "./CoverCarousel";
import Products from "./Products";

export const Cover = () => {
  return (
    <div>
      <CoverCarousel/>
      <NavigationBar/>

      <div>
        <Image src="https://okdiario.com/img/2020/03/25/reposteria-casera-confinamiento-655x368.jpg" rounded  />
      </div>

      <Products/>
      <Footer/>
    </div>
  );
}

export default Cover;

