import { useState } from "react";
import { Button, Carousel } from "react-bootstrap";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Modalbook from "../components/Modalbook";
import { API } from "../config/api";
import detail2 from "../images/detail2.png";
import detail3 from "../images/detail3.png";
import detail4 from "../images/detail4.png";
import ihotel from "../images/ihotel.png";
import Navbars from "../components/Header";
import bathroom from "../image/bathroom.png";
import iconbedroom from "../image/iconbedroom.png";

function Detail() {
  const [index, setIndex] = useState(0); //untuk carausel

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  const { id } = useParams();
  let { data: house } = useQuery("houseCache", async () => {
    const response = await API.get(`/house/${id}`);
    return response.data.data;
  });
  console.log("triippppppp", house);

  const [showModal, setShowModal] = useState(false);

  const handleModalShow = () => {
    setShowModal(true);
  };

  const handleModalHide = () => {
    setShowModal(false);
  };

  return (
    <>
      <>
        <Navbars />
      </>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        style={{ marginTop: "50px", width: "80%", marginLeft: "150px" }}
      >
        <Carousel.Item>
          <img
            style={{ height: "400px" }}
            className="d-block w-100"
            src={house?.image}
            alt="First slide"
          />
          <div style={{ marginTop: "20px" }}>
            <img src={detail2} alt="gambar"></img>
            <img
              style={{ marginLeft: "45px" }}
              src={detail3}
              alt="gambar"
            ></img>
            <img
              style={{ marginLeft: "45px" }}
              src={detail4}
              alt="gambar"
            ></img>
          </div>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: "400px" }}
            className="d-block w-100"
            src={house?.image}
            alt="Second slide"
          />
          <div style={{ marginTop: "20px" }}>
            <img src={detail3} alt="gambar"></img>
            <img
              style={{ marginLeft: "45px" }}
              src={detail4}
              alt="gambar"
            ></img>
            <img
              style={{ marginLeft: "45px" }}
              src={detail2}
              alt="gambar"
            ></img>
          </div>

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            style={{ height: "400px" }}
            className="d-block w-100"
            src={house?.image}
            alt="Third slide"
          />
          <div style={{ marginTop: "20px" }}>
            <img src={detail3} alt="gambar"></img>
            <img
              style={{ marginLeft: "45px" }}
              src={detail4}
              alt="gambar"
            ></img>
            <img
              style={{ marginLeft: "45px" }}
              src={detail2}
              alt="gambar"
            ></img>
          </div>
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div style={{ marginTop: "50px" }}>
        <span style={{ marginLeft: "150px" }} className="color fs-4 fw-bold">
          {house?.nameproperty}
        </span>
      </div>

      <div className="flex" style={{ marginLeft: "150px" }}>
        <div>
          <div className="flex" style={{ marginTop: "30px" }}>
            {/* <img style={{height:"30px"}} src={ihotel}/> */}
            <h3
              style={{
                fontSize: "20px",
                width: "180px",
                fontWeight: "bold",
                height: "33px",
                fontFamily: "Avenir",
                alignItems: "center",
              }}
            >
              {" "}
              RP {house?.price}/year
            </h3>
            <div className="" style={{ marginLeft: "500px" }}>
              <h3
                style={{
                  fontSize: "20px",
                  width: "180px",
                  fontWeight: "bold",
                  height: "33px",
                  fontFamily: "Avenir",
                  alignItems: "center",
                }}
              >
                {" "}
                bedroom
              </h3>
              <div className="flex">
                <h3
                  style={{
                    height: "20px",
                    fontWeight: "bold",
                    fontFamily: "Avenir",
                  }}
                >
                  {" "}
                  {house?.bedroom}
                </h3>
                <img style={{ height: "30px" }} src={iconbedroom} />
              </div>
            </div>

            <div className="" style={{ marginLeft: "10px" }}>
              <h3
                style={{
                  fontSize: "20px",
                  width: "180px",
                  fontWeight: "bold",
                  height: "33px",
                  fontFamily: "Avenir",
                  alignItems: "center",
                }}
              >
                {" "}
                bathroom
              </h3>
              <div className="flex">
                <h3
                  style={{
                    height: "20px",
                    fontWeight: "bold",
                    fontFamily: "Avenir",
                  }}
                >
                  {" "}
                  {house?.bathroom}
                </h3>
                <img style={{ height: "30px" }} src={bathroom} />
              </div>
            </div>

            <div className="" style={{ marginLeft: "10px" }}>
              <h3
                style={{
                  fontSize: "20px",
                  width: "180px",
                  fontWeight: "bold",
                  height: "33px",
                  fontFamily: "Avenir",
                  alignItems: "center",
                }}
              >
                {" "}
                Area
              </h3>
              <div className="flex">
                <h3
                  style={{
                    height: "20px",
                    fontWeight: "bold",
                    fontFamily: "Avenir",
                  }}
                >
                  {house?.area}
                </h3>
                {/* <img style={{height:"30px"}} src={ihotel}/> */}
              </div>
            </div>
          </div>
          <p>{house?.addres}</p>
          <div>
            <h3
              style={{
                fontSize: "20px",
                width: "180px",
                fontWeight: "bold",
                height: "33px",
                fontFamily: "Avenir",
                alignItems: "center",
              }}
            >
              {" "}
              decription
            </h3>
            <p style={{ width: "900px" }}>{house?.description}</p>
          </div>

          <div className="flex" style={{ marginTop: "50px" }}>
            <Button
              type="submit"
              onClick={handleModalShow}
              style={{
                marginBottom: "20px",
                marginLeft: "900px",
                width: "213px",
                height: "50px",
                left: "1016px",
                top: "1284px",
                background: " #5A57AB",
                borderRadius: "5px",
              }}
            >
              Book Now
            </Button>
          </div>

          <Modalbook show={showModal} onHide={handleModalHide} />
        </div>
      </div>
    </>
  );
}
export default Detail;
