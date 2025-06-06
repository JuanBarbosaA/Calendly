import styles from "./ResourcesMenu.module.css";
export default function ResourcesMenu() {
  return (
    <div className={styles.menuContent}>
      <div className={styles.menuSection}>
        <span className={styles.menuTitle}>Explore</span>
        <div className={styles.container}>
          <div className={styles.menuColumns}>
            <div className={styles.menuColumn}>
              <a href="/customers" className={styles.menuItem}>
                <div className={styles.bigIconWrapper}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="none"
                    viewBox="0 0 25 25"
                  >
                    <path
                      fill="#006BFF"
                      fill-rule="evenodd"
                      d="M10.425 2.53c.77-1.842 3.38-1.842 4.15 0l2.145 5.12 5.532.456c1.989.165 2.795 2.646 1.282 3.948l-4.206 3.621 1.274 5.403c.459 1.943-1.652 3.476-3.358 2.44L12.5 20.636l-4.744 2.882c-1.706 1.036-3.816-.497-3.358-2.44l1.274-5.402-4.206-3.622C-.047 10.752.759 8.27 2.748 8.106L8.28 7.65zM12.5 5.34l-1.629 3.888a2.25 2.25 0 0 1-1.89 1.373l-4.2.348 3.194 2.75a2.25 2.25 0 0 1 .722 2.222l-.968 4.103 3.603-2.189a2.25 2.25 0 0 1 2.336 0l3.603 2.189-.968-4.103a2.25 2.25 0 0 1 .722-2.222l3.195-2.75-4.201-.348a2.25 2.25 0 0 1-1.89-1.373z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <div className={styles.itemContent}>
                  <span>Customer stories</span>
                  <small>See how businesses are growing with calendly</small>
                </div>
              </a>
              <a href="/blog" className={styles.menuItem}>
                <div className={styles.bigIconWrapper}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="none"
                    viewBox="0 0 25 25"
                  >
                    <path
                      fill="#006BFF"
                      d="M5 6.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0M11 5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M8 11a1.5 1.5 0 0 0 0 3h9a1.5 1.5 0 0 0 0-3zM6.5 17A1.5 1.5 0 0 1 8 15.5h9a1.5 1.5 0 0 1 0 3H8A1.5 1.5 0 0 1 6.5 17"
                    ></path>
                    <path
                      fill="#006BFF"
                      fill-rule="evenodd"
                      d="M3.5.5a3 3 0 0 0-3 3v18a3 3 0 0 0 3 3h18a3 3 0 0 0 3-3v-18a3 3 0 0 0-3-3zm18 3h-18v18h18z"
                      clip-rule="evenodd"
                    ></path>
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
                <div className={styles.bigIconWrapper}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="none"
                    viewBox="0 0 25 25"
                  >
                    <path
                      fill="#006BFF"
                      d="M2 6.5A1.5 1.5 0 0 1 3.5 5h18a1.5 1.5 0 0 1 0 3h-18A1.5 1.5 0 0 1 2 6.5M2 12.5A1.5 1.5 0 0 1 3.5 11h18a1.5 1.5 0 0 1 0 3h-18A1.5 1.5 0 0 1 2 12.5M2 18.5A1.5 1.5 0 0 1 3.5 17h18a1.5 1.5 0 0 1 0 3h-18A1.5 1.5 0 0 1 2 18.5"
                    ></path>
                  </svg>
                </div>
                <div className={styles.itemContent}>
                  <span>Resource library</span>
                  <small>
                    Access ebooks, webinars, guides, videos, and more
                  </small>
                </div>
              </a>
              <a href="/about" className={styles.menuItem}>
                <div className={styles.bigIconWrapper}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="none"
                    viewBox="0 0 25 25"
                  >
                    <path
                      fill="#006BFF"
                      d="M16.95 16.06c-.777.677-1.744 1.52-3.506 1.52h-1.05c-1.273 0-2.428-.453-3.259-1.277-.808-.802-1.255-1.904-1.255-3.1v-1.41c0-1.197.447-2.294 1.255-3.1.826-.825 1.986-1.277 3.259-1.277h1.05c1.762 0 2.73.842 3.505 1.518.808.7 1.502 1.308 3.355 1.308q.432 0 .844-.067-.002-.005-.004-.018a7 7 0 0 0-.388-.788l-1.242-2.105c-1.136-1.935-3.24-3.127-5.513-3.127h-2.479c-2.273 0-4.377 1.192-5.513 3.127L4.767 9.369a6.15 6.15 0 0 0 0 6.249l1.242 2.105c1.136 1.935 3.24 3.126 5.513 3.126h2.479c2.273 0 4.377-1.191 5.513-3.126l1.242-2.105q.224-.386.388-.784c0-.005.004-.01.004-.018a5 5 0 0 0-.844-.068c-1.853.005-2.547.61-3.355 1.313"
                    ></path>
                    <path
                      fill="#006BFF"
                      d="M13.448 8.697h-1.05c-1.935 0-3.208 1.357-3.208 3.095v1.411c0 1.738 1.273 3.096 3.208 3.096h1.05c2.82 0 2.602-2.822 6.86-2.822.406 0 .813.035 1.205.107a6.2 6.2 0 0 0 0-2.172 6.7 6.7 0 0 1-1.205.107c-4.263 0-4.04-2.822-6.86-2.822"
                    ></path>
                    <path
                      fill="#006BFF"
                      d="M23.956 14.614a5.94 5.94 0 0 0-2.447-1.03c0 .009-.004.013-.004.022a6.5 6.5 0 0 1-.356 1.219 4.7 4.7 0 0 1 2.022.815c0 .005-.005.013-.005.018-.338 1.08-.849 2.1-1.52 3.028-.662.914-1.46 1.72-2.373 2.396a10.96 10.96 0 0 1-6.545 2.137 10.99 10.99 0 0 1-7.723-3.14 10.7 10.7 0 0 1-2.342-3.409 10.5 10.5 0 0 1-.858-4.17c0-1.447.288-2.853.858-4.17A10.7 10.7 0 0 1 5.005 4.92a11.004 11.004 0 0 1 7.723-3.14c2.382 0 4.646.74 6.545 2.137a10.8 10.8 0 0 1 2.373 2.396c.671.927 1.182 1.944 1.52 3.028 0 .01.005.014.005.018a4.7 4.7 0 0 1-2.022.815 6.3 6.3 0 0 1 .36 1.236 6 6 0 0 0 2.447-1.03c.698-.506.561-1.08.456-1.42C22.874 4.061 18.222.5 12.728.5 5.978.5.5 5.87.5 12.5s5.473 12 12.228 12c5.5 0 10.15-3.561 11.684-8.461.11-.345.242-.919-.456-1.425"
                    ></path>
                  </svg>
                </div>
                <div className={styles.itemContent}>
                  <span>About us</span>
                  <small>
                    Discover our mission and commitment to customers
                  </small>
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
                <p>
                  Gain insights on how meetings are changing—spanning
                  productivity, engagement, and strategies for improvement
                  across roles and industries.
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className={styles.menuSection}>
        <h4 className={styles.menuTitle}>Learn & connect</h4>
        <div className={styles.submenuItems}>
          <a href="/help" target="_blank" className={styles.submenuItem}>
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
                  d="M19.25 7.917v-5A1.25 1.25 0 0 0 18 1.667H3a1.25 1.25 0 0 0-1.25 1.25v13.75A1.25 1.25 0 0 0 3 17.917h5.833M1.75 5.417h17.5"
                ></path>
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.25"
                  d="M19.24 14.79v-3.75h-3.75M19.24 11.04l-6.876 6.874"
                ></path>
                <path
                  fill="currentColor"
                  d="M10.626 12.979c.295 0 .443-.211.487-.552.035-.47.174-.716.745-1.108.592-.418.923-.959.923-1.747 0-1.165-.81-1.959-1.99-1.959-.897 0-1.576.433-1.847 1.135a1.5 1.5 0 0 0-.122.607c0 .346.179.563.48.563.239 0 .4-.13.496-.449.139-.52.462-.805.945-.805.536 0 .906.393.906.954 0 .495-.183.778-.723 1.165-.545.381-.815.804-.815 1.443v.098c0 .376.183.655.515.655M9.703 14.21a.88.88 0 1 1 1.76 0 .88.88 0 0 1-1.76 0"
                ></path>
              </svg>
            </div>
            <span>Help Center</span>
          </a>
          <a
            href="https://developer.calendly.com/"
            target="_blank"
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
                <g
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.25"
                  clip-path="url(#api_svg__a)"
                >
                  <path d="M2.375 1.214c-.332 0-.65.15-.884.419a1.54 1.54 0 0 0-.366 1.01v15.605c.001.407.143.798.395 1.086.253.288.594.45.95.452h16.066c.355-.002.695-.163.946-.45.25-.287.392-.675.393-1.08V2.751a1.66 1.66 0 0 0-.395-1.086 1.27 1.27 0 0 0-.95-.452zM19.875 15.5H1.125"></path>
                  <path d="m14.25 11.214 2.5-2.857-2.5-2.857M6.75 11.214l-2.5-2.857L6.75 5.5M11.75 11.214 9.25 5.5"></path>
                </g>
                <defs>
                  <clipPath id="api_svg__a">
                    <path fill="#fff" d="M.5.5h20v20H.5z"></path>
                  </clipPath>
                </defs>
              </svg>
            </div>
            <span>API & Developer tools</span>
          </a>
          <a
            href="https://community.calendly.com/"
            target="_blank"
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
                  d="M7.75 18.875a3.542 3.542 0 0 0-6.25 0m18.75 0a3.542 3.542 0 0 0-6.25 0m-.418-2.5a3.56 3.56 0 0 0-5.416 0m.472-13.209c-1.551.136-2.762 1.192-2.762 2.47 0 .684.34 1.321.959 1.796l.198.152-.091.259a5 5 0 0 1-.816 1.46 3.6 3.6 0 0 0 1.772-.833l.455-.395.152.018q.236.03.471.03c.537 0 1.042-.11 1.483-.304m-8.021 6.369a2.187 2.187 0 1 0 4.374 0 2.187 2.187 0 0 0-4.374 0m12.5 0a2.188 2.188 0 1 0 4.375 0 2.188 2.188 0 0 0-4.375 0m-6.25-1.876a2.187 2.187 0 1 0 4.374 0 2.187 2.187 0 0 0-4.374 0m5.215-4.994-.455-.395-.152.019q-.236.029-.471.029c-1.71 0-3.1-1.115-3.1-2.486 0-1.37 1.39-2.485 3.1-2.485s3.1 1.115 3.1 2.485c0 .683-.34 1.32-.959 1.795l-.198.152.091.26a5 5 0 0 0 .816 1.46 3.6 3.6 0 0 1-1.772-.834"
                ></path>
              </svg>
            </div>
            <span>Calendly Community</span>
          </a>
          <a href="/newsroom" className={styles.submenuItem}>
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
                  d="M6.178 4.055a5.3 5.3 0 0 0-2.058 2.06M5.48 1.75a5.42 5.42 0 0 0-3.73 3.73M4.25 15.5h12.5M16.75 15.5s-1.25-1.088-1.25-5c0-3.125-2.135-5.89-5-5.89s-5 2.765-5 5.89c0 3.932-1.25 5-1.25 5M11.75 18a1.25 1.25 0 0 1-2.5 0M10.5 4.61V3M14.822 4.055a5.325 5.325 0 0 1 2.058 2.06M15.52 1.75a5.42 5.42 0 0 1 3.73 3.73"
                ></path>
              </svg>
            </div>
            <span>Newsroom</span>
          </a>
          <a href="/contact-us" className={styles.submenuItem}>
            <div className={styles.iconWrapper}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="20"
                fill="none"
                viewBox="0 0 21 20"
              >
                <g clip-path="url(#contact-us_svg__a)">
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.25"
                    d="M13.499 4.08c-.977-1.737-3.16-2.949-5.69-2.949-3.437 0-6.235 2.24-6.235 4.991 0 1.37.684 2.65 1.926 3.602l.422.324-.193.55a10.1 10.1 0 0 1-1.596 2.889 7.3 7.3 0 0 0 2.383-.883m10.604 4.499-.97-.841-.324.04q-.5.06-1.003.06c-3.64 0-6.603-2.374-6.603-5.292s2.962-5.293 6.603-5.293 6.602 2.375 6.602 5.293c0 1.454-.725 2.811-2.042 3.822l-.422.324.194.552c.4 1.127.987 2.178 1.737 3.11a7.7 7.7 0 0 1-3.772-1.776"
                  ></path>
                </g>
                <defs>
                  <clipPath id="contact-us_svg__a">
                    <path fill="#fff" d="M.5 0h20v20H.5z"></path>
                  </clipPath>
                </defs>
              </svg>
            </div>
            <span>Contact us</span>
          </a>
        </div>
      </div>
    </div>
  );
}
