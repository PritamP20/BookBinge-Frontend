import React from 'react'
import { useNavigate } from 'react-router-dom'

const cateNav = () => {
    const category = ["Romance", "Manga", "Sci-fi", "Mistry", "Biograpy", "Horror"]

    const navigate = useNavigate()
    const handleClick =(e, cate)=>{
        navigate('/book', {state: {category: cate}})
    }

  return (
    <div className='d-flex' style={{backgroundColor:'rgb(245, 245, 245)'}}>
        <div className='d-flex col-10 m-auto justify-content-between'>
            <div className='d-flex  gap-3' style={{height:'40px'}}>
                {category.map(cate=>
                    <a href='' key={cate} onClick={e=>handleClick(e, cate)} className='d-flex text-decoration-none text-black mt-auto mb-auto fs-6'>{cate}</a>
                )}
            </div>
            <div className='d-flex justify-content-end mt-auto mb-auto gap-3'>
                <a href='/seller' className='d-flex text-decoration-none text-black mt-auto mb-auto fs-6'>ListYourBooks</a>
                <a href='' className='d-flex text-decoration-none text-black mt-auto mb-auto fs-6'>Demand</a>
                <a href='' className='d-flex text-decoration-none text-black mt-auto mb-auto fs-6'>Available</a>
            </div>
        </div>
    </div>
  )
}

export default cateNav
