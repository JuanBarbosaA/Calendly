import { useEffect, useRef, useState } from "react";
import styles from "./HowItWorksSteps.module.css";

const steps = [
  {
    title: "Connect your calendars",
    description:
      "Calendly connects up to six calendars to automate scheduling with real-time availability.",
    image:
      "https://images.ctfassets.net/k0lk9kiuza3o/4NxN65mDr8P3MkFqaaKE2W/39053e1843ca1e63b6ecf86b6bd50a02/connect-your-calendars.png",
    fill2: "#e55cff",
    fill1: "#0196fa",
  },
  {
    title: "Add your availability",
    description:
      "Keep invitees informed of your availability. Take control of your calendar with detailed availability settings, scheduling rules, buffers, and more.",
    image:
      "https://images.ctfassets.net/k0lk9kiuza3o/3uhXLeNh7p33JzpuSffAEF/009eef428d442a902b9f22453bcc1e04/add-your-availability.png?w=1300&q=85&fm=webp",
    fill2: "#17e886",
    fill1: "#8247f5",
  },
  {
    title: "Connect conferencing tools",
    description:
      "Sync your video conferencing tools and set preferences for in-person meetings or calls.",
    image:
      "https://images.ctfassets.net/k0lk9kiuza3o/3puzS47NYyiqZoWFiycrH9/adec1f0b941e4f40e1b0503b96ed71d5/connect-conferencing-tools.png?w=1300&q=85&fm=webp",
    fill2: "#e45cfe",
    fill1: "#0296fa",
  },
  {
    title: "Customize your event types",
    description:
      "Choose from pre-built templates or quickly create custom event types for any meeting you need to schedule.",
    image:
      "https://images.ctfassets.net/k0lk9kiuza3o/1tfXAIpnhfvJXzG7R9nqxc/0eb133b6908036371c44095751e03f88/customize-event-types.png?w=1300&q=85&fm=webp",
    fill2: "#ffa600",
    fill1: "#e25bfc",
  },
  {
    title: "Share your scheduling link",
    description:
      "Easily book meetings by embedding scheduling links on your website, landing pages, or emails.",
    image:
      "https://images.ctfassets.net/k0lk9kiuza3o/1khRzWDpK0OmjtQF04v8CM/fc02b6f92d161b1fd54f8d6ca3bd29ac/share-scheduling-link.png?w=1300&q=85&fm=webp",
    fill2: "#17e886",
    fill1: "#8046f2",
  },
];

export default function HowItWorksSteps() {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef(null);

  const startAutoAdvance = (fromIndex = 0) => {
    clearInterval(intervalRef.current);
    setActiveIndex(fromIndex);
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % steps.length);
    }, 8000);
  };

  useEffect(() => {
    startAutoAdvance(0);
    return () => clearInterval(intervalRef.current);
  }, []);

  const handleClick = (index) => {
    startAutoAdvance(index);
  };

  return (
    <div className={styles.howItWorksContainer}>
      <div className={styles.howItWorksContentWrapper}>
        <div className={styles.stepsList}>
          {steps.map((step, index) => (
            <div
              className={`${index === activeIndex ? `${styles.stepItemActive} ${styles[`step${index + 1}`]}` : styles.stepItemInactive}`}
              key={index === activeIndex ? `active-${index}` : `inactive-${index}`}
            >
              <button
                onClick={() => handleClick(index)}
                className={index === activeIndex ? styles.stepButtonActive : ""}
              >
                <div className={index === activeIndex ? styles.stepIconActive : styles.stepIconInactive}>
                  <img
                    className={index === activeIndex ? styles.stepIconImageActive : styles.stepIconImageInactive}
                    src="/logo1.svg"
                    alt="step icon"
                  />
                </div>
                <h3 className={index === activeIndex ? styles.stepTitleActive : styles.stepTitleInactive}>
                  {step.title}
                </h3>
              </button>
              {index === activeIndex && (
                <div className={styles.stepDescriptionWrapper}>
                  <div className={styles.stepDescription}>
                    <div>
                      <p>{step.description}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className={styles.stepImageContainer}>
          <div className={styles.stepImageContent}>
            <svg
              width="650"
              height="650"
              viewBox="0 0 650 650"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill={steps[activeIndex].fill1}
                className="animated-shape-01"
                style={{ mixBlendMode: "multiply", opacity: 0.8 }}
                d="M416.106 455.201C329.303 380.335 196.923 375.87 104.313 455.476C17.0374 530.499 -3.82247 659.835 55.4699 758.41C117.902 862.279 243.339 899.77 348.61 857.821C435.413 932.687 567.792 937.151 660.403 857.546C747.678 782.523 768.538 653.187 709.245 554.611C646.844 450.785 521.407 413.294 416.106 455.201Z"
              >
                <animateMotion
                  dur="20s"
                  repeatCount="indefinite"
                  path="M0,0 0,-539.08 0,0 Z"
                ></animateMotion>
              </path>
              <path
                fill={steps[activeIndex].fill2}
                className="animated-shape-02"
                style={{ mixBlendMode: "multiply", opacity: 0.8 }}
                d="M83.37 -406.085L537.482 9.53107C567.697 37.1842 569.772 84.0782 542.119 114.293L126.503 568.405C81.9305 617.106 0.655332 587.633 -2.2665 521.621L-40.7624 -348.107C-43.6843 -414.118 34.6239 -450.699 83.37 -406.085Z"
              >
                <animateMotion
                  dur="20s"
                  repeatCount="indefinite"
                  path="M0,0 0,241.45 0,0 Z"
                ></animateMotion>
              </path>
            </svg>

            <div>
              <img
                data-testid="image"
                alt={steps[activeIndex].title}
                loading="eager"
                width="1300"
                height="1300"
                decoding="async"
                src={steps[activeIndex].image}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
