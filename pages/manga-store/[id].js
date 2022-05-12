import { useRouter } from 'next/router';
import Link from 'next/link';
import mangasStoresData from '../../data/manga-store.json';
import Head from 'next/head';
import styles from '../../styles/manga-store.module.css'
import Image from 'next/image';


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

const MangaStore = ({ mangaStore}) => {
    const router = useRouter();
    const {id, name, imgUrl, address} = mangaStore; 

    if (router.isFallback) {
        return <div>Loading ......</div>;
    }

    return(
    <div className={styles.layout}>
        <Head>
            <title>{name}</title>
        </Head>
        Manga Store :  {router.query.id}
        <div className={styles.col1}>
            <Link href="/">
                <a>Back to home</a>
            </Link> 
            <p>{name}</p>
            <Image src={imgUrl} width={600} height={360} className={styles.storeImg} alt={name}/>
        </div>
        <div className={styles.col2}>     
            <p>{imgUrl}</p>              
            <p>{address}</p>   
        </div>      
    </div>);   
};

export default MangaStore;