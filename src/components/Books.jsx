import React from "react";
import { useNavigate } from "react-router-dom";
import Viwe from "./Viwe";
import ClgNotes from "./ClgNotes";

const Books = ({allBooks}) => {
  const navigate = useNavigate()
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
  
  const booksDetail = allBooks.filter(book=> book.category!='ClgNotes' &&  book.category!='Notes')
  console.log(booksDetail)

  const handleClick = (e, url)=>{
    e.preventDefault()
    console.log(url)
    navigate('/view', { state: { books: url } });
  }

  return (
    <div className="mt-lg-5" style={{ fontFamily: "serif" }}>
      <h1 className="d-flex justify-content-center">Books Available</h1>
      <div
        className="d-flex overflow-x-scroll"
        style={{ scrollbarWidth: "none" }}
      >
        {booksDetail.map((books) => (
          <a href="" onClick={(e)=>handleClick(e, books)} key={books.id} className="p-3 d-flex flex-column text-decoration-none text-black col-lg-2 col-sm-4 col-md-4 col-6">
            {/* <div
              className="d-flex flex-column  position-relative gap-1"
              style={{ fontSize: "80%" }}
            >
              <span className="">
                {" "}
                <div
                  className="text-white"
                  style={{
                    backgroundImage:
                      "url(https://cdn.shopify.com/s/files/1/0302/6927/6291/files/03-_1.png?v=1702465051)",
                    width: "78px",
                  }}
                >
                  {" "}
                  <span className="p-2 fw-semibold">hello</span>{" "}
                </div>{" "}
              </span>
              <span className="">
                {" "}
                <div
                  className="text-white"
                  style={{
                    backgroundImage:
                      "url(https://cdn.shopify.com/s/files/1/0302/6927/6291/files/03-_1.png?v=1702465051)",
                    width: "78px",
                  }}
                >
                  {" "}
                  <span className="p-2 fw-semibold">52%</span>{" "}
                </div>{" "}
              </span>
            </div> */}
            <div className="d-flex justify-content-center">
              <img className="col-12 p-2" src={books.url} />
            </div>
            <div className="d-flex p-2 flex-column justify-content-end align-content-end ">
              <span className="fw-semibold">{books.name}</span>
              <span>by: {books.by.slice(0,20)}</span>
              {/* <div>
                <span className="text-decoration-line-through">Rs. {books.orginalPrice}</span>
                <span> Rs. {books.disPrice}</span>
              </div> */}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Books;
