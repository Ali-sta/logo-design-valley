import React from 'react'
import styles from './Banner.module.scss'
import { Container , Row } from 'react-bootstrap'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function Banner(props) {
    const {CompCls , Heading , FormHeading , BgImageURL} = props
    const Partners =  [
        {
            ImgSrc: '/assets/images/partnersImg1.png',
            ImgWidth:"158",
            ImgHeight:"66"
        },
        {
            ImgSrc: '/assets/images/partnersImg2.png',
            ImgWidth:"158",
            ImgHeight:"66"
        },
        {
            ImgSrc: '/assets/images/partnersImg3.png',
            ImgWidth:"190",
            ImgHeight:"80"
        },

        {
            ImgSrc: '/assets/images/partnersImg4.png',
            ImgWidth:"192",
            ImgHeight:"80"
        },
        {
            ImgSrc: '/assets/images/partnersImg5.png',
            ImgWidth:"158",
            ImgHeight:"66"
        },
        {
            ImgSrc: '/assets/images/partnersImg5.png',
            ImgWidth:"158",
            ImgHeight:"66"
        }
    ];
  return (
    <div className={`${styles['H-Banner']} ${styles[CompCls]}`} style={{backgroundImage: `url(${BgImageURL})`}}>
        <Container>
            <Row>
                <div className={styles['Banner-warrap']}>
                    <h1>{Heading}</h1>
                    <div className={styles['Banner-Form']}>
                        <div className={styles['Form-Inner']}>
                            <h4>{FormHeading}</h4>
                            <div className={styles['FormFileds']}>
                                <div className={styles['Input-div']}>
                                    <input type="text" placeholder='Your Company Name'  />
                                </div>
                                <button type="submit">Next</button>
                            </div>
                        </div>
                    </div>
                    <div className={styles['Images-Box']}>
                        <Swiper
                        spaceBetween={50}
                        slidesPerView={5}
                        loop={true}>
                        {Partners.map((item , index) => (
                            <SwiperSlide key={index}>
                                <Image src={item.ImgSrc} width={item.ImgWidth} height={item.ImgHeight} alt='Img' />
                            </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </Row>
        </Container>
    </div>
  )
}

export default Banner
