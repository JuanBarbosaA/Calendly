import styles from "./HowItWorksHeader.module.css"
export default function HowItWorksHeader() {
    return(
        <div className={styles.heading}>
            <div className={styles.containerTitle}>
                <h2>Calendly makes scheduling simple</h2>
            </div>
            <div className={styles.containerContent}>
                <p>Calendly’s easy enough for individual users, and 
                    powerful enough to meet the needs of enterprise 
                    organizations — including 86% of the Fortune 500 
                    companies.</p>
                <div>
                    <a href=""><span>Sign up for free</span></a>
                </div>
            </div>
        </div>
    )
};
