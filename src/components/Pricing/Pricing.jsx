import {useState} from 'react'
import styles from './Pricing.module.scss'
import { Container , Row , Col } from 'react-bootstrap'
import { TopHeadings } from '../TopHeadings'
import Link from 'next/link'

function Pricing(props) {
    const {PricingCompCls , ComboPack_Heading , ComboPack_SubHeading , ComboPack_Description} = props
    const PricingData = [
        {
            id : "0",
            type: "Logo-Design",
            title : "Logo Design",
            package : [
                {
                    packageName : "Basic",
                    heading : "Basic",
                    subHeading : "Best Value for Logo Design!",
                    realPrice: "$ 700",
                    sellPrice: "$ 365",   
                    discount: (
                        <>
                        50<span>%</span> <br/>
                        <span>OFF</span>
                        </>
                    ),
                    ListingData : (
                        <>
                        <ul>
                            <li>15 Logo Design Concepts</li>
                            <li>4 Dedicated Designers</li>
                            <li>Round Of Revision (Up To 7)</li>
                            <li>Raster Files Format (JPG, PNG & PSD)</li>
                            <li>Vector Files Format (AI, EPS, PDF)</li>
                            <li>Business Card Design (JPG Format)</li>
                            <li>Letterhead Design (JPG Format)</li>
                            <li>Envelope Design (JPG Format)</li>
                            <li>Icon Design (ICO Format)</li>
                        </ul>
                        </>
                    ),

                },
                {
                    packageName : "Standard",
                    heading : "Standard",
                    subHeading : "Best Value for Logo Design!",
                    realPrice: "$ 5000",
                    sellPrice: "$ 5650",   
                    ListingData : (
                        <>
                        <ul>
                            <li>15 Logo Design Concepts</li>
                            <li>4 Dedicated Designers</li>
                            <li>Round Of Revision (Up To 7)</li>
                            <li>Raster Files Format (JPG, PNG & PSD)</li>
                            <li>Vector Files Format (AI, EPS, PDF)</li>
                            <li>Business Card Design (JPG Format)</li>
                            <li>Letterhead Design (JPG Format)</li>
                            <li>Envelope Design (JPG Format)</li>
                            <li>Icon Design (ICO Format)</li>
                        </ul>
                        </>
                    ),

                },
                {
                    packageName : "Premium",
                    heading : "Premium",
                    subHeading : "Best Value for Logo Design!",
                    realPrice: "$ 7700",
                    sellPrice: "$ 8800",   
                    discount: (
                        <>
                        50<span>%</span> <br/>
                        <span>OFF</span>
                        </>
                    ),
                    ListingData : (
                        <>
                        <ul>
                            <li>15 Logo Design Concepts</li>
                            <li>4 Dedicated Designers</li>
                            <li>Round Of Revision (Up To 7)</li>
                            <li>Raster Files Format (JPG, PNG & PSD)</li>
                            <li>Vector Files Format (AI, EPS, PDF)</li>
                            <li>Business Card Design (JPG Format)</li>
                            <li>Letterhead Design (JPG Format)</li>
                            <li>Envelope Design (JPG Format)</li>
                            <li>Icon Design (ICO Format)</li>
                        </ul>
                        </>
                    ),

                }
                
            ],
        },

        {
            id : "1",
            type: "Branding-Design",
            title : "Branding",
            package : [
                {
                    packageName : "Basic",
                    heading : "Basic",
                    subHeading : "Best Value for Branding",
                    realPrice: "$ 2200",
                    sellPrice: "$ 2500",   
                    discount: (
                        <>
                        50<span>%</span> <br/>
                        <span>OFF</span>
                        </>
                    ),
                    ListingData : (
                        <>
                        <ul>
                            <li>15 Logo Design Concepts</li>
                            <li>4 Dedicated Designers</li>
                            <li>Round Of Revision (Up To 7)</li>
                            <li>Raster Files Format (JPG, PNG & PSD)</li>
                            <li>Vector Files Format (AI, EPS, PDF)</li>
                            <li>Business Card Design (JPG Format)</li>
                            <li>Letterhead Design (JPG Format)</li>
                            <li>Envelope Design (JPG Format)</li>
                            <li>Icon Design (ICO Format)</li>
                        </ul>
                        </>
                    ),

                },
                {
                    packageName : "Standard",
                    heading : "Standard",
                    subHeading : "Best Value for Branding",
                    realPrice: "$ 3500",
                    sellPrice: "$ 4000",   
                    ListingData : (
                        <>
                        <ul>
                            <li>15 Logo Design Concepts</li>
                            <li>4 Dedicated Designers</li>
                            <li>Round Of Revision (Up To 7)</li>
                            <li>Raster Files Format (JPG, PNG & PSD)</li>
                            <li>Vector Files Format (AI, EPS, PDF)</li>
                            <li>Business Card Design (JPG Format)</li>
                            <li>Letterhead Design (JPG Format)</li>
                            <li>Envelope Design (JPG Format)</li>
                            <li>Icon Design (ICO Format)</li>
                        </ul>
                        </>
                    ),

                },
                {
                    packageName : "Premium",
                    heading : "Premium",
                    subHeading : "Best Value for Branding",
                    realPrice: "$ 4500",
                    sellPrice: "$ 5000",   
                    discount: (
                        <>
                        50<span>%</span> <br/>
                        <span>OFF</span>
                        </>
                    ),
                    ListingData : (
                        <>
                        <ul>
                            <li>15 Logo Design Concepts</li>
                            <li>4 Dedicated Designers</li>
                            <li>Round Of Revision (Up To 7)</li>
                            <li>Raster Files Format (JPG, PNG & PSD)</li>
                            <li>Vector Files Format (AI, EPS, PDF)</li>
                            <li>Business Card Design (JPG Format)</li>
                            <li>Letterhead Design (JPG Format)</li>
                            <li>Envelope Design (JPG Format)</li>
                            <li>Icon Design (ICO Format)</li>
                        </ul>
                        </>
                    ),

                }
                
            ],
        },
        {
            id : "2",
            type: "Website-Design",
            title : "Website",
            package : [
                {
                    packageName : "Basic",
                    heading : "Basic",
                    subHeading : "Best Value for Website Design",
                    realPrice: "$ 500",
                    sellPrice: "$ 865",   
                    ListingData : (
                        <>
                        <ul>
                            <li>15 Logo Design Concepts</li>
                            <li>4 Dedicated Designers</li>
                            <li>Round Of Revision (Up To 7)</li>
                            <li>Raster Files Format (JPG, PNG & PSD)</li>
                            <li>Vector Files Format (AI, EPS, PDF)</li>
                            <li>Business Card Design (JPG Format)</li>
                            <li>Letterhead Design (JPG Format)</li>
                            <li>Envelope Design (JPG Format)</li>
                            <li>Icon Design (ICO Format)</li>
                        </ul>
                        </>
                    ),

                },
                {
                    packageName : "Standard",
                    heading : "Standard",
                    subHeading : "Best Value for Website Design",
                    realPrice: "$ 1800",
                    sellPrice: "$ 2400",   
                    discount: (
                        <>
                        60<span>%</span> <br/>
                        <span>OFF</span>
                        </>
                    ),
                    ListingData : (
                        <>
                        <ul>
                            <li>15 Logo Design Concepts</li>
                            <li>4 Dedicated Designers</li>
                            <li>Round Of Revision (Up To 7)</li>
                            <li>Raster Files Format (JPG, PNG & PSD)</li>
                            <li>Vector Files Format (AI, EPS, PDF)</li>
                            <li>Business Card Design (JPG Format)</li>
                            <li>Letterhead Design (JPG Format)</li>
                            <li>Envelope Design (JPG Format)</li>
                            <li>Icon Design (ICO Format)</li>
                        </ul>
                        </>
                    ),

                },
                {
                    packageName : "Premium",
                    heading : "Premium",
                    subHeading : "Best Value for Website Design",
                    realPrice: "$ 2200",
                    sellPrice: "$ 2500",   
                    discount: (
                        <>
                        50<span>%</span> <br/>
                        <span>OFF</span>
                        </>
                    ),
                    ListingData : (
                        <>
                        <ul>
                            <li>15 Logo Design Concepts</li>
                            <li>4 Dedicated Designers</li>
                            <li>Round Of Revision (Up To 7)</li>
                            <li>Raster Files Format (JPG, PNG & PSD)</li>
                            <li>Vector Files Format (AI, EPS, PDF)</li>
                            <li>Business Card Design (JPG Format)</li>
                            <li>Letterhead Design (JPG Format)</li>
                            <li>Envelope Design (JPG Format)</li>
                            <li>Icon Design (ICO Format)</li>
                        </ul>
                        </>
                    ),

                }
                
            ],
        },
        {
            id : "3",
            type: "Video-Animation",
            title : "Video Animation",
            package : [
                {
                    packageName : "Basic",
                    heading : "Basic",
                    subHeading : "Best Value for Video Animation",
                    realPrice: "$ 700",
                    sellPrice: "$ 365",   
                    discount: (
                        <>
                        50<span>%</span> <br/>
                        <span>OFF</span>
                        </>
                    ),
                    ListingData : (
                        <>
                        <ul>
                            <li>15 Logo Design Concepts</li>
                            <li>4 Dedicated Designers</li>
                            <li>Round Of Revision (Up To 7)</li>
                            <li>Raster Files Format (JPG, PNG & PSD)</li>
                            <li>Vector Files Format (AI, EPS, PDF)</li>
                            <li>Business Card Design (JPG Format)</li>
                            <li>Letterhead Design (JPG Format)</li>
                            <li>Envelope Design (JPG Format)</li>
                            <li>Icon Design (ICO Format)</li>
                        </ul>
                        </>
                    ),

                },
                {
                    packageName : "Standard",
                    heading : "Standard",
                    subHeading : "Best Value for Video Animation",
                    realPrice: "$ 1200",
                    sellPrice: "$ 1500",   
                    discount: (
                        <>
                        60<span>%</span><br/>
                        <span>OFF</span>
                        </>
                    ),
                    ListingData : (
                        <>
                        <ul>
                            <li>15 Logo Design Concepts</li>
                            <li>4 Dedicated Designers</li>
                            <li>Round Of Revision (Up To 7)</li>
                            <li>Raster Files Format (JPG, PNG & PSD)</li>
                            <li>Vector Files Format (AI, EPS, PDF)</li>
                            <li>Business Card Design (JPG Format)</li>
                            <li>Letterhead Design (JPG Format)</li>
                            <li>Envelope Design (JPG Format)</li>
                            <li>Icon Design (ICO Format)</li>
                        </ul>
                        </>
                    ),

                },
                {
                    packageName : "Premium",
                    heading : "Premium",
                    subHeading : "Best Value for Video Animation",
                    realPrice: "$ 2400",
                    sellPrice: "$ 1365",   
                    ListingData : (
                        <>
                        <ul>
                            <li>15 Logo Design Concepts</li>
                            <li>4 Dedicated Designers</li>
                            <li>Round Of Revision (Up To 7)</li>
                            <li>Raster Files Format (JPG, PNG & PSD)</li>
                            <li>Vector Files Format (AI, EPS, PDF)</li>
                            <li>Business Card Design (JPG Format)</li>
                            <li>Letterhead Design (JPG Format)</li>
                            <li>Envelope Design (JPG Format)</li>
                            <li>Icon Design (ICO Format)</li>
                        </ul>
                        </>
                    ),
                    
                }
                
            ],

        },
    ]

    const comboData = [
        {
            title : "Logo Design",
            ListingData : (
                <>
                <ul>
                    <li>Unlimited Logo Design Concepts</li>
                    <li>Unlimited Revisions</li>
                    <li>Icon Design</li>
                    <li>All Final File Formats</li>
                </ul>
                </>
            ),
        },
        {
            title : "Website Design",
            ListingData : (
                <>
                <ul>
                    <li>UNLIMITED Pages Website</li>
                    <li>Content Management System (CMS)</li>
                    <li>Mobile Responsive</li>
                    <li>5 Stock Photos + 3 Banner Designs</li>
                    <li>Any 3 Social Media Platforms</li>
                    <li>Complete W3C Certified HTML</li>
                    <li>Complete Deployment</li>
                </ul>
                </>
            ),
        },
        {
            title : "Value Added Services",
            ListingData : (
                <>
                <ul>
                    <li>Dedicated Account Manager</li>
                    <li>100% Ownership Rights</li>
                    <li>100% Money Back Guarantee</li>
                    <li>Complete Deployment</li>
                </ul>
                </>
            ),
        },

        {
            title : "Stationary Design",
            ListingData : (
                <>
                <ul>
                    <li>Business Card, Letterhead, Envelope</li>
                    <li>MS Word Letterhead</li>
                </ul>
                </>
            ),
        },
    ]

    const comboPricing = [
        {
            title : "Combo Package",
            price : "$ 500",
            limitOffer : "LIMITED TIME OFFER",
        }
    ]


    const [activeTab, setActiveTab] = useState(PricingData[0].id);
    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };
    const filteredPricingData = PricingData.filter(
        (item) => 
        item.type === 'Video-Animation' || 
        item.type === 'Branding-Design' || 
        item.type === 'Logo-Design' || 
        item.type === 'Website-Design'
        // Add more types here separated by the OR operator ||
      );
  return (
    <div className={`${styles['Pricing-Sec']} ${styles[PricingCompCls]}`}>
        <Container>
            <Row>
                <TopHeadings 
                 SubHeading ="PRICING"
                 Heading ="Pocket-Friendly Pricing
                 For The Perfect Design And Templates For All"
                 Para ="We know our competition. Perhaps that is why we have a fair pricing model for logos. Professional logo designers in the market may be a dime a dozen, but we guarantee to create quality over quantity for brand(s) on each order!"
                />

                <div className={styles['Pricing-Tabs']}>
                    <div className={styles['Tabs-Title']}>
                        <ul>
                            {PricingData.slice(0, 4).map((tab) =>(
                                <li key={tab.key} className={`${styles['tab']} ${activeTab === tab.id ? `${styles['active']}` : ''}`}
                                onClick={() => handleTabClick(tab.id)}>
                                    {tab.title}
                                </li>
                            ))} 
                        </ul>
                    </div>

                    <div className={styles['Tabs-Content']}>
                        {filteredPricingData.map((item) => (
                            <div key={item.id}
                                className={`${styles['content']} ${activeTab === item.id ? `${styles['active']}` : ''}`}>
                                <div className={styles['Content-Inner']}>
                                    {item.package.map((packageItem) => (
                                    <div key={packageItem.packageName} className={styles['Package-Box']}>
                                        {packageItem.discount ? (
                                            <div className={styles['Discount-Box']}>
                                                <h5>{packageItem.discount}</h5>
                                            </div>
                                        ) : (
                                            ""
                                        )}
                                        
                                        <h1>{packageItem.heading}</h1>
                                        <h4>{packageItem.subHeading}</h4> 
                                        <h2>{packageItem.sellPrice}</h2>
                                        <h3>{packageItem.realPrice}</h3>

                                        <div className={styles['List-Content']}>
                                            {packageItem.ListingData}
                                        </div>

                                        <div className={styles['Btn2-flex']}>
                                            <Link href="#" className={`${styles['Tabs-btn']} Btn-Common`}>Order Now</Link>
                                            <Link href="#" className={`${styles['Tabs-btn']} Btn-Common`}>View Portfolio</Link>
                                        </div>

                                    </div>
                                    ))}
                                </div>
                            </div>
                              
                        ))}
                    </div>
                </div>
            </Row>
            <div className={styles['Combo-Package']}>
                <Row>
                    <Col md={12}>
                        <div className={styles['Top-Heading-Col']}>
                            <div>
                                <h4>{ComboPack_SubHeading}</h4>
                                <h1>{ComboPack_Heading}</h1>
                            </div>
                            <div>
                                <h5>{ComboPack_Description}</h5>
                            </div>
                        </div>
                    </Col>
                    <Col md={8}>
                        <div className={styles['Pckg-Data']}>
                            {comboData.map((item , index) => (
                                <div className={styles['Pckg-Data-Box']} key={index}>
                                    <h2>{item.title}</h2>
                                    <div className={styles['Listing-Data']}>
                                        {item.ListingData}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Col>
                    <Col md={4} className={styles['Combo-Price-Col']}>
                        <div>
                            {comboPricing.map((item , index)=> (
                            <div className={styles['Combo-Pricing']} key={index}>
                                <h2>{item.title}</h2> 
                                <h1>{item.price}</h1>
                                <h4>{item.limitOffer}</h4>
                            </div>
                            ))}
                            <p>Want To Disscuss</p>
                            <Link href="#" className={`${styles['Combo-Pkg-Btn']} Btn-Common`}>Order Now</Link>
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>
    </div>
  )
}

export default Pricing
