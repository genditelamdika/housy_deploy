import { useContext, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useMutation, useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { API } from "../config/api";
import { UserContext } from "../context/userContext";
import iconhous from "../image/Iconhous.png";
import qrcode from "../images/qrcode.png";
import checkinn from "../image/in.png";
import checkoutt from "../image/out.png";
import line from "../image/Line.png";
import Navbars from "./Header";
import QRCode from "qrcode.react";

function Pay() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [checkin, setTanggal1] = useState();
  const [checkout, setTanggal2] = useState();
  const [state, setState] = useContext(UserContext);

  console.log("stateee", state);
  // const [jumlahProduk, setJumlahProduk] = useState(0);
  useEffect(() => {
    // Mengambil data totalHarga dari localStorage saat komponen Detail dipasang
    const savedTanggal1 = localStorage.getItem("checkin");
    const savedTanggal2 = localStorage.getItem("checkout");

    // Memastikan data totalHarga yang diambil adalah string dan mengkonversikannya kembali ke nilai number
    if (savedTanggal1) {
      setTanggal1(savedTanggal1);
      setTanggal2(savedTanggal2);
    }
  }, []);

  let { data: house } = useQuery("houseCache", async () => {
    const response = await API.get(`/house/${id}`);
    return response.data.data;
  });
  console.log(house, "house");

  //payment
  const [form, setForm] = useState({
    chekin: checkin,
    chekout: checkout,
    houseid: parseInt(id),
    total: house?.total,
    status: "waiting payment",
    userid: state.user.id,
  }); //Store product data

  const handleSubmit = useMutation(async (e) => {
    try {
      e.preventDefault();

      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const data = {
        total: house?.price,
        chekin: checkin,
        chekout: checkout,
        // fullcounter: counterqty + fullcounter,
        status: "pendding",
        houseid: parseInt(id),
        userid: state.user.id,
      };

      const body = JSON.stringify(data);

      const response = await API.post("/transaction", body, config);
      console.log("transaction success :", response);
      const token = response.data.data.token;
      window.snap.pay(token, {
        onSuccess: function (result) {
          /* You may add your own implementation here */
          console.log(result);
          navigate("/");
        },
        onPending: function (result) {
          /* You may add your own implementation here */
          console.log(result);
          navigate("/");
        },
        onError: function (result) {
          /* You may add your own implementation here */
          console.log(result);
          navigate("/");
        },
        onClose: function () {
          /* You may add your own implementation here */
          alert("you closed the popup without finishing the payment");
        },
      });

      // code here
    } catch (error) {
      console.log("transaction failed : ", error);
    }
  });

  useEffect(() => {
    //change this to the script source you want to load, for example this is snap.js sandbox env
    const midtransScriptUrl = "https://app.sandbox.midtrans.com/snap/snap.js";
    //change this according to your client-key
    const myMidtransClientKey = process.env.REACT_APP_MIDTRANS_CLIENT_KEY;

    let scriptTag = document.createElement("script");
    scriptTag.src = midtransScriptUrl;
    // optional if you want to set script attribute
    // for example snap.js have data-client-key attribute
    scriptTag.setAttribute("data-client-key", myMidtransClientKey);

    document.body.appendChild(scriptTag);
    return () => {
      document.body.removeChild(scriptTag);
    };
  }, []);
  return (
    <>
      <>
        <Navbars />
      </>
      <div
        style={{ background: "E5E5E5", height: "90.5vh", margin: "20px" }}
        className=" align-items-center justify-content-center"
      >
        <div
          //   className="bg-secondary"
          style={{
            background: "white",
            padding: "15px",
            margin: "50px",
            borderRadius: "5px",
            width: "60rem",
            height: "500px",
            borderColor: "red",
            marginLeft: "200px",
            // border:" 1px solid"
          }}
        >
          <div className="flex">
            <img src={iconhous}></img>
            <h1
              style={{
                marginLeft: "490px",
                fontSize: "36px",
                weight: "bolder",
              }}
            >
              Boking
            </h1>
          </div>
          <div className="flex">
            <h1
              style={{
                marginLeft: "630px",
                height: "29px",
                fontSize: "20px",
                color: "#959595",
              }}
            >
              Saturday, 22 Juy 2020
            </h1>
          </div>

          <div className="flex">
            <div style={{position:"absolute",marginLeft:"680px"}}>

            <QRCode value={`http://localhost:3000/Pay/${id}`} />
            </div>
            {/* <img style={{position:"absolute",marginLeft:"680px"}} src={qrcode}></img> */}
            <div style={{ marginLeft: "0px" }}>
              <h3
                style={{
                  fontSize: "25px",
                  fontFamily: "Avenir",
                  fontWeight: "bold",
                }}
              >
                {house?.nameproperty}
              </h3>

              <div
                style={{
                  height: "300px",
                  position: "absolute",
                  marginLeft: "277px",
                }}
              >
                <img src={line}></img>
              </div>

              <div className="flex">
                <h3
                  style={{
                    fontSize: "10px",
                    width: "180px",
                    fontWeight: "bold",
                    height: "33px",
                    fontFamily: "Avenir",
                    alignItems: "center",
                  }}
                >
                  {house?.addres}
                </h3>
              </div>
            </div>
            <div
              style={{
                position: "absolute",
                marginLeft: "270px",
                marginTop: "15px",
              }}
            >
              <img src={checkinn}></img>
            </div>

            <div style={{ marginLeft: "110px" }}>
              <div claasName="flex">
                <p
                  style={{
                    fontFamily: "Avenir",
                    fontSize: "20px",
                    fontWeight: "bold",
                  }}
                >
                  Checkin
                </p>
              </div>
              <div className="flex">
                <h3
                  style={{
                    fontSize: "20px",
                    width: "180px",
                    color: "#A8A8A8",
                    fontWeight: "bold",
                    height: "33px",
                    fontFamily: "Avenir",
                    alignItems: "center",
                  }}
                >
                  {checkin}
                </h3>
              </div>
            </div>

            <div style={{ marginLeft: "20px" }}>
              <div>
                <h4
                  style={{
                    marginLeft: "10px",
                    fontSize: "20px",
                    marginTop: "5px",
                    fontFamily: "Avenir",
                    fontWeight: "bold",
                  }}
                >
                  Amenities
                </h4>
              </div>
              <div className="flex">
                <h3
                  style={{
                    fontSize: "20px",
                    width: "180px",
                    fontWeight: "bold",
                    height: "33px",
                    color: "#A8A8A8",
                    fontFamily: "Avenir",
                    alignItems: "center",
                  }}
                >
                  {house?.amenities}
                </h3>
              </div>
            </div>
          </div>

          <div className="flex">
            <div style={{ marginLeft: "0px" }}>
              <p
                style={{
                  color: "red",
                  paddingTop: "10px",
                  fontFamily: "Avenir",
                  fontWeight: "bold",
                }}
              >
                Waiting Payment
              </p>
            </div>

            <div style={{ position: "absolute", marginLeft: "270px" }}>
              <img src={checkoutt}></img>
            </div>

            <div style={{ marginLeft: "170px" }}>
              <div claasName="flex">
                <p
                  style={{
                    fontFamily: "Avenir",
                    fontWeight: "bold",
                    fontSize: "20px",
                  }}
                >
                  Checkout
                </p>
              </div>
              <div className="flex">
                <h3
                  style={{
                    fontSize: "20px",
                    width: "180px",
                    color: "#A8A8A8",
                    fontWeight: "bold",
                    fontFamily: "Avenir",
                    alignItems: "center",
                  }}
                >
                  {checkout}
                </h3>
              </div>
            </div>

            <div style={{ marginLeft: "20px" }}>
              <div>
                <h4
                  style={{
                    marginLeft: "10px",
                    fontSize: "20px",
                    marginTop: "5px",
                    fontFamily: "Avenir",
                    fontWeight: "bold",
                  }}
                >
                  Type Of Rent
                </h4>
              </div>
              <div className="flex">
                <h3
                  style={{
                    fontSize: "20px",
                    width: "180px",
                    fontWeight: "bold",
                    color: "#A8A8A8",
                    height: "33px",
                    fontFamily: "Avenir",
                    alignItems: "center",
                  }}
                >
                  {house?.year}
                </h3>
              </div>
            </div>
            <p style={{ marginTop: "40px", marginLeft: "20px" }}>15180026</p>
          </div>

          <div className="flex"></div>

          <div className="flex">
            <p>No</p>
            <p style={{ marginLeft: "40px", fontWeight: "bold" }}>Fullname</p>
            <p style={{ marginLeft: "40px", fontWeight: "bold" }}>Genderr</p>
            <p style={{ marginLeft: "40px", fontWeight: "bold" }}>Phone</p>
          </div>
          <div style={{ marginTop: "0", marginBottom: "0" }}>
            <hr style={{ borderTop: "3px solid black" }} />
          </div>
          <div className="flex">
            <p>1</p>
            <p style={{ marginLeft: "30px", color: "#959595" }}>
              {state.user.fullname}
            </p>
            <p style={{ marginLeft: "30px", color: "#959595" }}>Man</p>
            <p style={{ marginLeft: "30px", color: "#959595" }}>
              {state.user.phone}
            </p>
            <h3 style={{ marginLeft: "230px", fontWeight: "bold" }}>
              Long time Rent
            </h3>
            <h3 style={{ marginLeft: "50px", fontWeight: "bold" }}>:</h3>
            <h3 style={{ marginLeft: "40px", fontWeight: "bold" }}>1</h3>
          </div>
          <div style={{ marginTop: "0", marginBottom: "0" }}>
            <hr style={{ borderTop: "3px solid black" }} />
          </div>
          <div className="flex">
            <h3 style={{ marginLeft: "590px", fontWeight: "bold" }}>TOTAL</h3>
            <h3 style={{ marginLeft: "10px", fontWeight: "bold" }}>:</h3>
            <h3
              style={{
                marginLeft: "30px",
                fontWeight: "bold",
                color: "red",
                paddingBottom: "80px",
              }}
            >
              Rp.{house?.price}
            </h3>
          </div>
          <div>
            <Button
              onClick={(e) => handleSubmit.mutate(e)}
              type="submit"
              style={{
                marginBottom: "20px",
                marginLeft: "730px",
                width: "213px",
                height: "50px",
                left: "1016px",
                top: "1284px",
                background: " #5A57AB",
                borderRadius: "5px",
              }}
            >
              Book
            </Button>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
}

export default Pay;
