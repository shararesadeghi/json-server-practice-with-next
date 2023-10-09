import React from 'react';

const Albums = ({albums}) => {
    return (
        <div>
            <h1>Albums</h1>
            <ul>
                {albums.map(album=>(
                    <li key={album.id}>
                        <h3>{album.title}</h3>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Albums;

export async function getServerSideProps(context){

    const {params, req, res} = context;
    console.log(req)
    const response = await fetch(" http://localhost:4000/albums");
    const data = await response.json();

    return{
        props:{
            albums:data
        }
    }
}