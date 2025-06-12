import { useState } from "react";
import Header from "./components/Header/Header";
import MainSection from "./components/MainSection/MainSection";
import Footer from "./components/Footer/Footer";

export default function App(){
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return(
    <>
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <MainSection isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Footer/>
    </>
  )
}