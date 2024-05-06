import React from "react";
import { useNavigate } from "react-router-dom";
import Viwe from "../Viwe";
import ClgNotes from "./ClgNotes";


const Notes = ({allBooks}) => {
  const navigate = useNavigate()

  // console.log(allBooks.length)
  const Notes = [];

  for (let index = 0; index < allBooks.length; index++) {
    if (allBooks[index].category=='Notes' && Notes.length<=7) {
      Notes.push(allBooks[index])
    }
    
  }


  const handleClick = (e, url)=>{
    e.preventDefault()
    console.log(url)
    navigate('/view', { state: { books: url } });
  }

  return (
    <>
    {Notes.length !=0 ? 
      <>
        <hr style={{color: 'white'}} />
    <div className="mt-lg-5 mt-2" style={{ fontFamily: "serif" }}>
      <h1 className="d-flex justify-content-center">Books Related to Coding</h1>
      <div
        className="d-flex overflow-x-scroll"
        style={{ scrollbarWidth: "none" }}
      >
        {Notes.map((books) => (
          <a href="" onClick={(e)=>handleClick(e, books)} key={books.id} className="p-3 d-flex flex-column text-decoration-none text-black col-lg-2 col-sm-4 col-md-4 col-6">
            <div
              className="d-flex flex-column  position-relative gap-1"
              style={{ fontSize: "80%" }}
            >
              {/* <span className='' style={{zIndex:'-1'}}> <img style={{zIndex:'-1'}} className='' src="https://cdn.shopify.com/s/files/1/0302/6927/6291/files/03-_1.png?v=1702465051" alt="" /> fhd <span className='' style={{position:'relative', zIndex:'1'}}>Gently Used</span></span> */}
            </div>
            <div className="d-flex justify-content-center">
              <img className="col-12 p-2" src={books.url} />
            </div>
            <div className="d-flex p-2 flex-column justify-content-end align-content-end ">
              <span className="fw-semibold">{books.name}</span>
              <span>by: {books.by.slice(0,20)}</span>
              <div>
                <span className="text-decoration-line-through">Rs. {books.orginalPrice}</span>
                <span> Rs. {books.disPrice}</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
      </>
      :
      <></>
    }
        <ClgNotes allBooks={allBooks}/>
    </>
  );
};

export default Notes;
