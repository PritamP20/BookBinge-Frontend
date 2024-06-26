import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// this is the cop of all books .jsx

const BookDup = ({allBooks}) => {
  const navigate = useNavigate()

    console.log(allBooks)


  const booksIMG = [
    "https://m.media-amazon.com/images/I/61U9jnPOXML.jpg",
    "https://m.media-amazon.com/images/I/91RpwagB7uL._AC_UF1000,1000_QL80_FMwebp_.jpg",
    "https://kitabay.com/cdn/shop/products/db28f2558c458f85f56b2886e1908ffd_3a5a354f-b335-44c3-9ddb-f65a1d75eab2.jpg?crop=center&height=400&v=1710917345&width=250",
    "https://m.media-amazon.com/images/I/91pSWFA5WQL._AC_UF1000,1000_QL80_FMwebp_.jpg",
    "https://m.media-amazon.com/images/I/91n1R2TdyUL._AC_UF1000,1000_QL80_FMwebp_.jpg",
    "https://m.media-amazon.com/images/I/61ijmpuQlRL._AC_UF1000,1000_QL80_FMwebp_.jpg",
    "https://m.media-amazon.com/images/I/61Ktyy7KymL._AC_UF1000,1000_QL80_FMwebp_.jpg",
    "https://m.media-amazon.com/images/I/81BE7eeKzAL._AC_UF1000,1000_QL80_FMwebp_.jpg",
  ];
  const booksDetail = [
    {
      'id':1,
      'name':'The Amazing Spiderman',
      'by':'Stan lee',
      'orginalPrice': 696,
      'disPrice': 100,
      'url':"https://m.media-amazon.com/images/I/61U9jnPOXML.jpg",
      'detail':"When high school student Peter Parker is bitten by a radioactive spider, he is given sensational abilities that allow him to crawl up walls, just like a spider! But when tragedy strikes Peter's Uncle Ben, Peter vows to use those abilities for the good of all mankind as the Amazing Spider-Man!",
      'colour':'#dc2626',
      'category':''
    },
    {
      'id':2,
      'name':'Naruto',
      'by': 'Naruto',
      'originalPrice': 1099,
      'disPrice':299,
      'url':"https://m.media-amazon.com/images/I/91RpwagB7uL._AC_UF1000,1000_QL80_FMwebp_.jpg",
      'detail':'Naruto is a Japanese manga series written and illustrated by Masashi Kishimoto. It tells the story of Naruto Uzumaki, a young ninja who seeks recognition from his peers and dreams of becoming the Hokage, the leader of his village.',
      'colour':'#f97316'
    },
    {
      'id':3,
      'name':'14th Dealdy sin',
      'by':'James Patterson',
      'originalPrice':499,
      'disPrice':250,
      'url': "https://kitabay.com/cdn/shop/products/db28f2558c458f85f56b2886e1908ffd_3a5a354f-b335-44c3-9ddb-f65a1d75eab2.jpg?crop=center&height=400&v=1710917345&width=250",
      'detail':"With San Francisco under siege and every cop a suspect, the Women's Murder Club must risk their lives to save the city-and each other. With a beautiful baby daughter and a devoted husband, Detective Lindsay Boxer can safely say that her life has never been better.",
      'colour':'#78716c'
    },
    {
      'id':4,
      'name':'Diary of a Wimpy kid',
      'by':'kid',
      'originalPrice':899,
      'disPrice':300,
      'url':"https://m.media-amazon.com/images/I/91pSWFA5WQL._AC_UF1000,1000_QL80_FMwebp_.jpg",
      'detail':"When he decides to tag along with his brother Rodrick's band, Löded Diper, Greg doesn't realize what he's getting into. But he soon learns that late nights, unpaid gigs, fighting between band members, and money troubles are all part of the rock 'n' roll lifestyle.",
      'colour':''
    },
    {
      'id':5,
      'name':'Diary of a Wimpy kid',
      'by':'kid',
      'originalPrice':899,
      'disPrice':300,
      'url':"https://m.media-amazon.com/images/I/91n1R2TdyUL._AC_UF1000,1000_QL80_FMwebp_.jpg",
      'detail':"'Middle schooler Greg Heffley faces challenges with the start of a new school year. He's on the outs with his best friend, Rowley, and doesn't know anyone else who is best friend material. Other kids his age are starting to attend boy-girl parties and post pictures of their exciting lives online.",
      'colour':'#c4b5fd'
    },
    {
      'id':6,
      'name':'Unlocking the Secrets of Unicorn',
      'by':'Ishan Sharma',
      'originalPrice':499,
      'disPrice':250,
      'url':"https://m.media-amazon.com/images/I/61ijmpuQlRL._AC_UF1000,1000_QL80_FMwebp_.jpg",
      'detail':"Although ours is a vibrant ecosystem that encourages young minds to take the entrepreneurial plunge, the road ahead is full of pitfalls. Unlocking Unicorn Secrets captures the entrepreneurial journeys of some of India's new-age founders and looks at the challenges they faced and how they overcame them.",
      'colour':''
    },
    {
      'id':7,
      'name':'The Art of being alone',
      'by':'Renuka Gavrani',
      'originalPrice':999,
      'disPrice':499,
      'url':"https://m.media-amazon.com/images/I/61Ktyy7KymL._AC_UF1000,1000_QL80_FMwebp_.jpg",
      'detail':'"The Art of Being Alone" is a poetic and insightful guide to appreciating the beauty of solitude. It invites readers to rediscover the value of introspection, self-care, and creative expression in the quiet moments of life.',
      'colour':''
    },
    {
      'id':8,
      'name':'Rich Dad Poor Dad',
      'by':'Robert Kiyoski',
      'originalPrice':499,
      'disPrice':399,
      'url':"https://m.media-amazon.com/images/I/81BE7eeKzAL._AC_UF1000,1000_QL80_FMwebp_.jpg",
      'detail':"Rich Dad, Poor Dad by Robert T. Kiyosaki is a personal finance book that emphasizes the importance of financial education, teaches how to make money work for you, and challenges traditional beliefs about money.",
      'colour':'#a78bfa'
    }
  ]

  const handleClick = (e, url)=>{
    e.preventDefault()
    console.log(url)
    if (url.ClgNotes == undefined) {
      navigate('/view', { state: { books: url } });
    }else{
      navigate('/document', {state: {ClgNotes: url}})
    }
    
  }

  

  return (
    <div className="" style={{ fontFamily: "serif" }}>
      <div
        className="d-flex row p-lg-3 ms-0 m-1 rounded-2" 
        style={{ scrollbarWidth: "none", backgroundColor:'#DBF0FF' }}
      >

        {allBooks.map((books) => (
          <a href="" onClick={(e)=>handleClick(e, books)} key={books.id} className=" d-flex justify-content-center mb-3 flex-column text-decoration-none text-black col-lg-3 col-sm-4 col-md-4 col-6">
            <div className="book-thumbnail m-auto border border-black rounded-1" >
              <div className="d-flex justify-content-center">
                <img className="col-12 p-1"  src={books.url} />
              </div>
              <div className="details-container d-flex p-2 flex-column justify-content-end align-content-end ">
                <span className="fw-semibold d-flex justify-content-center fs-5">{books.name}</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default BookDup;
