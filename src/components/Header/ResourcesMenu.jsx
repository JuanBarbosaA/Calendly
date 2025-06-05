import styles from "./Header.module.css"
  export default function ResourcesMenu(){
    return (
    <div className={styles.menuContent}>
      <div className={styles.menuSection}>
        <h4 className={styles.menuTitle}>Explore</h4>
        <div className={styles.menuColumns}>
          <div className={styles.menuColumn}>
            <a href="/customers" className={styles.menuItem}>
              <div className={styles.iconWrapper}>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="none" viewBox="0 0 25 25">
                  {/* Icono de customers */}
                </svg>
              </div>
              <div className={styles.itemContent}>
                <span>Customer stories</span>
                <small>See how businesses are growing with calendly</small>
              </div>
            </a>
            <a href="/blog" className={styles.menuItem}>
              <div className={styles.iconWrapper}>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="none" viewBox="0 0 25 25">
                  {/* Icono de blog */}
                </svg>
              </div>
              <div className={styles.itemContent}>
                <span>Blog</span>
                <small>Read the latest product and company news</small>
              </div>
            </a>
          </div>
          
          <div className={styles.menuColumn}>
            <a href="/resources" className={styles.menuItem}>
              <div className={styles.iconWrapper}>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="none" viewBox="0 0 25 25">
                  {/* Icono de resources */}
                </svg>
              </div>
              <div className={styles.itemContent}>
                <span>Resource library</span>
                <small>Access ebooks, webinars, guides, videos, and more</small>
              </div>
            </a>
            <a href="/about" className={styles.menuItem}>
              <div className={styles.iconWrapper}>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="none" viewBox="0 0 25 25">
                  {/* Icono de about */}
                </svg>
              </div>
              <div className={styles.itemContent}>
                <span>About us</span>
                <small>Discover our mission and commitment to customers</small>
              </div>
            </a>
          </div>
        </div>
        
        <div className={styles.featuredCard}>
          <a href="/resources/guides/2024-state-of-meetings-report">
            <img 
              src="https://marketing-assets.calendly.com/_next/static/media/promo-card.75dea5e8.png" 
              alt="The State of Meetings 2024"
              className={styles.cardImage}
            />
            <div className={styles.cardContent}>
              <h4>The State of Meetings 2024</h4>
              <p>Gain insights on how meetings are changing—spanning productivity, engagement, and strategies for improvement across roles and industries.</p>
            </div>
          </a>
        </div>
      </div>
      
      <div className={styles.menuSection}>
        <h4 className={styles.menuTitle}>Learn & connect</h4>
        <div className={styles.submenuItems}>
          <a href="/help" target="_blank" className={styles.submenuItem}>
            <div className={styles.iconWrapper}>
              <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" fill="none" viewBox="0 0 21 20">
                {/* Icono de help */}
              </svg>
            </div>
            <span>Help Center</span>
          </a>
          <a href="https://developer.calendly.com/" target="_blank" className={styles.submenuItem}>
            <div className={styles.iconWrapper}>
              <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="none" viewBox="0 0 21 21">
                {/* Icono de api */}
              </svg>
            </div>
            <span>API & Developer tools</span>
          </a>
          <a href="https://community.calendly.com/" target="_blank" className={styles.submenuItem}>
            <div className={styles.iconWrapper}>
              <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" fill="none" viewBox="0 0 21 20">
                {/* Icono de community */}
              </svg>
            </div>
            <span>Calendly Community</span>
          </a>
          <a href="/newsroom" className={styles.submenuItem}>
            <div className={styles.iconWrapper}>
              <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="none" viewBox="0 0 21 21">
                {/* Icono de newsroom */}
              </svg>
            </div>
            <span>Newsroom</span>
          </a>
          <a href="/contact-us" className={styles.submenuItem}>
            <div className={styles.iconWrapper}>
              <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" fill="none" viewBox="0 0 21 20">
                {/* Icono de contact */}
              </svg>
            </div>
            <span>Contact us</span>
          </a>
        </div>
      </div>
    </div>
  );

  }