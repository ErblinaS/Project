import React from "react";
import {useEffect,useState} from "react";
import {useParams} from 'react-router-dom';
import SpaceMission from "./graphql";
import {MDBCard,MDBCardBody,MDBCardImage,MDBCardTitle,MDBContainer,MDBCardText,MDBRow,MDBCol} from "mdb-react-ui-kit";
import App from "./App";
import Comments from './Comments';
   function Details(props) {
    const[data,setData]=useState([]);
    const loadSpace=async()=>{
      const spaceMission=await SpaceMission.getSpaceMission(10);
      setData(spaceMission);
    };
    useEffect(()=>{
    loadSpace();},[]);
    const [userId, setUserId] = useState(null);
    const [user, setUser] = useState({});
    const { id } = useParams();
    useEffect(() => {
        setUserId(id);
        setUser(data.find(user => user?.id == id));
    }, [user])
//problems storing state in localstorage
//     const [items, setItems] = useState(data);

//   useEffect(() => {
//   localStorage.setItem('items', JSON.stringify(items));
// }, [items]);

// useEffect(() => {
//   const items = JSON.parse(localStorage.getItem('items'));
//   if (items) {
//    setItems(items);
//   }
// }, []);
  return (
    <div className='user'>
    
  
    <MDBContainer
    >
     
        <MDBRow>
          <h2>Details</h2>
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
      /> 
  </MDBCard>
  </MDBCol>
    ))}
    </MDBRow>
    
  
  </MDBContainer>
  <Comments currentUserId="1"/>
</div>
  );
//OSE BEFORE REFRESHING
 // return (
  //   <div className='user'>
  //       <span className='user-key'>Name: </span>
  //       <span className='user-value'>{user?.mission_name}</span> <br />
  //       <span className='user-key'>ID: </span>
  //       <span className='user-value'>{user?.id}</span> <br />
  //       <span className='user-key'>Details: </span>
  //       <span className='user-value'>{user?.launch_site.site_name_long}</span> <br />
  //   </div>
    
  // )
}

    export default Details;
