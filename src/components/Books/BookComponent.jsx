// This the component which container main book list with no overflow and filters

import React from 'react'

const BookComponent = () => {
  return (
    <div>
      <div className='m-auto'>
        <div className='d-flex justify-content-between'>
            <h3 className='fw-semibold'>Recommended Books</h3>
            <a href="" className='text-danger justify-content-end fs-5'>See all</a>
        </div>
        
        <div className="d-flex  row  gap-5" style={{scrollbarWidth:'none'}}>
        <a href='' className='text-decoration-none text-black' style={{ flexBasis: '21%', minWidth:'18%' }}>
                {/* <img className="w-100 rounded-2" src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-MzcuNEsgTGlrZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00393228-kpfwudsujr-portrait.jpg" alt="" /> */}
                <img className="w-100 rounded-2" src="https://m.media-amazon.com/images/I/81aCMT1zKtL._SY522_.jpg" alt="" />
                <div className='d-flex flex-column'>
                    <span className='fw-semibold fs-5'>Harry Potter</span>
                    <span className='fs-5 text-secondary'>Sci-Fi/Mystry</span>
                </div>
            </a>
            <a href='' className='text-decoration-none text-black' style={{ flexBasis: '21%', minWidth:'18%' }}>
            <img className="w-100 rounded-2" src="https://m.media-amazon.com/images/I/91G+QE3U5KL._SY522_.jpg" alt="" />
                <div className='d-flex flex-column'>
                    <span className='fw-semibold fs-5'>Perci Jackson</span>
                    <span className='fs-5 text-secondary'>Sci-Fi/Gods</span>
                </div>
            </a>
            <a href='' className='text-decoration-none text-black' style={{ flexBasis: '21%', minWidth:'18%' }}>
                <img className="w-100 rounded-2" src="https://m.media-amazon.com/images/I/71XEsXS5RlL._SY522_.jpg" alt="" />
                <div className='d-flex flex-column'>
                    <span className='fw-semibold fs-5'>Pychology of money</span>
                    <span className='fs-5 text-secondary'>Money/Knowledge</span>
                </div>
            </a>
            <a href='' className='text-decoration-none text-black' style={{ flexBasis: '21%', minWidth:'18%' }}>
                <img className="w-100 rounded-2" src="https://m.media-amazon.com/images/I/91gMTGkFwBL._SY522_.jpg" alt="" />
                <div className='d-flex flex-column'>
                    <span className='fw-semibold fs-5'>Intestellar</span>
                    <span className='fs-5 text-secondary'>Sci-fi</span>
                </div>
            </a>
            <a href='' className='text-decoration-none text-black' style={{ flexBasis: '21%', minWidth:'18%' }}>
                <img className="w-100 rounded-2" src="https://m.media-amazon.com/images/I/61ijmpuQlRL._SY522_.jpg" alt="" />
                <div className='d-flex flex-column'>
                    <span className='fw-semibold fs-5'>Unlocking Secrets of Unicorn</span>
                    <span className='fs-5 text-secondary'>Entrepreneurship</span>
                </div>
            </a>
            <a href='' className='text-decoration-none text-black' style={{ flexBasis: '21%', minWidth:'18%' }}>
                <img className="w-100 rounded-2" src="https://m.media-amazon.com/images/I/61281K06PcL._SY522_.jpg" alt="" />
                <div className='d-flex flex-column'>
                    <span className='fw-semibold fs-5'>Intestellar</span>
                    <span className='fs-5 text-secondary'>Sci-Fi</span>
                </div>
            </a>
        </div>
      </div>
      
    </div>
  )
}

export default BookComponent
