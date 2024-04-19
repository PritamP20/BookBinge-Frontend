import axios from 'axios';
import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import Heart from '../assets/Icons/heart2.svg'
import Punch from '../assets/Icons/punch.png'
import Mistry from '../assets/Icons/mistry.png'
import Horror from '../assets/Icons/horror.png'
import Sci from '../assets/Icons/scifi.png'
import Biography from '../assets/Icons/biography.png'

const Category = () => {
  const category = [{"cate":"Romance", "iconUrl":"https://kitabay.com/cdn/shop/files/Romance_2_ff774fdb-6cfe-4eb5-8bfe-f447aee148eb.png?v=1709291997"},{"cate":"Manga", "iconUrl":"https://kitabay.com/cdn/shop/files/comic_0c903b4a-6177-4425-875e-106f3be09bfe.png?v=1699968240"},{"cate":"Sci-Fi", "iconUrl":"https://kitabay.com/cdn/shop/files/Sci-Fi.png?v=1699968240"},{"cate":"Mistry", "iconUrl":"https://kitabay.com/cdn/shop/files/Mystery_c01884b8-8ae9-462f-840b-7b9fa7e84362.png?v=1699968159"},{"cate":"Biograpy", "iconUrl":"https://kitabay.com/cdn/shop/files/feather_1.png?v=1699968095"},{"cate":"Horror", "iconUrl":"https://kitabay.com/cdn/shop/files/Horror_d7281c5e-a090-462f-9348-a26a613d4bdf.png?v=1699968239"}]
  // const category = [{"cate":"Romance", "iconUrl":Heart},{"cate":"Manga", "iconUrl": Punch},{"cate":"Sci-Fi", "iconUrl": Sci},{"cate":"Mistry", "iconUrl":Mistry},{"cate":"Biograpy", "iconUrl":Biography},{"cate":"Horror", "iconUrl":Horror}]
  let screen = false;
  if (window.matchMedia("(max-width: 575px)").matches) {
    // console.log("small body");
    screen = false;
  } else {
    // console.log("large body");
    screen = true;
  }

  const navigate = useNavigate()

  const handleCategory = async (e, cate)=>{
    e.preventDefault()
    // const data = await axios.get(`http://localhost:8081/books/category/${cate}`)

    const data = await axios.get(`https://bookbinge-backend.onrender.com/books/category/${cate}`)

    console.log(data.data)
    navigate('/category', { state: { books: data.data, category: cate } });
  }
  return (
   <div className='mt-lg-5 mt-md-4 mt-sm-3 mt-3'>
    <div className='d-flex justify-content-center align-content-center align-items-center fs-1 text-black' style={{fontFamily:'serif'}}><span>Category</span></div>
    {screen ? 
      <div className=' row overflow-y-scroll d-flex  min-vw-100 justify-content-center align-content-center align-items-center'>
      {category.map(cate=>
        <a href='/' onClick={(e)=>handleCategory(e, cate.cate)} className='d-flex text-decoration-none text-white col-lg-2 col-md-2 col-sm-2 col-5  flex-column justify-content-center align-content-center align-items-center'>
        <img className='col-md-8 col-sm-12 col-12 ' src={cate.iconUrl} alt="" />
        <span className='fs-3'><a href='' className='text-decoration-none text-black' style={{color:'#1f89f2'}}>{cate.cate}</a></span>
      </a>
      )}
    </div>
    :
    <div className='p-3 overflow-y-scroll d-flex  ' style={{scrollbarWidth: 'none'}}>
      {category.map(cate=>
        <a href='/' onClick={(e)=>handleCategory(e, cate.cate)} className='d-flex col-4 text-decoration-none text-white flex-column justify-content-center align-content-center align-items-center'>
        <img className='col-8' src={cate.iconUrl} alt="" />
        <span className='text-white' style={{fontSize:'90%'}}><span className='text-white'>{cate.cate}</span></span>
      </a>
      )}
    </div>
    }
   </div>
  )
}
export default Category;