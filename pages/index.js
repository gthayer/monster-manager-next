import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/header'
import Archive from '../components/archive'
import Footer from '../components/footer'

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Monster Manager: Encounter Management Tools for GMs</title>
				<meta name="description" content="An interactive Dungeons and Dragons 5e Monster Manual featuring over 300 monsters from the D&amp;D System Resource Documents (SRD)." />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header/>

			<main className={styles.main}>
				<Archive/>
			</main>

			<Footer/>
		</div>
	)
}