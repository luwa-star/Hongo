import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { faUser, faHeart } from "@fortawesome/free-regular-svg-icons";
import styles from "../styles/Nav.module.css";
import logo from "../public/white-logo-2x.png";

const Navbar = () => {
  const [expandNav, setExpandNav] = useState(false);
  //OPEN MENU
  const mobileMenu = () => {
    setExpandNav(!expandNav);
  };

  return (
    <nav
      className={
        expandNav
          ? `${styles.navBar_wrapper} ${styles.slideOpen}`
          : `${styles.navBar_wrapper}`
      }
    >
      <div className={styles.navbar}>
        <Link href="/">
          <Image src={logo} alt="hongo" className={styles.navLogo} />
        </Link>

        <ul className={`${styles.navLinksContainer}`}>
          <li className={styles.navItem}>
            <Link href="/" className={styles.navLink}>
              Home
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/" className={styles.navLink}>
              Shop
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/" className={styles.navLink}>
              Sale
            </Link>
          </li>
        </ul>

        <div
          className={
            expandNav
              ? `${styles.hamburger} ${styles.active}`
              : `${styles.hamburger}`
          }
          onClick={mobileMenu}
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </div>

        <div className={styles.navTabs}>
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            color="#fff"
            size="sm"
            style={{ marginLeft: 12, cursor: "pointer" }}
          />
          <FontAwesomeIcon
            icon={faUser}
            color="#fff"
            size="sm"
            style={{ marginLeft: 12, cursor: "pointer" }}
          />
          <div className={`${styles.heartWrapper}`}>
            <FontAwesomeIcon
              icon={faHeart}
              color="#fff"
              size="sm"
              style={{ marginLeft: 12, cursor: "pointer" }}
            />
          </div>
          <div className={`${styles.cartWrapper}`}>
            <FontAwesomeIcon
              icon={faCartShopping}
              color="#fff"
              size="sm"
              style={{ marginLeft: 12, cursor: "pointer" }}
            />
            <div className={styles.cartDot}>
              <p className={styles.cartNumber}>0</p>
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          expandNav
            ? `${styles.menuWrapper} ${styles.menuSlide}`
            : `${styles.menuWrapper}`
        }
      >
        <ul
          className={
            expandNav
              ? `${styles.mobile_navLinksContainer} ${styles.open}`
              : `${styles.mobile_navLinksContainer}`
          }
        >
          <li
            className={
              expandNav
                ? `${styles.navItem} ${styles.navItemOpen}`
                : `${styles.navItem}`
            }
          >
            <Link href="/" className={styles.navLink}>
              Home
            </Link>
          </li>
          <li
            className={
              expandNav
                ? `${styles.navItem} ${styles.navItemOpen}`
                : `${styles.navItem}`
            }
          >
            <Link href="/" className={styles.navLink}>
              Shop
            </Link>
          </li>
          <li
            className={
              expandNav
                ? `${styles.navItem} ${styles.navItemOpen}`
                : `${styles.navItem}`
            }
          >
            <Link href="/" className={styles.navLink}>
              Sale
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
