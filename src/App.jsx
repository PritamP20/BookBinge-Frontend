import React, { useEffect } from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios, { all } from 'axios';
import Category from './components/Category';
import Navbar from './components/Navbar';
import Seller from './components/Seller';
import Books from './components/Books';
import Demand from './components/Demand';
import Footer from './components/Footer';
import Carosal from './components/Carosal';
import Genre from './components/Genre'; // 
import Viwe from './components/Viwe';
import Allbooks from './components/Allbooks';
import Data from './data.json'
import BooksByCate from './components/BooksByCate';
import Notes from './components/Notes';
import Login from './components/Login';
import Upload from './components/upload';
import DeleteBooks from './components/DeleteBooks';
import SellerDub from './components/SellerDup';
import {storage} from './firebase'
import { ref, uploadBytes, listAll, getDownloadURL, deleteObject } from 'firebase/storage'
import Document from './components/Document';

function App() {
  const [count, setCount] = useState(0)
  const [allBooks, setAllBooks] = useState(Data.books)
  const [category, setCategory] = useState()
  const [url, setUrl] = useState()

  const getAllbooks = async ()=>{

    // const data = await axios.get("http://localhost:8081/books")

    const data = await axios.get("https://bookbinge-backend.onrender.com/books")

    setAllBooks(data.data)
    // console.log(data.data)
  }

  
  const [thumbnailList, setThumbnailList] = useState([])
  const [clgNotesList, setClgNotesList] = useState([])

  const imageListRef = ref(storage, "thumbnail/")
  const clgNotesRef =  ref(storage, "ClgNotes/")

  const handleThumbnail = ()=>{
    console.log('url: ')
    console.log(thumbnailList)
  }

  useEffect(()=>{
    getAllbooks()

    listAll(imageListRef).then((response)=>{
      response.items.forEach((item)=>{
        getDownloadURL(item).then((url)=>{
          setThumbnailList((prev)=>[...prev, url])
        })
      })
    })
    listAll(clgNotesRef).then((response)=>{
      response.items.forEach((item)=>{
        getDownloadURL(item).then((url)=>{
          setClgNotesList((prev)=>[...prev, url])
        })
      })
    })
  },[])
  console.log(thumbnailList)

  const handleUpdateThumbnail = async (data, url)=>{
    if (data!=[]) {
      // console.log("hello")
      let id = data[0].id
      // console.log("url id: " + data[0].url)
      data[0].url = url
      // console.log("object")
      // console.log(id)

      // const update = await axios.patch(`http://localhost:8081/books/update/${id}`, {'url': data[0].url})

      const update = await axios.patch(`https://bookbinge-backend.onrender.com/books/update/${id}`, {'url': data[0].url})

      // console.log(update)
    }
  }
  const handleUpdateClgNotes = async (data, url)=>{
    if (data!=[]) {
      // console.log("hello")
      let id = data[0].id
      console.log("url id: " + data[0].ClgNotes)
      data[0].ClgNotes = url
      console.log("object")
      console.log(id)

      // const update = await axios.patch(`http://localhost:8081/books/update/${id}`, {'ClgNotes': data[0].ClgNotes})

      const update = await axios.patch(`https://bookbinge-backend.onrender.com/books/update/${id}`, {'ClgNotes': data[0].ClgNotes})

      console.log(update)
    }
  }

  for (let index = 0; index < thumbnailList.length; index++) {
    const urlList = thumbnailList[index].split('%')
    const folderName = urlList[0].split('/').pop()
    const fileName = urlList[1].split("?")[0]
    const realFileName = fileName.split('2F')[1]
    const data = allBooks.filter(book=> +book.url == realFileName)
    // console.log(`${realFileName} : ${data}`)
    if (data==[]) {
      console.log("empty")
    }else{
      // console.log("object")
      handleUpdateThumbnail(data, thumbnailList[index])
    }
    // console.log(`${index}: ${thumbnailList[index]}`)
  }
  for (let index = 0; index < clgNotesList.length; index++) {
    const urlList = clgNotesList[index].split('%')
    const folderName = urlList[0].split('/').pop()
    const fileName = urlList[1].split("?")[0]
    const realFileName = fileName.split('2F')[1]
    console.log("clgnotes : "+realFileName)
    const data = allBooks.filter(book=> +book.ClgNotes == realFileName)
    console.log(`${realFileName} : ${data}`)
    if (data==[]) {
      console.log("empty")
    }else{
      console.log("object")
      handleUpdateClgNotes(data, clgNotesList[index])
    }
    console.log(`${index}: ${clgNotesList[index]}`)
    
  }


  const Dashboard = ()=>{
    return(
      <div>
        <Carosal></Carosal>
        <Category ></Category>
        <Books></Books>
        <Demand ></Demand>
        <Notes allBooks={allBooks}></Notes>
    </div>
    )
  }

  return (
    <div className=''>
      <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/' element={<Category/>} />
        {/* <Route path='/genre/:genre' element={<Genre />} /> */}
        {/* <Route path='/seller' element={<Seller setAllBooks={setAllBooks} allBooks={allBooks} setUrl={setUrl} url={url}/>}/> */}
        <Route path='/seller' element={<SellerDub setAllBooks={setAllBooks} allBooks={allBooks} setUrl={setUrl} url={url}/>}/>
        <Route path='/view' element={<Viwe/>}/>
        <Route path='/allbooks' element={<Allbooks allBooks={allBooks}/>}/>
        <Route path='/category' element={<BooksByCate/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/delete' element={<DeleteBooks allBooks={allBooks} setAllBooks={setAllBooks}/>}/>
        <Route path='/document' element={<Document/>}/>
      </Routes>
      <Footer></Footer>
    </Router>
    </div>
  )
}

export default App;

