import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import record from '../data/arts.json'
import { useState, useEffect } from 'react';
import Router, { useRouter } from 'next/router';


export default function Home(){

  return (
    <>
      <Head>
      <title>ACNH ARTS</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Blathers.png" />
      </Head>

      <main className={styles.main} id ="museum">
      <div className={styles.header}>
        <h1>Welcome to Museum in Animal Crossing </h1>
        </div>
        <button 
                className={styles.customBtn}
                onClick={
                  ()=>r.push("/arts")}

              >See Musuem Arts</button>
      </main>
    </>
  );
}
