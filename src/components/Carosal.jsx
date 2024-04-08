import React from 'react'
import { Carousel } from 'react-bootstrap'


const Carosal = () => {
  return (
    <Carousel className='mt-5'>
      <Carousel.Item className='d-flex text-black justify-content-center align-items-center' interval={500} >
        {/* <ExampleCarouselImage text="First slide" /> */}
        {/* <img className='h-25' src="https://manybooks.net/sites/default/files/2018-07/bookdisplaysmall.jpg" alt="" /> */}
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
        <div className='d-flex justify-content-center p-3 align-items-center' >
          <div className='p-lg-5 m-lg-5 p-md-4 p-sm-2 m-md-3 m-sm-2'>
            <h1 className='d-flex fs-3 text-center justify-content-center' style={{fontFamily: "Rubik"}}>FREE AND DISSCOUNTED BESTSELLERS</h1>
            <p className='text-wrap fs-6 text-center'>Join 150,000+ fellow readers. Get free and disscounted bestsellers straight to your inbox with the BookBinge. <a href="">Sign Up Now</a> </p>
          </div>
        </div>
      </Carousel.Item>
      {/* <Carousel.Item interval={500}>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item> */}
    </Carousel>
  )
}

export default Carosal
