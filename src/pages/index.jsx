import Head from 'next/head'
import classes from 'src/styles/Home.module.css'
import { Footer } from "src/components/Footer"
import { Header } from 'src/components/Header'
import { Main } from "src/components/Main"
import { useCallback, useEffect } from 'react'

export default function Home() {
  // function handleClick (e) {
const foo = 1;

const handleClick = useCallback((e) => {
  console.log(e.target.href);
  e.preventDefault();
  alert(foo);
}, []);

useEffect(() => {
  console.log("マウント時");
  document.body.style.backgroundColor = "lightblue";
  return () => {
    console.log("アンマウント時");
    document.body.style.backgroundColor = "";
  };
}, []);

  
  return (
    <div className={classes.container}>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      <a
        onClick={handleClick}
      >
        ボタン
      </a>

      <Main page="index" />
      <Footer />
    </div>
  );
};
