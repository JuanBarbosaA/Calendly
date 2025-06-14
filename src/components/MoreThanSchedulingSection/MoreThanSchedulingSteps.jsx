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
  const [flash, setFlash] = useState(false)

  const triggerFlash = () => {
    setFlash(true);
    setTimeout(() => setFlash(false), 800); // Duración de la animación
  };

  const startAutoAdvance = (fromIndex = 0) => {
    clearInterval(intervalRef.current);
    setActiveIndex(fromIndex);
    triggerFlash();
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => {
        const next = (prev + 1) % steps.length;
        triggerFlash();
        return next;
      });
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
          {steps.map((step, index) => {
            const isActive = index === activeIndex;
            return (
              <div
                key={index}
                className={`${
                  isActive
                    ? `${styles.stepItemActive} ${styles[`step${index + 1}`]}`
                    : styles.stepItemInactive
                }`}
              >
                <button onClick={() => handleClick(index)}>
                  <div
                    className={
                      isActive ? styles.stepIconActive : styles.stepIconInactive
                    }
                  >
                    <img
                      className={
                        isActive
                          ? styles.stepIconImageActive
                          : styles.stepIconImageInactive
                      }
                      src="/logo1.svg"
                      alt="icon"
                    />
                  </div>
                  <h3
                    className={
                      isActive
                        ? styles.stepTitleActive
                        : styles.stepTitleInactive
                    }
                  >
                    {step.title}
                  </h3>
                </button>
                <div
                  className={`${styles.stepDescriptionWrapper} ${
                    isActive
                      ? styles.stepDescriptionVisible
                      : styles.stepDescriptionHidden
                  }`}
                >
                  <div className={styles.stepDescription}>
                    <p>{step.description}</p>
                    <div className={styles.containerViewAll}>
                                    <a href="">
                                      <span className={styles.viewAllText}>Learn more</span>
                                      <span className={styles.viewAllIcon}>
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
              </div>
            );
          })}
        </div>

        <div className={styles.stepImageContainer}>

          {flash && <div className={styles.flashOverlay}></div>}
          <div className={styles.stepImageContent}>
            <svg
              width="650"
              height="650"
              viewBox="0 0 650 650"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill={steps[activeIndex].fill1}
                d="M416.106 455.201C329.303 380.335 196.923 375.87 104.313 455.476C17.0374 530.499 -3.82247 659.835 55.4699 758.41C117.902 862.279 243.339 899.77 348.61 857.821C435.413 932.687 567.792 937.151 660.403 857.546C747.678 782.523 768.538 653.187 709.245 554.611C646.844 450.785 521.407 413.294 416.106 455.201Z"
              />
              <path
                fill={steps[activeIndex].fill2}
                d="M83.37 -406.085L537.482 9.53107C567.697 37.1842 569.772 84.0782 542.119 114.293L126.503 568.405C81.9305 617.106 0.655332 587.633 -2.2665 521.621L-40.7624 -348.107C-43.6843 -414.118 34.6239 -450.699 83.37 -406.085Z"
              />
            </svg>

            <div>
              <img
                src={steps[activeIndex].image}
                alt={steps[activeIndex].title}
                width="650"
                height="650"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
