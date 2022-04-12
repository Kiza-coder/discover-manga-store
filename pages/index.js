import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Banner from '../components/Banner.js';
import Image from 'next/image';
import Card from '../components/Card.js';

import mangasStores from '../data/manga-store.json';


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

        <Banner 
          buttonText="View stores nearby" 
          handleOnClick={handleOnButtonClick}
        />

        <div className={styles.heroImage}>
          <Image 
            src="/static/images/hero-image.png"
            width={700}
            height={400}
          />
        </div>
        <div className={styles.cardLayout}>
          { mangasStores.map(mangaStore => {
            return (
              <Card 
              name= {mangaStore.name}
              href="/" 
              imgUrl="/static/images/hero-image.png"
              className= {styles.card}
              />
              );
            })
          }
        </div>
        
      </main>
    </div>
  )
};
