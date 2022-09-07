import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'


export default function Home({mats}) {
  return (
    <div className={styles.container}>
     <div className={styles.grid}>
      {mats?.map((mats) => (
        <div key={mats.id}>
            <Link href={`/data/${mats.id}`}>
              <a className={styles.card}>
              <h3>{mats.title} &rarr;</h3>
             <p>{mats.body}</p>
              </a>
            </Link>
        </div>
      ))}
      </div>
    </div>

  )
}

export const getStaticProps = async () => {
    const res = await fetch(`${server}/api/list`)
    const mats = await res.json()
  
    return {
      props: {
        mats,
      },
    }
  }