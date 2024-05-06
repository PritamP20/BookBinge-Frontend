import React from 'react'
import CategoryDup from './CategoryDup'
import BookDup from './BookDup'

const Dashboard = ({allBooks}) => {
  return (
    <div className='row'>
      <div className='col-lg-2 col-md-3'>
        <CategoryDup></CategoryDup>
      </div>
      <div className='col-lg-10 col-md-9'>
        
        <BookDup allBooks={allBooks}></BookDup>
      </div>
    </div>
  )
}

export default Dashboard
