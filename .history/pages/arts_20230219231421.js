import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import record from '../data/arts.json'

import Menu from '../component/menu'

export default function Home() {
  console.log(record);

  return (
    <>
      <Head>
        <title>ACNH ARTS</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Blathers.png" />
      </Head>
      <Menu></Menu>
      <main className={styles.main}>
        <div className={styles.container}>
          {
            record.map( (rec, index) => {
              return(
                <div className={styles.Art} key={index}>
                  <img src={rec.Image} className={styles.Image}/>
                  <p>  {rec.Name} </p>
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