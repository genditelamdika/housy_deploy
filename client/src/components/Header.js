import Login from "../components/Login";
// import Sidebar from "./Sidebar"
import Register from "../components/Register";
import { UserContext } from "../context/userContext";
import * as jose from "jose";
import Home from "../components/Home";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import {Col, Button, Dropdown, Form, NavDropdown } from "react-bootstrap";
import Dropdownn from "../images/Ellipse1.png";
// import Offcanvas from "react-bootstrap/Offcanvas";
import action from "../images/action.png";
import iconhous from "../image/Iconhous.png";
import addpro from "../image/addpro.png";
import bill from "../image/bill.png";
import user from "../image/user.png";
import address from "../image/address.png";
import calendar from "../image/calendar.png";
import logout from "../image/logout.png";
// import journey from "../images/journey.png";
// import logout from "../images/logout.png";
function Header({ filter, setFilter, handleOnSubmit}) {
  const [login, setLogin] = useState(false);
  const [register, setRegister] = useState(false);
  //validasi Login
  const [validlogin, setValidlogin] = useState(false);
  const [state, dispatch] = useContext(UserContext);
  const [claims, setClaims] = useState({});
  const [handleDropdown, setHandleDropdown] = useState(false);
  const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  let navigate = useNavigate();

  let user = localStorage.getItem("token");
  console.log("sate", state);
  //Active Pages
  let activeStyle = {
    textDecoration: "none",
    fontWeight: "10px",
    color: "white",
  };

  let nonActive = {
    textDecoration: "none",
    color: "grey",
  };

  const logout = () => {
    dispatch({
      type: "LOGOUT",
    });
    navigate("/");
  };

  //   handle login form
  const openLogin = () => {
    setLogin(true);
  };
  const closeLogin = () => {
    setLogin(false);
  };

  //   handle register form
  const openRegister = () => {
    setRegister(true);
  };
  const closeRegister = () => {
    setRegister(false);
  };

  useEffect(() => {
    if (user) {
      setValidlogin(true);
      setClaims(jose.decodeJwt(user));
    } else {
      setValidlogin(false);
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilter((prevFilter) => ({
      ...prevFilter,
      [name]: value,
    }));
  };
  return (
    <nav className="bg-white">
       <img onClick={() => navigate("/")} width={150} src={iconhous} alt="" />
      


      {/* <img
        style={{ width: "100%" }}
        // src={require("../images/navba1.png")}
        alt="gambar"
      ></img> */}

      {/* <div className="left-side" style={{ position: "",marginTop:"13px" }}>
        <ul>
          <li>
            <Link to={"/"} className="text-white">
              <img src={require("../image/Iconhous.png")} alt="gambar"></img>
            </Link>
          </li>
        </ul>
      </div> */}

      <div className="flex" style={{marginTop:"20px"}}>
        <Form onSubmit={handleOnSubmit}>
        <Button variant="secondary" style={{position:"absolute",marginLeft:"700px",width:"100px"}} type="submit">
          <img src={action}></img>
        </Button>
        <Form.Control
           style={{ width: "500px",marginLeft:"200px" }}
           className=""
           type="text"
           name="city"
           value={filter?.city}
           onChange={handleChange}
           placeholder="Add your item here..."
           //  value={search}
           //  onChange={handleSearch}
           />
           </Form>

           
      </div>
      <div className="right-side">
        {validlogin ? (
          <Dropdown className="white">
            <Dropdown.Toggle className="btnsa">
              <img
                style={{border:"none"}}
                type="button"
                onClick={() => setHandleDropdown(!handleDropdown)}
                src={Dropdownn}
                alt="gambaru"
              />
            </Dropdown.Toggle>

            <Dropdown.Menu className="Mdrop  mt-0 ms-1">
              {state.user.role === "admin" ? (
                <>
                  <Dropdown.Item className="bg-white" style={{}}>
                    <img src={addpro} />
                    <Link to="/Addhouse">Add Property </Link>
                  </Dropdown.Item>
                  <Dropdown.Item className="bg-white">
                    <img src={bill} />
                    <Link to="/History">History </Link>
                  </Dropdown.Item>
                  <Dropdown.Item className="bg-white">
                    <img src={action} />
                    <Link to="/Profile">Profile </Link>
                  </Dropdown.Item>
                  
                </>
              ) : (
                <>
                  <Dropdown.Item>
                    <img src={user} />
                    <Link to="/Profile">Profile</Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <img src={bill} />
                    <Link to="/Historyuser">Historyuser</Link>
                  </Dropdown.Item>
                </>
              )}
              <NavDropdown.Divider />
              <NavDropdown.Item
                className="bg-white text-dark"
                style={{ padding: "10px" }}
                onClick={logout}
              >
                <img src={logout} />
                Logout
              </NavDropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        ) : (
          <>
            <div
              className="r"
              style={{ position: "absolute", marginRight: "120px" }}
            >
              <Register
                register={register}
                closeRegister={closeRegister}
                openLogin={openLogin}
              />
            </div>
            <div className="b" style={{ position: "absolute" }}>
              <Login
                login={login}
                closeLogin={closeLogin}
                openRegister={openRegister}
                setValidlogin={setValidlogin}
              />
            </div>
          </>
        )}
      </div>
    </nav>
  );
}
export default Header;
