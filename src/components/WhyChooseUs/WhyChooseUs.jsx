import React from 'react'
import { Container , Row } from 'react-bootstrap'
import Image from 'next/image'
import styles from './WhyChooseUs.module.scss'
import { TopHeadings } from '../TopHeadings'
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper";


function WhyChooseUs(props) {
    const {WhyChooseUsCompCls} = props
    const ProfessinalLogos_SlideOne = [
        {   
            id:"1",
            ImgSrc: '/assets/images/Logo1.webp',
            ImgWidth:"390",
            ImgHeight:"390"
        },
        {
            id :"2",
            ImgSrc: '/assets/images/Logo2.webp',
            ImgWidth:"390",
            ImgHeight:"390"
        },
        {
            id :"3",
            ImgSrc: '/assets/images/Logo3.webp',
            ImgWidth:"390",
            ImgHeight:"390"
        },
        {
            id:"4",
            ImgSrc: '/assets/images/Logo4.webp',
            ImgWidth:"390",
            ImgHeight:"390"
        },
        {
            id:"5",
            ImgSrc: '/assets/images/Logo5.webp',
            ImgWidth:"390",
            ImgHeight:"390"
        },
        {
            id:"6",
            ImgSrc: '/assets/images/Logo6.webp',
            ImgWidth:"390",
            ImgHeight:"390"
        },
        {
            id:"7",
            ImgSrc: '/assets/images/Logo7.webp',
            ImgWidth:"390",
            ImgHeight:"390"
        },
        {
            id:"8",
            ImgSrc: '/assets/images/Logo8.webp',
            ImgWidth:"390",
            ImgHeight:"390"
        },
        {
            id:"9",
            ImgSrc: '/assets/images/Logo9.webp',
            ImgWidth:"390",
            ImgHeight:"390"
        },
        {
            id:"10",
            ImgSrc: '/assets/images/Logo10.webp',
            ImgWidth:"390",
            ImgHeight:"390"
        },
        {
            id:"11",
            ImgSrc: '/assets/images/Logo11.webp',
            ImgWidth:"390",
            ImgHeight:"390"
        },
        {
            id:"12",
            ImgSrc: '/assets/images/Logo12.webp',
            ImgWidth:"390",
            ImgHeight:"390"
        },
        {
            id:"13",
            ImgSrc: '/assets/images/Logo13.webp',
            ImgWidth:"390",
            ImgHeight:"390"
        },
        {
            id:"14",
            ImgSrc: '/assets/images/Logo14.webp',
            ImgWidth:"390",
            ImgHeight:"390"
        },
        {
            id:"15",
            ImgSrc: '/assets/images/Logo15.webp',
            ImgWidth:"390",
            ImgHeight:"390"
        }
       
    ];

    const ProfessinalLogos_SlideTwo = [
        {   
            id:"1",
            ImgSrc: '/assets/images/Logo1.webp',
            ImgWidth:"390",
            ImgHeight:"390"
        },
        {
            id :"2",
            ImgSrc: '/assets/images/Logo2.webp',
            ImgWidth:"390",
            ImgHeight:"390"
        },
        {
            id :"3",
            ImgSrc: '/assets/images/Logo3.webp',
            ImgWidth:"390",
            ImgHeight:"390"
        },
        {
            id:"4",
            ImgSrc: '/assets/images/Logo4.webp',
            ImgWidth:"390",
            ImgHeight:"390"
        },
        {
            id:"5",
            ImgSrc: '/assets/images/Logo5.webp',
            ImgWidth:"390",
            ImgHeight:"390"
        },
        {
            id:"6",
            ImgSrc: '/assets/images/Logo6.webp',
            ImgWidth:"390",
            ImgHeight:"390"
        },
        {
            id:"7",
            ImgSrc: '/assets/images/Logo7.webp',
            ImgWidth:"390",
            ImgHeight:"390"
        },
        {
            id:"8",
            ImgSrc: '/assets/images/Logo8.webp',
            ImgWidth:"390",
            ImgHeight:"390"
        },
        {
            id:"9",
            ImgSrc: '/assets/images/Logo9.webp',
            ImgWidth:"390",
            ImgHeight:"390"
        },
        {
            id:"10",
            ImgSrc: '/assets/images/Logo10.webp',
            ImgWidth:"390",
            ImgHeight:"390"
        },
        {
            id:"11",
            ImgSrc: '/assets/images/Logo11.webp',
            ImgWidth:"390",
            ImgHeight:"390"
        },
        {
            id:"12",
            ImgSrc: '/assets/images/Logo12.webp',
            ImgWidth:"390",
            ImgHeight:"390"
        },
        {
            id:"13",
            ImgSrc: '/assets/images/Logo13.webp',
            ImgWidth:"390",
            ImgHeight:"390"
        },
        {
            id:"14",
            ImgSrc: '/assets/images/Logo14.webp',
            ImgWidth:"390",
            ImgHeight:"390"
        },
        {
            id:"15",
            ImgSrc: '/assets/images/Logo15.webp',
            ImgWidth:"390",
            ImgHeight:"390"
        }
       
    ];

    const ProfessinalLogos_SlideThree = [
        {   
            id:"1",
            ImgSrc: '/assets/images/Logo1.webp',
            ImgWidth:"390",
            ImgHeight:"390"
        },
        {
            id :"2",
            ImgSrc: '/assets/images/Logo2.webp',
            ImgWidth:"390",
            ImgHeight:"390"
        },
        {
            id :"3",
            ImgSrc: '/assets/images/Logo3.webp',
            ImgWidth:"390",
            ImgHeight:"390"
        },
        {
            id:"4",
            ImgSrc: '/assets/images/Logo4.webp',
            ImgWidth:"390",
            ImgHeight:"390"
        },
        {
            id:"5",
            ImgSrc: '/assets/images/Logo5.webp',
            ImgWidth:"390",
            ImgHeight:"390"
        },
        {
            id:"6",
            ImgSrc: '/assets/images/Logo6.webp',
            ImgWidth:"390",
            ImgHeight:"390"
        },
        {
            id:"7",
            ImgSrc: '/assets/images/Logo7.webp',
            ImgWidth:"390",
            ImgHeight:"390"
        },
        {
            id:"8",
            ImgSrc: '/assets/images/Logo8.webp',
            ImgWidth:"390",
            ImgHeight:"390"
        },
        {
            id:"9",
            ImgSrc: '/assets/images/Logo9.webp',
            ImgWidth:"390",
            ImgHeight:"390"
        },
        {
            id:"10",
            ImgSrc: '/assets/images/Logo10.webp',
            ImgWidth:"390",
            ImgHeight:"390"
        },
        {
            id:"11",
            ImgSrc: '/assets/images/Logo11.webp',
            ImgWidth:"390",
            ImgHeight:"390"
        },
        {
            id:"12",
            ImgSrc: '/assets/images/Logo12.webp',
            ImgWidth:"390",
            ImgHeight:"390"
        },
        {
            id:"13",
            ImgSrc: '/assets/images/Logo13.webp',
            ImgWidth:"390",
            ImgHeight:"390"
        },
        {
            id:"14",
            ImgSrc: '/assets/images/Logo14.webp',
            ImgWidth:"390",
            ImgHeight:"390"
        },
        {
            id:"15",
            ImgSrc: '/assets/images/Logo15.webp',
            ImgWidth:"390",
            ImgHeight:"390"
        }
       
    ];
  return (
    <div className={styles['Why-Choose_Us']}>
        <Container>
            <Row>
                <div className={styles['Why-Choose-Inner']}>
                    <div className={styles['Top-Heading']}>
                        <div className={styles['Why-Choose-dots']}>
                            <div className={styles['Dot-1']}></div>
                            <div className={styles['Dot-2']}></div>
                            <div className={styles['Dot-3']}></div>
                        </div>
                        <TopHeadings 
                            SubHeading ="Why Choose Us"
                            Heading ="A Glimpse Of Our Recent Professional Logos"
                            Para ="Our years of service as logo maker have revealed the crux of distinct logo designs. We have spent years in the market to collect the wisdom of the logo gurus and learned through our experience."     
                        />
                    </div>
                </div>
            </Row>
        </Container>
        <div className={`${styles['Slide-1']} Slider-Row-1`}>
            <Swiper
                spaceBetween={0}
                slidesPerView={5}
                loop={true}
                navigation // Enable navigation arrows (optional)
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}>
                {ProfessinalLogos_SlideOne.map((item , index) => (
                    <SwiperSlide key={index}>
                        <div>
                            <Image src={item.ImgSrc} width={item.ImgWidth} height={item.ImgHeight} alt='Img' />
                        </div>
                    </SwiperSlide>
                    ))}
            </Swiper>
        </div>
        <div className={`${styles['Slide-2']} Slider-Row-1`}>
            <Swiper
                spaceBetween={0}
                slidesPerView={5}
                loop={true}
                navigation // Enable navigation arrows (optional)
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}>
                {ProfessinalLogos_SlideTwo.map((item , index) => (
                    <SwiperSlide key={index}>
                        <div>
                            <Image src={item.ImgSrc} width={item.ImgWidth} height={item.ImgHeight} alt='Img' />
                        </div>
                    </SwiperSlide>
                    ))}
            </Swiper>
        </div>
        <div className={`${styles['Slide-3']} Slider-Row-1`}>
            <Swiper
                spaceBetween={0}
                slidesPerView={5}
                loop={true}
                navigation // Enable navigation arrows (optional)
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  pagination={{
                    clickable: true,
                  }}
                
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}>
                {ProfessinalLogos_SlideThree.map((item , index) => (
                    <SwiperSlide key={index}>
                        <div>
                            <Image src={item.ImgSrc} width={item.ImgWidth} height={item.ImgHeight} alt='Img' />
                        </div>
                    </SwiperSlide>
                    ))}
            </Swiper>
        </div>
    </div>
  )
}

export default WhyChooseUs
