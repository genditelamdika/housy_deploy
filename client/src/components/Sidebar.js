import { Button, Col, Form } from "react-bootstrap"
import Offcanvas from "react-bootstrap/Offcanvas";
import bill from "../image/action.png";
import iconhous from "../image/Iconhous.png";
import { useNavigate } from "react-router-dom";

import { useState } from "react";
import { API } from "../config/api";
import { useQuery } from "react-query";
import ToggleButton from "react-bootstrap/ToggleButton";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import InputGroup from "react-bootstrap/InputGroup";
// import { GoCalendar } from "react-icons/go";
import Row from "react-bootstrap/Row";


function Sidebar(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [categories, setCategories] = useState([]); //Store all category data
    let navigate = useNavigate();

    const handleChange = (e) => {
        if (e.target.type === "checkbox") {
          if (e.target.checked) {
            props.setFilter({
              ...props.filter,
              amenities: [...props.filter.amenities, e.target.name],
            });
          } else {
            props.setFilter({
              ...props.filter,
              amenities: props.filter.amenities.filter((amenity) => amenity !== e.target.name),
            });
          }
        } else if (e.target.type === "radio") {
          props.setFilter({ ...props.filter, [e.target.name]: e.target.value });
        } else {
          props.setFilter({ ...props.filter, [e.target.name]: e.target.value });
        }
      };
    return(
        <>
        <div className="">
                <Button variant="secondary"  className="bg mx-3 border-0" style={{position:"absolute"}} onClick={handleShow}>
                    <img width={25} src={bill} alt="" />
                </Button>
                {/* <img onClick={() => navigate("/")} width={150} src={iconhous} alt="" /> */}
            </div>
            <Offcanvas className="bg" style={{ width: "450px" }} show={show} onHide={handleClose}>
            <Col >
      <Form onSubmit={props.handleOnSubmit} className=" d-flex flex-column gap-3 me-4 px-3" action="">
        <Form.Group className="d-flex flex-column gap-3">
          <Form.Label className="fw-bold m-0 fs24">Type Of Rent</Form.Label>
          <ToggleButtonGroup type="radio" name="year" className="d-flex gap-3">
            <ToggleButton variant="outline-primary" name="year" className="fw-semibold text-dark bd rounded-2 bg w-100" id="Day" value="Day" onChange={handleChange}>
              Day
            </ToggleButton>
            <ToggleButton variant="outline-primary" name="year" className="fw-semibold text-dark bd rounded-2 bg w-100" id="Month" value="Month" onChange={handleChange}>
              Month
            </ToggleButton>
            <ToggleButton variant="outline-primary" name="year" className="fw-semibold text-dark bd rounded-2 bg w-100" id="Year" value="Year" onChange={handleChange}>
              Year
            </ToggleButton>
          </ToggleButtonGroup>
        </Form.Group>

        <Form.Group className="d-flex flex-column gap-3">
          <Form.Label className="fw-bold m-0 fs24">Date</Form.Label>
          <InputGroup className="">
            <InputGroup.Text id="basic-addon1">
              {/* <GoCalendar /> */}
            </InputGroup.Text>
            <Form.Control className="bg" placeholder="Date" type="date" aria-label="Username" aria-describedby="basic-addon1" />
          </InputGroup>
        </Form.Group>

        <div className="d-flex flex-column gap-2">
          <Form.Label className="fw-bold m-0 fs24">Property Room</Form.Label>
          <div>
            <Form.Label className="text-secondary m-0 fs14 pb-2">bedroom</Form.Label>
            <ToggleButtonGroup type="radio" name="bedroom" className="d-flex gap-3">
              <ToggleButton variant="outline-primary" name="bedroom" className="fw-semibold text-dark bd rounded-2 bg w-100" id="bedroom-1" value="1" onChange={handleChange}>
                1
              </ToggleButton>
              <ToggleButton variant="outline-primary" name="bedroom" className="fw-semibold text-dark bd rounded-2 bg w-100" id="bedroom-2" value="2" onChange={handleChange}>
                2
              </ToggleButton>
              <ToggleButton variant="outline-primary" name="bedroom" className="fw-semibold text-dark bd rounded-2 bg w-100" id="bedroom-3" value="3" onChange={handleChange}>
                3
              </ToggleButton>
              <ToggleButton variant="outline-primary" name="bedroom" className="fw-semibold text-dark bd rounded-2 bg w-100" id="bedroom-4" value="4" onChange={handleChange}>
                4
              </ToggleButton>
              <ToggleButton variant="outline-primary" name="bedroom" className="fw-semibold text-dark bd rounded-2 bg w-100" id="bedroom-5" value="5" onChange={handleChange}>
                5+
              </ToggleButton>
            </ToggleButtonGroup>
          </div>
          <div>
            <Form.Label className="text-secondary m-0 fs14 pb-2">bathroom</Form.Label>
            <ToggleButtonGroup type="radio" name="bathroom" className="d-flex gap-3">
              <ToggleButton variant="outline-primary" name="bathroom" className="fw-semibold text-dark bd rounded-2 bg w-100" id="bathroom-1" value={1} onChange={handleChange}>
                1
              </ToggleButton>
              <ToggleButton variant="outline-primary" name="bathroom" className="fw-semibold text-dark bd rounded-2 bg w-100" id="bathroom-2" value={2} onChange={handleChange}>
                2
              </ToggleButton>
              <ToggleButton variant="outline-primary" name="bathroom" className="fw-semibold text-dark bd rounded-2 bg w-100" id="bathroom-3" value={3} onChange={handleChange}>
                3
              </ToggleButton>
              <ToggleButton variant="outline-primary" name="bathroom" className="fw-semibold text-dark bd rounded-2 bg w-100" id="bathroom-4" value={4} onChange={handleChange}>
                4
              </ToggleButton>
              <ToggleButton variant="outline-primary" name="bathroom" className="fw-semibold text-dark bd rounded-2 bg w-100" id="bathroom-5" value={5} onChange={handleChange}>
                5+
              </ToggleButton>
            </ToggleButtonGroup>
          </div>
        </div>
        <div className="d-flex flex-column gap-2">
          <Form.Label className="fw-bold m-0 fs24"> Amenities</Form.Label>
          <div className="d-flex justify-content-between">
            <label className="text-secondary" htmlFor="">
              Furnished
            </label>
            <Form.Check aria-label="option 1" name="Furnished" onChange={handleChange} />
            {/* <input type="checkbox"  /> */}
          </div>
          <div className="d-flex justify-content-between">
            <label className="text-secondary" htmlFor="">
              Pet Allowed
            </label>
            <Form.Check aria-label="option 1" name="Pet Allowed" onChange={handleChange} />
            {/* <input type="checkbox" /> */}
          </div>
          <div className="d-flex justify-content-between">
            <label className="text-secondary" htmlFor="">
              Shared Accomodation
            </label>
            <Form.Check aria-label="option 1" name="Shared Accomodation" onChange={handleChange} />
            {/* <input type="checkbox"  /> */}
          </div>
        </div>
        <div className="d-flex flex-column gap-3">
          <Form.Label className="fw-bold m-0 fs24"> Budget</Form.Label>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
            <Form.Label column sm="5">
              Less than IDR.
            </Form.Label>
            <Col>
              <Form.Control name="price"  onChange={handleChange} type="text" placeholder="" className="bg" />
            </Col>
          </Form.Group>
        </div>
        <div className="d-flex justify-content-md-end">
          <Button type="submit" variant="secondary" className="">
            APPLY
          </Button>
        </div>
      </Form>
    </Col>
            </Offcanvas>

    </>

)
}
export default Sidebar