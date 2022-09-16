import Head from 'next/head'
import Image from 'next/image'
import classes from 'src/styles/Home.module.css'
import { Footer } from "src/components/Footer"
import { Header } from 'src/components/Header'
import { Main } from "src/components/Main"

export default function Home() {
  return (
    <div className={classes.container}>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      <Main page="index" />
      <Footer />
    </div>
  )
}