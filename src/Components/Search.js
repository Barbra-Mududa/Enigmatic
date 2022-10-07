import React from "react";

function Search({searchInput}) {

  return (
    <div className="ui large fluid icon input">
      <input 
       onChange={searchInput} 
        type="text"
        placeholder="Search event"
         
      />
      <i onClick={searchInput} className="circular search link icon"></i>
    </div>
  );
}

export default Search;