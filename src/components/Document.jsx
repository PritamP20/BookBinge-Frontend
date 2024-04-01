import React from 'react'
import { useLocation } from 'react-router-dom';

const Document = () => {

    const location = useLocation();
    const { ClgNotes } = location.state;
    const ClgNotesUrl = ClgNotes.ClgNotes
    console.log("clgurl: "+ClgNotesUrl)

  return (
    <div className='d-flex justify-content-center align-items-center'>
      {/* <embed className='d-flex justify-content-center align-items-center' src={ClgNotesUrl} type="application/pdf" width="100%" height="900px" /> */}
      <iframe className="w-100 d-flex justify-content-center align-items-center" height="900px" src={ClgNotesUrl} frameborder="0"></iframe>
    </div>
  )
}

export default Document
