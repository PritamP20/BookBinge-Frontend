import axios from "axios";
import React, { useState } from "react";
import Data from '../data.json'
import {storage} from '../firebase'
import { ref, uploadBytes, listAll, getDownloadURL, deleteObject } from 'firebase/storage'

const SellerDub = ({setAllBooks, allBooks, setUrl, url}) => {
  const [thumbnail, setThumbnail] = useState("https://m.media-amazon.com/images/I/71Ge374aXuL._SY522_.jpg");
  // let thumbnail = "https://m.media-amazon.com/images/I/71Ge374aXuL._SY522_.jpg"
  const [cate, setCate] = useState('')
  const [img, setImg] = useState(null);
  const [video, setVideo] = useState(null);
  const [loading, setLoading] = useState(false);
  // const [newBooks, setNewbooks] = useState(Data.books)
  let newBooks = Data.books;

  const category = [
    {
      cate: "Romance",
      iconUrl:
        "https://kitabay.com/cdn/shop/files/Romance_2_ff774fdb-6cfe-4eb5-8bfe-f447aee148eb.png?v=1709291997",
    },
    {
      cate: "Manga",
      iconUrl:
        "https://kitabay.com/cdn/shop/files/comic_0c903b4a-6177-4425-875e-106f3be09bfe.png?v=1699968240",
    },
    {
      cate: "Sci-Fi",
      iconUrl: "https://kitabay.com/cdn/shop/files/Sci-Fi.png?v=1699968240",
    },
    {
      cate: "Mistry",
      iconUrl:
        "https://kitabay.com/cdn/shop/files/Mystery_c01884b8-8ae9-462f-840b-7b9fa7e84362.png?v=1699968159",
    },
    {
      cate: "Biograpy",
      iconUrl: "https://kitabay.com/cdn/shop/files/feather_1.png?v=1699968095",
    },
    {
      cate: "Horror",
      iconUrl:
        "https://kitabay.com/cdn/shop/files/Horror_d7281c5e-a090-462f-9348-a26a613d4bdf.png?v=1699968239",
    },
    {
      cate: "Notes"
    },
    {
      cate: "ClgNotes"
    },
  ];

  const [fileUpload, setFileUpload] = useState()
  const [thumbnailUpload, setThumbnailUpload] = useState()
  // const [fileList, setfileList] = useState([])
  let fileList = []
  let thumbnailList = []
  let docUrl = ''
  let fileLength = 0;
  let thumbnailLength = 0;
  let ClgNotesUpload = false


  const addBooks = async (book)=>{

    // const data = await axios.post("http://localhost:8081/books",book).catch((err)=>console.log(err))

    const data = await axios.post("https://bookbinge-backend.onrender.com/books",book).catch((err)=>console.log(err))

    console.log(data)
  }

  const handleChange = (e) => {
    e.preventDefault();


    const imgurl = e.target.value.split(".");
    if (imgurl[imgurl.length - 1] == "jpg") {
      setThumbnail(e.target.value);
      // thumbnail = e.target.value
      console.log(thumbnail)
    }else{
    //   if (thumbnailUpload!=null) {
    //     const imageListRef = ref(storage, "ClgNotes/")
    //   thumbnailList = []
    //   listAll(imageListRef).then((response)=>{
    //     response.items.forEach((item)=>{
    //       getDownloadURL(item).then((url)=>{
    //         thumbnailLength+=1
    //       })
    //     })
    //   })

      
    // if (thumbnailUpload!=null){
    //     // ClgNotesUpload = true
    //     setTimeout(()=>{
    //     const imageRef = ref(storage, `thumbnail/${thumbnailLength}`)
    //     uploadBytes(imageRef, thumbnailUpload).then(()=>{
    //       console.log(thumbnailLength)
    //       alert("thumbnail Uploaded")
    //     })
    //   }, 2000)
    // }
    //   }
    }

    // if (imgurl[imgurl.length - 1] == "jpg") {
    //   setThumbnail(e.target.value);
    //   // thumbnail = e.target.value
    //   console.log(thumbnail)
    // }else{
    //   setThumbnail("https://m.media-amazon.com/images/I/71Ge374aXuL._SY522_.jpg")
    //   // thumbnail = "https://m.media-amazon.com/images/I/71Ge374aXuL._SY522_.jpg"
    // }


  };

  const handleCategory = (e, cate) => {
    e.preventDefault();
    setCate(cate)
  };

  const handleSubmit = async (e)=>{

    e.preventDefault()

    console.log("hello")
    const imageListRefThumb = ref(storage, "thumbnail/")
      thumbnailList = []
      listAll(imageListRefThumb).then((response)=>{
        response.items.forEach((item)=>{
          getDownloadURL(item).then((url)=>{
            thumbnailLength+=1
          })
        })
      })
      console.log(thumbnailUpload)
      
    if (thumbnailUpload!=null){
      console.log("hello")
        // ClgNotesUpload = true
        setTimeout(()=>{
        const imageRef = ref(storage, `thumbnail/${thumbnailLength}`)
        uploadBytes(imageRef, thumbnailUpload).then(()=>{
          console.log("length: "+thumbnailLength)
          alert("thumbnail Uploaded")
        })
      }, 2000)
    }

    console.log("fileupload")
    console.log(fileUpload)
    const imageListRef = ref(storage, "ClgNotes/")
      fileList = []
      listAll(imageListRef).then((response)=>{
        response.items.forEach((item)=>{
          getDownloadURL(item).then((url)=>{
            fileLength+=1
          })
        })
      })

      
    if (fileUpload!=null){
        ClgNotesUpload = true
        setTimeout(()=>{
        const imageRef = ref(storage, `ClgNotes/${fileLength}`)
        uploadBytes(imageRef, fileUpload).then(()=>{
          console.log(fileLength)
          alert("file Uploaded")
        })
      }, 2000)
    }

    // console.log('submit')
    // if (thumbnail == "https://m.media-amazon.com/images/I/71Ge374aXuL._SY522_.jpg") {
    //   try {
    //     setLoading(true);
    //     const imgUrl = await uploadFile('image');
    //     // setThumbnail(imgUrl)
    //     thumbnail = imgUrl
    //     console.log(thumbnail)
    //     setImg(null);
    //     setVideo(null);
  
    //     console.log("File upload success!");
    //     setLoading(false);
    //   } catch (error) {
    //     console.error(error);
    //   }
    // }

    setTimeout(()=>{
      console.log(thumbnail)
      if (ClgNotesUpload) {
        if (thumbnail == "https://m.media-amazon.com/images/I/71Ge374aXuL._SY522_.jpg") {
          // setNewbooks({
          //   "id": allBooks.length+1+1+1,
          //   "name":e.target.title.value,
          //   "by": e.target.auther.value,
          //   "url": thumbnailLength,
          //   "category":cate,
          //   "detail": e.target.about.value,
          //   "ClgNotes": fileLength
          // })
          newBooks = {
            "id": allBooks.length+1+1+1,
            "name":e.target.title.value,
            "by": e.target.auther.value,
            "url": thumbnailLength,
            "category":cate,
            "detail": e.target.about.value,
            "ClgNotes": fileLength
          }
        }else{
          // setNewbooks({
          //   "id": allBooks.length+1+1+1,
          //   "name":e.target.title.value,
          //   "by": e.target.auther.value,
          //   "url": thumbnail,
          //   "category":cate,
          //   "detail": e.target.about.value,
          //   "ClgNotes": fileLength
          // })
          newBooks = {
            "id": allBooks.length+1+1+1,
            "name":e.target.title.value,
            "by": e.target.auther.value,
            "url": thumbnail,
            "category":cate,
            "detail": e.target.about.value,
            "ClgNotes": fileLength
          }
        }
      }else{
        if (thumbnail == "https://m.media-amazon.com/images/I/71Ge374aXuL._SY522_.jpg") {
          // setNewbooks({
          //   "id": allBooks.length+1+1+1,
          //   "name":e.target.title.value,
          //   "by": e.target.auther.value,
          //   "url": thumbnailLength,
          //   "category":cate,
          //   "detail": e.target.about.value
          // })
          newBooks={
            "id": allBooks.length+1+1+1,
            "name":e.target.title.value,
            "by": e.target.auther.value,
            "url": thumbnailLength,
            "category":cate,
            "detail": e.target.about.value
          }
        }else{
          // setNewbooks({
          //   "id": allBooks.length+1+1+1,
          //   "name":e.target.title.value,
          //   "by": e.target.auther.value,
          //   "url": thumbnail,
          //   "category":cate,
          //   "detail": e.target.about.value
          // })
          newBooks = {
            "id": allBooks.length+1+1+1,
            "name":e.target.title.value,
            "by": e.target.auther.value,
            "url": thumbnail,
            "category":cate,
            "detail": e.target.about.value
          }
        }
      }
      console.log(newBooks)
      addBooks(newBooks)
      // console.log(newBooks)
    },3000)
  }

  const uploadFile = async (type) => {
    const data = new FormData();
    data.append("file", type === 'image' ? img : video);
    data.append("upload_preset", type === 'image' ? 'thumbnail_preset' : 'videos_preset');

    try {
      let cloudName = 'dpidmvnit';
      let resourceType = type === 'image' ? 'image' : 'video';
      let api = `https://api.cloudinary.com/v1_1/${cloudName}/${resourceType}/upload`;
    
      const res = await axios.post(api, data);
      const { secure_url } = res.data;
      console.log(secure_url);
      return secure_url;
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div className="p-lg-5 row" style={{ fontFamily: "serif" }}>
      <div
        className="col-lg-5 col-md-5 col-12 d-flex justify-content-center align-content-center align-items-center "
        style={{ backgroundColor: `` }}
      >
        <div className="col-lg-8 col-md-10 col-4 d-flex justify-content-center align-content-center align-items-center">
          <img
            className="col-lg-12 col-md-12 col-sm-4 col-12 col-7 p-2"
            src={thumbnail}
          />
        </div>
      </div>
      <form onSubmit={(e)=> handleSubmit(e)} className="d-flex flex-column fs-5 col-md-7 col-lg-6 col-sm- col-12 justify-content-center align-items-center pt-lg-5 align-items-center gap-3">
        <div className="d-flex flex-column col-10">
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            className=""
            name="title"
            id="title"
            placeholder="Enter the title"
          />
        </div>
        <div className="d-flex flex-column col-10">
          <label htmlFor="title">Thumbnail: </label>
          <input
            type="text"
            className=""
            name="thumbnail"
            onChange={(e)=>handleChange(e)}
            id="thumbnail"
            placeholder="Enter the title"
          />
          <span className="d-flex justify-content-center">OR</span>

          <div>
          <input
            type="file"
            accept="image/*"
            id="img"
            // onChange={(e) => setImg((prev) => e.target.files[0])}
            onChange={(e)=>{setThumbnailUpload(e.target.files[0])}}
          />
        </div>
        </div>
        
        <div className="d-flex flex-column col-10">
          <label htmlFor="title">Auther: </label>
          <input
            type="text"
            name="auther"
            id="auther"
            placeholder="Enter the title"
          />
        </div>
        
        <div className="d-flex flex-column col-10">
          <label htmlFor="title">About the book: </label>
          <div className="form-floating">
            <textarea
              className="form-control"
              placeholder="Leave a comment here"
              name="about"
              id="floatingTextarea2"
              style={{ height: "100px" }}
            ></textarea>
            <label htmlFor="floatingTextarea2">Comments</label>
          </div>
        </div>
          <div className="d-flex col-10 gap-2">
            <label
              htmlFor="category"
              className="d-flex justify-content-center align-content-center align-items-center"
            >
              {" "}
              enter the category of tour book:{" "}
            </label>
            <div className="dropdown pt-lg-2 pt-md-2 pt-sm-1 pt-1">
              <button
                className="btn btn-secondary dropdown-toggle p-1 fs-5 ps-2 pe-2 bg-white text-black"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {cate != '' ? `${cate}` : 'category'}
              </button>
              <ul className="dropdown-menu">
                {category.map((cate) => (
                  <li>
                    <a
                      className="dropdown-item"
                      onClick={(e) => handleCategory(e, cate.cate)}
                      href="#"
                    >
                      {cate.cate}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
        </div>
          <div className="d-flex col-10 gap-2">
          {cate == 'ClgNotes' ? 
              <input type="file" onChange={(e)=>{setFileUpload(e.target.files[0])}}/>
              :
              <></>
            }
        </div>
        
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      
    </div>
    // <div>
    //   <form onSubmit={(e)=>handleSubmit(e)} action="">
    //     <div>
    //     <label htmlFor="title">title: </label>
    //     <input type="text" name="title" />
    //     </div>
    //     <div>
    //     <label htmlFor="title">title: </label>
    //     <input type="text" name="cate" />
    //     </div>
    //     <button type="submit">submit</button>
    //   </form>
    // </div>
  );
};

export default SellerDub;
