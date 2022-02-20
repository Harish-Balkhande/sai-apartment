import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      {/* -------------Hero Section-------------- */}
      <selection className={`${styles.hero} ${styles.overlay} ${styles.flexdiv}`}>
        <div className={styles.hero_container}>
          <h4>Book Your Dream Home Today</h4>
          <p>2BHK, 3BHK Flats Available !</p><br />
          <Link href="/contact" passHref><button className={styles.enquary_btn}>Enquiry Now</button></Link>
        </div>

      </selection>
      {/* -------------End Of Hero Section-------------- */}
      <main className={styles.main}>
        <div className={styles.messagediv}>
          <h2>Sai Apartment, Best Real Estate Developer in Amravati</h2>
          <p>
            Since the inception of Sai Apartment 5 years ago, we have remodelled ourselves from being just a real estate development company to being providers of #TheBetterLife.
            <br /><br />
            Staying true to our mantra, we have crafted residential spaces that help residents fulfil all their lifestyle aspirations. In commercial real estate, our motto has guided us to build spaces that facilitate ease of doing business.
            <br /><br />
            Our superior construction standards, appealing designs and state-of-the-art features have helped us contribute remarkable landmarks to Pune’s skyline. Today, our projects are not only appreciated by the industry but also loved by our customers. Looking at our work, it would be safe to that we stand among the best real estate developers in Pune.
          </p>
        </div>

        {/* <!------------Counter projects Markup Starts-------------> */}

        <section className={`${styles.overlay} ${styles.flexdiv} ${styles.markup}`} >
          <div className={`${styles.mark_div} ${styles.mark1}`} >
            {/* <div className={styles.markupwrap} > */}
            <i className="fas fa-building"></i>
            <h6>Quality Construction</h6>
            {/* </div> */}
          </div>
          <div className={`${styles.mark_div} ${styles.mark2}`}>
            {/* <div className={styles.markupwrap} > */}
            <i className="fas fa-users"></i>
            <h6>Happy Delivery</h6>

            {/* </div> */}
          </div>
          <div className={`${styles.mark_div} ${styles.mark3}`}>
            {/* <div className={styles.markupwrap} > */}
            <i className="fas fa-business-time"></i>
            <h6>5+ Year Experience</h6>
            {/* </div> */}
          </div>
          <div className={`${styles.mark_div} ${styles.mark4}`}>
            {/* <div className={styles.markupwrap} > */}
            <i className="fas fa-map-marker-alt"></i>
            <h6>Nice Location</h6>
            {/* </div>   */}
          </div>

        </section>
        {/* <!------------End of Markup Starts-------------> */}

        {/* ----------------Projects section---------------- */}
        <section className={`${styles.overlay} ${styles.flexdiv} ${styles.projects}`}>
          <h2>Successful Projects</h2>
          <div className={`${styles.project_item} ${styles.project_item1}`}>
            <Image src="/Images/decore.jpeg" alt="Hero section Image" width={500} height={400} />
          </div>
          <div className={`${styles.project_item} ${styles.project_item2}`}>
            <Image src="/Images/decore.jpeg" alt="Hero section Image" width={500} height={400} />
          </div>
          <div className={`${styles.project_item} ${styles.project_item3}`}>
            <Image src="/Images/decore.jpeg" alt="Hero section Image" width={500} height={400} />
          </div>
        </section>
        {/* -----------End of Projects section---------------- */}

        {/* -----------------Tetimonials----------------------- */}
        <section className={styles.testimonials}>
          <h2>Testimonials</h2>
          <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">

              <div className="carousel-item active" >
                <div className={styles.crousel_div}>
                  <Image src="/Images/Face icon.png" className="d-block w-100 rounded-circle" alt="Testimonials" width={140} height={140} />
                  <p>
                    <strong>Name</strong>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa eligendi reiciendis recusandae iure dolorum optio, quisquam vitae quo veniam moll
                  </p>
                </div>
              </div>

              <div className="carousel-item" >
                <div className={styles.crousel_div}>
                  <Image src="/Images/Face icon.png" className="d-block w-100 rounded-circle" alt="Testimonials" width={140} height={140} />
                  <p>
                    <strong>Name</strong>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa eligendi reiciendis recusandae iure dolorum optio, quisquam vitae quo veniam moll
                  </p>
                </div>
              </div>

              <div className="carousel-item">
                <div className={styles.crousel_div}>
                  <Image src="/Images/Face icon.png" className="d-block w-100 rounded-circle" alt="Testimonials" width={140} height={140} />
                  <p>
                    <strong>Name</strong>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa eligendi reiciendis recusandae iure dolorum optio, quisquam vitae quo veniam moll
                  </p>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
              <span className="carousel-control-prev-icon btn-dark" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
              <span className="carousel-control-next-icon btn-dark" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </section>
        {/* -----------------End Of Tetimonials----------------------- */}
      </main>
    </div>
  )
}
