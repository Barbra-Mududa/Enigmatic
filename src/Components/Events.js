import React, { useEffect, useState} from 'react';
import Card from './Card';
import Search from './Search';

function Events() {
const [images, setImages] = useState([]);
const [ search,  setSearch] = useState([]);

useEffect(() => {
    fetch("https://hikimg.herokuapp.com/images")
      .then((res) => res.json())
      .then((event) => {
        setImages(event);
        setSearch(event)
    });
}, []);

function filter(e) {
    setImages(
      search.filter((images) =>
        images.title.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  }

  return (
    <div>
        <Search searchInput={filter}/>
        <Card images={images}/>
    </div>
  )
}

export default Events