import React from 'react';
import Link from 'next/link';

const Users = ({users}) => {
    return (
        <div>
            <ul>
            {users.map(user=>(
                <li key={user.id}>
                    <Link href={`/users/${user.id}`}>{user.name}</Link>
                </li>
            ))}
            </ul>
        </div>
    );
};

export default Users;

export async function getStaticProps(){

     const res = await fetch(" http://localhost:4000/users");
     const data = await res.json();
    return {
        props:{users:data},
        revalidate: 10,
    }
}