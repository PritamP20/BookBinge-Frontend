import React, { useEffect } from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import axios, { all } from 'axios';
import Category from './components/Category';
import Navbar from './components/Navbar';
import Seller from './components/Seller';
import Footer from './components/Footer';
import Carosal from './components/Carosal';
import Viwe from './components/Viwe';
import Allbooks from './components/Allbooks';
import Data from './data.json'
import Notes from './components/notes/Notes';
import SignUp from './components/auth/SignUp';
import DeleteBooks from './components/DeleteBooks';
import SellerDub from './components/SellerDup';
import {storage} from './firebase'
import { ref, uploadBytes, listAll, getDownloadURL, deleteObject } from 'firebase/storage'
import DocumentView from './components/notes/DocumentView';
import CarosalDup from './components/DUP/CarosalDup';
import CategoryDup from './components/DUP/CategoryDup';
import BookDup from './components/DUP/BookDup';
import DashboardDup from './components/DUP/Dashboard';
import CateNav from './components/Navbar/cateNav';
import DashBoardBooks from './components/DUP/DashBoardBooks';
import BillBoard from './components/DUP/BillBoard';
import Product from './components/Books/Product'
import Portfolio from './components/portfolio/Portfolio';
// import verifyToken from './components/auth/decoding';
import { jwtDecode } from 'jwt-decode';
import Login from './components/auth/Login';
import BookView from './components/productView/BookView';
import PortBook from './components/portfolio/PortBook';
import InCarosal from './components/InCarosal';

function App() {
  const token = localStorage.getItem("token")
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;


 

  const [count, setCount] = useState(0)
  const [allBooks, setAllBooks] = useState(Data.books)
  const [category, setCategory] = useState()
  const [url, setUrl] = useState()
  const [userDetail, setUserDetails] = useState({});


  const getAllbooks = async ()=>{
    const data = await axios.get("https://bookbinge-backend.onrender.com/books")
    setAllBooks(data.data)
  }
  console.log(allBooks)


  useEffect(()=>{
    const token = localStorage.getItem("token")
    getAllbooks()
    if (token!=null) {
      const decodedToken = jwtDecode(token);
      console.log(decodedToken)
      setUserDetails(decodedToken)
    }

  },[])

  const clgNotes = allBooks.filter(book=> book.category == 'ClgNotes')

  const Dashboard = ()=>{
    return(
      <div>
        {/* <Carosal></Carosal>
        <Category ></Category>
        <Demand ></Demand>
        <Notes allBooks={allBooks}></Notes> */}

        <CarosalDup/>
        {/* <DashboardDup allBooks={allBooks} /> */}
        <DashBoardBooks title={"Recommended"} allBooks={allBooks}></DashBoardBooks>
        <BillBoard></BillBoard>
        {clgNotes.length!=0 ?
          <DashBoardBooks title={"Notes"} allBooks={clgNotes}></DashBoardBooks>
          :
          <></>
        }
        
    </div>
    )
  }

  const slides = [
    { src: 'https://via.placeholder.com/800x400?text=Slide+1', alt: 'Slide 1' },
    { src: 'https://via.placeholder.com/800x400?text=Slide+2', alt: 'Slide 2' },
    { src: 'https://via.placeholder.com/800x400?text=Slide+3', alt: 'Slide 3' },
  ];


  return (
    <div className='' style={{backgroundColor: 'white'}}>
      <Router>
      <Navbar allBooks={allBooks} userDetail={userDetail}></Navbar>
      <CateNav/>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/' element={<Category/>} />
        <Route path='/seller' element={<SellerDub userDetail={userDetail} setAllBooks={setAllBooks} allBooks={allBooks} setUrl={setUrl} url={url}/>}/>
        <Route path='/view' element={<Viwe/>}/>
        <Route path='/allbooks' element={<Allbooks allBooks={allBooks}/>}/>
        <Route path='/book' element={<Product allBooks={allBooks}/>} allBooks={allBooks}/>
        <Route path='/bookView' element={<BookView userDetail={userDetail}/>} allBooks={allBooks}/>
        
        <Route path='/carosal' element={<InCarosal/>}/>

        <Route path='/portbook' element={<PortBook allBooks={allBooks} title={"Your books"}/>}/>
        <Route path='/portfolio' element={<Portfolio userDetail = {userDetail} allBooks={allBooks}/>}/>
        <Route path='/signUp' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/delete' element={<DeleteBooks allBooks={allBooks} setAllBooks={setAllBooks}/>}/>
        <Route path='/document' element={<DocumentView/>}/>
      </Routes>
      <Footer></Footer>
    </Router>
    </div>
  )
}

export default App;

