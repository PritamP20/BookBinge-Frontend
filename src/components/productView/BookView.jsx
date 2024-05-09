import axios from 'axios'
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const BookView = ({userDetail}) => {

  const location = useLocation()
  const book = location.state
  console.log(book)

  console.log(book.book.listedOn)
  console.log(userDetail)

  const [error, setError] = useState()
  const [alert, setAlert] = useState(false)

  const handleRent = async (e)=>{
    e.preventDefault()
    setAlert(true)
    const date = new Date();
    const possesdBy = userDetail;
    const updatedBook = {...book.book, "possesdBy":possesdBy, "possesdOn": {"date":date.getDate(), "month":date.getMonth(), "yera":date.getFullYear()}}
    try {
      await axios.put(`http://localhost:8081/books/${book.book.id}`,updatedBook)
    } catch (error) {
      console.log("error: ",error)
      setError(true)
    }
    setTimeout(()=>[
      setAlert(false)
    ],2000)
  }

  return (
    <div className='mt-lg-5 mb-lg-5'>
      <div className='col-10 m-auto d-flex'>
        <div className='col-5'>
          <img className='col-8 d-flex rounded-3 shadow-lg m-auto' src={book.book.url} alt="" />
        </div>
        <div className='col-7'>
          <div>
            <h3 className='text-danger'>{book.book.name}</h3>
            <h5> <span className='text-danger'>by : </span> {book.book.by}</h5>
            <h5> <span className='text-danger'>gener : </span> {book.book.category}</h5>
            <h5> <span className='text-danger'>Listed Date : </span> {`${book.book.listedOn.date} / ${book.book.listedOn.month} / ${book.book.listedOn.year}`}</h5>
            <h5> <span className='text-danger'>Duration : </span> available duration </h5>
            <h5> <span className='text-danger'>Listed By : </span> {`${book.book.listedBy.name}`} </h5>
          </div>
          <hr />
          <div>
            <h5><span className='text-danger'> about: </span></h5>
            <h6>
              {book.book.detail}
            </h6>
          </div>
          <hr />
          <div className='d-flex'>
            <button type="button" onClick={e=>handleRent(e)} className="btn d-flex m-auto btn-outline-danger">Rent It</button> / <button type="button" className="btn d-flex m-auto btn-outline-danger">Add to Favorites</button> 
          </div>
          { alert ?
            <Stack sx={{ width: '100%' }} spacing={2}>
            {error ?
            <Alert className='d-flex m-auto' severity="error">This is an error Alert.</Alert>
              :
            <Alert className='d-flex m-auto' severity="success">This is a success Alert.</Alert>
            }
          </Stack> : <></>
          }
        </div>
      </div>
      
    </div>
    
  )
}

export default BookView
