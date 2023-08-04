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
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(scope, doc, tagName, src, objectName, newElement, firstElement) {
        Array.isArray(scope["SwiftSalesObject"]) ?
            scope["SwiftSalesObject"].push(objectName) :
            (scope["SwiftSalesObject"] = [objectName]);
        scope[objectName] =
            scope[objectName] ||
            function() {
                scope[objectName].queries = scope[objectName].queries || [];
                scope[objectName].queries.push(arguments);
            };
        scope[objectName].scriptInjectedAt = 1 * new Date();
        newElement = doc.createElement(tagName);
        newElement.setAttribute("id", "swift-sales-widget-script");
        firstElement = doc.getElementsByTagName(tagName)[0];
        newElement.async = 1;
        newElement.src = src;
        firstElement
            ?
            firstElement.parentNode.insertBefore(newElement, firstElement) :
            doc.getElementsByTagName("head")[0].appendChild(newElement);
    })(window, document, "script", "https://stg-script.swiftsales.io/swiftsales.js?v=1691157508557", "swiftSales");
    swiftSales("Init", "427")`,
  }}
/>

    </div>
  )
}

export default Layout
