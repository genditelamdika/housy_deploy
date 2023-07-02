
import { Col, Container, Image, InputGroup, Row, Stack } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useQuery } from "react-query";
import { API } from "../config/api";
import Card from "react-bootstrap/Card";
import Sidebar from "./Sidebar"
import Contendata from "./Contendata"
import Navbars from "./Header"
// import InputGroup from 'react-bootstrap/InputGroup';
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useState } from "react";


// import ExampleForm from "/hooks/ExampleForm";
function Home() {
  const [house, setHouse] = useState();

  const [filter, setFilter] = useState({
    nameproperty: "",
    price: "",
    year: "",
    bedroom: "",
    bathroom: "",
    city: "",
    amenities: [],
  });
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const filteredHouses = houses.filter((house) => {
      return (
        (filter.price === "" || house.price < parseInt(filter.price)) &&
        (filter.nameproperty === "" || house.nameproperty === filter.nameproperty) &&
        (filter.year === "" || house.year === filter.year) &&
        (filter.city === "" || house.city === filter.city) &&
        (filter.bedroom === "" || house.bedroom === parseInt(filter.bedroom)) &&
        (filter.bathroom === "" || house.bathroom === parseInt(filter.bathroom)) &&
        (filter.amenities.length === 0 || filter.amenities.every((amenity) => house.amenities.includes(amenity)))
        // Metode ini memeriksa apakah semua elemen dalam array filter.amenities memenuhi kondisi yang diberikan dalam fungsi callback.
      );
    });
    setHouse(filteredHouses);
    console.log(house);
  };

  let { data: houses } = useQuery("housesChache", async () => {
    const response = await API.get("/houses");
    console.log("data :", response.data);
    return response.data.data;
  });
  console.log(houses,"kontoldoni")
  

  return (
    <>
    <>
    <div style={{background:"white"}}>
    <Navbars filter={filter} setFilter={setFilter} handleOnSubmit={handleOnSubmit}/>

    <Sidebar  filter={filter} setFilter={setFilter} handleOnSubmit={handleOnSubmit}/>
    <Contendata house={house} />
    </div>
    </>
    
  
        </>
  );
}
export default Home;
