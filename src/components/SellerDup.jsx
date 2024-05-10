import axios from "axios";
import React, { useState } from "react";
import {storage} from '../firebase'
import { ref, uploadBytes, listAll, getDownloadURL, deleteObject } from 'firebase/storage'

const SellerDub = ({userDetail, setAllBooks, allBooks, setUrl, url}) => {

  console.log(allBooks)

  const [thumbnail, setThumbnail] = useState("https://m.media-amazon.com/images/I/71Ge374aXuL._SY522_.jpg");
  const [cate, setCate] = useState('')
  const [img, setImg] = useState(null);
  const [video, setVideo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [duration, setDuration] = useState('')
  const [lastDate, setLastDate] = useState()

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

  const durations = [1,2,3,4];

  const [fileUpload, setFileUpload] = useState()
  const [thumbnailUpload, setThumbnailUpload] = useState()


  const addBooks = async (book)=>{
    console.log(book)
    const data = await axios.post("https://bookbinge-backend.onrender.com/books",book).catch((err)=>console.log(err))

    console.log(data)
  }

  const handleChange = (e) => {
    e.preventDefault();
    console.log(e.target.value)
    setThumbnail(e.target.value)
  };

  const handleCategory = (e, cate) => {
    e.preventDefault();
    setCate(cate)
  };

  const handleDuration = (e, cate)=>{
    e.preventDefault()
    const today = new Date();
    const LastDate = new Date(today.getTime()+ 7*cate*24*60*60*1000)
    setLastDate(LastDate)
    setDuration(cate)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("hello");

    const date = new Date()
    const DateFormat = {"date": date.getDate(), "month":date.getMonth(), "year":date.getFullYear()}
    console.log(DateFormat)

    let thumbnailURL;
    let fileURL;
  
    // Upload the thumbnail if there's one to upload
    if (thumbnailUpload != null) {
      const imageRef = ref(storage, `thumbnail/${Date.now()}`); // Using a unique identifier
      await uploadBytes(imageRef, thumbnailUpload); // Wait for the upload to finish
      thumbnailURL = await getDownloadURL(imageRef); // Get the download URL
      console.log("Thumbnail Uploaded: " + thumbnailURL);
      alert("Thumbnail Uploaded");
    } else {
      thumbnailURL = thumbnail; // Default
    }
  
    // Upload the file if there's one to upload
    if (fileUpload != null) {
      const fileRef = ref(storage, `ClgNotes/${Date.now()}`); // Using a unique identifier
      await uploadBytes(fileRef, fileUpload); // Wait for the upload to finish
      fileURL = await getDownloadURL(fileRef); // Get the download URL
      console.log("File Uploaded: " + fileURL);
      alert("File Uploaded");
    }
  
    // Create the new book object with the obtained URLs
    let newBooks = {
      id: allBooks.length + 1, // Ensure unique ID generation
      name: e.target.title.value,
      by: e.target.auther.value,
      url: thumbnailURL,
      category: cate,
      detail: e.target.about.value,
      ClgNotes: fileURL,
      listedBy: userDetail,
      listedOn: DateFormat,
      duration: duration,
      lastDate: lastDate
    };

    if (fileURL!=null) {
      newBooks = {
        id: allBooks.length + 1 , // Ensure unique ID generation
        name: e.target.title.value,
        by: e.target.auther.value,
        url: thumbnailURL,
        category: cate,
        detail: e.target.about.value,
        ClgNotes: fileURL,
        listedBy: userDetail,
        listedOn: DateFormat,
        duration: duration,
        lastDate: lastDate
      };
    }else{
      newBooks = {
        id: allBooks.length + 1 , // Ensure unique ID generation
        name: e.target.title.value,
        by: e.target.auther.value,
        url: thumbnailURL,
        category: cate,
        detail: e.target.about.value,
        listedBy: userDetail,
        listedOn: DateFormat,
        duration: duration,
        lastDate: lastDate
      };
    }
  
    console.log(newBooks);
    addBooks(newBooks); // Add the book to your collection or database
    alert("book listed")
  };
  

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

        <div className="d-flex col-10 gap-2">
            <label
              htmlFor="duration"
              className="d-flex justify-content-center align-content-center align-items-center"
            >
              {" "}
              What would be you rental period (in WEEKS):{" "}
            </label>
            <div className="dropdown pt-lg-2 pt-md-2 pt-sm-1 pt-1">
              <button
                className="btn btn-secondary dropdown-toggle p-1 fs-5 ps-2 pe-2 bg-white text-black"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {duration != 0 ? `${duration} weeks` : 'Duration'}
              </button>
              <ul className="dropdown-menu">
                {durations.map((cate) => (
                  <li>
                    <a
                      className="dropdown-item"
                      onClick={(e) => handleDuration(e, cate)}
                      href="#"
                    >
                      {cate} weeks
                    </a>
                  </li>
                ))}
              </ul>
            </div>
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
              enter the category of your book:{" "}
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
  );
};

export default SellerDub;
