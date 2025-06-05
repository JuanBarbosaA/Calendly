import styles from "./Header.module.css"

  export default function SolutionsMenu() {
    return (
    <div className={styles.menuContent}>
      <div className={styles.menuSection}>
        <div className={styles.menuGroup}>
          <h4 className={styles.menuTitle}>By business size</h4>
          <div className={styles.menuItems}>
            <a href="/solutions/individuals" className={styles.menuItem}>
              <div className={styles.iconWrapper}>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" fill="none" viewBox="0 0 25 24">
                  {/* Icono de individuals */}
                </svg>
              </div>
              <div className={styles.itemContent}>
                <span>Individuals</span>
                <small>For solopreneurs</small>
              </div>
            </a>
            <a href="/solutions/small-business" className={styles.menuItem}>
              <div className={styles.iconWrapper}>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" fill="none" viewBox="0 0 25 24">
                  {/* Icono de small business */}
                </svg>
              </div>
              <div className={styles.itemContent}>
                <span>Small business</span>
                <small>For growing businesses</small>
              </div>
            </a>
            <a href="/solutions/enterprise" className={styles.menuItem}>
              <div className={styles.iconWrapper}>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" fill="none" viewBox="0 0 25 24">
                  {/* Icono de enterprise */}
                </svg>
              </div>
              <div className={styles.itemContent}>
                <span>Large companies</span>
                <small>For enterprise</small>
              </div>
            </a>
          </div>
        </div>
      </div>
      
      <div className={styles.menuSection}>
        <div className={styles.doubleColumn}>
          <div>
            <h4 className={styles.menuTitle}>By team</h4>
            <div className={styles.submenuItems}>
              <a href="/solutions/sales" className={styles.submenuItem}>
                <div className={styles.iconWrapper}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" fill="none" viewBox="0 0 21 20">
                    {/* Icono de sales */}
                  </svg>
                </div>
                <span>Sales</span>
              </a>
              <a href="/solutions/marketing" className={styles.submenuItem}>
                <div className={styles.iconWrapper}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="none" viewBox="0 0 21 21">
                    {/* Icono de marketing */}
                  </svg>
                </div>
                <span>Marketing</span>
              </a>
              <a href="/solutions/customer-success" className={styles.submenuItem}>
                <div className={styles.iconWrapper}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="none" viewBox="0 0 21 21">
                    {/* Icono de customer success */}
                  </svg>
                </div>
                <span>Customer success</span>
              </a>
              <a href="/solutions/recruiting" className={styles.submenuItem}>
                <div className={styles.iconWrapper}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="none" viewBox="0 0 21 21">
                    {/* Icono de recruiting */}
                  </svg>
                </div>
                <span>Recruiting</span>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className={styles.menuTitle}>By industry</h4>
            <div className={styles.submenuItems}>
              <a href="/solutions/education" className={styles.submenuItem}>
                <div className={styles.iconWrapper}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" fill="none" viewBox="0 0 21 20">
                    {/* Icono de education */}
                  </svg>
                </div>
                <span>Education</span>
              </a>
              <a href="/solutions/technology" className={styles.submenuItem}>
                <div className={styles.iconWrapper}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="none" viewBox="0 0 21 21">
                    {/* Icono de technology */}
                  </svg>
                </div>
                <span>Technology</span>
              </a>
              <a href="/solutions/financial-services" className={styles.submenuItem}>
                <div className={styles.iconWrapper}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="none" viewBox="0 0 21 21">
                    {/* Icono de financial */}
                  </svg>
                </div>
                <span>Financial Services</span>
              </a>
              <a href="/solutions/professional-services" className={styles.submenuItem}>
                <div className={styles.iconWrapper}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" fill="none" viewBox="0 0 21 20">
                    {/* Icono de professional */}
                  </svg>
                </div>
                <span>Professional Services</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  } 