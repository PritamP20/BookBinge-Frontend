import React from 'react'
import { useLocation } from 'react-router-dom'

const BooksByCate = () => {
    const location = useLocation();
    const { books, category } = location.state;
    console.log(books)
  return (
    <div className="mt-lg-5" style={{ fontFamily: "serif" }}>
      <h1 className="d-flex justify-content-center">Books in {category}</h1>
      <div
        className="d-flex row"
        style={{ scrollbarWidth: "none" }}
      >
        {books.map((books) => (
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
  )
}

export default BooksByCate
