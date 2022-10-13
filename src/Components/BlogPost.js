// import React from 'react';
// import BlogTable from "./BlogTable";

// function BlogPost(blog, handleDelete) {
//     // const deleteBlog = (id) => {
//     //     fetch("https://hikimg.herokuapp.com/blog"+ id,{
//     //     method: "DELETE",
//     // })
//     // .then((r) => r.json())
//     // .then(() => handleDelete(id))
//     // }

//     const blogSection = blog.map((blog,key) => (
//         <BlogTable
//         key={key}
//         title={blog.title}
//         message={blog.message}
//         handleDelete={deleteBlog}/>
//     ))
//   return (
//     <table>
//         <tbody>
//             <tr>
//                 <th className='blog-section'>
//                     <h3>Title</h3>
//                 </th>
//                 <th className='blog-section'>
//                     <h3>Blog</h3>
//                 </th>
//             </tr>
//         </tbody>
//         {blogSection}
//     </table>
//   )start

// }

// export default BlogPost;