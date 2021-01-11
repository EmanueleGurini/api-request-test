import React, { useEffect } from 'react'
import axios from 'axios'

function Users() {
    useEffect(() => {
        const fetchData = async () => {
            const users = await axios.get('https://reqres.in/api/users'); 
            console.log(users.data.data);
            return users;
        }
        fetchData()
    }, [])
    
    return (
        <div className="users">
           <h1>USERS</h1> 
        </div>
    )
}

export default Users
