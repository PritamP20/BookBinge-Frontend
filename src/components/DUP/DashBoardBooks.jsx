import React from 'react'
import { useNavigate } from 'react-router-dom'

const Recommended = ({allBooks, title}) => {
    const navigate = useNavigate()
    const handlePreview = (e, book)=>{
        e.preventDefault()
        if (book.category!= 'ClgNotes') {
          navigate('/bookView', {state:{book:book}})
        }else{
          navigate('/document', {state: {"ClgNotes": book}})
        }
    }

    const handleAll = (e, title)=>{
      e.preventDefault()
      if (title =="Notes") {
        navigate('/allbooks', {state: {"notes": allBooks, "titile":"Notes"}})
      }else{
        navigate('/allbooks', {state: {"notes": allBooks, "titile":"Collection"}})
      }
    }
  return (
    <>
    <div className='mt-lg-5 mb-lg-5'>
      <div className='m-auto col-10'>
        <div className='d-flex justify-content-between'>
            <h3 className='fw-semibold'>{title}</h3>
            <a href="" onClick={e=>handleAll(e, title)} className='text-danger justify-content-end fs-5'>See all</a>
        </div>
        
        <div className="d-flex  overflow-x-scroll flex-nowrap gap-4" style={{scrollbarWidth:'none'}}>
            
            {allBooks.map(book=>
                <a href='' onClick={e=>handlePreview(e, book)} className='text-decoration-none text-black' style={{ flexBasis: '18%', minWidth:'18%' }}>
                    <img className="w-100 rounded-2" src={book.url} alt="" />
                    <div className='d-flex flex-column'>
                        <span className='fw-semibold fs-5'>{book.name}</span>
                        <span className='fs-5 text-secondary'>{book.category}</span>
                    </div>
                </a>
            )}
            
        </div>
      </div>
      
    </div>
    </>
  )
}

export default Recommended
