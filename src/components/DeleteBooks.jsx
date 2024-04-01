import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Viwe from "./Viwe";
import Allbooks from "./Allbooks";

const DeleteBooks = ({allBooks, setAllBooks}) => {
  const navigate = useNavigate()
  

  const handleDelete = async (id)=>{
    const del = await axios.delete(`http://localhost:8081/books/${id}`)
    console.log(del)
    if(allBooks.filter(detail=> detail._id==id)!=[]){
      setAllBooks(allBooks.filter(detail=> detail._id!==id))
      console.log(allBooks.filter(detail=> detail._id!==id))
    }
  }

  const handleClick = (e, book)=>{
    e.preventDefault()
    handleDelete(book.id)
  }

  return (
    <div className="mt-5" style={{ fontFamily: "serif" }}>
      <h1 className="d-flex justify-content-center">Books in Demand</h1>
      <div
        className="d-flex row"
        style={{ scrollbarWidth: "none" }}
      >
        {allBooks.map((books) => (
          <a href="" onClick={(e)=>handleClick(e, books)} key={books.id} className="p-3 d-flex flex-column text-decoration-none text-black col-lg-2 col-sm-4 col-md-4 col-6">
            <div
              className="d-flex flex-column  position-relative gap-1"
              style={{ fontSize: "80%" }}
            >
            </div>
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

export default DeleteBooks;

