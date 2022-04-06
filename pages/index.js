import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Banner from '../components/Banner.js';


export default function Home() {

  const handleOnButtonClick = (event) => {
    console.log(event)
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Manga Discover</title>
      </Head>

      <main className={styles.main}>
        <Banner buttonText="View stores nearby" handleOnClick={handleOnButtonClick}/>
      </main>
    </div>
  )
};
