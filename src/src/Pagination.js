import React from 'react'

export default function Pagination({ gotoNextPage, gotoPrevPage }) {
  return (
    <div className='pageButtons'>
        {gotoPrevPage && <button className="navigation" onClick={gotoPrevPage}>Previous</button>}
        {gotoNextPage && <button className="navigation" onClick={gotoNextPage}>Next</button>}
    </div>
  )
}
