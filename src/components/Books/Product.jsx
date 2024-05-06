import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import BookComponent from './BookComponent'

const Product = ({allBooks}) => {
  const location = useLocation();
  const {category} = location.state;
  console.log(category)

  const cate = ["Romance", "Manga", "SciFi", "Mistry", "Biograpy", "Horror"]

  const [color, setColor] = useState({color:'red', backgroundColor:'white'})
  const handleClick = (e)=>{
      e.preventDefault()
      console.log("click")
      if (color.color == 'red') {
        setColor({color:'white', backgroundColor:'#e3342f'})
      }else if (color.color== 'white') {
        setColor({color:'red', backgroundColor:'white'})
      }
  }

  return (
    <div className='mt-5' style={{backgroundColor:'#f3f4f6'}}>
      <div className='d-flex m-auto justify-content-between col-10'>
        <div className='' style={{flexBasis:'23%'}}>
          <h3>Filter</h3>
          <div className='bg-white d-flex flex-column gap-3  p-3 rounded-3'>
            <div className='d-flex justify-content-between m-atuo'>
              <h5 className='d-flex mt-auto mb-auto'>Genres</h5>
              <a href="" className='text-danger '><h6 className='d-flex mt-auto mb-auto justify-content-end'>Clear</h6></a>
            </div>
            <div className='d-flex flex-wrap gap-1' >
              {cate.map(cate=>
                <div className='mt-2 mb-2'><a href="" onClick={e=>handleClick(e, cate)} className='text-decoration-none m-2' ><span className='pt-1 pb-1 p-2 border border-danger' style={{color:`${color.color}`, backgroundColor:`${color.backgroundColor}`}}>{cate}</span></a></div>
              )}
            </div>
          </div>
        </div>

        <div className='col-9 justify-content-end'>
          <BookComponent></BookComponent>
          
        </div>
      </div>
    </div>
  )
}

export default Product
