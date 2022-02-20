import Navbar from './navbar'
import Footer from './footer'
import Sticker from './sticker'
import { useRouter } from 'next/router';

export default function Layout({ children }) {
    const router = useRouter();
    return (
        <>
            <main>
                {/* <Navbar /> */}
                {router.pathname !== "/404" && <Navbar />}
                <Sticker />
                {children}
                {/* <Footer /> */}
                {router.pathname !== "/404" && <Footer />}
            </main>
        </>
    )
}
