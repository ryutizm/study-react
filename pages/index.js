import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Footer } from "../components/Footer"
import { Links } from '../components/Links'
import { Headline } from '../components/Headline'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Headline page="index" />
        <Links />
      </main>

      <Footer />
    </div>
  )
}
