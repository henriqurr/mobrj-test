import Head from "next/head";

import styles from '../../styles/components/dashboard/styles.module.scss'

export default function Dashboard() {
    return (
    <>
        <Head>
            <title>Dashboard - MobRJ</title>
        </Head>

        <header className={styles.headerContainer}>
            <div>

            </div>
        </header>

        <div className={styles.container}>
            <div className={styles.contentContainer}>
                Trlhas
            </div>
            <aside className={styles.contentAside}>
                Trilhas e Recomendados
            </aside>
        </div>
    </>
    )
}