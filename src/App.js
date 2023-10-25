import './App.css';
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row } from 'react-bootstrap';


function App() {
  
  const[color,setColor]=useState('background-yellow')
  const click=(color)=>{
    
    setColor(color)
  
    
  }
  useEffect(()=>{
    document.body.style.backgroundColor=color
  },[color])
 
  return (
  <Row>
      <Col lg={2}>
        
      </Col>
  
     <Col lg={8} className='vh-100' >
      
       
     
       <div className={` w-100 p-5   d-flex flex-column justify-content-between align-items-center `}>
       <h1 className='mt-5' style={{height:'100px'}}>Background Color Change</h1>
         <div className='mt-5 p-3'>
            <Button className='ms-5 rounded shadow' onClick={()=>{click("green")}} style={{backgroundColor:'white',color:'green',fontSize:'20px',fontWeight:"10px",width:'100px'}} variant="primary">Green </Button>
            <Button className='ms-5 rounded shadow' onClick={()=>{click("red")}}  style={{backgroundColor:'white',color:'red',fontSize:'20px',width:'100px'}} variant="primary">Red </Button>
            <Button className='ms-5 rounded shadow' onClick={()=>{click("yellow")}} style={{backgroundColor:'white',color:'yellow',fontSize:'20px',width:'100px'}} variant="primary">Yellow </Button>
            <Button className='ms-5 rounded shadow' onClick={()=>{click("blue")}} style={{backgroundColor:'white',color:'blue',fontSize:'20px',width:'100px'}} variant="primary">Blue </Button>
            <Button className='ms-5 rounded shadow' onClick={()=>{click("black")}} style={{backgroundColor:'white',color:'black',fontSize:'20px',width:'100px'}} variant="primary">Black </Button>
            
         </div>
    
       </div>
       
     </Col>
    <Col lg={2}>
     
    </Col>
  
  </Row>
  );
}

export default App;
