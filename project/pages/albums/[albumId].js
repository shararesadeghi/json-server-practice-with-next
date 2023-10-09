import React from 'react';

const AlbumDetails = ({album}) => {
    return (
        <div>
            <h2>AlbumDetails</h2>
            <h3>{album.id} - {album.userId} - {album.title}</h3>
        </div>
    );
};

export default AlbumDetails;

export async function getServerSideProps(context){
    const {params} = context;
    const res = await fetch(`http://localhost:4000/albums/${params.albumId}`);
    const data = await res.json();

    if(!data.title){
        return{
            //notFound:true
            redirect:{destination:"/albums"}
        }
    }
    return{
        props:{
            album:data
        }
    }
}