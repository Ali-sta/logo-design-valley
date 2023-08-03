import React, { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from 'next/link'
import styles from './ResponsiveMenu.module.scss'
import { HiMenuAlt3 } from "react-icons/hi";
import { GrClose } from "react-icons/gr";
import { IoIosArrowDown } from "react-icons/io";


function ResponsiveMenu() {
    
    
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [subMenuOpen, setSubMenuOpen] = useState(false);
    const [subInnerMenuOpen, setSubInnerMenuOpen] = useState(false);
    const router = useRouter();
    const handleMenuToggle = () => {
        setMenuOpen(!isMenuOpen);
      };
    
      const handleSubMenuToggle = () => {
        setSubMenuOpen(!subMenuOpen);
      };
  return (
    <Fragment>
    <div className={styles["responsiveContent"]}>
      <div className={styles["hamburgerMenu"]} onClick={handleMenuToggle}>
        <HiMenuAlt3 />
      </div>
      <div
        className={`${styles["sideBurgerMenu"]} ${isMenuOpen ? `${styles["open"]}` : ""
        }`}
      >
        <button className={styles["closeButton"]} onClick={handleMenuToggle}>
          <GrClose />
        </button>
        <div className={styles["menuWrapper"]}>
          <ul className={styles["menuContent"]}>
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/about-us"}>About Us</Link>
            </li>
            <li>
              <Link href={"/case-studies"}>Case Studies</Link>
            </li>
            <li>
              <Link href={"#"}>Careers</Link>
            </li>
            <li>
              <Link href={"#"}>Blog</Link>
            </li>
            <li>
              <Link href={"/contact-us"}>Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </Fragment>
  )
}

export default ResponsiveMenu
