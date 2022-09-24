/* eslint-disable react/react-in-jsx-scope */
import Head from "next/head";
import classes from "src/styles/Home.module.css";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
import { Main } from "src/components/Main";
import { useCallback, useEffect, useState } from "react";

export default function Home() {
  // 前の状態を用いた処理をしたい場合の書き方
  const [count, setCount] = useState(1);

  const handleClick = useCallback(() => {
    if (count < 10) {
      setCount((count) => count + 1);
      // setFoo(foo + 1);
      // ↑これだと直接代入になっていて、前の状態を引き継いでいない
    }
  }, [count]);

  useEffect(() => {
    document.body.style.backgroundColor = "lightblue";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <div className={classes.container}>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      <h1>{count}</h1>
      <button onClick={handleClick}>ボタン</button>
      <Main page="index" />
      <Footer />
    </div>
  );
}
