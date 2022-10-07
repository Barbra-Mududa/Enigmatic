import React, { useState, useEffect } from 'react'
import BlogItem from './BlogItem';

function AddBlog() {
    const [blog, setBlog] = useState([]);
    
    useEffect(() => {
        fetch("https://hikimg.herokuapp.com/blog")
          .then((res) => res.json())
          .then((blog) => {
            setBlog(blog);
            console.log(blog)
        });
    }, []);

    const blogItems =  blog.map((blogs)=>(
     
        <BlogItem 
        key={blog.id}
        blog={blogs}
        onDelete={handleDeleteItem}
        />
    ) )
    function handleDeleteItem(id){
        fetch(`https://hikimg.herokuapp.com/blog${id}`, {
          method: "DELETE",
        })
        .then((res) => res.json())
        .then(() => {
          const eachBlog = blog.filter((b)=> b.id !== id)
          setBlog(eachBlog)
        })
      }
  return (
    <div>
        <h2>Blog Posts</h2>
        <ul> {blogItems}</ul>
    </div>
  )
}

export default AddBlog;