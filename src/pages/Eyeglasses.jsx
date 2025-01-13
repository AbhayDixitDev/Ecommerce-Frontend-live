import React, {useState, useEffect} from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import EyeBg from "../assets/Images/EyeglassesBg.jpeg"
import {Form} from "react-bootstrap"
import axios from 'axios'
import {useNavigate} from "react-router-dom"
const Eyeglasses = () => {
  const [items, setItems] = useState([])
  const navigate = useNavigate()
  useEffect(() => {
    axios.get(`${import.meta.env.VITE_SERVER_URL}/product`).then((res) => {
      setItems(res.data)
    })
  },[])
  const ans = items.map((item) => {
    return(
      <Col md={4} id="allproducts" style={{padding:"20px 40px",border:"1px dashed #c5c5c7"}} >
        <p>{item.title}</p>
        <p>${item.price}</p>
        <img src={item.img[0]} alt="" width={"100%"} style={{cursor:"pointer"}} onClick={()=>{navigate(`/product/${item._id}`)}} /> 
      </Col>
    )
  })

  return (
    <>
    <Container >
      <Row>
        <Col md={12} style={{backgroundImage:`url(${EyeBg})`,backgroundSize:"cover",backgroundPositionY:"center",backgroundPositionX:"center",height:"40vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
          <Row style={{backgroundColor:"rgba(46, 42, 77, 0.7)",padding:"30px",color:"white",width:"80%",height:"80%"}}>
            <Col>
            <h1 style={{fontFamily: 'Libre Baskerville, serif',fontSize: '34px',fontWeight: 500,textTransform: 'none',lineHeight: 1.8,letterSpacing: 'normal'}}>Eyeglasses</h1>
            <p style={{fontFamily: 'Noto Sans, sans-serif',fontSize: '1.1rem',fontWeight: 400,textTransform: 'none',lineHeight: 1.8,letterSpacing: 'normal'}}>
            Our latest collection of trendy eye glasses are undoubtedly to fall in love with.Cloose from our trendy collection of reading glasses. We have reading glasses with creative designs and promising quality.
            </p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
    <Container style={{color: "#555555",fontFamily: "Noto Sans, sans-serif",fontSize: "16px",fontWeight: "bold",textTransform: "none",lineHeight: 1.8,letterSpacing: "normal",padding:"50px 0px"}}>
    <Row >
            <Col md={8}></Col>
            <Col md={4} style={{display:"flex",alignItems:"center",justifyContent:"flex-end"}}>
            Sort By: 
            <Form.Select style={{border:"1px solid black",focus:"none",outline:"none",borderRadius:"1px",width:"50%"}}>
              <option>Popularity</option>
              <option>Average rating</option>
              <option>Newness</option>
              <option>Price: low to high</option>
              <option>Price: high to low</option>
            </Form.Select>
            </Col>
           
          </Row>
    </Container>
    <Container>
    <Row style={{padding:"50px 0px"}}>
        {ans}
    </Row>
  </Container>
    
    
    </>
  )
}

export default Eyeglasses