import { useEffect, useRef, useState } from "react";
import styles from "./MoreThanSchedulingSteps.module.css";

const steps = [
  {
    title: "Browser extensions",
    description:
      "Quickly find and share scheduling links from your inbox, LinkedIn, CRM, and more.",
    image:
      "https://images.ctfassets.net/k0lk9kiuza3o/6IbDHoNOt424YzPKbkOF6t/f08fa09b84e23c958f6e17b8610d0c90/browser-extensions.png?w=1300&q=85&fm=webp",
    fill2: "#e55cff",
    fill1: "#0196fa",
  },
  {
    title: "Automated workflows",
    description:
      "Boost attendance and save time by automating reminders and follow-ups.",
    image:
      "https://images.ctfassets.net/k0lk9kiuza3o/1vuFcHteLk5TuZWZ7yObab/cd0adef7bd321a95c7be4a6b7645275c/automated-workflows.png?w=1300&q=85&fm=webp",
    fill2: "#17e886",
    fill1: "#8247f5",
  },
  {
    title: "Routing forms",
    description:
      "Instantly qualify, route, and schedule meetings with high-value leads and customers directly from your website.",
    image:
      "https://images.ctfassets.net/k0lk9kiuza3o/2ijgJMButHncsLDY2UP69j/55201c3e9464768da348f3870c568659/routing-forms.png?w=1300&q=85&fm=webp",
    fill2: "#e45cfe",
    fill1: "#0296fa",
  },
  {
    title: "Round robin & collective events",
    description:
      "Pool your team’s schedule together to offer more booking options to customers, or automatically combine availability to quickly schedule co-hosted calls.",
    image:
      "https://images.ctfassets.net/k0lk9kiuza3o/40aRs6uM1YUnskc2QlfDiE/14bf54633276ffada01e01c52ad4ea70/round-robin-event-type.png?w=1300&q=85&fm=webp",
    fill2: "#ffa600",
    fill1: "#e25bfc",
  },
  {
    title: "Admin management",
    description:
      "Team admins enjoy tools to streamline onboarding, ensure consistency, track scheduling trends, maintain security standards, and more.",
    image:
      "https://images.ctfassets.net/k0lk9kiuza3o/5kgji1h0K6IKMLEG3H5lSN/6020f1dd17d1d9f2d45205ada794445c/admin-management.png?w=1300&q=85&fm=webp",
    fill2: "#17e886",
    fill1: "#8046f2",
  },
];

export default function MoreThanSchedulingSteps() {
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
