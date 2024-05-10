import React from 'react'
import { Carousel } from 'react-bootstrap'


const InCarosal = () => {
  return (
    <Carousel className='m-5'>
      <Carousel.Item interval={500}>
        <span className='d-flex justify-content-center'><img className='rounded-1' src="https://assets-in.bmscdn.com/promotions/cms/creatives/1706383776906_web.jpg" alt="" /></span>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <span className='d-flex justify-content-center'><img src="https://assets-in.bmscdn.com/promotions/cms/creatives/1714484600065_summerwebbanner.jpg" alt="" /></span>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <span className='d-flex justify-content-center'><img src="https://assets-in.bmscdn.com/promotions/cms/creatives/1714660187714_atulkhatriwebshowcase.jpg" alt="" /></span>
      </Carousel.Item>
    </Carousel>
  )
}

export default InCarosal
