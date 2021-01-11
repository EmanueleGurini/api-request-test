import React, { useState, useEffect } from 'react'
import axios from './axios.js'

function Picture({fetchUrl}) {

    const [photos, setPhotos] = useState([]);
    useEffect(() => {
        const getPhotos = async () => {
            const request = await axios.get(fetchUrl);
            setPhotos(request.data.slice(0,20));
            console.log(request.data.slice(0,20));
            return request;
        }
            getPhotos();
    }, [])

    return (
        <div>
            <h2>Photos</h2>
            <ul>
                {
                    photos.map(photo => <li key={photo.id}>
                        <h2>{photo.title}</h2>
                    </li>)
                }
            </ul>
        </div>
    )
}

export default Picture
