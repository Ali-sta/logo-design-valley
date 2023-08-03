import React from 'react'
import styles from './CallToAction.module.scss'
import { Container , Row } from 'react-bootstrap'
import Link from 'next/link'

function CallToAction(props) {
    const {CallTo_CompCls , Heading , Para } = props
  return (
    <div className={`${styles['Call-To-Action']} ${styles[CallTo_CompCls]}`}>
        <Container>
            <Row>
                <h1>{Heading}</h1>
                <p>{Para}</p>
                <div className={styles['Btn-Sec']}>
                <Link href="#" className={`${styles['CTA-Btn']} Btn-Common`}>Get Started Now</Link>
                <Link href="#" className={`${styles['CTA-Btn']} Btn-Common`}>Live Chat</Link>
                <Link href="#" className={`${styles['CTA-Btn']} Btn-Common`}>View Portfolio</Link>
                </div>
            </Row>
        </Container>
      
    </div>
  )
}

export default CallToAction
