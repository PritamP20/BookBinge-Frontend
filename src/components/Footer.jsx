import React from 'react';
import { FaFacebook, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';


const Footer = () => {
  return (
    <div className='' style={{backgroundColor:"black", fontFamily:'serif'}}>
      <hr style={{color: 'white'}} />
      <div className='container mt-5'>
          <div className='p-lg-3'>
            <div className='fs-3 d-flex text-white justify-content-center'>BookBinge</div>
            <div>
              <span className='fs-6 d-flex text-white justify-content-center'>Facing any issue? Contact: 7972121969</span>
            </div>
            <div className='d-flex text-white justify-content-center fs-4 mt-1'>Any Feedback:</div>
            <div className='col-lg-12 col-md-12 col-sm-12 col-12'>
              <div className='d-flex justify-content-center m-auto '>
                <div className="input-group">
                  <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                  <button className="btn text-white border border-2 border-white" type="button" id="button-addon2">Button</button>
                </div>
              </div>
            </div>
          <div className='col-lg-12 d-flex gap-lg-5 gap-3 mt-lg-3 mt-3 justify-content-center'>
            <a href='' className='text-decoration-none text-white fs-3'><FaFacebook/></a>
            <a href='' className='text-decoration-none text-white fs-3'><FaInstagram/></a>
            <a href='' className='text-decoration-none text-white fs-3'><FaGithub/></a>
            <a href='' className='text-decoration-none text-white fs-3'><FaLinkedin/></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
