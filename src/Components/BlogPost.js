import React from 'react'

function BlogPost(blog, handleDelete) {
    fetch("https://hikimg.herokuapp.com/blog"+ id,{
        method: "DELETE",
    })
    .then((r) => r.json())
    .then(() => handleDelete(id))
   

  return (
    <div className='blog-post'>
        <h2>BlogPost</h2>
        </div>
  )
}

export default BlogPost