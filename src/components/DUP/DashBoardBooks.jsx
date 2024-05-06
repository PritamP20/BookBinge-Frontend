import React from 'react'

const Recommended = ({allBooks, title}) => {
  return (
    <div className='mt-lg-5 mb-lg-5'>
      <div className='m-auto col-10'>
        <div className='d-flex justify-content-between'>
            <h3 className='fw-semibold'>{title}</h3>
            <a href="" className='text-danger justify-content-end fs-5'>See all</a>
        </div>
        
        <div className="d-flex justify-content-between overflow-x-scroll flex-nowrap gap-4" style={{scrollbarWidth:'none'}}>
        <a href='' className='text-decoration-none text-black' style={{ flexBasis: '18%', minWidth:'18%' }}>
                <img className="w-100 rounded-2" src="https://m.media-amazon.com/images/I/81aCMT1zKtL._SY522_.jpg" alt="" />
                <div className='d-flex flex-column'>
                    <span className='fw-semibold fs-5'>Harry Potter</span>
                    <span className='fs-5 text-secondary'>Sci-Fi/Mystry</span>
                </div>
            </a>
            <a href='' className='text-decoration-none text-black' style={{ flexBasis: '18%', minWidth:'18%' }}>
                <img className="w-100 rounded-2" src="https://m.media-amazon.com/images/I/91G+QE3U5KL._SY522_.jpg" alt="" />
                <div className='d-flex flex-column'>
                    <span className='fw-semibold fs-5'>Perci Jackson</span>
                    <span className='fs-5 text-secondary'>Sci-Fi/Gods</span>
                </div>
            </a>
            <a href='' className='text-decoration-none text-black' style={{ flexBasis: '18%', minWidth:'18%' }}>
                <img className="w-100 rounded-2" src="https://m.media-amazon.com/images/I/71XEsXS5RlL._SY522_.jpg" alt="" />
                <div className='d-flex flex-column'>
                    <span className='fw-semibold fs-5'>Pychology of money</span>
                    <span className='fs-5 text-secondary'>Money/Knowledge</span>
                </div>
            </a>
            <a href='' className='text-decoration-none text-black' style={{ flexBasis: '18%', minWidth:'18%' }}>
                <img className="w-100 rounded-2" src="https://m.media-amazon.com/images/I/91gMTGkFwBL._SY522_.jpg" alt="" />
                <div className='d-flex flex-column'>
                    <span className='fw-semibold fs-5'>Intestellar</span>
                    <span className='fs-5 text-secondary'>Sci-fi</span>
                </div>
            </a>
            <a href='' className='text-decoration-none text-black' style={{ flexBasis: '18%', minWidth:'18%' }}>
                <img className="w-100 rounded-2" src="https://m.media-amazon.com/images/I/61ijmpuQlRL._SY522_.jpg" alt="" />
                <div className='d-flex flex-column'>
                    <span className='fw-semibold fs-5'>Unlocking Secrets of Unicorn</span>
                    <span className='fs-5 text-secondary'>Entrepreneurship</span>
                </div>
            </a>
            <a href='' className='text-decoration-none text-black' style={{ flexBasis: '18%', minWidth:'18%' }}>
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

export default Recommended
