import React from "react";
import Col from "react-bootstrap/esm/Col";
// import "../styles/style.css";
// import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { API } from "../config/api";
import { convert } from "rupiah-format";
import { Row } from "react-bootstrap";

export default function Contendata(props) {
  const navigate = useNavigate();
  let { data: houses } = useQuery("housesCache", async () => {
    const response = await API.get("/houses");
    return response.data.data;
  });

  if (props.house != undefined) {
    return (
      <>
      <Row
          xs={3}
          md={3}
          className="g-3"
          style={{ marginTop: "0px", marginLeft: "0px", padding: "50px" }}
        >
              {props.house?.map((item, index) => {
                return (
                    <Link className="text-decoration-none " to={`/Detail/${item.id}`}>                    
                    <Col>
                  <Card key={index} className="wc p-2 mb-1  d-flex selector-for-some-widget overflow-hidden gap-3">
                    <div className="position-absolute mt-3 ms-1 d-flex gap-2">
                      {item.amenities.map((amenity, idk) => (
                        <span key={idk} className="px-3 py-1 bg-white rounded-2 fs10">
                          {amenity}
                        </span>
                      ))}
                    </div>

                    <Card.Img variant="dark" src={item.image} />
                    <Card.Body>
                      <Card.Title style={{ color: "black" }}>
                        Rp.{item.price}/{item.year}
                      </Card.Title>
                      <Card.Title
                        style={{
                          fontSize: "14px",
                          textDecoration: "none",
                          cursor: "pointer",
                          color: "#555555",
                        }}
                        >
                        {item.bedroom} beds,{item.bathroom} bath, {item.area}Ft
                      </Card.Title>
                      <Card.Title
                      style={{
                        fontSize:"14px",
                      }}
                      >
                        {item.city}

                      </Card.Title>


                    </Card.Body>
                  </Card>
                  </Col>
                  </Link>
                );
              })}
            </Row>
      </>
    );
  } else {
    return (
      <>
        <Row
          xs={3}
          md={3}
          className="g-3"
          style={{ marginTop: "0px", marginLeft: "0px", padding: "50px" }}
        >
              {houses?.map((item, index) => {
                return (
                    <Link className="text-decoration-none " to={`/Detail/${item.id}`}>
                <Col key={index} >
                  <Card style={{ padding:"30px" }} className="wc p-2 mb-1  d-flex selector-for-some-widget overflow-hidden gap-3">
                  <p className="text-decoration-none" style={{marginTop:"30px",position:"absolute",background:"white",borderRadius:"5px 0 0 5px",textAlign:"center"}}>{item.amenities}</p>
                    <Card.Img variant="dark" src={item.image} />
                    <Card.Body>
                      <Card.Title style={{ color: "black",fontWeight:"bold",fontFamily:"avenir" }}>
                        Rp.{item.price}/{item.year}
                      </Card.Title>
                      <Card.Title
                        style={{
                          fontSize: "14px",
                          textDecoration: "none",
                          cursor: "pointer",
                          color: "black",
                          fontWeight:"bold"
                        }}
                        >
                        {item.bedroom} beds,{item.bathroom} bath, {item.area}Ft
                      </Card.Title>
                      <Card.Title
                      style={{
                        fontSize:"14px",
                      }}
                      >
                        {item.city}

                      </Card.Title>


                    </Card.Body>
                  </Card>
                </Col>
              </Link>
                );
              })}
         </Row>       
      </>
    );
  
  } 
}