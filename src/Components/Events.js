import React, { useEffect, useState} from 'react';
import HikingList from './HikingList';

function Events() {
const [images, setImages] = useState([]);

useEffect(() => {
    fetch("http://localhost:3000/images")
      .then((res) => res.json())
      .then((event) => {
        setImages(event);
    });
}, []);
        
  return (
    <div>
        <HikingList images={images}/>
    </div>
  )
}

export default Events