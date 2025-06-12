import styles from "./Footer.module.css"
export default function Footer() {
    return(
        <footer>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <div className={styles.containerTop}>
                        <div className={styles.containerTopTitle}>
                            <h2 className={styles.title}>
                                Easy
                                <span className={styles.titleDecoration}> ahead</span> 
                                <span className={styles.decoration}>™</span>   
                            </h2>
                            <p className={styles.description}>
                                We take the work out of connecting with others so you can accomplish more.
                            </p>
                        </div>
                        <div className={styles.containerTopCard}>
                            <a className={styles.iconCard} href="">
                                <div className={styles.iconCardContent}>
                                    <div className={styles.headerCard}>
                                        <div className={styles.badgeWrapper}>
                                            <div className={styles.badge}>FEATURED</div>
                                        </div>
                                        <button className={styles.wrapperIcon}>
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" stroke="currentColor" viewBox="0 0 32 32"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.333 22.667 22.667 9.333M9.333 9.333h13.334v13.334"></path></svg>
                                            </div>
                                        </button>
                                    </div>
                                    <h4 className={styles.cardTitle}>2024 Report: The State of Meetings</h4>
                                    <div className={styles.cardBody}>
                                    See the latest data on meeting culture and productivity
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className={styles.containerMiddle}></div>
                    <div className={styles.containerExtensionsSocial}></div>
                    <div className={styles.containerBottom}></div>
                </div>
            </div>
        </footer>
    )
};
