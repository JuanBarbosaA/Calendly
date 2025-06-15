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
    svgElement: (
<svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 21C2 12.0433 2 7.56497 4.78249 4.78249C7.56497 2 12.0433 2 21 2C29.9567 2 34.435 2 37.2175 4.78249C40 7.56497 40 12.0433 40 21C40 29.9567 40 34.435 37.2175 37.2175C34.435 40 29.9567 40 21 40C12.0433 40 7.56497 40 4.78249 37.2175C2 34.435 2 29.9567 2 21Z"/>
</svg>

    )
  },
  {
    title: "Automated workflows",
    description:
      "Boost attendance and save time by automating reminders and follow-ups.",
    image:
      "https://images.ctfassets.net/k0lk9kiuza3o/1vuFcHteLk5TuZWZ7yObab/cd0adef7bd321a95c7be4a6b7645275c/automated-workflows.png?w=1300&q=85&fm=webp",
    fill2: "#17e886",
    fill1: "#8247f5",
    svgElement: (
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.4166 8.81019C15.956 4.27006 18.7257 2 22 2C25.2743 2 28.044 4.27006 33.5834 8.81019L34.0969 9.23106C38.6679 12.9775 40.9535 14.8508 41.7256 17.4826C42.4977 20.1144 41.579 22.9005 39.7418 28.4728L39.3767 29.5803C37.4147 35.5309 36.4337 38.5062 34.0528 40.2109C30.7516 42.5745 25.8007 41.9156 22 41.9156C15.651 41.9156 12.3281 41.9156 9.94719 40.2109C7.56629 38.5062 6.58531 35.5309 4.62335 29.5803L4.25819 28.4728C2.42096 22.9005 1.50235 20.1144 2.27444 17.4826C3.04653 14.8508 5.33206 12.9775 9.90313 9.23106L10.4166 8.81019Z"/>
</svg>

    )
  },
  {
    title: "Routing forms",
    description:
      "Instantly qualify, route, and schedule meetings with high-value leads and customers directly from your website.",
    image:
      "https://images.ctfassets.net/k0lk9kiuza3o/2ijgJMButHncsLDY2UP69j/55201c3e9464768da348f3870c568659/routing-forms.png?w=1300&q=85&fm=webp",
    fill2: "#e45cfe",
    fill1: "#0296fa",
    svgElement:(
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.84178 9.84178C14.3167 5.36684 16.5542 3.12937 19.1714 2.39125C21.021 1.86958 22.979 1.86958 24.8286 2.39125C27.4458 3.12937 29.6833 5.36684 34.1582 9.84178C38.6332 14.3167 40.8706 16.5542 41.6088 19.1714C42.1304 21.021 42.1304 22.979 41.6088 24.8286C40.8706 27.4458 38.6332 29.6833 34.1582 34.1582C29.6833 38.6332 27.4458 40.8706 24.8286 41.6088C22.979 42.1304 21.021 42.1304 19.1714 41.6088C16.5542 40.8706 14.3167 38.6332 9.84178 34.1582C5.36684 29.6833 3.12937 27.4458 2.39125 24.8286C1.86958 22.979 1.86958 21.021 2.39125 19.1714C3.12937 16.5542 5.36684 14.3167 9.84178 9.84178Z" stroke-linejoin="round"/>
</svg>

    )
  },
  {
    title: "Round robin & collective events",
    description:
      "Pool your team’s schedule together to offer more booking options to customers, or automatically combine availability to quickly schedule co-hosted calls.",
    image:
      "https://images.ctfassets.net/k0lk9kiuza3o/40aRs6uM1YUnskc2QlfDiE/14bf54633276ffada01e01c52ad4ea70/round-robin-event-type.png?w=1300&q=85&fm=webp",
    fill2: "#ffa600",
    fill1: "#e25bfc",
    svgElement: (
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 26.0294V17.9706C2 15.5181 2 14.2918 2.45672 13.1892C2.91345 12.0866 3.78054 11.2195 5.51472 9.48528L9.48528 5.51472C11.2195 3.78054 12.0866 2.91345 13.1892 2.45672C14.2918 2 15.5181 2 17.9706 2H26.0294C28.4819 2 29.7082 2 30.8108 2.45672C31.9134 2.91345 32.7805 3.78054 34.5147 5.51472L38.4853 9.48528C40.2195 11.2195 41.0866 12.0866 41.5433 13.1892C42 14.2918 42 15.5181 42 17.9706V26.0294C42 28.4819 42 29.7082 41.5433 30.8108C41.0866 31.9134 40.2195 32.7805 38.4853 34.5147L34.5147 38.4853C32.7805 40.2195 31.9134 41.0866 30.8108 41.5433C29.7082 42 28.4819 42 26.0294 42H17.9706C15.5181 42 14.2918 42 13.1892 41.5433C12.0866 41.0866 11.2195 40.2195 9.48528 38.4853L5.51472 34.5147C3.78054 32.7805 2.91345 31.9134 2.45672 30.8108C2 29.7082 2 28.4819 2 26.0294Z" stroke-linecap="round"/>
</svg>

    )
  },
  {
    title: "Admin management",
    description:
      "Team admins enjoy tools to streamline onboarding, ensure consistency, track scheduling trends, maintain security standards, and more.",
    image:
      "https://images.ctfassets.net/k0lk9kiuza3o/5kgji1h0K6IKMLEG3H5lSN/6020f1dd17d1d9f2d45205ada794445c/admin-management.png?w=1300&q=85&fm=webp",
    fill2: "#17e886",
    fill1: "#8046f2",
    svgElement: (
      <svg width="40" height="44" viewBox="0 0 40 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.6862 5.60423C15.7436 3.20141 17.7723 2 20 2C22.2277 2 24.2564 3.20141 28.3138 5.60423L29.6862 6.41691C33.7436 8.81973 35.7723 10.0211 36.8862 12C38 13.9789 38 16.3817 38 21.1873V22.8127C38 27.6183 38 30.0211 36.8862 32C35.7723 33.9789 33.7436 35.1803 29.6862 37.5831L28.3138 38.3958C24.2564 40.7986 22.2277 42 20 42C17.7723 42 15.7436 40.7986 11.6862 38.3958L10.3138 37.5831C6.25641 35.1803 4.22769 33.9789 3.11384 32C2 30.0211 2 27.6183 2 22.8127V21.1873C2 16.3817 2 13.9789 3.11384 12C4.22769 10.0211 6.25641 8.81973 10.3138 6.41691L11.6862 5.60423Z"/>
</svg>

    )
  },
];


export default function HowItWorksSteps() {
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
                    : `${styles.stepItemInactive} ${styles[`step${index + 1}`]}`
                }`}
              >
                <button onClick={() => handleClick(index)}>
                  <div
                    className={
                      isActive ? styles.stepIconActive : styles.stepIconInactive
                    }
                  >
                    {step.svgElement}
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
