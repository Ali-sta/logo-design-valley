import React from 'react'
import { Header } from '../Header'
import { Footer } from '../Footer'
import Script from 'next/script'

function Layout(props) {
    const {children} = props
  return (
    <div>
        <Header />
            {children}
        <Footer/>

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
        />

    </div>
  )
}

export default Layout
