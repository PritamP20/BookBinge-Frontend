import React from 'react'
import DashBoardBooks from '../DUP/DashBoardBooks'

const Portfolio = ({userDetail, allBooks}) => {
  console.log("userDetail: portfolio", userDetail)
  return (
    <div className='pt-5 pb-5' style={{backgroundColor:'#f3f4f6'}}>
        <div className='row col-10 m-auto justify-content-between'>
            <div className='col-3 p-2 bg-white rounded-1'>
                <h6 className='d-flex gap-3'><span className='text-danger'>NAME :</span> <span>{userDetail.name}</span> </h6>
                <h6 className='d-flex gap-3'><span className='text-danger'>EMAIL :</span> <span>{userDetail.email}</span> </h6>
                {/* <h6 className='d-flex gap-3'><span className='text-danger'>PHONE NO. :</span> <span>7972121968</span> </h6>
                <h6 className='d-flex gap-3'><span className='text-danger'>SRN :</span> <span>R23EI027</span> </h6> */}
            </div>
            <div className='col-3 p-2 bg-white rounded-1'>
                <h6 className='d-flex gap-3'><span className='text-danger'>NAME :</span> <span>Pritam</span> </h6>
                <h6 className='d-flex gap-3'><span className='text-danger'>EMAIL :</span> <span>pripritam7@gmail.com</span> </h6>
                <h6 className='d-flex gap-3'><span className='text-danger'>PHONE NO. :</span> <span>7972121968</span> </h6>
                <h6 className='d-flex gap-3'><span className='text-danger'>SRN :</span> <span>R23EI027</span> </h6>
            </div>
        </div>
      <div>
        <DashBoardBooks allBooks={allBooks} title={'Books In Possession'} ></DashBoardBooks>
        <DashBoardBooks allBooks={allBooks} title={'Interested Books'}></DashBoardBooks>
        <DashBoardBooks allBooks={allBooks} title={'Your Books'}></DashBoardBooks>
      </div>
    </div>
  )
}

export default Portfolio
