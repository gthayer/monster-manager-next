import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Archive from '../components/archive'

import { getMonsters } from '../lib/monsters'

export default function Home({monsters}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Monster Manager: Encounter Management Tools for GMs</title>
        <meta name="description" content="An interactive Dungeons and Dragons 5e Monster Manual featuring over 300 monsters from the D&amp;D System Resource Documents (SRD)." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Archive monsters={monsters} />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
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