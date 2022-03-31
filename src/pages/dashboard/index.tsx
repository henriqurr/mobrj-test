import Head from "next/head";

import styles from '../../styles/components/dashboard/styles.module.scss'

export default function Dashboard() {
    return (
    <>
        <Head>
            <title>Dashboard - MobRJ</title>
        </Head>

        <div className={styles.container}>
            DASHBOARD
        </div>
    </>
    )
}