import styles from "./PricingPlansSection.module.css"

export default function PricingPlansSection() {
    return(
        <section className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.header}>
                        <h2 className={styles.headerTitle}>Pick the perfect plan for your team</h2>
                    
                    <div className={styles.pricingToggle}>

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
                                        <h3 className={styles.price}>$10</h3>
                                        <span>
                                            <span className={styles.pricePerSeat}>
                                                <span>/seat/mo</span>
                                            </span>
                                        </span>
                                        <div>
                                            <div>
                                                Save 16%
                                            </div>
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
                                    <h4>Free</h4>
                                </div>
                                <div className={styles.headerCardDescription}>
                                    <p>For personal use</p>
                                </div>
                            </div>
                            <div className={styles.contentCard}>
                                <div className={styles.contentCardPriceWrapper}>
                                    <div className={styles.contentPrice}>
                                        <h3 className={styles.price}>$10</h3>
                                        <span>
                                            <span className={styles.pricePerSeat}>
                                                <span>/seat/mo</span>
                                            </span>
                                        </span>
                                        <div>
                                            <div>
                                                Save 16%
                                            </div>
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
                                    <h4>Free</h4>
                                </div>
                                <div className={styles.headerCardDescription}>
                                    <p>For personal use</p>
                                </div>
                            </div>
                            <div className={styles.contentCard}>
                                <div className={styles.contentCardPriceWrapper}>
                                    <div className={styles.contentPrice}>
                                        <h3 className={styles.price}>$10</h3>
                                        <span>
                                            <span className={styles.pricePerSeat}>
                                                <span>/seat/mo</span>
                                            </span>
                                        </span>
                                        <div>
                                            <div>
                                                Save 16%
                                            </div>
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
                                    <h4>Free</h4>
                                </div>
                                <div className={styles.headerCardDescription}>
                                    <p>For personal use</p>
                                </div>
                            </div>
                            <div className={styles.contentCard}>
                                <div className={styles.contentCardPriceWrapper}>
                                    <div className={styles.contentPrice}>
                                        <h3 className={styles.price}>$10</h3>
                                        <span>
                                            <span className={styles.pricePerSeat}>
                                                <span>/seat/mo</span>
                                            </span>
                                        </span>
                                        <div>
                                            <div>
                                                Save 16%
                                            </div>
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
                



                <div>
                    <a href="">
                        <span>Learn more on our pricing page</span>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                        </span>
                    </a>
                </div>
            </div>
        </section>
    )
};
