import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home({data}) {
  return (
    <div className={styles.container}>
       <h3>Next.js</h3>
       <h1>{data}</h1>
    </div>
  )
}

export async function getStaticProps(){
  //fetch datafrom api
  const data = "sharareh sadeghi"

  return{
    props:{
      data
    }
  }
}
