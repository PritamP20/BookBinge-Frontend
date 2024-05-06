import React, { useEffect, useState } from 'react'

const CategoryDup = () => {

  // let screen = false;
  const [screen, setScreen] = useState(false)
  useEffect(()=>{
    if (window.matchMedia("(max-width: 768px)").matches) {
      setScreen(false)
    } else {
      setScreen(true)
    }
  },[])

  return (
    <>
      {screen ?
        <div className='m-lg-1 m-sm-2 ' style={{backgroundColor:'#DBF0FF'}}>
        <h2 className='d-flex justify-content-center'>CATEGORY</h2>
        <form action="" className='pt-0 p-3 d-flex flex-column gap-3'>
          <div className='row'>
            <label className='col-10 fs-5' htmlFor="">CATEGORY</label>
            <input className='col-1' type="checkbox" />
          </div>
          <div className='row'>
            <label className='col-10 fs-5' htmlFor="">CATEGORY</label>
            <input className='col-1' type="checkbox" />
          </div>
          <div className='row'>
            <label className='col-10 fs-5' htmlFor="">CATEGORY</label>
            <input className='col-1' type="checkbox" />
          </div>
          <div className='row'>
            <label className='col-10 fs-5' htmlFor="">CATEGORY</label>
            <input className='col-1' type="checkbox" />
          </div>
        </form>
      </div>
      :
      <></>
      }
    </>
  )
}

export default CategoryDup
