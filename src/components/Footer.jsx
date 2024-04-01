import React from 'react';
import { FaFacebook, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';


const Footer = () => {
  return (
    <div className='' style={{backgroundColor:"#ffedd5", fontFamily:'serif'}}>
      <div className='container'>
          <div className='p-lg-5'>
            <div className='fs-2'>BookBinge</div>
            <div>
              <span className='fs-4'>we have create this website for your benefit so make the full use of it</span>
            </div>
            <div className='fs-2 mt-lg-3'>Any Feedback:</div>
            <div className='col-5'>
            <div className="input-group ">
                  <input type="text" className="form-control " placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                  <button class="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
                </div>
            </div>
          <div className='col-lg-6 d-flex gap-lg-5 mt-lg-3'>
            <a href='' className='text-decoration-none text-black fs-2'><FaFacebook/></a>
            <a href='' className='text-decoration-none text-black fs-2'><FaInstagram/></a>
            <a href='' className='text-decoration-none text-black fs-2'><FaGithub/></a>
            <a href='' className='text-decoration-none text-black fs-2'><FaLinkedin/></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
