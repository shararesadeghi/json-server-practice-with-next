import React from 'react';
import Link from 'next/link';

const Albums = ({albums}) => {
    return (
        <div>
            <h1>Albums</h1>
            <ul>
                {albums.map(album=>(
                    <li key={album.id}>
                      <Link href={`/albums/${album.id}`}><h3>{album.title}</h3></Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Albums;

export async function getServerSideProps(){
    const response = await fetch(" http://localhost:4000/albums");
    const data = await response.json();

    return{
        props:{
            albums:data
        }
    }
}