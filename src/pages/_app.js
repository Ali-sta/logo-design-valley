import '@/styles/globals.scss'
import 'bootstrap/dist/css/bootstrap.css'
import { Layout } from '@/components/Layout'
import { Fragment } from 'react'
import Head from "next/head";
import '../utils/gsap'




export default function App({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>

    </Fragment>
   
    
  )
}
