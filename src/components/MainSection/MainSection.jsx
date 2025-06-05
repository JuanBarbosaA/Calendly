import Hero from "../Hero/Hero";
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
        <div>
          <h2>
            Trusted by more than <span>100,000</span> of the world's leading
            organizations
          </h2>
        </div>
        <section>
          <div>
            <h2>Calendly makes scheduling simple</h2>
            <p>
              Calendly’s easy enough for individual users, and powerful enough
              to meet the needs of enterprise organizations — including 86% of
              the Fortune 500 companies.
            </p>
            <button>Sign up for free</button>
          </div>
        </section>
      </div>
    </main>
  );
}