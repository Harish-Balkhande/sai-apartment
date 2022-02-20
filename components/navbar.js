import Link from 'next/link'
import Style from '../styles/navbar.module.css'
import { useRouter } from 'next/router'

export default function Navbar() {
    const router = useRouter();

    return (
        <nav className={Style.nav}>
            <p className={Style.logo}>Sai Apartments</p>
            <input className={Style.input} type="checkbox" id="click" />
            <label htmlFor="click" className={Style.menu_btn}><i className="fas fa-bars"></i></label>
            <label htmlFor="click" className={Style.close_btn}>X</label>
            

            <ul className={Style.ul} id="menu_bar"> 
                <li className={Style.li}><Link href="/"><a className={router.pathname == "/" ? Style.active : ""}>Home</a></Link></li>
                <li className={Style.li}><Link href="/contact"><a className={router.pathname == "/contact" ? Style.active : ""}>Contact Us</a></Link></li>
                <li className={Style.li}><Link href="/about"><a className={router.pathname == "/about" ? Style.active : ""}>About Us</a></Link></li>
            </ul>
       </nav>


    )
}