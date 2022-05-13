import { useRouter } from 'next/router';
import Link from 'next/link';
import mangasStoresData from '../../data/manga-store.json';
import Head from 'next/head';
import styles from '../../styles/manga-store.module.css'
import Image from 'next/image';
import cls from "classnames";


export function getStaticProps(staticProps){
    const params =  staticProps.params;
    
    return {
        props: {
            mangaStore: mangasStoresData.find(mangaStore => {
                return mangaStore.id.toString() === params.id;
        })
    }}
}

export function getStaticPaths() {
    const paths = mangasStoresData.map(mangaStore => {
        return {
            params:{
                id: mangaStore.id.toString()
            }
        }
    })

    return {
        paths,
        fallback: true
    }
}

const MangaStore = ({ mangaStore }) => {
    const router = useRouter();
    const {name, imgUrl, address, neighbourhood} = mangaStore; 

    if (router.isFallback) {
        return <div>Loading ......</div>;
    }

    const handleUpVoteButton = (event) => {
        console.log(event);
        console.log("Iam handleUpVoteButton");
    }

    return(
    <div className={styles.layout}>
        <Head>
            <title>{name}</title>
        </Head>
        Manga Store :  {router.query.id}
        <div className={styles.container}>
            <div className={styles.col1}>
                <div className={styles.backToHomeLink}> </div>
                <Link href="/">
                    <a>Back to home</a>
                </Link> 
                <div className={styles.nameWrapper}>
                    <h1 className={styles.name}>{name}</h1>
                </div>
                <Image src={imgUrl} width={600} height={360} className={styles.storeImg} alt={name}/>
            </div>
            <div className={cls("glass",styles.col2)}>

                <div className='iconWrapper'>
                    <Image src="/static/icones/places.svg" height="24" width="24" />  
                    <p className={styles.text}>{address}</p>
                </div>

                <div className='iconWrapper'>
                    <Image src="/static/icones/nearMe.svg" height="24" width="24" />  
                    <p className={styles.text}>{neighbourhood}</p>
                </div>   

                <div className='iconWrapper'>
                    <Image src="/static/icones/star.svg" height="24" width="24" />  
                    <p className={styles.text} >10</p>
                </div>
                <button className={styles.upvoteButton} onClick={handleUpVoteButton}> Up Vote </button>                       
            </div> 
        </div>     
    </div>);   
};

export default MangaStore;