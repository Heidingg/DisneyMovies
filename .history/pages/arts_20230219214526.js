import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import record from '../data/arts.json'



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
      <main className={styles.main}>
        <div className={styles.container}>
          {
            record.map( (rec, index) => {
              return(
                <div key={index}>
                  <img src={rec.Image} className={styles.Image}/>
                  <div> Name: {rec.Name} </div>
                  <div className={styles.Artist}> Artist:{rec.Artist}</div>
                </div>
                
              )
            })
          }
          </div>
      </main>
    </>
  )
}