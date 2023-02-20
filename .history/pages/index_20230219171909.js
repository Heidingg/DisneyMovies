import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import record from '../data/arts.json'



export default function Home() {
  console.log(record);

  return (
    <>
      <Head>
        <title>Disney Movies</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Animal_Crossing_Leaf.sgv.png" />
      </Head>
      <main className={styles.main}>
        <div className={styles.container}>
          {
            record.map( (rec, index) => {
              return(
                <div key={index}>
                  <div>{rec.Image}</div>
                  <div>{rec.Name}</div>
                  <div>{rec.Category}</div>
                  <div>{rec.Artist}</div>
                </div>
                
              )
            })
          }
          </div>
      </main>
    </>
  )
}