import React from "react";
import "react-bootstrap";
import { API } from "../config/api";
import { useContext, useEffect, useState } from "react";
// import The from "../image/Ellipse1.png"
// import "bootstrap/dist/css/bootstrap.min.css";
// import "../assets/css/detail-account.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbars from "./Header";
import Changepasword from "./Changepasword";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { Button } from "react-bootstrap";

function Profile() {
  let navigate = useNavigate();

  const [profileData, setProfil] = useState({});
  const [modalShow, setModalShow] = React.useState(false);

  const getProfileData = async () => {
    try {
      const id = Number(localStorage.getItem("id"));
      const response = await API.get(`/user/${id}`);
      setProfil(response.data.data);
      console.log(profileData);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProfileData();
  }, []);

  return (
    <>
      <>
        <Navbars />
      </>
      <div
        style={{ background: "E5E5E5", height: "90.5vh", margin: "20px" }}
        className=" d-flex align-items-center justify-content-center"
      >
        <div
          // className="bg-secondary"
          style={{
            background: "white",
            padding: "25px",
            borderRadius: "5px",
            width: "40rem",
            border: "1px solid black",
          }}
        >
          <Row>
            <Col sm={6} style={{ marginTop: "-5px", paddingRight: "55px" }}>
              <>
                <h4 className="mb-5 text-dark" style={{ fontWeight: "bold" }}>
                  Personal Info
                </h4>
              </>

              <div className="d-flex mb-3">
                <img
                  src={require("../images/profile1.png")}
                  className="me-3"
                  style={{ height: "40px" }}
                ></img>
                <span style={{ marginTop: "-3px" }}>
                  <p className="text-dark" style={{ fontSize: "" }}>
                    {profileData.fullname}
                  </p>
                  <p
                    className="text-muted"
                    style={{ marginTop: "-15px", fontSize: "12px" }}
                  >
                    Full name
                  </p>
                </span>
              </div>

              <div className="d-flex mb-3">
                <img
                  src={require("../images/profile2.png")}
                  className="me-3"
                  style={{ height: "30px" }}
                ></img>
                <span style={{ marginTop: "-3px" }}>
                  <p className="text-dark" style={{ fontSize: "14px" }}>
                    {profileData.email}
                  </p>
                  <p
                    className="text-muted"
                    style={{ marginTop: "-15px", fontSize: "12px" }}
                  >
                    Email
                  </p>
                </span>
              </div>

              <div
                className="d-flex align-items-center gap-3"
                style={{ marginBottom: "20px" }}
              >
                <img width={40} src={require("../image/pasword.png")} alt="" />
                <div className="d-flex flex-column">
                  <Button
                    onClick={() => setModalShow(true)}
                    className="btn btn-dark bg-white text-primary fw-bold p-0 m-0 border-0"
                  >
                    Change Password
                  </Button>
                  <Changepasword
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                  />
                  <span className="text-muted" style={{ fontSize: "14px" }}>
                    Password
                  </span>
                </div>
              </div>

              <div className="d-flex mb-3 text-dark">
                <img
                  src={require("../images/profile3.png")}
                  className="me-3"
                  style={{ height: "40px" }}
                ></img>
                <span style={{ marginTop: "-3px" }}>
                  <p className="text-dark" style={{ fontSize: "14px" }}>
                    {profileData.phone}
                  </p>
                  <p
                    className="text-muted"
                    style={{ marginTop: "-15px", fontSize: "12px" }}
                  >
                    Mobile Phone
                  </p>
                </span>
              </div>

              <div className="d-flex mb-3">
                <img
                  src={require("../images/profile4.png")}
                  className="me-3"
                  style={{ height: "40px" }}
                ></img>
                <span style={{ marginTop: "-3px" }}>
                  <p className="text-dark" style={{ fontSize: "14px" }}>
                    jalan kaki di sawangan
                  </p>
                  <p
                    className="text-muted"
                    style={{ marginTop: "-15px", fontSize: "12px" }}
                  >
                    Alamat
                  </p>
                </span>
              </div>
            </Col>
            <Col sm={6} style={{ paddingLeft: "10px" }}>
              <img
                src={profileData.image}
                alt="Profile"
                style={{
                  width: "280px",
                  height: "345px",
                  borderRadius: "5px",
                  left: "838px",
                  top: "163px",
                }}
              ></img>
              <button
                onClick={() => navigate(`/Editprofile/${profileData.id}`)}
                className=" mt-3"
                style={{
                  background: "#FFAF00",
                  border: "none",
                  position: "absolute;",
                  width: "280px",
                  height: "50px",
                  left: "838px",
                  top: "521px",
                }}
              >
                Change Photo Profile
              </button>{" "}
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}

export default Profile;
