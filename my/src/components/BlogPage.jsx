import React, { useEffect, useState } from 'react'
import BlogCards from './BlogCards';

const BlogPage = () => {

  const[blogs,setBlogs] =useState([]);

  useEffect(()=>{
    async function fetchBlogs()
    {
      let url= `http://localhost:5000/blogs`;

      const reponse = await fetch(url);
      const data = await reponse.json();

      setBlogs(data);
    }
    fetchBlogs()
  },[])
  return (
    <div>
          {/* Category Sections */}
        <div>Page Category</div>
        {/* Blogs */}
        <div>
             <BlogCards  blogs={blogs}/>
        </div>
        {/* Pagenations */}
        <div>Paginations</div>
    </div>
  )
}

export default BlogPage
