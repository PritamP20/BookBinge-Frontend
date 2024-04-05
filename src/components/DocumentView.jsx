// import React from 'react'
// import { useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import { Document, Page } from 'react-pdf';

// const DocumentView = () => {

//     const location = useLocation();
//     const { ClgNotes } = location.state;
//     const ClgNotesUrl = ClgNotes.ClgNotes
//     console.log("clgurl: "+ClgNotesUrl)

//     const [numPages, setNumPages] = useState(null);
//     const [pageNumber, setPageNumber] = useState(1);

//     function onDocumentLoadSuccess({ numPages }) {
//       setNumPages(numPages);
//     }

//   return (
//     <div className='d-flex justify-content-center align-items-center'>
//       {/* <embed className='d-flex justify-content-center align-items-center' src={ClgNotesUrl} type="application/pdf" width="100%" height="900px" /> */}
//       <iframe className="w-100 d-flex justify-content-center align-items-center" height="900p" src={ClgNotesUrl} frameborder="0"></iframe>
//     </div>
//   )
// }

// export default DocumentView

import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Document, Page } from 'react-pdf';

const DocumentView = () => {
    const location = useLocation();
    const { ClgNotes } = location.state;
    const ClgNotesUrl = ClgNotes.ClgNotes;

    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    return (
        <div className='d-flex justify-content-center align-items-center'>
            <Document
                file={ClgNotesUrl}
                onLoadSuccess={onDocumentLoadSuccess}
            >
                <Page pageNumber={pageNumber} />
            </Document>
            <p>Page {pageNumber} of {numPages}</p>
        </div>
    );
}

export default DocumentView;


