import styles from "./SolutionsMenu.module.css";

export default function SolutionsMenu() {
  return (
    <div className={styles.menuContent}>
      <div className={styles.menuSection}>
        <div className={styles.menuGroup}>
          <h4 className={styles.menuTitle}>By business size</h4>
          <div className={styles.menuItems}>
            <a href="/solutions/individuals" className={styles.menuItem}>
              <div className={styles.bigIconWrapper}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="24"
                  fill="none"
                  viewBox="0 0 25 24"
                >
                  <circle
                    cx="12.5"
                    cy="6"
                    r="4.5"
                    stroke="#006BFF"
                    stroke-width="3"
                  ></circle>
                  <path
                    stroke="#006BFF"
                    stroke-width="3"
                    d="M3.782 20.539a9.631 9.631 0 0 1 17.436 0l.525 1.117a.592.592 0 0 1-.536.844H3.793a.592.592 0 0 1-.536-.843z"
                  ></path>
                </svg>
              </div>
              <div className={styles.itemContent}>
                <span>Individuals</span>
                <small>For solopreneurs</small>
              </div>
            </a>
            <a href="/solutions/small-business" className={styles.menuItem}>
              <div className={styles.bigIconWrapper}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="24"
                  fill="none"
                  viewBox="0 0 25 24"
                >
                  <path
                    fill="#006BFF"
                    fill-rule="evenodd"
                    d="M2 6.75a6 6 0 1 1 12 0 6 6 0 0 1-12 0m6 3a3 3 0 1 1 0-6 3 3 0 0 1 0 6"
                    clip-rule="evenodd"
                  ></path>
                  <path
                    fill="#006BFF"
                    d="M18.5 9.75a1.5 1.5 0 0 0-1.5 1.5v3h-3a1.5 1.5 0 0 0 0 3h3v3a1.5 1.5 0 0 0 3 0v-3h3a1.5 1.5 0 0 0 0-3h-3v-3a1.5 1.5 0 0 0-1.5-1.5M8 14.25q.772.002 1.5.15v3.106a4.502 4.502 0 0 0-5.744 2.744H15.35q.149.728.15 1.5a1.5 1.5 0 0 1-1.5 1.5H2a1.5 1.5 0 0 1-1.5-1.5 7.5 7.5 0 0 1 7.5-7.5"
                  ></path>
                </svg>
              </div>
              <div className={styles.itemContent}>
                <span>Small business</span>
                <small>For growing businesses</small>
              </div>
            </a>
            <a href="/solutions/enterprise" className={styles.menuItem}>
              <div className={styles.bigIconWrapper}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="24"
                  fill="none"
                  viewBox="0 0 25 24"
                >
                  <path
                    fill="#006BFF"
                    fill-rule="evenodd"
                    d="M2.75 6.75a6 6 0 1 1 12 0 6 6 0 0 1-12 0m6 3a3 3 0 1 1 0-6 3 3 0 0 1 0 6"
                    clip-rule="evenodd"
                  ></path>
                  <path
                    fill="#006BFF"
                    d="M19.25 6.75a3 3 0 0 1-3 3v3a6 6 0 0 0 0-12v3a3 3 0 0 1 3 3"
                  ></path>
                  <path
                    fill="#006BFF"
                    fill-rule="evenodd"
                    d="M14.75 23.25h-12a1.5 1.5 0 0 1-1.5-1.5 7.5 7.5 0 0 1 15 0 1.5 1.5 0 0 1-1.5 1.5m-1.756-3a4.502 4.502 0 0 0-8.488 0z"
                    clip-rule="evenodd"
                  ></path>
                  <path
                    fill="#006BFF"
                    d="M16.25 17.25a4.5 4.5 0 0 1 4.244 3H17.75v3h4.5a1.5 1.5 0 0 0 1.5-1.5 7.5 7.5 0 0 0-7.5-7.5z"
                  ></path>
                </svg>
              </div>
              <div className={styles.itemContent}>
                <span>Large companies</span>
                <small>For enterprise</small>
              </div>
            </a>
          </div>
        </div>

        <div className={styles.menuGroup}>
          <div className={styles.containerTitles}>
            <div className={styles.containerTitle}>
              <span className={styles.menuTitle}>By team</span>
            </div>
            <div className={styles.containerTitle}>
              <span className={styles.menuTitle}>By industry</span>
            </div>
          </div>

          <div className={styles.doubleColumn}>
            <div className={styles.submenuItems}>
              <a href="/solutions/sales" className={styles.submenuItem}>
                <div className={styles.iconWrapper}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="20"
                    fill="none"
                    viewBox="0 0 21 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.25"
                      d="M4.563 12.5a3.125 3.125 0 1 0 6.25 0 3.125 3.125 0 0 0-6.25 0"
                    ></path>
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.25"
                      d="M1.438 12.5a6.25 6.25 0 1 0 12.5 0 6.25 6.25 0 0 0-12.5 0M7.688 12.5l7.5-7.5M1.438 19.375l2.154-2.154M13.938 19.375l-2.155-2.154M16.91 6.813a1.25 1.25 0 0 1-1.06.354l-2.475-.354-.353-2.475a1.25 1.25 0 0 1 .353-1.06L16.027.624l.755 2.78 2.78.756z"
                    ></path>
                  </svg>
                </div>
                <span>Sales</span>
              </a>
              <a href="/solutions/marketing" className={styles.submenuItem}>
                <div className={styles.iconWrapper}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="21"
                    fill="none"
                    viewBox="0 0 21 21"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.25"
                      d="M11.333 13.167V6.501m0 6.666 4.587 2.621a.833.833 0 0 0 1.247-.723V4.603a.833.833 0 0 0-1.247-.723L11.333 6.5m0 6.667h-2.5m2.5-6.666h-5A3.333 3.333 0 0 0 3 9.834v0a3.333 3.333 0 0 0 3.333 3.333m0 0v3.75a1.25 1.25 0 0 0 2.5 0v-3.75m-2.5 0h2.5"
                    ></path>
                  </svg>
                </div>
                <span>Marketing</span>
              </a>
              <a
                href="/solutions/customer-success"
                className={styles.submenuItem}
              >
                <div className={styles.iconWrapper}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="21"
                    fill="none"
                    viewBox="0 0 21 21"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.25"
                      d="M10.151 1.343a.391.391 0 0 1 .698 0l.812 1.636a.39.39 0 0 0 .292.21l1.82.264a.39.39 0 0 1 .313.26.38.38 0 0 1-.097.391l-1.317 1.283a.38.38 0 0 0-.111.337l.312 1.807a.38.38 0 0 1-.156.374.39.39 0 0 1-.41.028l-1.625-.847a.39.39 0 0 0-.364 0l-1.621.847a.39.39 0 0 1-.541-.192.4.4 0 0 1-.024-.21l.312-1.807a.38.38 0 0 0-.111-.337L7.01 4.104a.378.378 0 0 1 .022-.566.4.4 0 0 1 .194-.085l1.82-.263a.39.39 0 0 0 .293-.21zM5.934 8.649l-.694-.362a.4.4 0 0 0-.365 0l-1.62.845a.4.4 0 0 1-.41-.028.38.38 0 0 1-.156-.375l.312-1.806a.38.38 0 0 0-.11-.337l-1.323-1.28a.38.38 0 0 1 .023-.566.4.4 0 0 1 .194-.086l1.82-.263a.39.39 0 0 0 .292-.21l.813-1.637a.39.39 0 0 1 .349-.214M15.067 8.649l.694-.363a.4.4 0 0 1 .364 0l1.62.846a.39.39 0 0 0 .411-.028.38.38 0 0 0 .155-.375L18 6.923a.38.38 0 0 1 .11-.337l1.322-1.283a.38.38 0 0 0-.216-.652l-1.82-.263a.39.39 0 0 1-.293-.21l-.812-1.634a.39.39 0 0 0-.35-.214M14.545 19.223a5.372 5.372 0 0 0-8.09 0M7.64 11.177a5.515 5.515 0 0 0 6.148 1.236"
                    ></path>
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.25"
                      d="M7.182 12.861a3.319 3.319 0 1 0 6.638 0 3.319 3.319 0 0 0-6.638 0"
                    ></path>
                  </svg>
                </div>
                <span>Customer success</span>
              </a>
              <a href="/solutions/recruiting" className={styles.submenuItem}>
                <div className={styles.iconWrapper}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="21"
                    fill="none"
                    viewBox="0 0 21 21"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.25"
                      d="M3.434 12.77a7.5 7.5 0 1 0 13.803-5.867A7.5 7.5 0 0 0 3.434 12.77M15.638 15.141l4.698 4.696"
                    ></path>
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.25"
                      d="M7.836 7.337a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0M10.336 11.087v3.75M13.856 13.587a3.728 3.728 0 0 0-7.04 0"
                    ></path>
                  </svg>
                </div>
                <span>Recruiting</span>
              </a>
            </div>

            <span className={styles.subMenuDivision}></span>

            <div className={styles.submenuItems}>
              <a href="/solutions/education" className={styles.submenuItem}>
                <div className={styles.iconWrapper}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="20"
                    fill="none"
                    viewBox="0 0 21 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.25"
                      d="M8.625 11.875v-1.25a3.75 3.75 0 0 0-7.5 0v2.5h1.25L3 19.375h3.75l.563-5.625m3.812-3.125h7.5a1.25 1.25 0 0 0 1.25-1.25v-7.5a1.25 1.25 0 0 0-1.25-1.25h-8.75m7.5 7.5h-6.25m3.125 11.25a3.56 3.56 0 0 0-5.417 0m11.042 0a3.56 3.56 0 0 0-5.417 0m1.667-11.25v-5m-2.5 5V5M2.375 3.125a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0m6.98 12.188a2.187 2.187 0 1 0 4.375 0 2.187 2.187 0 0 0-4.375 0m5.625 0a2.188 2.188 0 1 0 4.375 0 2.188 2.188 0 0 0-4.375 0"
                    ></path>
                  </svg>
                </div>
                <span>Education</span>
              </a>
              <a href="/solutions/technology" className={styles.submenuItem}>
                <div className={styles.iconWrapper}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="21"
                    fill="none"
                    viewBox="0 0 21 21"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.25"
                      d="M7.375 19.42h6.25M10.5 16.92v2.5M1.125 13.794h18.75M16.75 1.917h1.875a1.25 1.25 0 0 1 1.25 1.25v12.5a1.25 1.25 0 0 1-1.25 1.25H2.375a1.25 1.25 0 0 1-1.25-1.25v-12.5a1.25 1.25 0 0 1 1.25-1.25h2.5"
                    ></path>
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.25"
                      d="M8.313 4.107a2.187 2.187 0 1 0 4.374 0 2.187 2.187 0 0 0-4.374 0M6.75 10.667a3.75 3.75 0 1 1 7.5 0z"
                    ></path>
                  </svg>
                </div>
                <span>Technology</span>
              </a>
              <a
                href="/solutions/financial-services"
                className={styles.submenuItem}
              >
                <div className={styles.iconWrapper}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="21"
                    fill="none"
                    viewBox="0 0 21 21"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.25"
                      d="m17.408 12.283-4.3.822M12.513 7.398l-2.89.955a.96.96 0 0 1-1.17-.509.97.97 0 0 1 .44-1.275l2.8-1.407a1.95 1.95 0 0 1 1.55-.09l4.145 1.515"
                    ></path>
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.25"
                      d="M3.57 12.29h2.038l2.927 3.28a1.118 1.118 0 0 0 1.965-.73v-.512l.146.058a1.38 1.38 0 0 0 1.892-1.28h.408a1.223 1.223 0 0 0 .978-1.958l-2.616-3.351M9.32 6.354l-.3-.246a1.75 1.75 0 0 0-1.686-.215L3.625 7.376"
                    ></path>
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.25"
                      d="M1.125 5.958h1.667a.8.8 0 0 1 .833.764v5.347a.8.8 0 0 1-.833.764H1.125M19.875 12.833h-1.667a.8.8 0 0 1-.833-.764V6.722a.8.8 0 0 1 .833-.764h1.667M10.5 14.328l-.815-.815M12.538 13.105l-1.223-1.223"
                    ></path>
                  </svg>
                </div>
                <span>Financial Services</span>
              </a>
              <a
                href="/solutions/professional-services"
                className={styles.submenuItem}
              >
                <div className={styles.iconWrapper}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="20"
                    fill="none"
                    viewBox="0 0 21 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.25"
                      d="M19.458 19.375a5.61 5.61 0 0 0-5.281-3.75h-.005m0 0a5.61 5.61 0 0 0-5.28 3.75m5.28-3.75v3.75M11.209 9.193a5.71 5.71 0 0 0 6.37 1.28M6.671 2.5H3.547m5 1.875h-5M7.302 17.61a3.7 3.7 0 0 0-2.218-.735 3.74 3.74 0 0 0-3.521 2.5m9.171-8.437a3.439 3.439 0 1 0 6.878 0 3.439 3.439 0 0 0-6.878 0m-.937-4.063h-1.25V8.75l-2.5-1.875h-3.75a1.25 1.25 0 0 1-1.25-1.25v-3.75a1.25 1.25 0 0 1 1.25-1.25h7.5a1.25 1.25 0 0 1 1.25 1.25v3.75a1.25 1.25 0 0 1-1.25 1.25m-7.214 6.25a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0"
                    ></path>
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
