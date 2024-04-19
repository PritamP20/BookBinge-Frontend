import React from 'react'

const CategoryDup = () => {
  return (
    <>
      <div className='m-2' style={{backgroundColor:'#DBF0FF'}}>
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
    </>
  )
}

export default CategoryDup
