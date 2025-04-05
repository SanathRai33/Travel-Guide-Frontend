import React, { useState } from "react";
import { MDBBtn, MDBContainer, MDBCard, MDBCardBody, MDBIcon, MDBCardImage, MDBRow, MDBCol, MDBInput } from "mdb-react-ui-kit";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import LoginImg from '../Images/Login.avif'

export default function Register() {

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = async(e) => {

    e.preventDefault();
    
    await axios.post("http://127.0.0.1:7002/api/login", formData)
    .then((res) => {
      console.log(res)
      if (res.data.success) {
        localStorage.setItem('Usertoken', res.data.authtoken);
        alert("Logged in successfully", "Success");
        navigate('/');
      }else{
        
      }
    })
    .catch((error) => {});
  console.log("Form Data:", formData);
};

  const handleClear = (e) =>{
    setFormData({
      name: '',
      email: '',
      password: '',
    });
  }

  return (
      <div className="bg-dark" style={{ height: '100%', paddingBottom: '5px' }}>
        <MDBContainer fluid>
          <MDBRow className="d-flex justify-content-center align-items-center h-100">
            <MDBCol>
              <MDBCard className="my-4 bg-secondary">
                <MDBRow className="g-0 d-flex justify-content-center">
    
                  <MDBCol md="5" style={{height: '676px'}} className="bg-light rounded-start">
                    <MDBCardBody className="text-black d-flex flex-column justify-content-center align-items-center h-100">
                      <h1 style={{fontSize: '3rem', fontWeight: '900'}} className="mb-4 text-center">Login</h1>

                        <div className="d-flex flex-row align-items-center justify-content-center">
                          <p className="lead fw-normal mb-0 me-3">Log in with</p>

                          <MDBBtn floating size="md" tag="a" className="me-2">
                            <MDBIcon fab icon="facebook-f" />
                          </MDBBtn>

                          <MDBBtn floating size="md" tag="a" className="me-2">
                            <MDBIcon fab icon="twitter" />
                          </MDBBtn>

                          <MDBBtn floating size="md" tag="a" className="me-2">
                            <MDBIcon fab icon="linkedin-in" />
                          </MDBBtn>
                        </div>

                        <div className="divider d-flex align-items-center my-4">
                          <p className="text-center fw-bold mx-3 mb-0">Or</p>
                        </div>
    
                      <MDBCol md="8">
                        <MDBInput onChange={handleChange} name="name" value={formData.name} wrapperClass="mb-3" label="Full Name" size="lg" id="form1" type="text" />
                      </MDBCol>
    
                      <MDBCol md="8">
                        <MDBInput onChange={handleChange} name="email" value={formData.email} wrapperClass="mb-3" label="Email ID" size="lg" id="form3" type="email" />
                      </MDBCol>
    
                      <MDBCol md="8">
                        <MDBInput onChange={handleChange} name="password" value={formData.password} wrapperClass="mb-3" label="Password" size="lg" id="form5" type="password" />
                      </MDBCol>

                      <MDBCol md="8">
                        <div className="d-flex gap-5  justify-content-center align-items-center">
                          <p><input type="checkbox" /> Remember me</p>
                          <p className="text-info ms-5">Forgot Password?</p>
                        </div>
                      </MDBCol>
    
                      <div className="d-flex justify-content-center pt-3 pb-3">
                        <MDBBtn className="ms-2 me-4" color="danger" size='lg' onClick={handleClear}>Reset</MDBBtn>
                        <MDBBtn className="ms-2" type="submit" color="info" size="lg" onClick={handleSubmit}>Log In</MDBBtn>
                      </div>
    
                      <MDBCol md="8">
                        <div className="d-flex justify-content-center">
                          <p>Don't have an account?</p>
                          <a className="ms-2" href="/register">Register</a>
                        </div>
                      </MDBCol>
                    </MDBCardBody>
                  </MDBCol>

                  <MDBCol md="5" className="d-none d-md-block bg-info w-80 rounded-end overflow-hidden position-relative">
                    <MDBCardImage className="w-100 h-100"
                      src={LoginImg} 
                      alt="Sample" fluid style={{ objectFit: "cover", objectPosition: "center" }} />
    
                    <h1 className="position-absolute top-50 start-50 translate-middle text-white text-center w-100" 
                      style={{ fontSize: '2.9em', fontWeight: 900, fontFamily: 'sans-serif', textShadow: '3px 3px 3px black' }}>
                      Regal Roamers
                    </h1>
                  </MDBCol>
    
                </MDBRow>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }    