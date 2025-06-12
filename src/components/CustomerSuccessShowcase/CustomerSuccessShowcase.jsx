import { useState, useEffect, useRef } from "react";
import styles from "./CustomerSuccessShowcase.module.css";

export default function CustomerSuccessShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const carouselRef = useRef(null);
  const totalCards = 5;

  const cardsData = [
    {
      headerImg:
        "https://images.ctfassets.net/k0lk9kiuza3o/1ofedJdNCvuUawxTPCMH5X/e7de389fb655b08e4bfe013e0b3b263c/hackerone-customer-logo.svg",
      text: "return on investment",
        percent: "169%",
      percentColor: "#0b3558",
      svgColor: "#0b3558",
      svgElement: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path
            fill="#0b3558"
            fillRule="nonzero"
            d="M256 0c70.69 0 134.69 28.66 181.02 74.98C483.34 121.31 512 185.31 512 256c0 70.69-28.66 134.69-74.98 181.02C390.69 483.34 326.69 512 256 512c-70.69 0-134.69-28.66-181.02-74.98C28.66 390.69 0 326.69 0 256c0-70.69 28.66-134.69 74.98-181.02C121.31 28.66 185.31 0 256 0z"
          />
        </svg>
      ),
    },
    {
      headerImg:
        "https://images.ctfassets.net/k0lk9kiuza3o/2H4GbF1jpOyD7cNMW0Dv82/85a232765d647c41403ca471fe76589d/VonageLogo.svg",
      text: "increase in customers reached",
        percent: "160%",
      percentColor: "#0f62fe",
      svgColor: "#0f62fe",
      svgElement: (
        <svg
          width="100"
          height="100"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0)">
            <path
              d="M75 26.59C75 26.59 74.96 26.59 74.94 26.59C74.97 26.06 75 25.53 75 25C75 11.19 63.81 0 50 0C36.19 0 25 11.19 25 25C25 25.54 25.02 26.07 25.06 26.59C25.04 26.59 25.02 26.59 25 26.59C11.19 26.59 0 37.79 0 51.59C0 65.39 11.19 76.59 25 76.59H75C88.81 76.59 100 65.39 100 51.59C100 37.79 88.81 26.59 75 26.59Z"
              fill="#0f62fe"
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="100" height="100" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
    },
    {
      headerImg:
        "https://images.ctfassets.net/k0lk9kiuza3o/5trcQYofBXN8gU0XaA28sp/e49794d2f98145b5f05d1f256471d904/texas-ut-austin-customer-logo__1_.svg",
      text: "decrease in scheduling errors",
        percent: "20%",
      percentColor: "#000000",
      svgColor: "#ffa600",
      svgElement: (
        <svg
          width="200"
          height="200"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_2_775)">
            <mask
              id="mask0_2_775"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="200"
              height="200"
            >
              <path d="M200 0H0V200H200V0Z" fill="white" />
            </mask>
            <g mask="url(#mask0_2_775)">
              <path
                d="M127.14 200C99.9942 200 99.9943 167.423 72.8487 167.423C41.6048 167.423 0 158.386 0 127.133C0 99.9885 32.5678 99.9885 32.5678 72.8445C32.5678 41.6139 41.6048 0 72.8602 0C100.006 0 100.006 32.5774 127.151 32.5774C158.384 32.5774 200 41.6139 200 72.8675C200 100.012 167.421 100.012 167.421 127.156C167.409 158.444 158.384 200 127.14 200Z"
                fill="#ffa600"
              />
            </g>
          </g>
          <defs>
            <clipPath id="clip0_2_775">
              <rect width="200" height="200" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
    },
    {
      headerImg:
        "https://images.ctfassets.net/k0lk9kiuza3o/3zwo2G52Oesw4fGwaVbfD/f1f10b06f921116e29c63f5e13f1ce09/muck-rack-stacked.svg",
      
      text: "reduction in time-to-hire",  percent: "8 days",
      percentColor: "#bb32d5",
      svgColor: "#bb32d5",
      svgElement: (
        <svg
          width="100"
          height="100"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_2_779)">
            <mask
              id="mask0_2_779"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="200"
              height="200"
            >
              <path d="M200 0H0V200H200V0Z" fill="white" />
            </mask>
            <g mask="url(#mask0_2_779)">
              <path
                d="M139.997 139.994C220.001 220.002 -20.0011 220.002 60.0033 139.994C-20.0011 220.002 -20.0011 -19.9992 60.0033 59.9975C-20.0011 -19.9992 220.001 -19.9992 139.997 59.9975C220.001 -19.9992 220.001 220.002 139.997 139.994Z"
                fill="#bb32d5"
              />
            </g>
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_2_779"
              x1="100"
              y1="2.5e-05"
              x2="100"
              y2="200"
              gradientUnits="userSpaceOnUse"
            >
              <stop />
              <stop offset="1" />
            </linearGradient>
            <clipPath id="clip0_2_779">
              <rect width="200" height="200" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
    },
    {
      headerImg:
        "https://images.ctfassets.net/k0lk9kiuza3o/3lMFqkCeuVHwuy231bQ6YT/10161e4658bcba0afae60e0da77ce586/smith-ai-customer-logo.svg",
      text: "increase in website bookings",
        percent: "26%",
      percentColor: "#8247f5",
      svgColor: "#8247f5",
      svgElement: (
        <svg
          width="200"
          height="200"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_2_715)">
            <mask
              id="mask0_2_715"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="200"
              height="200"
            >
              <path d="M200 0H0V200H200V0Z" fill="white" />
            </mask>
            <g mask="url(#mask0_2_715)">
              <path
                d="M71.5579 16.3347C84.3365 -5.4449 115.825 -5.44489 128.603 16.3347L129.067 17.1257C134.963 27.1733 145.709 33.378 157.358 33.4596L158.276 33.466C183.527 33.6428 199.271 60.9123 186.798 82.8687L186.345 83.6661C180.591 93.7953 180.591 106.205 186.345 116.334L186.798 117.131C199.271 139.088 183.527 166.357 158.276 166.534L157.358 166.54C145.709 166.622 134.963 172.827 129.067 182.874L128.603 183.665C115.825 205.445 84.3365 205.445 71.5579 183.665L71.0938 182.874C65.1986 172.827 54.4517 166.622 42.8027 166.54L41.8856 166.534C16.6346 166.357 0.890609 139.088 13.3629 117.131L13.8159 116.334C19.5698 106.205 19.5698 93.7953 13.8159 83.6661L13.3629 82.8687C0.890609 60.9123 16.6346 33.6428 41.8856 33.466L42.8027 33.4596C54.4518 33.378 65.1986 27.1733 71.0938 17.1257L71.5579 16.3347Z"
                fill="#8247f5"
              />
            </g>
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_2_715"
              x1="100.081"
              y1="-3.75e-06"
              x2="100.081"
              y2="200"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="1" />
            </linearGradient>
            <clipPath id="clip0_2_715">
              <rect width="200" height="200" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
    },
  ];

  useEffect(() => {
    if (carouselRef.current) {
      const card = carouselRef.current.querySelector(`.${styles.card}`);
      if (card) {
        const cardStyle = window.getComputedStyle(card);
        const cardWidthValue = card.offsetWidth;
        const gapValue = parseInt(cardStyle.marginRight);
        setCardWidth(cardWidthValue + gapValue);
      }
    }
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(0, prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => Math.min(totalCards - 1, prevIndex + 1));
  };

  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <div className={styles.containerHeaderTitle}>
            <h2 className={styles.headerTitle}>
              Discover how businesses grow with Calendly
            </h2>
          </div>
          <div className={styles.containerInfo}>
            <div className={styles.containerCustomerStories}>
              <a href="#">
                <span>View customer stories</span>
                <span className={styles.icon}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className={styles.banner}>
          <div className={styles.bannerContent}>
            <div className={styles.container}>
              <div className={styles.containerPagination}>
                <nav className={styles.pagination}>
                  <button
                    onClick={handlePrev}
                    disabled={currentIndex === 0}
                    className={`${styles.navButton} ${
                      currentIndex === 0 ? styles.disabled : ""
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M4.167 10h11.666M10 4.167 15.833 10 10 15.833"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.25"
                      />
                    </svg>
                  </button>
                  <button
                    onClick={handleNext}
                    disabled={currentIndex === totalCards - 1}
                    className={`${styles.navButton} ${
                      currentIndex === totalCards - 1 ? styles.disabled : ""
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M4.167 10h11.666M10 4.167 15.833 10 10 15.833"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.25"
                      />
                    </svg>
                  </button>
                </nav>
              </div>
              <div className={styles.bannerItemsCarrouselCards}>
                <div
                  className={styles.carrouselCards}
                  ref={carouselRef}
                  style={{
                    transform: `translateX(-${currentIndex * cardWidth}px)`,
                  }}
                >
                  {cardsData.map((card, index) => (
                    <div key={index} className={styles.card}>
                      <a href="#">
                        <div className={styles.cardName}>
                          <div className={styles.containerImages}>
                            <div className={styles.contentImages}>
                              <img
                                decoding="async"
                                loading="lazy"
                                alt="header-image"
                                src={card.headerImg}
                                className={styles.whiteSvg}
                              />
                            </div>
                           
                          </div>
                        </div>
                        <div className={styles.cardContent}>
                          <p
                            className={styles.percent}
                            style={{ color: card.percentColor }}
                          >
                            <span>{card.percent}</span>
                          </p>
                          <div className={styles.containerInfo}>
                            <div className={styles.containerInfoText}>
                              <p>{card.text}</p>
                            </div>
                            <button>
                              <span>Read now</span>
                              <span className={styles.icon}>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <line x1="5" y1="12" x2="19" y2="12" />
                                  <polyline points="12 5 19 12 12 19" />
                                </svg>
                              </span>
                            </button>
                          </div>
                        </div>
                        <div className={styles.cardIconAnimation}>
                          {card.svgElement}
                        </div>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
