import styles from "./SecurityBanner.module.css"
export default function SecurityBanner() {

    const images = [
        {
            url: "https://images.ctfassets.net/k0lk9kiuza3o/7CgfGSU35z1d8KW50Z7RVf/bb21b5143c829f1ba5c466b75e08f1cd/Security-SOC.svg"
        },
        {
            url: "https://images.ctfassets.net/k0lk9kiuza3o/438lMrSBKgnTeDLKMLKEoF/0593e9259a470e8c6d7527b61b4d2e42/Security-DSS.svg"
        },
        {
            url: "https://images.ctfassets.net/k0lk9kiuza3o/5HqO62N0euqpUsf15k6OwT/be8fb24f0fc5c78b5797483daa3ad8ed/Security-GDPR.svg"
        },
        {
            url: "https://images.ctfassets.net/k0lk9kiuza3o/JhVmIAFIySgktxYelNuwK/b479e76d350bde3b62394e7ee86952e1/Security-CCPA.svg"
        },
        {
            url: "https://images.ctfassets.net/k0lk9kiuza3o/78FV1ztfCpTrnX8th78JP0/2cc579fd4fa57adc6856a3022ad7bebe/Security-Star.svg"
        },
        {
            url: "https://images.ctfassets.net/k0lk9kiuza3o/4dQ1GKECtZ2SMn9R44eySA/980d309e5530228e26d810f7b2ecf8ed/ISO-IEC_27001-2.svg"
        },
    ]

    return(
        <section className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.heading}>
                    <div className={styles.containerTitle}>
                        <h2>Built to keep your organization secure</h2>
                    </div>
                </div>
                <div className={styles.trustBar}>
                    <div className={styles.containerImages}>
                        {images.map((image, index) => (
                        <div key={index} className={styles.containerImage}>
                            <div>
                                <img decoding="async" loading="lazy" alt="Security-SOC" src={image.url}></img>
                            </div>
                        </div>
                        ))}
                    </div>
                    <div className={styles.containerInfo}>
                        <p>Keep your scheduling data secure with enterprise-grade admin management, security integrations, data governance, compliance audits, and privacy protections.</p>
                        <a href="">
                            <span>Learn more</span>
                            <span className={styles.iconWrapper}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
};
