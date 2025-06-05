import { useState } from "react";
import Header from "./components/Header/Header";
import MainSection from "./components/MainSection/MainSection";

export default function App(){
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return(
    <>
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <MainSection isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </>
  )
}