import React, { useState } from 'react';

const TtodoDetails = ({todo}) => {
     
    const [data, setData] = useState(todo);
    const updateHandler = async (id)=>{
        const res = await fetch(`http://localhost:4000/todos/${id}`);
    const data = await res.json();
    setData(data);
    }

    return (
        <div>
            <h1>{data.title}</h1>
            <h3>{`${data.completed}`}</h3>
            <button onClick={()=>updateHandler(data.id)}>Update</button>
        </div>
    );
};

export default TtodoDetails;

export async function getServerSideProps(context){

    const {params} = context;
    const res = await fetch(`http://localhost:4000/todos/${params.todoId}`);
    const data = await res.json();

    return{
        props:{
            todo:data
        }
    }
}