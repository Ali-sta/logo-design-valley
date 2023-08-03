import React from 'react'
import styles from './Header.module.scss'
import { Container , Row , Col } from 'react-bootstrap'
import Link from 'next/link';
import { FaAccusoft, FaPhoneAlt, FaUserAlt } from "react-icons/fa";
import Image from 'next/image';
import { useRouter } from "next/router";
import { ResponsiveMenu } from '../ResponsiveMenu';
function Header(props) {
    const router = useRouter();
  return (
    <div className={styles['Header-Main']}>
        <Container>
            <Row>
                <div className={styles['Header-Sec']}>
                    <div className={styles['Socail-Links-Sec']}>
                        <div className={styles['SL-Box']}>
                            <Link href="#"><FaAccusoft/> Get a Qoute</Link>
                        </div>
                        <div className={styles['SL-Box']}>
                            <Link href="tel:+1-844-288-3220;"><FaPhoneAlt/> +1-844-288-3220</Link>
                        </div>
                        <div className={styles['SL-Box']}>
                            <Link href="#"><FaUserAlt/> Login</Link>
                        </div>
                    </div>
                </div>
            </Row>
            <Row>
                <div className={styles['Logo-Nav']}>
                    <div className={styles['Headlogo-Col']}>
                        <Link href={'/'}><Image src='/assets/images/logohead.png' className={["Logo-img"]} width={170} height={105} alt={"logo"} /></Link>
                    </div>
                    <div className={styles['Nav-Col']}>
                        <ul className={styles["nav-menu"]}>
                        <li className={router.pathname == "/Logo Design" ? `${styles["active"]}` : ""}><Link href={'/company'}>Logo Design</Link></li>
                        <li className={router.pathname == "/Website Development" ? `${styles["active"]}` : ""}><Link href={'/services'}>Website Development</Link></li>
                        <li className={router.pathname == "/Branding" ? `${styles["active"]}` : ""}><Link href={'/hire-a-developer'}>Branding</Link></li>
                        <li className={router.pathname == "/Packages" ? `${styles["active"]}` : ""}><Link href={'/portfolio'}>Packages</Link></li>
                        <li className={router.pathname == "/Portfolio" ? `${styles["active"]}` : ""}><Link href={'/contact-us'}>Portfolio</Link></li>
                        <li className={router.pathname == "/About" ? `${styles["active"]}` : ""}><Link href={'/About'}>About</Link></li>
                        <li className={router.pathname == "/Contact Us" ? `${styles["active"]}` : ""}><Link href={'/contact-us'}>Contact Us</Link></li>
                        <li className={router.pathname == "/Portfolio" ? `${styles["active"]}` : ""}><Link href={'/contact-us'}>Blog</Link></li>
                        <li className={router.pathname == "/Get In Touch" ? `${styles["active"]}` : ""}><Link href={'/Get In Touch'}>Get In Touch</Link></li>
                        </ul>
                        <ResponsiveMenu />
                    </div>
                </div>
            </Row>
        </Container>
    </div>
  )
}

export default Header
