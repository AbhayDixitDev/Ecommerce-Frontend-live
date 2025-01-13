import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const AllProducts = () => {
    const [ items, setItems ] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_SERVER_URL}/product`).then((res) => {
            // console.log(res.data)
        setItems(res.data)

        }
        )
    },[])
 

    const ans = items.map((item) => {
        return(
            <Col key={Math.random()} md={4} id="allproducts" style={{padding:"20px 40px",border:"1px dashed #c5c5c7"}}  >
                <p>{item.title}</p>
                <p>${item.price}</p>
           <img src={item.img[0]} alt="" width={"100%"} style={{cursor:"pointer"}} onClick={()=>{navigate(`/product/${item._id}`)}}/> 
            
          </Col>
        )
    })

  return (
  
  <>
  <Container>
    <Row >
        <Col md={12} id="allproducts" >
        <h2 style={{textAlign:"center",fontFamily: 'Libre Baskerville, serif',fontSize: '34px',fontWeight: 500,textTransform: 'none',color: '#2E2A4D',lineHeight: 1.8,letterSpacing: 'normal'}}>All Products</h2>
        </Col>
    </Row>
    <Row >
        {ans}
    </Row>
  </Container>
  </>
  )
}

export default AllProducts