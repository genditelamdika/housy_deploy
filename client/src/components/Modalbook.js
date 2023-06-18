import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
const Modalbook = ({ show, onHide }) => {
  const { id } = useParams();
  const navigate = useNavigate();
    
    const [isOpen, setIsOpen] = useState(false);
    const [checkin, setTanggal1] = useState('');
  const [checkout, setTanggal2] = useState('');
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  const handleTanggal1Change = (event) => {
    setTanggal1(event.target.value);
  };

  const handleTanggal2Change = (event) => {
    setTanggal2(event.target.value);
  };

  const handleSimpan = (event) => {
    event.preventDefault();
    localStorage.setItem('checkin', checkin);
    localStorage.setItem('checkout', checkout);

    navigate(`/Pay/${id}`);
    // closeModal();
    alert('Succes.');
  };
  return (
    <Modal show={show} onHide={onHide} centered>
        <img
          style={{ position: "absolute", marginTop: "50px" }}
          //   src={palm1}
        ></img>
        <Modal.Title style={{ color: "black", marginLeft: "100px" }}>
        How long you will stay
        </Modal.Title>
      {/* </Modal.Header> */}
      <Modal.Body className="mx-3">
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label style={{color:"black"}}>Checkin</Form.Label>
            <Form.Control
              type="date"
              name="email"
              placeholder="Enter email"
              value={checkin} 
              onChange={handleTanggal1Change} //jadi nilai setusername disini akan menetapkan nilainya ke username
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label style={{color:"black"}} >Checkout</Form.Label>
            <Form.Control
              type="date"
              name="checkout"
              placeholder="Password"
              value={checkout} 
              onChange={handleTanggal2Change}
              // value={checkout}
              // onChange={handleChange}
            />
          </Form.Group>
          <Button
           onClick={handleSimpan}
            style={{backgroundColor:"#5A57AB", height: "45px", marginTop: "30px" }}
            type="submit"
            className="loginn mx-1 text-light"
            // variant="warning"
          >
            Save
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};
export default Modalbook;
