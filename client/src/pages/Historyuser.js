import { useContext, useEffect, useState } from "react";
import { Button } from "react-bootstrap"
import { useMutation, useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { API } from "../config/api";
import { UserContext } from "../context/userContext";
import Navbars from "../components/Header"
import iconhous from "../image/Iconhous.png"
import checkin from "../image/in.png"
import checkout from "../image/out.png"
import line from "../image/Line.png"
import qrcode from "../images/qrcode.png"
function Historyuser() {
    let { data: usertrans } = useQuery("usertransCache", async () => {
        const id = Number(localStorage.getItem("id"))
        const response = await API.get(`/user/${id}/transaction`);
        return response.data.data;
      });
    //   console.log(transactions,"transacthous")
    return(
        <>
        <>
          <Navbars/>
        </>
          
            <div
            style={{ background:"E5E5E5",  height: "90.5vh", margin:"20px",}}
              className=" align-items-center justify-content-center">    
      {usertrans?.map((transactions) => ( 
                <div
        //   className="bg-secondary"
          style={{
            background: "white",
            padding: "15px",
            margin:"50px",
            borderRadius: "5px",
            width: "60rem",
            height:"500px",
            borderColor:"red",
            marginLeft:"200px"
            // border:" 1px solid"
            
          }}>
            <div className="flex">
                <img src={iconhous}></img>
                <h1 style={{marginLeft:"490px",fontSize:"36px", fontWeight:"bold"}}>INVOICE</h1>
            </div>
            <div className="flex">
                <h1 style={{ marginLeft:"630px",height:"29px",fontSize:"20px",color:"#959595"}}>Saturday, 22 Juy 2020</h1>

            </div>
            
            <div className="flex">
                <img style={{position:"absolute",marginLeft:"680px"}} src={qrcode}></img>
                <div style={{marginLeft:"0px",}}>
                <h3 style={{fontSize:"25px",fontFamily:"Avenir",fontWeight:"bold"}}>{transactions?.house?.nameproperty}</h3>
  
      <div style={{height:"300px",position:"absolute",marginLeft:"277px"}}>
                <img src={line}></img>
</div>
      <div className="flex">
      <h3 style={{fontSize:"10px", width:"180px", fontWeight:"bold", height: "13px",fontFamily: 'Avenir',alignItems:"center"}}>{transactions?.house?.addres}</h3>
      </div>
      </div>


<div style={{position:"absolute",marginLeft:"270px",marginTop:"15px"}}>
                <img src={checkin}></img>
</div>
                <div style={{marginLeft:"110px",}}>
                  <div claasName="flex">
      <p style={{fontFamily: 'Avenir',fontSize:"20px",fontWeight:"bold",}}>Checkin</p>
      </div>
      <div className="flex">
      <h3 style={{fontSize:"20px", width:"180px",color:"#A8A8A8", fontWeight:"bold", height: "33px",fontFamily: 'Avenir',alignItems:"center"}}>{transactions?.chekin}</h3>
      </div>
      </div>


      <div style={{marginLeft:"20px",}}>
<div>

      <h4 style={{marginLeft:"10px", fontSize:"20px", marginTop:"5px",fontFamily:"Avenir",fontWeight:"bold"}}>Amenities</h4>
</div>
      <div className="flex">
      <h3 style={{fontSize:"20px", width:"180px", fontWeight:"bold", height: "33px",color:"#A8A8A8",fontFamily: 'Avenir',alignItems:"center"}}>{transactions?.house?.amenities}</h3>
      </div>
      </div>
      </div>


      <div className="flex">
                <div style={{marginLeft:"0px",}}>
                <p style={{color: "green", paddingTop:"10px",fontFamily:"Avenir",fontWeight:"bold"}}>{transactions?.status}</p>
      </div>


      <div style={{position:"absolute",marginLeft:"270px"}}>
                <img src={checkout}></img>
</div> 
                <div style={{marginLeft:"230px",}}>
                  <div claasName="flex">
      <p style={{fontFamily: 'Avenir',fontWeight:"bold", fontSize:"20px",}}>Checkout</p>
      </div>
      <div className="flex">
      <h3 style={{fontSize:"20px", width:"180px",color:"#A8A8A8", fontWeight:"bold", fontFamily: 'Avenir',alignItems:"center"}}>{transactions?.chekout}</h3>
      </div>
      </div>


      <div style={{marginLeft:"20px",}}>
<div>

      <h4 style={{marginLeft:"10px", fontSize:"20px", marginTop:"5px",fontFamily:"Avenir",fontWeight:"bold"}}>Type Of Rent</h4>
</div>
      <div className="flex">
      <h3 style={{fontSize:"20px", width:"180px", fontWeight:"bold",color:"#A8A8A8", height: "33px",fontFamily: 'Avenir',alignItems:"center"}}>{transactions?.house?.year}</h3>
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
                <h4 style={{marginLeft:"250px",  fontSize:"20px",fontFamily:"Avenir",fontWeight:"bold"}}>Acomadation</h4>
                <h4 style={{marginLeft:"50px",  fontSize:"20px",fontFamily:"Avenir",fontWeight:"bold"}}>Transportasion</h4>
            </div> */}

            {/* <div className="flex">
                <p style={{marginLeft:"310px",color:"#959595"}}>{item.trip.acommodation}</p>
                <p style={{marginLeft:"60px",color:"#959595"}}>{item.trip.transportasion}</p>
                <p style={{marginLeft:"130px",fontFamily:"Avenir",fontWeight:"bold",marginTop:"20px"}}>1518A29</p>
            </div> */}
            <div className="flex" >
                <p >No</p>
                <p style={{marginLeft:"40px",fontWeight:"bold"}}>Fullname</p>
                <p style={{marginLeft:"40px",fontWeight:"bold"}}>Genderr</p>
                <p style={{marginLeft:"40px",fontWeight:"bold"}}>Phone</p>
            </div>
            <div style={{ marginTop:"0",marginBottom:"0" }}>
                <hr style={{ borderTop: "3px solid black" }} />
            </div>
            <div className="flex">
                <p>1</p>
                <p style={{marginLeft:"30px",color:"#959595"}}>{transactions?.user?.fullname}</p>
                <p  style={{marginLeft:"30px",color:"#959595"}}>Man</p>
                <p  style={{marginLeft:"30px",color:"#959595"}}>{transactions?.user?.phone}</p>
                <h3  style={{marginLeft:"200px",fontWeight:"bold"}}>Long time Rent</h3>
                <h3  style={{marginLeft:"50px",fontWeight:"bold"}}>:</h3>
                <h3  style={{marginLeft:"40px",fontWeight:"bold"}}>{transactions?.house?.tor}</h3>
            </div>
            <div style={{ marginTop:"0",marginBottom:"0" }}>
                <hr style={{ borderTop: "3px solid black" }} />
            </div>
            <div className="flex">
                <h3 style={{marginLeft:"530px",fontWeight:"bold"}}>TOTAL</h3>
                <h3 style={{marginLeft:"10px",fontWeight:"bold"}}>:</h3>
                <h3  style={{marginLeft:"30px",fontWeight:"bold",color:"red",paddingBottom:"80px"}}>Rp.{transactions?.house?.price}</h3>
        
            </div>
            

            
            </div>
                ))}
            <div>
                
            </div>
         
         
         </div>
        
        </>
    )
}
export default Historyuser