import AnimatedBackground from "../AnimatedBackground/AnimatedBackground";
import BrandCarousel from "../BrandCarousel/BrandCarousel";
import CalendlyIntegrations from "../CalendlyIntegrations/CalendlyIntegrations";
import CustomerSuccessShowcase from "../CustomerSuccessShowcase/CustomerSuccessShowcase";
import Hero from "../Hero/Hero";
import HowItWorks from "../HowItWorks/HowItWorks";
import MoreThanSchedulingSection from "../MoreThanSchedulingSection/MoreThanSchedulingSection";
import PricingPlansSection from "../PricingPlans/PricingPlansSection";
import SecurityBanner from "../SecurityBanner/SecurityBanner";
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
        <CalendlyIntegrations/>
        <MoreThanSchedulingSection/>
        <PricingPlansSection/>
        <CustomerSuccessShowcase/>
        <SecurityBanner/>
        <AnimatedBackground/>
      </div>
    </main>
  );
}