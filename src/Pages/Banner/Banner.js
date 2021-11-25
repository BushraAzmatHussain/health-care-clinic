import React from 'react';
import './Banner.css';
import { Carousel } from 'react-bootstrap';
import B1 from '../../images/Banner-img/B1.jpg';
import B2 from '../../images/Banner-img/B2.jpg';


const Banner = () => {
    return (
        <>

<Carousel>
  <Carousel.Item>
    <img
      className="d-block img-fluid size "
      src={B1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3 className="fw-bold">Welcome to ENT Care Clinic</h3>
      <p className="fw-bold">Our aim is to provide specialist care by drawing from the 10 plus years of experience . test</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block img-fluid  size"
      src={B2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3 className="fw-bold">We are excited to meet you</h3>
      <p className="fw-bold">We welcome all of our patients as family, providing them with ENT care and support through medical journey. Our mission is to provide high quality, comprehensive treatment to patients of all ages and backgrounds.</p>
    </Carousel.Caption>
  </Carousel.Item>
  
</Carousel>
            
        </>
    );
};

export default Banner;