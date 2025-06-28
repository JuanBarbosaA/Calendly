import { useEffect, useState } from "react";
import styles from "./Header.module.css";
import ProductMenu from "./ProductMenu";
import SolutionsMenu from "./SolutionsMenu";
import ResourcesMenu from "./ResourcesMenu";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hideTopBar, setHideTopBar] = useState(false);
  const [isMenuMobileOpen, setIsMenuMobileOpen] = useState(false);

  useEffect(() => {
    let timeout;
    const handleScroll = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setHideTopBar(window.scrollY > 240);
      }, 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = (menu) => {
    if (isMenuOpen === menu) {
      setIsMenuOpen(null);
    } else {
      setIsMenuOpen(menu);
    }
  };

  const toggleMobileMenu = () => {
    setIsMenuMobileOpen(!isMenuMobileOpen);
  };

  const closeMobileMenu = () => {
    setIsMenuMobileOpen(false);
  };

  const renderDropdownMenu = () => {
    if (!isMenuOpen) return null;

    return (
      <div className={styles.dropdownMenu}>
        {isMenuOpen === "product" && <ProductMenu />}
        {isMenuOpen === "solutions" && <SolutionsMenu />}
        {isMenuOpen === "resources" && <ResourcesMenu />}
      </div>
    );
  };

  return (
    <header>
      <div className={`${styles.headerTop} ${hideTopBar ? styles.hidden : ""}`}>
        <div className={styles.container}>
          <div className={styles.headerTopContent}>
            <div className={styles.language}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 16 16"
              >
                <circle cx="8.017" cy="7.973" r="7.314" strokeWidth="0.833" />
                <path
                  strokeWidth="0.833"
                  d="M8.147.92c5.347 3.08 5.335 10.808 0 13.91M8.017 1.018c-5.347 3.08-5.335 10.808 0 13.91M15.135 7.908H.964"
                />
                <path
                  strokeWidth="0.833"
                  d="m2.792 3.14.071.065a7.55 7.55 0 0 0 10.247-.064M2.89 12.74l.071-.065a7.55 7.55 0 0 1 10.247.065M8.017.92v14.106"
                />
              </svg>

              <span>English</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 15 8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.25"
                  d="m1.5 1 6 6 6-6"
                />
              </svg>
            </div>
            <span>Talk to sales</span>
          </div>
        </div>
      </div>

      <div
        className={styles.wrapperBottom}
        onMouseLeave={() => setIsMenuOpen(null)}
      >
        <div className={styles.container}>
          <div className={styles.headerBottom}>
            <a href="#">
              <img src="./logo.png" height={55} alt="Logo" />
            </a>
            <ul className={styles.menuDesktop}>
              <li
                onMouseEnter={() => setIsMenuOpen("product")} // hover abre el menú
                onClick={() => toggleMenu("product")} // click toggle (abre/cierra)
                className={isMenuOpen === "product" ? styles.active : ""}
              >
                <a>
                  Product
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 15 8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.25"
                        d="m1.5 1 6 6 6-6"
                      />
                    </svg>
                  </button>
                  <span className={styles.animationLine}></span>
                </a>
              </li>

              <li
                onMouseEnter={() => setIsMenuOpen("solutions")} // hover abre el menú
                onClick={() => toggleMenu("solutions")} // click toggle (abre/cierra)
                className={isMenuOpen === "solutions" ? styles.active : ""}
              >
                <a>
                  Solutions
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 15 8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.25"
                        d="m1.5 1 6 6 6-6"
                      />
                    </svg>
                  </button>
                  <span className={styles.animationLine}></span>
                </a>
              </li>
              <li>
                <a>Enterprise</a>
              </li>
              <li
                onMouseEnter={() => setIsMenuOpen("resources")} // hover abre el menú
                onClick={() => toggleMenu("resources")} // click toggle (abre/cierra)
                className={isMenuOpen === "resources" ? styles.active : ""}
              >
                <li
                  onMouseEnter={() => toggleMenu("solutions")}
                  onClick={() => setIsMenuOpen(null)} // cierre con click
                  className={isMenuOpen === "solutions" ? styles.active : ""}
                ></li>
                <a>
                  Resources
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 15 8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.25"
                        d="m1.5 1 6 6 6-6"
                      />
                    </svg>
                  </button>
                  <span className={styles.animationLine}></span>
                </a>
              </li>
              <li>
                <a>Pricing</a>
              </li>
            </ul>

            <div className={styles.authButtons}>
              <div>
                <button className={styles.login}>Log In</button>
              </div>
              <div>
                <button className={styles.getStarted}>Get started</button>
              </div>
              <div className={styles.hamburgerMenu} onClick={toggleMobileMenu}>
                <div className={styles.estilosMenu1}></div>
                <div className={styles.estilosMenu2}></div>
              </div>
            </div>
          </div>
        </div>
        {renderDropdownMenu()}
      </div>

      {isMenuMobileOpen && (
        <ul className={styles.menuMobileOpen}>
          <div className={styles.wrapperMenuMobile}>
            <li onClick={closeMobileMenu}>
              <a href="/features">
                Product
              </a>
            </li>
            <li className={styles.arrow}>
              <a href="/solutions">
                Solutions
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 13 7"
                >
                  <path
                    fill="currentColor"
                    d="M5.843.256a.97.97 0 0 1 1.314 0l5.571 5.25a.84.84 0 0 1 0 1.238.97.97 0 0 1-1.313 0L6.5 2.112 1.585 6.744a.97.97 0 0 1-1.313 0 .84.84 0 0 1 0-1.238z"
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </li>
            <li onClick={closeMobileMenu}>
              <a
                href="/solutions/enterprise"
              >
                Enterprise
              </a>
            </li>
            <li onClick={closeMobileMenu}>
              <a href="/pricing">
                Pricing
              </a>
            </li>
            <li className={styles.arrow}>
              <a href="/resources">
                Resources
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 13 7"
                >
                  <path
                    fill="currentColor"
                    d="M5.843.256a.97.97 0 0 1 1.314 0l5.571 5.25a.84.84 0 0 1 0 1.238.97.97 0 0 1-1.313 0L6.5 2.112 1.585 6.744a.97.97 0 0 1-1.313 0 .84.84 0 0 1 0-1.238z"
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </li>
          </div>
          <div className={styles.containerButtons}>
            <li className={styles.skip}>
              <a className={styles.login}
                href="/login"
              >
                <span>Log In</span>
              </a>
            </li>
            <li className={styles.skip}>
              <div>
                <a
                className={styles.signup}
                  href="/signup"
                >
                  <span>Get started</span>
                </a>
              </div>
            </li>
          </div>
        </ul>
      )}
    </header>
  );
}
