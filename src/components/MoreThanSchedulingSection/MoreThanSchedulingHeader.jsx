import styles from "./MoreThanSchedulingHeader.module.css"
export default function MoreThanSchedulingHeader() {
    return(
        <div className={styles.heading}>
            <div className={styles.containerTitle}>
                <h2>More than a<br/>scheduling link</h2>
            </div>
            <div className={styles.containerContent}>
                <p>Calendly’s functionality goes way beyond just a scheduling link, with customizable, automated features to help you and your team achieve goals faster.</p>
                <div>
                    <a href=""><span>Sign up for free</span></a>
                </div>
            </div>
        </div>
    )
};
