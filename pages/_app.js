import '../styles/globals.css'
import Layout from '../components/en/layout'
import Head from 'next/head'


function MyApp({Component, pageProps}) {
    return (
        <>
            <Head>
                <title>Gulf LaserTag</title>
            </Head>
            <Component {...pageProps}/>


        </>
    )
}

export default MyApp
