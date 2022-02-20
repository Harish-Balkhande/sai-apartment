import styles from '../styles/about.module.css'
import Image from 'next/image'
import Head from 'next/head'

export default function About() {
  return (
    <>
      <Head>
        <title>About Us</title>
      </Head>
      <section className={styles.about}>
        <div className={styles.aboutimg}>
          <Image src="/Images/decore.jpeg" alt="Hero section Image" width={250} height={300} />
        </div>
        <div className={styles.aboutdescription}>
          <strong>About Sai Apartments</strong>

          <p>Sai Apartment journey commenced nineteen years ago and continues with greater purpose now. With a deeply implied motive of enhancing urban living, Pride Purple Group initiated structures with design ethics, stature and elegance. Upholding ‘process’ as the key to craftsmanship, Pride Purple Group carried the significance of detailed structuring to bring touching craft into existence.</p>

          <p>At Sai Apartment, everything revolves around the happiness of its ever-growing family. Understanding how community living enhances lifestyle and everyday living, steps to nurture the community essence have prevailed along these years. From integrating new ways to establish relationships to taking care of each little need that demands attention; Sai Apartment has believed in building for better living.</p>

        </div>
      </section>
      <hr />
      <section className={styles.goals}>
        <div className={styles.goalDescription}>
          <p><strong>Purpose</strong></p>
          Growing into the real-estate Industry for over nineteen years has added more to the primary objective than just co-creating and delivering premium living spaces. Now, the purpose is to make premium lifestyle and luxury a possibility for everyone. And with this in heart and mind, Pride Purple Group ceaselessly strives to turn the thought into reality with each passing day.
        </div>
        <div className={styles.goalDescription}>
          <p><strong>Core Values</strong></p>
          To ensure a constant rise in the graph, our core values have been nurtured with sublime essence of giving. Where the first cornerstone stands for delivering beyond our commitment,the very next one is about giving equal opportunities of growth to all. These core values over years have helped Pride Purple Group grow into an organization of stature, mensch and integrity.
        </div>
        <div className={styles.goalDescription}>
          <p><strong>Vision</strong></p>
          Vision sets the direction right. And at Pride Purple Group, the direction of growth and flourishing is backed by our vision. Our goal is to co-create 200 million sq. ft. of structures by 2020. Pride Purple Group also aspires to take up projects all-across India. Apart from these goals, Pride Purple Group sticks to its primary objective of making luxury a possibility for everyone.
        </div>
      </section>
      {/* ----------------Team section---------------- */}
      <section className={styles.teamSection}>
        <h2>Our Team</h2>
        <div className={styles.items}>
          <div className={styles.team_member}>
            <Image src="/Images/Face icon.png" alt="Hero section Image" width={400} height={550} />
          </div>
          <div className={styles.team_member}>
            <Image src="/Images/Face icon.png" alt="Hero section Image" width={400} height={550} />
          </div>
          <div className={styles.team_member}>
            <Image src="/Images/Face icon.png" alt="Hero section Image" width={400} height={550} />
          </div>
        </div>
      </section>
      {/* -----------End of Team section---------------- */}
    </>
  )
} 