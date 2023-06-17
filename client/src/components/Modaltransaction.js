import React from 'react';
import Icon from "../images/Icon.png"
import qrcode from "../images/qrcode.png"
import { Modal, Button } from 'react-bootstrap';
import checkin from "../image/in.png"
import iconhous from "../image/Iconhous.png"
import checkout from "../image/out.png"
import line from "../image/Line.png"
// import Historytrip from './Historytrip';
const Modaltransaction = ({ show, onHide,data, onClose, onApprove  }) => {
console.log("transsssssss",data)
// console.log("transid",transactionid)
    return (
      <Modal className="Mtran" show={show} onHide={onHide} centered>
          <div   
className=" d-flex align-items-center justify-content-center"
              >
                  <div
        //   className="bg-secondary"
          style={{
            background: "white",
            width: "60rem",
            
          }}>
            <div className="flex">
                <img src={iconhous}></img>
                <h1 style={{marginLeft:"490px",fontSize:"36px", weight:"bolder",color:"black"}}>INVOICE</h1>
            </div>
            <div className="flex">
                <h1 style={{ marginLeft:"630px",height:"29px",fontSize:"20px",color:"#959595"}}>Saturday, 22 Juy 2020</h1>

            </div>
            
            <div className="flex">
                <img style={{position:"absolute",marginLeft:"680px"}} src={qrcode}></img>
                <div style={{marginLeft:"0px",}}>
                <h3 style={{fontSize:"25px",fontFamily:"Avenir",fontWeight:"bold",color:"black",color:"black"}}>{data?.house?.nameproperty}</h3>
  
      <div style={{height:"300px",position:"absolute",marginLeft:"277px"}}>
                <img src={line}></img>
</div>
      <div className="flex">
      <h3 style={{fontSize:"10px", width:"180px", fontWeight:"bold",color:"black", height: "13px",fontFamily: 'Avenir',alignItems:"center"}}>{data?.house?.addres}</h3>
      </div>
      </div>


<div style={{position:"absolute",marginLeft:"270px",marginTop:"15px"}}>
                <img src={checkin}></img>
</div>
                <div style={{marginLeft:"110px",}}>
                  <div claasName="flex">
      <p style={{fontFamily: 'Avenir',fontSize:"20px",fontWeight:"bold",color:"black",}}>Checkin</p>
      </div>
      <div className="flex">
      <h3 style={{fontSize:"20px", width:"180px",color:"#A8A8A8", fontWeight:"bold",color:"black", height: "33px",fontFamily: 'Avenir',alignItems:"center"}}>{data?.chekin}</h3>
      </div>
      </div>


      <div style={{marginLeft:"20px",}}>
<div>

      <h4 style={{marginLeft:"10px", fontSize:"20px", marginTop:"5px",fontFamily:"Avenir",fontWeight:"bold",color:"black"}}>Amenities</h4>
</div>
      <div className="flex">
      <h3 style={{fontSize:"20px", width:"180px", fontWeight:"bold",color:"black", height: "33px",color:"#A8A8A8",fontFamily: 'Avenir',alignItems:"center"}}>{data?.house?.amenities}</h3>
      </div>
      </div>
      </div>


      <div className="flex">
                <div style={{marginLeft:"0px",}}>
                <p style={{color: "green", paddingTop:"10px",fontFamily:"Avenir",fontWeight:"bold",color:"black"}}>{data?.status}</p>
      </div>


      <div style={{position:"absolute",marginLeft:"270px"}}>
                <img src={checkout}></img>
</div> 
                <div style={{marginLeft:"230px",}}>
                  <div claasName="flex">
      <p style={{fontFamily: 'Avenir',fontWeight:"bold",color:"black", fontSize:"20px",}}>Checkout</p>
      </div>
      <div className="flex">
      <h3 style={{fontSize:"20px", width:"180px",color:"#A8A8A8", fontWeight:"bold",color:"black", fontFamily: 'Avenir',alignItems:"center"}}>{data?.chekout}</h3>
      </div>
      </div>


      <div style={{marginLeft:"20px",}}>
<div>

      <h4 style={{marginLeft:"10px", fontSize:"20px", marginTop:"5px",fontFamily:"Avenir",fontWeight:"bold",color:"black"}}>Type Of Rent</h4>
</div>
      <div className="flex">
      <h3 style={{fontSize:"20px", width:"180px", fontWeight:"bold",color:"black",color:"#A8A8A8", height: "33px",fontFamily: 'Avenir',alignItems:"center"}}>{data?.house?.year}</h3>
      </div>
      </div>
      <p style={{marginTop:"30px",marginLeft:"20px"}}>15180026</p>
      </div>


            <div className="flex">
                {/* <p style={{color:"#959595"}}>{item.trip.country.name}</ p> */}
                {/* <p style={{marginLeft:"240px",color:"#959595"}}>{item.trip.datetrip}</p> */}
                {/* <p style={{marginLeft:"50px",color:"#959595"}}>6 Day 4 Night</p> */}
            {/* <img style={{position:"absolute",marginLeft:"680px"}} src={qrcode}></img> */}
            </div>
            {/* <div className="flex">
                <h4 style={{marginLeft:"250px",  fontSize:"20px",fontFamily:"Avenir",fontWeight:"bold",color:"black"}}>Acomadation</h4>
                <h4 style={{marginLeft:"50px",  fontSize:"20px",fontFamily:"Avenir",fontWeight:"bold",color:"black"}}>Transportasion</h4>
            </div> */}

            {/* <div className="flex">
                <p style={{marginLeft:"310px",color:"#959595"}}>{item.trip.acommodation}</p>
                <p style={{marginLeft:"60px",color:"#959595"}}>{item.trip.transportasion}</p>
                <p style={{marginLeft:"130px",fontFamily:"Avenir",fontWeight:"bold",color:"black",marginTop:"20px"}}>1518A29</p>
            </div> */}
            <div className="flex" >
                <p >No</p>
                <p style={{marginLeft:"40px",fontWeight:"bold",color:"black"}}>Fullname</p>
                <p style={{marginLeft:"40px",fontWeight:"bold",color:"black"}}>Genderr</p>
                <p style={{marginLeft:"40px",fontWeight:"bold",color:"black"}}>Phone</p>
            </div>
            <div style={{ marginTop:"0",marginBottom:"0" }}>
                <hr style={{ borderTop: "3px solid black" }} />
            </div>
            <div className="flex">
                <p>1</p>
                <p style={{marginLeft:"30px",color:"#959595"}}>{data?.user?.fullname}</p>
                <p  style={{marginLeft:"30px",color:"#959595"}}>Man</p>
                <p  style={{marginLeft:"30px",color:"#959595"}}>{data?.user?.phone}</p>
                <h3  style={{marginLeft:"200px",fontWeight:"bold",color:"black"}}>Long time Rent</h3>
                <h3  style={{marginLeft:"50px",fontWeight:"bold",color:"black"}}>:</h3>
                <h3  style={{marginLeft:"40px",fontWeight:"bold",color:"black"}}>{data?.house?.tor}</h3>
            </div>
            <div style={{ marginTop:"0",marginBottom:"0" }}>
                <hr style={{ borderTop: "3px solid black" }} />
            </div>
            <div className="flex">
                <h3 style={{marginLeft:"530px",fontWeight:"bold",color:"black"}}>TOTAL</h3>
                <h3 style={{marginLeft:"10px",fontWeight:"bold",color:"black"}}>:</h3>
                <h3  style={{marginLeft:"30px",fontWeight:"bold",color:"black",color:"red",paddingBottom:"80px"}}>Rp.{data?.house?.price}</h3>
        
            </div>
            

            
            </div>
          </div>
        
      </Modal>
    );
  };
  export default Modaltransaction
  