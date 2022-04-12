import { useRouter } from 'next/router';
import Link from 'next/link';

const MangaStore = () => {
    const router = useRouter(); 

    return(<div>
        Manga Store {router.query.id}
        <Link href="/">
            <a>Back to home</a>
        </Link>        
        <Link href="/manga-store">
            <a>Go to dynamic page</a>
        </Link> 
    </div>

    );
};

export default MangaStore;