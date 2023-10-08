import React from 'react';
//import {useRouter} from 'next/router';

const UserDetails = ({data}) => {
    // const router = useRouter();
    // if(router.isFallback){
    //     return <h1>is FallBack!</h1>
    // }
    return (
        <div>
            <h1>UserDetail</h1>
            <h3>{data.name}</h3>
            <h3>{data.email}</h3>
        </div>
    );
};

export default UserDetails;

export async function getStaticPaths(){

    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    const userData = data.slice(0,4);

   // const paths = data.map(user => ({params:{userId:user.id.toString()}}))
   const paths = userData.map(user=>({params:{userId:user.id.toString()}}))

    return{
        paths,
        //fallback:false,
        //fallback:true,
        fallback:"blocking"

    }
}

export async function getStaticProps(context){
    const {params} = context;
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`);
    const data = await res.json();

    if(!data.name){
        return {notFound:true}
    }

    return{
        props:{
            data
        }
    }
}