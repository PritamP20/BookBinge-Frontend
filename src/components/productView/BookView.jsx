import axios from 'axios'
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const BookView = ({userDetail}) => {

  const location = useLocation()
  const book = location.state

  const [error, setError] = useState()
  const [alertRent, setAlertRent] = useState(false)
  const [alertFav, setAlertFav] = useState(false)

  const handleRent = async (e)=>{
    e.preventDefault()
    setAlertRent(true)
    const date = new Date();
    const possesdBy = userDetail;
    const updatedBook = {...book.book, "possesdBy":possesdBy, "possesdOn": {"date":date.getDate(), "month":date.getMonth(), "yera":date.getFullYear()}}
    try {
      await axios.put(`https://bookbinge-backend.onrender.com/books/${book.book.id}`,updatedBook)
    } catch (error) {
      setError(true)
    }
    setTimeout(()=>[
      setAlertRent(false)
    ],2000)
  }

  const handleCollections = async (e)=>{
    setAlertFav(true)
    e.preventDefault()

    const allCollectios = await axios.get("https://bookbinge-backend.onrender.com/collection/")
    const bookTest = allCollectios.data.filter(book=> book.email == userDetail.email)

    
    if (bookTest.length==0) {
      console.log("posting")
      const data = {"email":userDetail.email, "collection":[book.book.id]};
      const interestBook = await axios.post("https://bookbinge-backend.onrender.com/collection",data) 
      
    }else{
      console.log("putting")
      const id = bookTest[0]._id
      const dup = bookTest[0].collection.find(id=>id==book.book.id)

      if (dup==undefined) {
        bookTest[0].collection.push(book.book.id)
        const data = {"email":userDetail.email, "collection":bookTest[0].collection}
        const updatating = await axios.put(`https://bookbinge-backend.onrender.com/collection/${id}`, data)
      }
    }
    alert("Book Added to your collection")
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
            <button type="button" onClick={e=>handleRent(e)} className="btn d-flex m-auto btn-outline-danger">Rent It</button> / <button type="button" onClick={e=> handleCollections(e)} className="btn d-flex m-auto btn-outline-danger">Add to Favorites</button> 
          </div>
          { alertRent ?
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
