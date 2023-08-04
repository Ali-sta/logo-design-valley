import React, { useEffect } from "react";
import Head from 'next/head'
import { Banner } from '@/components/Banner'
import { WhyChooseUs } from '@/components/WhyChooseUs'
import { ExploreMore } from '@/components/ExploreMore'
import { KeyFeature } from '@/components/KeyFeature'
import { Tabs } from '@/components/Tabs'
import { Pricing } from '@/components/Pricing'
import { CallToAction } from '@/components/CallToAction'
import { Testimonials } from '@/components/Testimonials'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Script from "next/script";


gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    // Set up ScrollTrigger animations for each section
    const sections = gsap.utils.toArray('.section');

    sections.forEach((section, index) => {
      const gradient = section.getAttribute('data-gradient'); // Get the gradient data from the data-gradient attribute

      section.style.backgroundImage = gradient; // Apply the gradient as the background image
      section.style.backgroundSize = 'cover'; // Adjust this according to your needs

      gsap.from(section, {
        duration: 1,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: section,
          start: 'top center',
          end: 'bottom center',
          scrub: true,
          toggleActions: 'play none none none', // This ensures the animation plays when the section enters the viewport and is removed when it leaves
          onUpdate: (self) => {
            if (self.isActive) {
              const bgColor = section.getAttribute('data-bgcolor'); // Get the background color from data-bgcolor
              document.body.style.backgroundColor = bgColor; // Change the body background color
            }
          },
        },
      });

      // Ensure that the last section doesn't trigger the background change
      if (index !== sections.length - 1) {
        gsap.to(section, {
          duration: 1,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: sections[index + 1], // Use the next section as the trigger
            start: 'top center',
            end: 'top center',
            scrub: true,
            toggleActions: 'none none none none', // This disables the animation when the next section is visible
          },
        });
      }
    });
  }, []);



  return (
    <>
      <Head>
        <title>Logo Design Valley</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-K9G79C9')`,
          }}
        ></Script>
      </Head>
      <Banner 
        Heading={
          <>
          Award Winning Professional Logo <br/> Design Company in the US
          </>
        }
        FormHeading = "Insanely professional logo maker services poured with passion and proficiency"
        BgImageURL = ""
        bgColor="red"
      />
      <div className="section" data-gradient="linear-gradient(180deg, rgba(189,32,46,1) 0%, rgba(188,30,44,1) 16%, rgba(189,30,45,1) 100%)"  data-bgcolor="blue">
      <WhyChooseUs />
      </div>
      <div className="section" data-gradient="linear-gradient(180deg, rgba(218,66,114,1) 0%, rgba(199,54,118,1) 100%)">
      <ExploreMore
        Heading="Folks think we're rad. We're rated 4.8/5 from 100+ customer reviews."
        BtnLink="#"
        BtnText="Explore More Here"
      />
      </div>

      <div className="section" data-gradient="linear-gradient(180deg, rgba(200,55,118,1) 0%, rgba(187,47,121,1) 32%, rgba(178,42,124,1) 100%)">
      <KeyFeature/>
      </div>

      <div className="section" data-gradient="linear-gradient(180deg, rgba(179,42,124,1) 0%, rgba(154,27,129,1) 29%, rgba(135,16,134,1) 55%, rgba(105,22,142,1) 100%)">
      <Tabs />
      </div>

      <div className="section" data-gradient="linear-gradient(180deg, rgba(105,22,141,1) 0%, rgba(91,39,145,1) 29%, rgba(79,58,150,1) 55%, rgba(59,85,156,1) 100%)">
      <Pricing 
        ComboPack_SubHeading = "All In One"
        ComboPack_Heading = "Combo Package"
        ComboPack_Description = "Ultimate Value for Start-ups and Brand(s)"
      />
      </div>

      <div className="section" data-gradient="linear-gradient(180deg, rgba(59,85,156,1) 0%, rgba(49,85,159,1) 100%)">
      <CallToAction 
         Heading = "Get Your Project Started Today"
         Para = "At our company, we value communication and understand the importance of open dialogue between our team and our clients. That's why we encourage you to talk to us – whether it's to discuss a new project, ask a question, or provide feedback on our services."
      />
      </div>
      <div className="section" data-gradient="linear-gradient(180deg, rgba(49,85,159,1) 0%, rgba(17,24,90,1) 13%, rgba(11,14,77,1) 31%, rgba(5,7,38,1) 61%, rgba(2,3,19,1) 100%)">
      <Testimonials 
        Heading = "Testimonials"
      />
      </div>
      
    </>
  )
}
