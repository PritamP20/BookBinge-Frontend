import React from 'react'
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Document, Page } from 'react-pdf';
import { Viewer } from '@react-pdf-viewer/core'
import { Worker } from '@react-pdf-viewer/core'
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import '@react-pdf-viewer/core'

const DocumentView = () => {

    const location = useLocation();
    const { ClgNotes } = location.state;
    const ClgNotesUrl = ClgNotes.ClgNotes
    console.log("clgurl: "+ClgNotesUrl)

    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    // const [numPages, setNumPages] = useState(null);
    // const [pageNumber, setPageNumber] = useState(1);

    // function onDocumentLoadSuccess({ numPages }) {
    //   setNumPages(numPages);
    // }

  return (
    // <div className='d-flex justify-content-center align-items-center'>
    //   {/* <embed className='d-flex justify-content-center align-items-center' src={ClgNotesUrl} type="application/pdf" width="100%" height="900px" /> */}
    //   <iframe className="w-100 d-flex justify-content-center align-items-center" height="900p" src={ClgNotesUrl} frameborder="0"></iframe>
    // </div>

    <div className='mb-lg-5 mb-sm-3 mb-md-4'>
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
            <Viewer plugins={[defaultLayoutPluginInstance]} fileUrl={ClgNotesUrl} />
        </Worker>
    </div>
  )
}

export default DocumentView


