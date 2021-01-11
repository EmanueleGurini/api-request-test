import React, { useState, useEffect } from 'react'
import './Photos.css'


function Photos() {
    const [photos, setPhotos] = useState([]);
    const [users, setUsers] = useState([]);
    const [albums, setAlbums] = useState([]); 
    const [userSelected, setSelectedUser] = useState(0); 
    const [albumSelected, setSelectedAlbum] = useState(0);

    const photosUrl = 'https://jsonplaceholder.typicode.com/photos';
    const usersUrl = 'https://jsonplaceholder.typicode.com/users'; 
    const albumsUrl = 'https://jsonplaceholder.typicode.com/albums';

    // GET PHOTOS
    useEffect(() => {
        const getPhotos = async () => {
            const url = albumSelected ? photosUrl + '?albumId=' + albumSelected : photosUrl; 
            const photos = await fetch(url).then(res => res.json());
            setPhotos(photos);
        }
        if(albumSelected) {
        getPhotos();
        }
        // return () => {
        // }
    }, [albumSelected]) 
    
    //GET USERS
    useEffect(() => {
        const getUsers = async () => {
            const users = await fetch(usersUrl).then(res => res.json());
            setUsers(users);
        }
        getUsers();
        // return () => {
        // }
    }, [])

    //GET ALBUMS
    useEffect(() => {
        const getAlbums = async () => {
           const url = userSelected ? albumsUrl + '?userId=' + userSelected : albumsUrl;
           const albums = await fetch(url).then(res => res.json()); 
           setAlbums(albums);
        }
        getAlbums();
        // return () => {
        // }
    }, [userSelected])

    const manageSelectedUser = ({target}) => {
        setSelectedUser(target.value);
    }
    const manageSelectedAlbum = ({target}) => {
        setSelectedAlbum(target.value)
    }
    
    return (
        <div>
            <h1>PHOTOS</h1>
            <form className='selectData'> 
                <label htmlFor='users'>USERS 
                    <select id='users' name='users' onChange={manageSelectedUser}>
                        <option>SELECT</option> 
                        {
                            users.map(user => <option value={user.id} key={user.id}>
                                    {user.name}
                                </option>)
                        }
                    </select>
                </label> {/** End Users Label */}
                <label htmlFor='albums'>ALBUMS
                    <select id='albums' name='albums' onChange={manageSelectedAlbum}>
                        <option>SELECT</option>
                        {
                            albums.map(album => <option value={album.id} key={album.id}>
                                {album.title}
                            </option>)
                        }
                    </select>
                </label> {/** End Albums Label */}
            </form> {/** End Form */}
            <ul className='photoUl'>
                {
                    photos.map(photo => <li key={photo.id}>
                        <img src={photo.thumbnailUrl} alt={photo.title} name={photo.title}></img>
                    </li>)
                }
            </ul>
        </div>)
}

export default Photos
