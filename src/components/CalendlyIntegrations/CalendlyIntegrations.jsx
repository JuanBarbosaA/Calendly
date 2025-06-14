import styles from "./CalendlyIntegrations.module.css";

export default function CalendlyIntegrations() {
  const logos = [
    {
      alt: "Zoom integration",
      link: "https://zoom.us",
      src: "https://images.ctfassets.net/k0lk9kiuza3o/64o3ZzxmDZ2RvV36K0PCwc/b8b2993bc4f37beb3eaecdf8b68af6df/Zoom.svg",
    },
    {
      alt: "Salesforce integration",
      link: "https://salesforce.com",
      src: "https://images.ctfassets.net/k0lk9kiuza3o/6OTuIytCbtNByiPPLwTDLD/9250192af735c5ccf3e6a19334643d11/saleforce.svg",
    },
    {
      alt: "Google Calendar integration",
      link: "https://googlecalendar.com",
      src: "https://images.ctfassets.net/k0lk9kiuza3o/6W5mnZM4eNVK6Y8cBCnTu5/a0d70a3a38423e2b206e3dbf50503da5/google-calendar.svg",
    },
    {
      alt: "Slack integration",
      link: "https://slack.com",
      src: "https://images.ctfassets.net/k0lk9kiuza3o/4UQZOyPUNAjKf3x7tV7WZh/874072c0fdc4485bf305e1ac5a8a6c26/slack-logo-icon.svg",
    },
    {
      alt: "Teams integration",
      link: "https://teams.com",
      src: "https://images.ctfassets.net/k0lk9kiuza3o/2rhQcGrSRD5qeBzfsUresc/e502a7d02554a63389dec5c37beadb1c/Frame_29927.svg",
    },
    {
      alt: "Gmail integration",
      link: "https://gmail.com",
      src: "https://images.ctfassets.net/k0lk9kiuza3o/3x97SWL0ydKgcqT412HGr8/ed9ea1d8dea332dd74b125c89d689288/gmail-icon.svg",
    },
    {
      alt: "Outlook integration",
      link: "https://outlook.com",
      src: "https://images.ctfassets.net/k0lk9kiuza3o/7bQs7qA7sp83HJuE7EUETv/ac34c04b2206d7e049f38f41178ef9b2/outlook.svg",
    },
    {
      alt: "Chrome integration",
      link: "https://chrome.com",
      src: "https://images.ctfassets.net/k0lk9kiuza3o/1iXaOfSTG4LH14hl3jhgLV/9c262e7842e1e78a9e595a4477ecde7d/Chrome.svg",
    },
    {
      alt: "Webex integration",
      link: "https://webex.com",
      src: "https://images.ctfassets.net/k0lk9kiuza3o/4DaLXMiJ2kwAv3qpPblkwG/3e2dcf1bf1a4b80858cd321ad67691b8/webex-logomark-01.svg",
    },
    {
      alt: "Hubspot integration",
      link: "https://hubspot.com",
      src: "https://images.ctfassets.net/k0lk9kiuza3o/2APzJ2NNOwzzKC0mZam9mB/3158e0780a9db488ff243f5f08a48cef/hubspot.svg",
    },
    {
      alt: "Zapier integration",
      link: "https://zapier.com",
      src: "https://images.ctfassets.net/k0lk9kiuza3o/42r0sVudnFRBVKsZH5MKRv/e71cb6443dc2ffe75a4f990ce0af5ead/zapier-icon.svg",
    },
    {
      alt: "Logomark integration",
      link: "https://logomark.com",
      src: "https://images.ctfassets.net/k0lk9kiuza3o/3L8hrM2H4gJLD7s2UFhhxE/75734eb6c87362ba5386ef33c4760d3d/Logomark.svg",
    },
    {
      alt: "Linkedin integration",
      link: "https://linkedin.com",
      src: "https://images.ctfassets.net/k0lk9kiuza3o/nirfrq5tMDzXegZJxZHYr/626c4f558a197d841e926a6f53603aa3/linkedin.svg",
    },
    {
      alt: "Stripe integration",
      link: "https://stripe.com",
      src: "https://images.ctfassets.net/k0lk9kiuza3o/68QvXpmECJZjUTvmk1Qbxk/7c2198e75bf4761ccf6677fdb960a14d/stripe-logo.svg",
    },
    {
      alt: "Typeform integration",
      link: "https://typeform.com",
      src: "https://images.ctfassets.net/k0lk9kiuza3o/3YVXIhGtUTAzHkrMdGeEWh/f6ccde01983215ca45ba04a9aa57e7b1/Typeform-Icon.svg",
    },
    {
      alt: "Intercom integration",
      link: "https://intercom.com",
      src: "https://images.ctfassets.net/k0lk9kiuza3o/5iPdwT125pfQPNafr27mny/e866d175ee0169c23f90a3e438b65b21/intercom.svg",
    },
    {
      alt: "Activecampaign integration",
      link: "https://activecampaign.com",
      src: "https://images.ctfassets.net/k0lk9kiuza3o/5f4urpcDfUzxVFsvqHeuC/24ce8cc6a9e5269f5f749e4de21ad03b/activecampaign-logo-icon.svg",
    },
    {
      alt: "Paypal integration",
      link: "https://paypal.com",
      src: "https://images.ctfassets.net/k0lk9kiuza3o/263kzYvoG2EGkeRpsrnkrA/90dd1ddda05b6fe9a4e5010f99308c0d/paypal-icon.svg",
    },
  ];

  return (
    <section className={styles.integrationsSection}>
      <div className={styles.integrationsSection__wrapper}>
        <div className={styles.integrationsSection__content}>
          <div className={styles.integrationsSection__header}>
            <div className={styles.integrationsSection__title}>
              <h2>Connect Calendly to the tools you already use</h2>
            </div>
            <div className={styles.integrationsSection__info}>
              <p>Boost productivity with 100+ integrations</p>
              <div className={styles.integrationsSection__viewAll}>
                <a href="">
                  <span className={styles.viewAll__text}>View all integrations</span>
                  <span className={styles.viewAll__icon}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className={styles.integrationsSection__apps}>
            <div className={styles.appsGrid}>
              {logos.map((logo, index) => (
                <div className={styles.appsGrid__item} key={index}>
                  <a href={logo.link} target="_blank">
                    <div className={styles.appsGrid__logoWrapper}>
                      <img src={logo.src} alt={logo.alt} />
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.integrationCards}>
          <div className={styles.integrationCards__container}>
            <div className={styles.integrationCards__card}>
              <a href="">
                <div className={styles.card__content}>
                  <div className={styles.card__header}>
                    <div className={styles.card__logoSection}>
                      <div className={styles.card__logoWrapper}>
                        <img
                          decoding="async"
                          loading="lazy"
                          alt="Google suite"
                          className="sc-a4cc5372-0 iYBuiU"
                          src="https://images.ctfassets.net/k0lk9kiuza3o/x2WxpmYJVcwMjBJy0Bb1u/1d05b8113da8d7cefe0e9e8c72d46da6/Google__G__Logo.svg"
                        />
                      </div>
                    </div>
                    <button>
                      <div className={styles.card__iconWrapper}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" stroke="currentColor" viewBox="0 0 32 32"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.333 22.667 22.667 9.333M9.333 9.333h13.334v13.334"></path></svg>
                      </div>
                    </button>
                  </div>
                  <div className={styles.card__title}>Google suite</div>
                  <div className={styles.card__description}>
                    Automatically add events to your calendar and invitees’ calendars with our Google Calendar integration.
                  </div>
                </div>
              </a>
            </div>
            <div className={styles.integrationCards__card}>
              <a href="">
                <div className={styles.card__content}>
                  <div className={styles.card__header}>
                    <div className={styles.card__logoSection}>
                      <div className={styles.card__logoWrapper}>
                        <img decoding="async" loading="lazy" alt="Microsoft suite" class="sc-a4cc5372-0 iYBuiU" src="https://images.ctfassets.net/k0lk9kiuza3o/7yrXYudS3YKuKWtyU5Bj81/10d99f35d1f31142ab4c49c5a9c22035/microsoftLogo.svg"/>
                      </div>
                    </div>
                    <button>
                      <div className={styles.card__iconWrapper}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" stroke="currentColor" viewBox="0 0 32 32"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.333 22.667 22.667 9.333M9.333 9.333h13.334v13.334"></path></svg>
                      </div>
                    </button>
                  </div>
                  <div className={styles.card__title}>Microsoft suite</div>
                  <div className={styles.card__description}>
                    Make your day easier with Calendly integrations for Microsoft Teams, Outlook, Azure 
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
