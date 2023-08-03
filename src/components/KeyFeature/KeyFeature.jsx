import React from 'react'
import styles from './KeyFeature.module.scss'
import { Container , Row } from 'react-bootstrap'
import Image from 'next/image'
import { TopHeadings } from '../TopHeadings'

function KeyFeature(props) {
    const {KeyFeCompCls , SubHeading , Heading} = props

    const ProjectBox = [
        {
            Title : "100% Satisfaction Guarantee",
            ImgUrl : "/assets/images/EveryProject1.png",
            Imgwidht : "71",
            ImgHeight : "71",
        },
        {
            Title : "Unique Design Guarantee",
            ImgUrl : "/assets/images/EveryProject2.png",
            Imgwidht : "71",
            ImgHeight : "71",
        },
        {
            Title : "100% Money Back Guarantee",
            ImgUrl : "/assets/images/EveryProject3.png",
            Imgwidht : "71",
            ImgHeight : "71",
        },
        {
            Title : "24/7 Design Consultancy",
            ImgUrl : "/assets/images/EveryProject4.png",
            Imgwidht : "71",
            ImgHeight : "71",
        },
        {
            Title : "Award Winning Designers & Developers",
            ImgUrl : "/assets/images/EveryProject5.png",
            Imgwidht : "71",
            ImgHeight : "71",
        },
    ]
  return (
    <div className={`${styles['Key-Feature']} ${styles[KeyFeCompCls]}`}>
        <Container>
            <Row>
                <div className={styles['Key-Feature_Inner']}>
                    <TopHeadings 
                        SubHeading ="KEY FEATURES"
                        Heading ={
                            <>
                            Delivering Succinct Results <br />For Every Project 
                            </>
                          }
                     />
                    <div className={styles['Every-Project-Box']}>
                        {ProjectBox.map((item , index) => (
                            <div className={styles['Img-Box']} key={index}>
                                <Image src={item.ImgUrl} width={item.Imgwidht} height={item.ImgHeight} alt='Img'  />
                                <h2>{item.Title}</h2>
                            </div>
                        ))}
                    </div>
                </div>
            </Row>
        </Container>
      
    </div>
  )
}

export default KeyFeature
