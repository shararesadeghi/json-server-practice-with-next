export default function Home({posts}) {
  return (
    <div>
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
   const res = await fetch(" http://localhost:4000/posts");
   //const res = await fetch("http://localhost:4000/posts")

   const data = await res.json();


  return{
    props:{
       posts:data
    }
  }
}
