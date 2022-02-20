import Head from "next/head"
import styles from '../styles/contact.module.css'

export default function Contact(){
    return(
        <>
        <Head>
            <title>Contact Us</title>
        </Head>

        <section className={styles.ContactUS}>
            <div className={styles.maindiv}>
                <h3 className={styles.h3}>Office</h3>
                <p className={styles.address}>
                 consequatur cumque explicabo corporis minus nemo consectetur atque praesentium magnam. Tempore dicta adipisci veritatis autem ducimus, dolorem, non
                </p>
            </div>
            <div className={styles.maindiv}>
                <h3 className={styles.h3}>Contacts</h3>
                <div className={styles.contact_box}>
                    <div className={styles.contact_item}>
                        <h5>Joe Parker</h5>                     
                        <p>
                            Email: joe@gmail.com <br/>
                            phone : 412785689
                        </p>
                    </div>
                    <div className={styles.contact_item}>
                        <h5>Jhon Mathew</h5>                        
                        <p>
                            Email: jhon@gmail.com <br/>
                            phone : 412785689
                        </p>
                    </div>      
                </div>              
            </div>
        </section>
        </>
    )
}