import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import brand1 from "@/assets/images/brand1.png"
import brand2 from "@/assets/images/brand2.png"
import brand3 from "@/assets/images/brand3.png"
import brand4 from "@/assets/images/brand4.png"
const OurBrands = () => {
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <Container style={{padding:"50px 0px"}}>
    <Row >
        <Col md={12} id="allproducts" >
        <h2 style={{textAlign:"center",fontFamily: 'Libre Baskerville, serif',fontSize: '34px',fontWeight: 500,textTransform: 'none',color: '#2E2A4D',lineHeight: 1.8,letterSpacing: 'normal'}}>Our Brands</h2>
        </Col>
    </Row>
    <Row>
        <Col>
        <Carousel activeIndex={index} onSelect={handleSelect} className="d-flex justify-content-between" >
      <Carousel.Item style={{padding:"50px 0px",display:"flex",justifyContent:"space-between",alignItems:"center"}} >
        <img
          className="d-inline"
          src={brand1}
          alt="Second slide"
          width={"100px"}
          style={{padding:"0px 15px"}}
        />
        <img
        className="d-inline"
        src={brand2}
        alt="Second slide"
        width={"100px"}
        style={{padding:"0px 15px"}}
      />
      <img
      className="d-inline"
      src={brand3}
      alt="Second slide"
      width={"100px"}
      style={{padding:"0px 15px"}}
    />
    <img
    className="d-inline"
    src={brand4}
    alt="Second slide"
    width={"100px"}
    style={{padding:"0px 15px"}}
  />
      </Carousel.Item>
      <Carousel.Item style={{padding:"50px 0px",display:"flex",justifyContent:"space-between",alignItems:"center"}} >
        <img
          className="d-inline"
          src={brand1}
          alt="Second slide"
          width={"100px"}
          style={{padding:"0px 15px"}}
        />
        <img
        className="d-inline"
        src={brand2}
        alt="Second slide"
        width={"100px"}
        style={{padding:"0px 15px"}}
      />
      <img
      className="d-inline"
      src={brand3}
      alt="Second slide"
      width={"100px"}
      style={{padding:"0px 15px"}}
    />
    <img
    className="d-inline"
    src={brand4}
    alt="Second slide"
    width={"100px"}
    style={{padding:"0px 15px"}}
  />
      </Carousel.Item>
      
    </Carousel>
        </Col>
    </Row>
</Container>
  )
}

export default OurBrands