import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaSearch, FaBars, FaBriefcase, FaTrash, FaArrowRight } from 'react-icons/fa';
import {MdLibraryBooks} from 'react-icons/md'
import logo from '../assets/logo.png'
import './Navbar.css'
import { useTheme, Box, Button } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import SignUp2 from './auth/SignUp';
import Login from './auth/Login';
import BookComponent from './Books/BookComponent';


const Navbar = ({allBooks, userDetail}) => {
  const navigate = useNavigate()
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  
  const handlePortfolio = (e)=>{
    e.preventDefault()
    navigate('/portfolio')
  }

  const token = localStorage.getItem("token")

  const handleLogout = (e)=>{
    e.preventDefault()
    localStorage.removeItem("token")
    alert("Loged Out")
    navigate('/')
  }

  const handleCollection = (e)=>{
    e.preventDefault()
    navigate('/allbooks', {state: {"notes": allBooks, "titile":"Collection"}})
  }


  const category = ["Romance", "Manga", "Sci-fi", "Mistry", "Biograpy", "Horror"]

  const DrawerList = (
    <Box sx={{ width: 350 }} role="presentation" onClick={toggleDrawer(false)}>
      <div>
        <div className='d-flex flex-column'>
          <div className='d-flex container align-items-center' style={{height:'70px'}}>
            <h4>Hey, There!</h4>
          </div>
          <hr className='p-0 m-0'/>
        </div>
        <div className='d-flex flex-column'>
          <a href='' onClick={e=>handlePortfolio(e)} className='d-flex text-decoration-none text-black justify-content-between container align-items-center' style={{height:'70px'}}>
            <span className='text-decoration-none text-black'><span className='fs-6  d-flex align-items-center'> <FaBriefcase className='me-2'/> Your Portfolio</span></span>
            <span className='justify-content-end'> <FaArrowRight/> </span>
          </a>
          <hr className='p-0 m-0'/>
        </div>
        <div className='d-flex flex-column'>
          <a href='' onClick={e=>handleCollection(e)} className='d-flex container justify-content-between text-decoration-none text-black align-items-center' style={{height:'70px'}}>
            <a href="" className='text-decoration-none text-black'><span className='fs-6  d-flex align-items-center'> <MdLibraryBooks className='me-2'/> Collections</span></a>
            <span className='justify-content-end'> <FaArrowRight/> </span>
          </a>
          <hr className='p-0 m-0'/>
        </div>
        <div className='d-flex flex-column'>
          <a href='/delete' className='d-flex container  justify-content-between text-decoration-none text-black align-items-center' style={{height:'70px'}}>
            <a href="" className='text-decoration-none text-black'><span className='fs-6  d-flex align-items-center'><FaTrash className='me-2'/> Delete</span></a>
            <span className='justify-content-end'> <FaArrowRight/> </span>
          </a>
          <hr className='p-0 m-0'/>
        </div>
      </div>
    </Box>
  );

  return (

  <div className="">
    <div className="d-flex justify-content-between align-items-center col-10 m-auto p-lg-2 pt-md-2 gap-2">
      <a href="/" className='text-black text-decoration-none'><span className="fs-3">BookBinge</span></a>
      
      {/* Search Bar */}
      <div className="d-flex align-items-center col-6 position-relative">
        <FaSearch
          style={{
            position: "absolute",
            left: "10px",
            color: "#6c757d",
          }}
        />
        <input
          type="text"
          className="form-control"
          style={{ paddingLeft: "30px", height: "85%" }}
          placeholder="Search for new books, comics, study materials"
        />
      </div>

      {/* Last Div */}
      <div className="d-flex align-items-center gap-3">
        {token ? <Button variant="outlined" className='bg-danger text-white' onClick={e=>handleLogout(e)}> Logout </Button> : <Login/>}
        <div className='col-3 fs-1 m-auto'>
          <a herf="" className='col-12 text-black' onClick={toggleDrawer(true)}><FaBars className='col-10 d-flex align-items-center'/></a>
          <Drawer  anchor='right' open={open} onClose={toggleDrawer(false)}>
            {DrawerList}
          </Drawer>
        </div>

      </div>
    </div>
  </div>
  );
};

export default Navbar;
