import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Banner from '../components/Banner.js';
import Image from 'next/image';
import Card from '../components/Card.js';


import mangasStoresData from '../data/manga-store.json';










  


export async function getStaticProps(context) {
   
  //fetch("https://foursquare.com/oauth2/authenticate?client_secret=2QWFL4XYRKVUTIR3P5YWIQLP0C342KIAWQP2AUPOVHXW3RWR&client_id=DLWX22NAM2MHQKJRIE4OML55HJZVAL0VMNTMQZGDCI4LKHSZ&response_type=code&redirect_uri=http://localhost:3000")
  //.then(response => console.log(response))
          console.log('STARTT')
         fetch('https://foursquare.com/oauth2/access_token?client_id=DLWX22NAM2MHQKJRIE4OML55HJZVAL0VMNTMQZGDCI4LKHSZ&client_secret=2QWFL4XYRKVUTIR3P5YWIQLP0C342KIAWQP2AUPOVHXW3RWR&grant_type=code&redirect_uri=http://localhost:3000&code=EVRAT2L2QZYQDX4J4Z5GFH21DJVXXMNTIJIVGZDJLYHS3SK4#_=_',
          {method: 'POST',
          headers: {Accept: 'application/json'},
          mode: 'no-cors', })
          .then(response => console.dir(response  ))
   
    

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
				{ props.mangasStores.map(mangaStore  => {
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
