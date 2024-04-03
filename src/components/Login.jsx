import React from 'react'

const Login = () => {
  let loginDetails = {}
  const handleSubmit = (e)=>{
    e.preventDefault()
    loginDetails={
      "name": e.target.name.value,
      "branch": e.target.branch.value,
      "srn": e.target.branch.value,
      "email": e.target.email.value,
      "phone": e.target.email.value
    }
    console.log(loginDetails)
  }
  return (
    <div className='cantainer d-flex justify-content-center align-items-center p-lg-5 m-lg-5 p-md-5 m-md-4 m-sm-5 p-sm-5 p-4 m-4'>
      <div className='border border-1 border-black rounded-3 col-lg-5 col-md-8 col-sm-12 col-12'>
        
        <form action="" className='' onSubmit={(e)=>handleSubmit(e)}>
          <h3 className='d-flex justify-content-center'>Login</h3>
          <div className='d-flex flex-column p-lg-4 p-md-4 p-sm-3 p-3 gap-lg-4 gap-md-3 gap-sm-2 gap-2 ustify-content-center'>
            <div className='d-flex flex-column'>
              <label htmlFor="name" className='fs-5' >Name: </label>
              <input type="text" name='name' className='fs-5 rounded-1 border border-1 border-black' required placeholder='Enter your Name' />
            </div>
            <div className='d-flex flex-column'>
              <label htmlFor="branch" className='fs-5'>Branch: </label>
              <input type="text" name='branch' className='fs-5 rounded-1 border border-1 border-black' required placeholder='Enter your Branch' />
            </div>
            <div className='d-flex flex-column'>
              <label htmlFor="srn" className='fs-5'>SRN: </label>
              <input type="text" name='srn' className='fs-5 rounded-1 border border-1 border-black' required placeholder='Enter your SRN' />
            </div>
            <div className='d-flex flex-column'>
              <label htmlFor="email" className='fs-5'>Email: </label>
              <input type="email" name='email' className='fs-5 rounded-1 border border-1 border-black' required placeholder='Enter your email' />
            </div>
            <div className='d-flex flex-column'>
              <label htmlFor="number" className='fs-5'>Phone No. : </label>
              <input type="number" name='phone' className='fs-5 rounded-1 border border-1 border-black' required placeholder='Enter your Phone NO.' />
            </div>
          </div>
          <div className='d-flex justify-content-center'><button type="submit" class="btn border border-1 border-black ">Submit</button></div>
        </form>
      </div>
    </div>
  )
}

export default Login
