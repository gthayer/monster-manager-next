import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/header'
import Archive from '../components/archive'
import Footer from '../components/footer'

import { getMonsters, useMonsters } from '../lib/helpers'

export default function Home({monsters}) {
  const m = useMonsters().filterMonsters();
  return (
    <div className={styles.container}>
      <Head>
        <title>Monster Manager: Encounter Management Tools for GMs</title>
        <meta name="description" content="An interactive Dungeons and Dragons 5e Monster Manual featuring over 300 monsters from the D&amp;D System Resource Documents (SRD)." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>

      <main className={styles.main}>
        <Archive monsters={m} />
      </main>

      <Footer/>
    </div>
  )
}

export async function getStaticProps() {
	const monsters = getMonsters();
	return {
		props: {
			monsters
		}
	};
}