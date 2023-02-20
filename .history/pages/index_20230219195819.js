import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import record from '../data/arts.json'
import { useState, useEffect } from 'react';
import Router, { useRouter } from 'next/router';
import React from 'react'

function MyComponent() {
  const [fontLoaded, setFontLoaded] = useState(false);
}

export default function Home(){
  

  const r = useRouter();
  React.useEffect(() => {
    const font = new FontFace('CustomFont', 'url(path/to/your/FinkHeavy.ttf)');
    font.load().then(() => {
      document.fonts.add(font);
      setFontLoaded(true);
    });
  }, []);
  return (
    <>
      <Head>
      <title>ACNH ARTS</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Blathers.png" />
      </Head>

      <main className={styles.main} id ="museum">
      <div style={{ fontFamily: FinkHeavy ? 'CustomFont' : 'sans-serif' }}>
      <p>Welcome to Museum in Animal Crossing</p>
    </div>
        <button 
                className={styles.customBtn}
                onClick={
                  ()=>r.push("/arts")}

              >See Museum Arts</button>
      </main>
    </>
  );
}
