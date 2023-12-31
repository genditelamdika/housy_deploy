import { useContext, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useMutation, useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { API } from "../config/api";
import { UserContext } from "../context/userContext";

function Changepasword(props){
    const navigate = useNavigate();
    const [state, dispatch] = useContext(UserContext);
    const id = state.user.id;
  
    // const [user, setUser] = useState();
    const [form, setForm] = useState({
      old_password: "",
      confirm_password: "",
      new_password: "",
    });
  
    let { data: userId, refetch } = useQuery("userCache", async () => {
      const config = {
        method: "GET",
        headers: {
          Authorization: "Basic " + localStorage.token,
        },
      };
      const response = await API.get("/user/" + id, config);
      return response.data.data;
    });
  
    console.log(form);
  
    // Handle change data on form
    const handleChange = (e) => {
      setForm({
        ...form,
        [e.target.name]: e.target.value,
      });
    };
  
    const handleSubmit = useMutation(async (e) => {
      try {
        e.preventDefault();
        // Insert product data
  
        const response = await API.patch("/change-password", form);
        console.log("berhasil ubah password", response.data);
  
        if (form.new_password != form.confirm_password) {
          return alert("password baru dan konfirmasi tidak sesuai");
        }
  
        alert("successfuly change password!");
        dispatch({
          type: "LOGOUT",
        });
        navigate("/");
  
        // navigate("/product-admin");
      } catch (error) {
  
        alert("ah yang bener dong masukinnya")
        console.log(error);
      }
    });
  
    return (
      <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Body className="m-4 mt-0">
          <Form onSubmit={(e) => handleSubmit.mutate(e)}>
            <h3 className="fw-bold text-center my-5 " style={{color:"black"}}>Change Password</h3>
            <Form.Group className="mb-3" controlId="password">
              <Form.Label className="fw-bold " style={{color:"black"}} >Old Password</Form.Label>
              <Form.Control type="password" placeholder="Password" value={form.password} name="old_password" onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="newPassword">
              <Form.Label className="fw-bold" style={{color:"black"}}>New Password</Form.Label>
              <Form.Control type="password" placeholder="New Password" value={form.new_password} name="new_password" onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="confirmPassword">
              <Form.Label className="fw-bold" style={{color:"black"}}>Confirm Password</Form.Label>
              <Form.Control type="password" placeholder="Password" value={form.confirm_password} name="confirm_password" onChange={handleChange} />
            </Form.Group>
            <Button type="submit" className="w-100">
              Save
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }
  export default Changepasword
