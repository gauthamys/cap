import '../styles/globals.css'
import Layout from '../components/Layouts'
import Head from 'next/head'

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
