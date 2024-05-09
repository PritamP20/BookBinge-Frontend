// This the component which container main book list with no overflow and filters

import React, { useState } from 'react'
import notFound from '../../assets/notFound.png'
import { useNavigate } from 'react-router-dom'

const BookComponent = ({allBooks, activeCate}) => {
    console.log(activeCate)
    let filterBook = []
    if (activeCate.length!=0) {
        filterBook = allBooks.filter(b=> activeCate.includes(b.category))
    }else{
        filterBook = allBooks
        console.log(filterBook)
    }

    const navigate = useNavigate()

    const handleClick = (e, book)=>{
        e.preventDefault()
        if (book.category=='ClgNotes') {
            navigate('/document', {state: {"ClgNotes": book}})
        }else{
            navigate('/bookView', {state:{book:book}})
        }
    }
  return (
    <div>
      <div className='m-auto '>
        <div className='d-flex justify-content-between'>
            <h3 className='fw-semibold'>Recommended Books</h3>
            <a href="" className='text-danger justify-content-end fs-5'>See all</a>
        </div>
        
        <div className="d-flex  row  gap-5" style={{scrollbarWidth:'none'}}>
        
            {filterBook.map(book=>
                <a href='' onClick={e=>handleClick(e,book)} className='text-decoration-none text-black' style={{ flexBasis: '21%', minWidth:'18%' }}>
                    <img className="w-100 rounded-2" src={book.url} alt="" />
                    <div className='d-flex flex-column'>
                        <span className='fw-semibold fs-5'>{book.name}</span>
                        <span className='fs-5 text-secondary'>{book.category}</span>
                    </div>
                </a>
            )}
        </div>

        <div className='d-flex justify-content-center align-items-center m-auto'>
        {filterBook.length ==0 ?
                <div className='col-7'>
                    <img className='col-12' src={notFound} alt="" />
                </div>
                :
                <></>
            }
        </div>
      </div>
      
    </div>
  )
}

export default BookComponent
