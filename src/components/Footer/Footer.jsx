import React from 'react'
import styles from './Footer.module.scss'
import { Container , Row } from 'react-bootstrap'
import Image from 'next/image'
import { useRouter } from "next/router";
import Link from 'next/link';
import { BsFillTelephoneFill , BsEnvelopeAt } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";


function Footer() {
  const router = useRouter();
  const PlateForms =[
    {
      imgUrl : "/assets/images/plateform1.png",
      imgWidht : "109",
      imgHeight : "90",
    },
    {
      imgUrl : "/assets/images/plateform2.png",
      imgWidht : "109",
      imgHeight : "90",
    },
    {
      imgUrl : "/assets/images/plateform3.png",
      imgWidht : "109",
      imgHeight : "90",
    },
    {
      imgUrl : "/assets/images/plateform4.png",
      imgWidht : "109",
      imgHeight : "90",
    },
    {
      imgUrl : "/assets/images/plateform5.png",
      imgWidht : "109",
      imgHeight : "90",
    },
    {
      imgUrl : "/assets/images/plateform6.png",
      imgWidht : "109",
      imgHeight : "90",
    },
    {
      imgUrl : "/assets/images/plateform7.png",
      imgWidht : "109",
      imgHeight : "90",
    },
  ]
  return (
    <div className={styles['Footer']}>
      <Container>
        <Row>
          <div className={styles['Inner-Footer']}>
            <div className={styles['Logo-Sec']}>
              <Image src='/assets/images/logohead.png' width={168} height={113} alt='Logo' />
              <p>
              we offer to our clients. From full stack development to just consultancy- you demand, we deliver. From full-stack development to just consultancy-you demand, we deliver. consultancy-you demand, we deliver.
              </p>
            </div>
            <div className={styles['Menu-1']}>
              <h1>Logo Design Valley</h1>
              <ul>
                <li className={router.pathname == "/" ? `${styles["active"]}` : ""}><Link href={'/Home'}>Home</Link></li>
                <li className={router.pathname == "/about-us" ? `${styles["active"]}` : ""}><Link href={'/about-us'}>About Us</Link></li>
                <li className={router.pathname == "/contact" ? `${styles["active"]}` : ""}><Link href={'/contact'}>Contact</Link></li>
              </ul>
              <div className={styles['Contact-Box']}>
                <h5>Call Us At</h5>
                <div className={styles['Cotct-Icon']}>
                  <BsFillTelephoneFill/>
                  <a href="tel: +1-844-288-3220">+1-844-288-3220</a>
                </div>
              </div>
            </div>
            <div className={styles['Menu-2']}>
              <h1>Services</h1>
              <ul>
                <li className={router.pathname == "/logo-design" ? `${styles["active"]}` : ""}><Link href={'/logo-design'}>Logo Design</Link></li>
                  <li className={router.pathname == "/website-design" ? `${styles["active"]}` : ""}><Link href={'/website-design'}>Website Design</Link></li>
                  <li className={router.pathname == "/corporate-branding" ? `${styles["active"]}` : ""}><Link href={'/corporate-branding'}>Corporate Branding</Link></li>
              </ul>
              <div className={styles['Contact-Box']}>
                <h5>Find Us On google Maps</h5>
                <div className={styles['Cotct-Icon']}>
                    <FaMapMarkerAlt/>
                    <a href="https://goo.gl/maps/mHKzZr8WPLscsbJE9" target='_blank'>950 E, TX-114 Suite 161, Southlake,TX 76092, United States</a>
                </div>
              </div>
            </div>
            <div className={styles['Menu-3']}>
              <h1>Quick Links</h1>
              <ul>
                  <li className={router.pathname == "/packages" ? `${styles["active"]}` : ""}><Link   href={'/packages'}>Packages</Link></li>
                  <li className={router.pathname == "/portfolio" ? `${styles["active"]}` : ""}><Link href={'/portfolio'}>Portfolio</Link></li>
                  <li className={router.pathname == "/blog" ? `${styles["active"]}` : ""}><Link href={'/blog'}>Blog</Link></li>
              </ul>
              <div className={styles['Contact-Box']}>
                <h5>Email Us At</h5>
                <div className={styles['Cotct-Icon']}>
                    <BsEnvelopeAt/>
                    <a href="mailto:https://goo.gl/maps/mHKzZr8WPLscsbJE9" target='_blank'>support@logodesignvalley.com</a>
                </div>
              </div>  
            </div>
          </div>
        </Row>
        <Row>
          <div className={styles['Wrkng-Pltfrm']}>
            {PlateForms.map((item , index) => (
              <Image src={item.imgUrl} width={item.imgWidht} height={item.imgHeight} alt='Certificates' key={index} />
            ))}
          </div>
          <div className={styles['CpyRight-Sec']}>
            <div className={styles['CpyRht-Box']}>
              <p>© 2023 <Link href="/">Logo Design Valley</Link>. ALL RIGHTS RESERVED.</p>
            </div>
            <div className={styles['CpyRht-Mnu-Box']}>
              <ul>
                <li className={router.pathname == "/privacy-policy" ? `${styles["active"]}` : ""}><Link   href={'/privacy-policy'}>Privacy Policy</Link></li>
                <li className={router.pathname == "/terms-of-use" ? `${styles["active"]}` : ""}><Link href={'/terms-of-use'}>Terms of Use</Link></li>
                <li className={router.pathname == "/faq" ? `${styles["active"]}` : ""}><Link href={'/faq'}>FAQ</Link></li>
                <li className={router.pathname == "/sitemap" ? `${styles["active"]}` : ""}><Link href={'/sitemap'}>Sitemap</Link></li>
              </ul>
            </div>
          </div>
        </Row>
      </Container>

      
    </div>
  )
}

export default Footer
