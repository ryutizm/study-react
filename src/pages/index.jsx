import Head from "next/head";
import classes from "src/styles/Home.module.css";
import { Posts } from "src/components/Posts";
import { Header } from "src/components/Header";

// eslint-disable-next-line no-unused-vars
const Home = () => {
  return (
    <div className={classes.container}>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      <Posts />
    </div>
  );
};

export default Home;
