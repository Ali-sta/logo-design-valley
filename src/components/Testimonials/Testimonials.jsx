import React from 'react'
import styles from './Testimonials.module.scss'
import { Container , Row } from 'react-bootstrap'
import { TopHeadings } from '../TopHeadings'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/scss/pagination';
import { Pagination } from 'swiper/modules';

function Testimonials(props) {
    const {Testimonials_ComCls , Heading} = props

    const TestimonialsSlides = [
      {
        id : "1",
        title : "Great First Experience!",
        description : "Jeffrey Carter was my contact person in creating my logo. I could not have been more impressed with his customer service. He listened to my ideas and even when I wasn't very happy with what I had in mind at first, he was very very patient with me, picking up the phone when he needed clarification and beautifully creating a logo beyond my imagination.",
        clientName : "Sherri Board",
        logoUrl : "/assets/images/Testlog.png",
        imgWidth : "130",
        imgHeight : "33",
        productImgUrl : "/assets/images/testu-min.png",
        proImgWidth : "400",
        proImgHeight : "425",
      },
      {
        id : "2",
        title : "Great First Experience!",
        description : "Jeffrey Carter was my contact person in creating my logo. I could not have been more impressed with his customer service. He listened to my ideas and even when I wasn't very happy with what I had in mind at first, he was very very patient with me, picking up the phone when he needed clarification and beautifully creating a logo beyond my imagination.",
        clientName : "Sherri Board",
        logoUrl : "/assets/images/Testlog.png",
        imgWidth : "130",
        imgHeight : "33",
        productImgUrl : "/assets/images/testu-min.png",
        proImgWidth : "400",
        proImgHeight : "425",
      },
      {
        id : "3",
        title : "Great First Experience!",
        description : "Jeffrey Carter was my contact person in creating my logo. I could not have been more impressed with his customer service. He listened to my ideas and even when I wasn't very happy with what I had in mind at first, he was very very patient with me, picking up the phone when he needed clarification and beautifully creating a logo beyond my imagination.",
        clientName : "Sherri Board",
        logoUrl : "/assets/images/Testlog.png",
        imgWidth : "130",
        imgHeight : "33",
        productImgUrl : "/assets/images/testu-min.png",
        proImgWidth : "400",
        proImgHeight : "425",
      },
    ]
  return (
    <div className={`${styles['Testimonials-Sec']} ${styles[Testimonials_ComCls]}`}>
      <Container>
        <Row>
            <TopHeadings 
                SubHeading = "TESTIMONIALS"
                Heading = {
                    <>
                    Ring Us To Boost <br/>Your Brand Awareness
                    </>
                }
                Para = "We are in love to boost your brand’s success with our successful effort of digital marketing services. We provide complete organic exposure and satisfied successful elements efficiently."
              />
        </Row>
      </Container>
      <Container fluid>
        <Row>
            <div className={styles['Test-TopHeading']}>
                <h1>{Heading}</h1>
            </div>
        </Row>
      </Container>
      <Container>
        <Row>
            <div className={styles['Testimonial-Slider-Sec']}>
            <Swiper
               spaceBetween={50}
               slidesPerView={1}
               loop={true}
               navigation // Enable navigation arrows (optional)
               pagination={true}
                modules={[Pagination]}
               onSlideChange={() => console.log('slide change')}
               onSwiper={(swiper) => console.log(swiper)}>
              {TestimonialsSlides.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className={styles['Testimonals-Slider']} >
                    <div className={styles['Slider-Content-Col']}>
                      <div>
                        <h1>{item.title}</h1>
                          <p>{item.description}</p>
                          <div className={styles['ClientName-Logo']}>
                            <h4>{item.clientName}</h4>
                            <Image src={item.logoUrl} width={item.imgWidth} height={item.imgHeight} alt='Img' />
                          </div>
                      </div>
                    </div>
                    <div className={styles['Slider-Img-Col']}>
                      <Image src={item.productImgUrl} width={item.proImgWidth} height={item.proImgHeight} alt='Img' />
                    </div>
                  </div>
                </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </Row>
      </Container>
    </div>
  )
}

export default Testimonials
