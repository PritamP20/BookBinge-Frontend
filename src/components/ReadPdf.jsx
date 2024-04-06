import React from 'react'
import { Viewer } from '@react-pdf-viewer/core'
import { Worker } from '@react-pdf-viewer/core'
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import '@react-pdf-viewer/core'
import pdf from '../assets/Unit.pdf'

const ReadPdf = () => {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();
    let pdf2 = 'https://firebasestorage.googleapis.com/v0/b/fir-bookbinge.appspot.com/o/ClgNotes%2F0?alt=media&token=92f7a6a6-c3cc-4293-8696-fd5ac62f16de.pdf'
  return (
    <div className='mb-lg-5 mb-sm-3 mb-md-4'>
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
            <Viewer plugins={[defaultLayoutPluginInstance]} fileUrl={pdf2} />
        </Worker>
    </div>
  )
}

export default ReadPdf

