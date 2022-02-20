import styles from '../styles/footer.module.css'

export default function Footer(){
    return(
        <section className={styles.parent}>
            {/* <div className={styles.parent}> */}
            <div className={styles.child}>
                <h3>Office</h3>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id, corporis odit quidem
                </p>
            </div>
            <div className={styles.child}>
                <h3>Contact</h3>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id, corporis odit quidem 
                </p>
            </div>
            <div className={styles.child}>
                <h3>Ongoing Project</h3>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id, corporis odit quidem 
                </p>
            </div>
            {/* </div> */}
        </section>
    )
}