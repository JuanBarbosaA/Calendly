import styles from "./PricingPlansSection.module.css";

export default function PricingPlansSection() {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <h2 className={styles.headerTitle}>
            Pick the perfect plan for your team
          </h2>

          <div className={styles.pricingToggle}>
            <div className={styles.toggleOptions}>
              <p>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <rect
                      width="19"
                      height="19"
                      x="0.5"
                      y="0.5"
                      fill="#fff"
                      rx="9.5"
                    ></rect>
                    <rect
                      width="19"
                      height="19"
                      x="0.5"
                      y="0.5"
                      stroke="#0B3558"
                      rx="9.5"
                    ></rect>
                    <circle cx="10" cy="10" r="5" fill="#006BFF"></circle>
                  </svg>
                  Billed monthly
                </span>
              </p>
              |
              <p>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <rect
                      width="19"
                      height="19"
                      x="0.5"
                      y="0.5"
                      fill="#fff"
                      rx="9.5"
                    ></rect>
                    <rect
                      width="19"
                      height="19"
                      x="0.5"
                      y="0.5"
                      stroke="#0B3558"
                      rx="9.5"
                    ></rect>
                  </svg>
                  Billed yearly
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className={styles.contentCardsMonth}>
          <div className={styles.containerCard}>
            <div className={styles.card}>
              <div className={styles.headerCard}>
                <div className={styles.headerCardTitle}>
                  <h4>Free</h4>
                </div>
                <div className={styles.headerCardDescription}>
                  <p>For personal use</p>
                </div>
              </div>
              <div className={styles.contentCard}>
                <div className={styles.contentCardPriceWrapper}>
                  <div className={styles.contentPrice}>
                    <h3 className={styles.price}>Always free</h3>
                  </div>
                </div>
                <div className={styles.contentButton}>
                  <a href="">
                    <span>Get started</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

<div className={styles.containerCard}>
            <div className={styles.card}>
              <div className={styles.headerCard}>
                <div className={styles.headerCardTitle}>
                  <h4>Standard</h4>
                </div>
                <div className={styles.headerCardDescription}>
                  <p>For professional and small teams</p>
                </div>
              </div>
              <div className={styles.contentCard}>
                <div className={styles.contentCardPriceWrapper}>
                  <div className={styles.contentPrice}>
                    <h3 className={styles.price}>$10</h3>
                    <span className={styles.containerPricePerSeat}>
                      <span className={styles.pricePerSeat}>
                        <span>/seat/mo</span>
                      </span>
                    </span>
                    <div className={styles.containerDiscount}>
                      <div className={styles.discount}>Save 16%</div>
                    </div>
                  </div>
                </div>
                <div className={styles.contentButton}>
                  <a href="">
                    <span>Get started</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

<div className={styles.containerCard}>
            <div className={styles.card}>
              <div className={styles.headerCard}>
                <div className={styles.headerCardTitle}>
                  <h4>Teams</h4>
                  <span className={styles.pricingPlanBadge}>
                    <span className={styles.containerText}>
                      <div>Recommended plan</div>
                    </span>
                  </span>
                </div>
                <div className={styles.headerCardDescription}>
                  <p>For growing businesses</p>
                </div>
              </div>
              <div className={styles.contentCard}>
                <div className={styles.contentCardPriceWrapper}>
                  <div className={styles.contentPrice}>
                    <h3 className={styles.price}>$16</h3>
                    <span className={styles.containerPricePerSeat}>
                      <span className={styles.pricePerSeat}>
                        <span>/seat/mo</span>
                      </span>
                    </span>
                    <div className={styles.containerDiscount}>
                      <div className={styles.discount}>Save 20%</div>
                    </div>
                  </div>
                </div>
                <div className={styles.contentButton}>
                  <a href="">
                    <span>Get started</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

<div className={styles.containerCard}>
            <div className={styles.card}>
              <div className={styles.headerCard}>
                <div className={styles.headerCardTitle}>
                  <h4>Enterprise</h4>
                </div>
                <div className={styles.headerCardDescription}>
                  <p>For large companies</p>
                </div>
              </div>
              <div className={styles.contentCard}>
                <div className={styles.contentCardPriceWrapper}>
                  <div className={styles.contentPrice}>
                    <h3 className={styles.price}>$40</h3>
                    <span className={styles.containerPricePerSeat}>
                      <span className={styles.pricePerSeat}>
                        <span>/seat/mo</span>
                      </span>
                    </span>
                    <div className={styles.containerDiscount}>
                      <div className={styles.discount}>Save 20%</div>
                    </div>
                  </div>
                </div>
                <div className={styles.contentButton}>
                  <a href="">
                    <span>Get started</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          
        </div>

        <div className={styles.containerInfo}>
          <a href="">
            <span>Learn more on our pricing page</span>
            <span className={styles.containerIcon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
