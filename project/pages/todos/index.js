//import React, { useEffect, useState } from 'react';
import React from "react";
import useSWR from 'swr';

const url = "http://localhost:4000/todos";

const fetcher = url => fetch(url).then(res=>res.json());

const Todos = () => {

    // const [todos, setTodos] = useState([]);

    // useEffect(()=>{
    //     fetch("http://localhost:4000/todos")
    //         .then(res=>res.json())
    //         .then(data=>setTodos(data))
    // },[])

    const {data, error} = useSWR(url, fetcher);  
    
    return (
        <div>
            {data ? (data.map(todo=><h3 key={todo.id}>{todo.title}</h3>)):(<h1>Loading...</h1>)}
           {/* {todos.length ? (todos.map(todo=><h3 key={todo.id}>{todo.title}</h3>)): (<h1>Loading...</h1>)}  */}

        </div>
    );
};

export default Todos;