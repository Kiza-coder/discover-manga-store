import { useRouter } from 'next/router';
import Link from 'next/link';

import mangasStoresData from '../../data/manga-store.json';


export function getStaticProps(staticProps){
    const params =  staticProps.params;
    console.log(params)
    return {
        props: {
            mangaStore: mangasStoresData.find(mangaStore => {
                return mangaStore.id.toString() === params.id;
        })
    }}
}

export function getStaticPaths() {
    return {
        paths: [
            { params: {id: "1"}},
            { params: {id: "2"}},
        ],
        fallback: false
    }
}

const MangaStore = (props) => {
    const router = useRouter(); 
    console.log(props)

    return(<div>
        Manga Store :  {router.query.id}
        <Link href="/">
            <a>Back to home</a>
        </Link> 
        <p>{props.mangaStore.id}</p>
        <p>{props.mangaStore.name}</p>       
        <p>{props.mangaStore.imgUrl}</p>              
        <p>{props.mangaStore.address}</p>       
       
    </div>

    );
};

export default MangaStore;