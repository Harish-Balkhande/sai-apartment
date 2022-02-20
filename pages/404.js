import Link from 'next/link';
import Head from 'next/head';
import styles from '../styles/error.module.css'

export default function Error() {
    return (<>
        <Head>
            <title>Error</title>
        </Head>

        <div className={styles.error}>
            <strong>404</strong>
            <span>Page Not Found</span><br />
            <Link href="/"><a className={styles.homeLink}>Back To Home</a></Link>
        </div>
    </>)
}