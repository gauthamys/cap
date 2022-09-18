import '../styles/globals.css'
import "@fortawesome/fontawesome-svg-core/styles.css";
import Layout from '../components/Layouts'
import Head from 'next/head'
import { useEffect, useState } from 'react';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Numerite</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
