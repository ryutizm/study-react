import Head from 'next/head'
import Image from 'next/image'
import classes from 'src/styles/Home.module.css'
import { Footer } from "src/components/Footer"
import { Header } from 'src/components/Header'
import { Main } from "src/components/Main"
import { useCallback } from 'react'

export default function Home() {
  // function handleClick (e) {
const foo = 1;

const handleClick = useCallback((e) => {
  console.log(e.target.href);
  e.preventDefault();
  alert(foo);
}, []);

  
  return (
    <div className={classes.container}>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      <a 
        href="/about"
        onClick={handleClick}
      >
        ボタン
      </a>

      <Main page="index" />
      <Footer />
    </div>
  );
};
