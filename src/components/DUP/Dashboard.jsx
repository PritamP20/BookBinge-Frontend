import React from 'react'
import CategoryDup from './CategoryDup'
import BookDup from './BookDup'

const Dashboard = ({allBooks}) => {
  return (
    <div className='row'>
      <div className='col-2'>
        <CategoryDup></CategoryDup>
      </div>
      <div className='col-10'>
        <BookDup allBooks={allBooks}></BookDup>
      </div>
    </div>
  )
}

export default Dashboard
