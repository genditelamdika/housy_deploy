import { Col, Form, Row } from "react-bootstrap";
import { InputGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import React, { useEffect, useState } from "react";
import { API } from "../config/api";
import { useMutation, useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import Navbars from "../components/Header"
// import Swal from 'sweetalert2'
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import transaction from "../data/transaction.json";

function Addhouse() {
  const [amenities, setAmenities] = useState([]); //Store all category data
  let navigate = useNavigate();

  // data yang akan dikirimkan ke backend
  const [form, setForm] = useState({
    nameproperty: "",
    city: "",
    amenities: [],
    addres: "",
    description: "",
    year: "",
    area: "",
    price: "",
    // tor: "",
    bedroom: "",
    bathroom: "",
    image: "",
  }); //Store product data

 

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      let newAmenities = [...form.amenities];
      if (checked) {
        newAmenities.push(value);
      } else {
        newAmenities = newAmenities.filter((amen) => amen !== value);
      }
      setForm({ ...form, amenities: newAmenities });
    } else {
      setForm({ ...form, [name]: type === "file" ? e.target.files : e.target.value });
    }

    // Create image url for preview
    if (e.target.type === "file") {
      let url = URL.createObjectURL(e.target.files[0]);
      // setPreview(url);
    }
  };

   const MySwal = withReactContent(Swal);

  const handleSubmit = useMutation(async (e) => {
    try {
      e.preventDefault();

      // Configuration
      const config = {
        headers: {
          "Content-type": "multipart/form-data",
        },
      };
      // Store data with FormData as object
      const formData = new FormData();
      formData.set("nameproperty", form.nameproperty);
      formData.append("amenities", JSON.stringify(form.amenities));
      formData.set("city", form.city);
      formData.set("addres", form.addres);
      formData.set("description", form.description);
      formData.set("year", form.year);
      formData.set("area", Number(form.area));
      formData.set("price", Number(form.price));
      // formData.set("tor", Number(form.tor));   
      formData.set("bedroom", Number(form.bedroom));
      formData.set("bathroom", Number(form.bathroom));
      formData.set("image", form.image[0], form.image[0].name);

      // Insert product data
      const response = await API.post("/house", formData, config);
      console.log("add product success : ", response);
      MySwal.fire({
    title: <strong>Ah Yang Benerr</strong>,
    html: <i>You clicked the button!</i>,
    icon: 'success'
    })
      navigate("/");
    } catch (error) {
      console.log("add product failed : ", error);
      console.log(form);
    }
  });


  // const MySwal = withReactContent(Swal);
  // let navigate = useNavigate();
  // const handleButtonClick = () => {
  // MySwal.fire({
  //   title: <strong>Ah Yang Benerr</strong>,
  //   html: <i>You clicked the button!</i>,
  //   icon: 'success'
  //   })
  //       navigate("/Trip");
  // };
  return (
    <>
    <>
    <Navbars/>
    </>
      <div className="bg-white text-dark py-5" style={{ padding: "0px 170px" }}>
        <div className="flex">

        <h5 className="fw-bold mb-5 ">Add Trip</h5>

        </div>
        <Form className="secondary" onSubmit={(e) => handleSubmit.mutate(e)}>
          <p>Title</p>
          <Row className="mb-4">
            <Col md={12} lg={8} xl={9}>
              <Form.Control
                type="text"
                placeholder="nameproperty"
                style={{
                  width: "1010px",
                  background: "",
                  height: "40px",
                  color: "black",
                }}
                onChange={handleChange}
                name="nameproperty"
              />
            </Col>
          </Row>

         

          <p>City</p>

            <Row className="mb-4">
            <Col md={12} lg={8} xl={9}>

              <Form.Control
                type="text"
                placeholder="city"
                style={{
                  width: "1010px",
                  background: "",
                  height: "40px",
                  color: "black",
                }}
                onChange={handleChange}
                name="city"
                
                // name="title"
                // onChange={handleChangeFilm}
                // value={dataFilm?.title}
                />
            </Col>
          </Row>

          <p>Address</p>
          <Row className="mb-4">
            <Col md={12} lg={8} xl={9}>
              <Form.Control
                type="text"
                placeholder="Transportatio"
                style={{
                  width: "1010px",
                  background: "",
                  height: "40px",
                  color: "black",
                }}
                onChange={handleChange}
                name="addres"

                // name="title"
                // onChange={handleChangeFilm}
                // value={dataFilm?.title}
              />
            </Col>
          </Row>


          <Form.Group className="mb-3" controlId="typeOfRent">
            <Form.Label className="fw-bold">Type of Rent</Form.Label>
            <Form.Select onChange={handleChange} className="" name="year" aria-label="Default select example">
              <option></option>
              <option value="Day">Day</option>
              <option value="Year">Year</option>
              <option value="Month">Month</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3 " controlId="area">
            <Form.Label className="fw-bold">Area</Form.Label>
            <Form.Select onChange={handleChange} className="" name="area" aria-label="Default select example">
              <option></option>
              <option value="1500">1500 ft</option>
              <option value="1800">1800 ft</option>
              <option value="2000">2000 ft</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-4" controlId="formGridAddress1">
            <Form.Label>Price</Form.Label>
            <Form.Control
              style={{
                background: "",
                height: "50px",
                color: "black",
              }}
              type="number"
              placeholder="price"
              onChange={handleChange}
              name="price"

              // name="price"
            />
          </Form.Group>
          

          <Form.Label className="fw-bold">Amenities</Form.Label>
          <Form.Group className="mb-3 d-flex gap-5" controlId="amenities">
            <Form.Check onChange={handleChange} checked={form.amenities.includes("Furnished")} value="Furnished" type="checkbox" label="Furnished" />
            <Form.Check onChange={handleChange} checked={form.amenities.includes("Pet Allowed")} value="Pet Allowed" type="checkbox" label="Pet Allowed" />
            <Form.Check onChange={handleChange} checked={form.amenities.includes("Shared Accomodation")} value="Shared Accomodation" type="checkbox" label="Shared Accomodation" />
            {/* <Form.Check type="checkbox" label="Furnished" /> */}
          </Form.Group>
          <Form.Group className="mb-3 " controlId="area">
            <Form.Label className="fw-bold">Bedroom</Form.Label>
            <Form.Select onChange={handleChange} className="" name="bedroom" aria-label="Default select example">
              <option></option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3 " controlId="area">
            <Form.Label className="fw-bold">Bathroom</Form.Label>
            <Form.Select onChange={handleChange} className="" name="bathroom" aria-label="Default select example">
              <option></option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </Form.Select>
          </Form.Group>

          <Form.Label>Descripton</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Description"
            style={{
              background: "",
              marginBottom: "10px",
              resize: "none",
              height: "177px",
              color: "black",
              width: "100%",
            }}
            onChange={handleChange}
            name="description"

            // name="description"
          />
          <Form.Label>Image</Form.Label>
          <Col md={12} lg={4} xl={3}>
            <label
              htmlFor="thumbnailFilm"
              style={{
                background: "rgba(196, 196, 196, 0.5)",
                // width: "350px",
                // height: "50px",
                padding: "8px 40px 8px 40px",
                color: "yellow",
                borderRadius: "6px",
                border: "1px solid white",
                fontSize: "14px",
                fontWeight: "bold",
                width: "330px",
              }}
            >
              Attach Here
              <i
                style={{
                  color: "#FFAF00",
                  fontSize: "20px",
                  marginLeft: "8px",
                }}
              />
            </label>
            <input
              type="file"
              onChange={handleChange}
              name="image"
              // name="image"
              // onChange={handleChangeFilm}
              id="thumbnailFilm"
              hidden
            />
          </Col>

          <div className="d-grid gap-2 d-md-flex justify-content-md-center">
            <Button
              //  onClick={handleButtonClick}
              type="submit"
              style={{
                width: "200px",
                height: "40px",
                // background: "yellow",
                background: "#FFAF00",

                border: "1px solid black",
                fontWeight: "bold",
              }}
            >
              Add House
            </Button>
          </div>
        </Form>
      </div>

    </>
  );
}
export default Addhouse;
