import { useState, useEffect } from "react";
import styles from "./Hero.module.css";

export default function Hero() {
  const [activeCardIndex, setActiveCardIndex] = useState(0); 

  const cards = [
    {
      title: "Share your booking page",
      description:
        "Share your scheduling link directly with invitees, or embed your availability in an email or on your website.",
      image:
        "https://marketing-assets.calendly.com/_next/static/media/share-booking-page.382f2a71.webp",
    },
    {
      title: "Reduce no-shows and stay on track",
      description:
        "Schedule meeting reminders, follow-up emails, or SMS messages to improve meeting attendance and results.",
      image:
        "https://marketing-assets.calendly.com/_next/static/media/reduce-no-shows.a37b2e31.webp",
    },
  ];


    useEffect(() => {
    const interval = setInterval(() => {
      setActiveCardIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, 8000); // 8000ms = 8 segundos

    return () => clearInterval(interval); // limpiar el intervalo al desmontar
  }, [cards.length]);


  return (
    <section className={styles.hero}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1578"
        height="1286"
        viewBox="0 0 1578 1286"
        fill="none"
        className={styles.backgroundSvg}
      >
        <path
          d="M1095.14 290.82C987.352 269.254 874.719 327.964 834.942 438.111C797.458 541.915 841.045 659.741 937.044 714.078C1038.16 771.355 1160.58 743.493 1228.68 658.816C1336.47 680.383 1449.1 621.672 1488.88 511.525C1526.36 407.722 1482.78 289.896 1386.78 235.558C1285.71 178.302 1163.29 206.164 1095.14 290.82Z"
          className={styles.animatedPath1}
        />
        <path
          d="M740.199 -141.7L1209.73 -33.2747C1240.97 -26.0606 1260.44 5.10148 1253.22 36.3415L1144.8 505.868C1133.17 556.223 1066.43 567.428 1039.02 523.561L677.918 -54.3902C650.51 -98.2564 689.798 -153.338 740.199 -141.7Z"
          className={styles.animatedPath2}
        />
      </svg>

      <div className={styles.heroContent}>
        <div className={styles.heroText}>
          <h1 className={styles.title}>Easy scheduling ahead</h1>
          <p className={styles.paragraph}>
            Join 20 million professionals who easily book meetings with the #1
            scheduling tool.
          </p>
          <div className={styles.heroButtons}>
            <div className={styles.buttons}>
              <div>
                <button className={styles.buttonGoogle}>
                  <div>
                    <img
                      src="https://calendly.com/media/googleLogo.svg"
                      alt="Google logo"
                    />
                  </div>
                  <span>Sign up with Google</span>
                </button>
              </div>
              <div>
                <button className={styles.buttonMicrosoft}>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="41"
                      fill="none"
                      viewBox="0 0 40 41"
                    >
                      <rect width="40" height="40" y="0.5" fill="#fff" rx="4" />
                      <path
                        fill="#FEBA08"
                        d="M21.023 21.523H31.25V31.75H21.023z"
                      />
                      <path
                        fill="#05A6F0"
                        d="M8.75 21.523h10.227V31.75H8.75z"
                      />
                      <path
                        fill="#80BC06"
                        d="M21.023 9.25H31.25v10.227H21.023z"
                      />
                      <path fill="#F25325" d="M8.75 9.25h10.227v10.227H8.75z" />
                    </svg>
                  </div>
                  <span>Sign up with Microsoft</span>
                </button>
              </div>
            </div>
            <div className={styles.division}>
              <hr />
              <span>OR</span>
              <hr />
            </div>
            <div className={styles.emailSignupBox}>
              <div>
                <a href="">Sign up free with email.</a>
              </div>
              <div>
                <span>No credit card required</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.heroGraphic}>
          {cards.map((card, index) => (
            <div
              key={index}
              className={`${styles.containerCard} ${
                activeCardIndex === index ? styles.active : ""
              }`}
            >
              <div className={styles.card}>
                <div className={styles.headerCard}>
                  <h4>{card.title}</h4>
                  <p>{card.description}</p>
                </div>
                <img
                  alt={card.title}
                  loading="eager"
                  width="1318"
                  height="658"
                  decoding="async"
                  src={card.image}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
