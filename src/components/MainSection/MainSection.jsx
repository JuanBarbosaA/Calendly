import BrandCarousel from "../BrandCarousel/BrandCarousel";
import Hero from "../Hero/Hero";
import HowItWorks from "../HowItWorks/HowItWorks";
import styles from "./MainSection.module.css"

export default function MainSection({ isMenuOpen, setIsMenuOpen }) {
  return (
    <main>
      {isMenuOpen && (
        <div 
          className={styles.overlay} 
          onClick={() => setIsMenuOpen(null)}
        />
      )}
      <div className={styles.container}>
        <Hero />
        <BrandCarousel/>
        <HowItWorks/>
      </div>
    </main>
  );
}