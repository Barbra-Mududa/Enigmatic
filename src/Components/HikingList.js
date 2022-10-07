import React from 'react'

function HikingList({img}) {

  return (
     <div className="event-list">
      <div className='hiking'>
       <div className="eventImg">
        <img src={img.image} alt="images" width={400} height={400}></img>
      </div>     
      <div className="eventTitle">
        <h2>{img.title}</h2>
      </div>

      <div className="eventDescription">
        <p>{img.Description}</p>
      </div>
      </div>
    </div>
 )
}

export default HikingList