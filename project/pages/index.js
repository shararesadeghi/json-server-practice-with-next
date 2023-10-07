import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home({posts}) {
  return (
    <div className={styles.container}>
       <h3>Next.js</h3>
       <ul>
         {posts.map(post=>(
           <li key={post.id}>{post.title}</li>
         ))
         }
       </ul>
    </div>
  )
}

export async function getStaticProps(){
  //fetch data from api
   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
   //const res = await fetch("http://localhost4000/posts")

   const data = await res.json();


  return{
    props:{
       posts:data
    }
  }
}
