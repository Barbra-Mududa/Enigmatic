import React from "react";
import HikingList from "./HikingList";

function HomeList({ images }) {

  return (
    <div>
      {images.map((img) => {
        return (
        <HikingList key={img.id} img ={img}/>
        );
      })}
    </div>
  );
}

export default HomeList;