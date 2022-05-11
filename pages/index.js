import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Banner from '../components/Banner.js';
import Image from 'next/image';
import Card from '../components/Card.js';

import mangasStoresData from '../data/manga-store.json';


export async function getStaticProps(context) {
  return {
    props: { mangasStores: mangasStoresData }
  }
}

export default function Home(props) {

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

        {props.mangasStores.length > 0 && (
			<>
				<h2 className={styles.heading2}>Los Angeles Stores</h2>
				<div className={styles.cardLayout}>
				{ props.mangasStores.map(mangaStore => {
					return (
						<Card 
							name= {mangaStore.name}
							href= {`/manga-store/${mangaStore.id}`} 
							imgUrl={mangaStore.imgUrl}
							className= {styles.card}
							key={mangaStore.id}
						/>
						);
					})
				}	
				</div>
			</>
		)}   
      </main>
    </div>
  )
};
