import { useState } from 'react'
import styles from './Tabs.module.scss'
import { Container , Row , Col } from 'react-bootstrap'
import Image from 'next/image'
import Link from 'next/link'
import { TopHeadings } from '../TopHeadings'
Link


function Tabs(props) {
    const {TabsCompClas} = props

    const TabsData = [
        {
            id : "0",
            Title : "Logo Design Process",
            Breif : "Precise and scientific approach",
            ImgUrl : "/assets/images/ServicesTab1.png",
            Imgwidth : "56",
            ImgHeight : "56",
            CSubheading : "Logo Process:",
            CHeading : "Precise And Scientific Approach",
            CContent : (
                <>
                The professional logo design process plays a significant role in the development of logos and other visual content. Breaking down the entire project into smaller, manageable chunks helps architects, thinkers, and artists approach their tasks with utmost clarity and creativity.
                <br /><br />
                Our designers have developed an effective design strategy after working long and tedious hours. We know the troubles of starting without knowing the yellow brick road. Here is a summary of our design process:
                </>
            ),
            CListContent : (
                <>
                    <ul>
                        <li>Definition</li>
                        <li>Research</li>
                        <li>Brainstorming</li>
                        <li>Development</li>
                        <li>Execution</li>
                    </ul>
                </>
            ),
            CImgUrl : "/assets/images/Servicestabside.png",
            CImgWidht : "602",
            CImgHeight : "658",
        },
        {
            id : "1",
            Title : "Brand Recognition",
            Breif : "Creating a memorable brand identity",
            ImgUrl : "/assets/images/ServicesTab2.png",
            Imgwidth : "54",
            ImgHeight : "54",
            CSubheading : "Brand Recognition:",
            CHeading : "Creating a memorable brand identity",
            CContent : (
                <>
                The professional logo design process plays a significant role in the development of logos and other visual content. Breaking down the entire project into smaller, manageable chunks helps architects, thinkers, and artists approach their tasks with utmost clarity and creativity.
                <br /><br />
                Our designers have developed an effective design strategy after working long and tedious hours. We know the troubles of starting without knowing the yellow brick road. Here is a summary of our design process:
                </>
            ),
            CListContent : (
                <>
                    <ul>
                        <li>Definition</li>
                        <li>Research</li>
                        <li>Brainstorming</li>
                        <li>Development</li>
                        <li>Execution</li>
                    </ul>
                </>
            ),
            CImgUrl : "/assets/images/Servicestabside.png",
            CImgWidht : "602",
            CImgHeight : "658",
        },
        {
            id : "2",
            Title : "Logo Customization",
            Breif : "Going beyond the free-size",
            ImgUrl : "/assets/images/ServicesTab3.png",
            Imgwidth : "53",
            ImgHeight : "53",
            CSubheading : "Logo Customization",
            CHeading : "Going beyond the free-size",
            CContent : (
                <>
                The professional logo design process plays a significant role in the development of logos and other visual content. Breaking down the entire project into smaller, manageable chunks helps architects, thinkers, and artists approach their tasks with utmost clarity and creativity.
                <br /><br />
                Our designers have developed an effective design strategy after working long and tedious hours. We know the troubles of starting without knowing the yellow brick road. Here is a summary of our design process:
                </>
            ),
            CListContent : (
                <>
                    <ul>
                        <li>Definition</li>
                        <li>Research</li>
                        <li>Brainstorming</li>
                        <li>Development</li>
                        <li>Execution</li>
                    </ul>
                </>
            ),
            CImgUrl : "/assets/images/Servicestabside.png",
            CImgWidht : "602",
            CImgHeight : "658",
        },
        {
            id : "3",
            Title : "In-House Team Of Logo Designers",
            Breif : "A goal-driven team",
            ImgUrl : "/assets/images/ServicesTab4.png",
            Imgwidth : "56",
            ImgHeight : "56",
            CSubheading : "In-House Team Of Logo Designers",
            CHeading : "A goal-driven team",
            CContent : (
                <>
                The professional logo design process plays a significant role in the development of logos and other visual content. Breaking down the entire project into smaller, manageable chunks helps architects, thinkers, and artists approach their tasks with utmost clarity and creativity.
                <br /><br />
                Our designers have developed an effective design strategy after working long and tedious hours. We know the troubles of starting without knowing the yellow brick road. Here is a summary of our design process:
                </>
            ),
            CListContent : (
                <>
                    <ul>
                        <li>Definition</li>
                        <li>Research</li>
                        <li>Brainstorming</li>
                        <li>Development</li>
                        <li>Execution</li>
                    </ul>
                </>
            ),
            CImgUrl : "/assets/images/Servicestabside.png",
            CImgWidht : "602",
            CImgHeight : "658",
        },
        

    ]

    const [activeTab, setActiveTab] = useState(TabsData[0].id);
    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };

  return (
    <div className={`${styles['Tabs-Sec']} ${styles[TabsCompClas]}`}>
      <Container>
        <Row>
            <TopHeadings 
                SubHeading ="Services"
                Heading ="Attract.Aware.Convert.Retain"
                Para ="The four pillars of our digital branding design and strategy. We market to quench your thirst of ROI. We master the art of digital optimization and conversion."
            />
            <div className={styles['Tabs-Title']}>
                <ul>
                    {TabsData.slice(0, 4).map((tab) =>(
                        <li key={tab.id} className={`${styles['tab']} ${activeTab === tab.id ? `${styles['active']}` : ''}`}
                        onClick={() => handleTabClick(tab.id)}>
                            <div className={styles['Img-Area']}>
                                <Image src={tab.ImgUrl} width={tab.Imgwidth} height={tab.ImgHeight} alt='Img'  />
                            </div>
                            {tab.Title}
                            <p>{tab.Breif}</p>
 
                        </li>
                    ))}
                    
                </ul>
            </div>
            <div className={styles['Tab-Content']}>
                {TabsData.map((tab) => (
                <div key={tab.id}
                    className={`${styles['content']} ${activeTab === tab.id ? `${styles['active']}` : ''}`}>
                        <Container>
                            <Row>
                              <Col md={6}>
                                  <div className={styles['Content-Box']}>
                                     <h4>{tab.CSubheading}</h4>
                                     <h1>{tab.CHeading}</h1>
                                     <p>{tab.CContent}</p>
                                     <div className={styles['list-type-Content']}>
                                        {tab.CListContent}
                                     </div>
                                     <div className={styles['Btn2-flex']}>
                                        <Link href="#" className={`${styles['Tabs-btn']} Btn-Common`}>Get a Custom Logo</Link>
                                        <Link href="#" className={`${styles['Tabs-btn']} Btn-Common`}>Live Chat</Link>
                                     </div>
                                  </div>
                              </Col>
                              <Col md={6}>
                                <div className={styles['Image']}>
                                    <Image
                                        className={styles['img']}
                                        src={tab.CImgUrl}
                                        alt="img"
                                        width={tab.CImgWidht}
                                        height={tab.CImgHeight}
                                    />
                                  </div>
                              </Col>
                            </Row>
                        </Container>

                </div>
                )
                )}
            </div>
        </Row>
      </Container>
    </div>
  )
}

export default Tabs
