import React, { useState, useEffect } from 'react'
import './ToDoList.css'

function ToDoList() {
    const [tasks, setTasks] = useState([]);
    const [users, setUsers] = useState([]);
    const [userSelected, setSelectedUser] = useState(0);

    const tasksUrl = 'https://jsonplaceholder.typicode.com/todos';
    const usersUrl = 'https://jsonplaceholder.typicode.com/users';

    // GET TASKS
    useEffect(() => {
        const getTasks = async () => {
            const url = userSelected ? tasksUrl + '?userId=' + userSelected : tasksUrl;
            const users = await fetch(url).then(res => res.json());
            setTasks(users)
        }
        getTasks();
        // return () => {
        // }
    }, [userSelected])   

    // GET USER 
    useEffect(() => {
        const getUser = async () => {
            const users = await fetch(usersUrl).then(res => res.json()); 
            setUsers(users);
        }
        getUser();
    }, [])

    const printStatus = (value) => {
        if (value.completed === true) {
            return 'Completed'
        } else if (value.completed === false) {
            return 'Not Completed'
        }
    }

    const manageChangeUser = ({target}) => {
        setSelectedUser(target.value)
    }
    
    return (
        <div className='ToDoList'>
           <h1>To do list</h1> 
           <form>
               <label htmlFor='users'>USER
                   <select name='users' id='users' onChange={manageChangeUser}>
                       <option>Select</option>
                       {
                           users.map(user => <option value={user.id} key={user.id}>
                               {user.name}
                           </option>)
                       }
                   </select>
               </label>
              
           </form>
           {
               tasks.map(task => <div className='tasks'>
                   <p className='tasks__title'>{ task.title }</p>
                   <p>{printStatus(task)}</p>
               </div>)
           }
        </div>
    )
}

export default ToDoList
