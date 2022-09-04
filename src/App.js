
import './App.css';
import React,{useState,useEffect} from 'react';
import {BrowserRouter,Switch,Route,Link} from 'react-router-dom';
import Details from './Details';
import { useQuery, gql } from '@apollo/client';
import SpaceMission from "./graphql";

import {BrowserRouter as Router} from 'react-router-dom';
import {MDBCard,MDBCardBody,MDBCardImage,MDBCardTitle,MDBContainer,MDBCardText,MDBRow,MDBCol} from "mdb-react-ui-kit";

function App() {
  const[data,setData]=useState([]);
  const loadSpace=async()=>{
    const spaceMission=await SpaceMission.getSpaceMission(10);
    setData(spaceMission);
  };
  useEffect(()=>{
  loadSpace();},[]);
  console.log("data",data);
  return(<BrowserRouter>
    <MDBContainer className='hello'
    >
     
        <MDBRow className='missions'>
          <h2>PAST MISSIONS</h2>
    {data.map((item,index)=>(
       <MDBCol key={index}>
    <MDBCard 
    style={{maxHeight:"24rem",maxWidth:"22rem"}}
    >
      
      <MDBCardBody className="hello1" >
      <MDBCardTitle >{item.mission_name}</MDBCardTitle>
      <MDBCardText>{item.id}</MDBCardText>
        <MDBCardText>{item.launch_site.site_name_long}</MDBCardText>
       
        </MDBCardBody>
        <MDBCardImage className="hello1" style={{maxHeight:"180px",maxWidth:"350px"}}
      src={item.links.flickr_images}
      /> <MDBCardText>
          
      <Link to={'Details/' + item.id} target='_blank'><button>More details</button></Link>
          </MDBCardText>
  </MDBCard>
  </MDBCol>
    ))}
    </MDBRow>
  </MDBContainer>
  
  </BrowserRouter>
  );

}

export default App;
