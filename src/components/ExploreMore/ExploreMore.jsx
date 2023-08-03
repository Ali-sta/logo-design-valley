import React from 'react'
import styles from './ExploreMore.module.scss'
import { BsStarFill } from "react-icons/bs";
import { Container , Row } from 'react-bootstrap';
import Link from 'next/link';


function ExploreMore(props) {
    const {CompCusCls , Heading , BtnLink , BtnText} = props
  return (
    <div className={`${styles['Explore-More']} ${styles[CompCusCls]}`}>
      <Container>
        <Row>
            <div className={styles['Explore-More-Inner']}>
                <div className={styles['Stars-Sec']}>
                    <BsStarFill /><BsStarFill /><BsStarFill /><BsStarFill /><BsStarFill /> 
                </div>
                <h1>{Heading}</h1>
                <Link href={BtnLink} className={`${styles['Btn-EM']} Btn-Common`}>{BtnText}</Link>
            </div>
        </Row>
      </Container>
    </div>
  )
}

export default ExploreMore
