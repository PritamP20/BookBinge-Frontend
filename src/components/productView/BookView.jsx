import React from 'react'

const BookView = () => {
  return (
    <div className='mt-lg-5 mb-lg-5'>
      <div className='col-10 m-auto d-flex'>
        <div className='col-5'>
          <img className='col-8 d-flex rounded-3 shadow-lg m-auto' src="https://m.media-amazon.com/images/I/71XEsXS5RlL._SY522_.jpg" alt="" />
        </div>
        <div className='col-7'>
          <div>
            <h3 className='text-danger'>Book Title</h3>
            <h5> <span className='text-danger'>by : </span> Auther</h5>
            <h5> <span className='text-danger'>gener : </span> Category</h5>
            <h5> <span className='text-danger'>Listed Date : </span> Listed Date</h5>
            <h5> <span className='text-danger'>Duration : </span> available duration </h5>
          </div>
          <hr />
          <div>
            <h5><span className='text-danger'> about: </span></h5>
            <h6>
              Harry Potter, fictional character, a boy wizard created by British author J.K. Rowling. His coming-of-age exploits were the subject of seven enormously popular novels (1997–2007), which were adapted into eight films (2001–11); a play and a book of its script appeared in 2016.
            </h6>
          </div>
          <hr />
          <div className='d-flex'>
            <button type="button" className="btn d-flex m-auto btn-outline-danger">Rent It</button> / <button type="button" className="btn d-flex m-auto btn-outline-danger">Add to Favorites</button> 
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default BookView
