import styles from "../styles/Home.module.scss";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title> Gaming vibe</title>
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
      </Head>
      <div className={styles.home}>
        <h2>Welcome to Gaming Vibes</h2>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            deleniti rem aspernatur odit hic autem neque repellat alias? Debitis
            veniam inventore ipsum similique quos animi ipsa asperiores fuga
            dolor id. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Officiis deleniti rem aspernatur odit hic autem neque repellat
            alias? Debitis veniam inventore ipsum similique quos animi ipsa
            asperiores fuga dolor id. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Officiis deleniti rem aspernatur odit hic autem
            neque repellat alias? Debitis veniam inventore ipsum similique quos
            animi ipsa asperiores fuga dolor id.
          </p>
        </div>
      </div>
    </>
  );
}
