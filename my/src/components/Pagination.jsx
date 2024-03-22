import React from 'react'

const Pagination = ({blogs,currentPage,pageSize,onPageChange}) => {

    const totalPages = Math.ceil(blogs.length/pageSize)

   const renderPaginationsLinks = () =>{
    return Array.from({length:totalPages},(_, i)=>i+1).map((pageNumber) => (
<li className={pageNumber===currentPage ? "activePagination" : ""} key={pageNumber}>
    <a href="#"  onClick={()=> onPageChange(pageNumber)}>{pageNumber}</a>
</li>
    ))
   }

  return (
    <div>
       <ul className='pagination my-8 flex-wrap gap-4'>
        <li>
            <button onClick={()=>onPageChange(currentPage-1)} disabled={currentPage==1}>Previous</button>
        </li>
        <div className='flex gap-1 text-black '>
            {renderPaginationsLinks()}
        </div>
        <li>
            <button onClick={()=>onPageChange(currentPage+1)}  disabled={currentPage==totalPages}>Next</button>
        </li>
       </ul>
    </div>
  )
}

export default Pagination
