import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import './Books.css'
import DashBoardBooks from './DUP/DashBoardBooks'
import BookComponent from "./Books/BookComponent";
import InCarosal from "./InCarosal";

const Allbooks = ({allBooks}) => {
  const navigate = useNavigate()

    console.log(allBooks)
    const location = useLocation()
    allBooks = location.state.notes
    const title = [location.state.titile]

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
    <>
      <InCarosal></InCarosal>
      <div className="d-flex col-10 m-auto">
        <BookComponent allBooks={allBooks} activeCate={[]} title={title}/>  
      </div>    

    </>
  );
};

export default Allbooks;

