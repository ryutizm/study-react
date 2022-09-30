/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import Head from "next/head";
import classes from "src/styles/Home.module.css";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
import { Main } from "src/components/Main";

export default function About({
  doubleCount,
  isShow,
  handleClick,
  handleDisplay,
  text,
  array,
  handleChange,
  handleAdd,
}) {
  return (
    <div className={classes.container}>
      <Head>
        <title>About Page</title>
      </Head>
      <Header />

      {/* useCounter */}
      {isShow ? <h1>{doubleCount}</h1> : null}
      <button onClick={handleClick}>ボタン</button>
      <button onClick={handleDisplay}>{isShow ? "非表示" : "表示"}</button>

      {/* useInputArray */}
      <input type="text" value={text} onChange={handleChange} />
      <button onClick={handleAdd}>追加</button>
      <ul>
        {array.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>

      <Main page="about" />
      <Footer />
    </div>
  );
}
