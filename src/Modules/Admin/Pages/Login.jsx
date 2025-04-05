import React, { useState } from "react";
import {
  MDBBtn, MDBContainer, MDBCard, MDBCardBody, MDBIcon, MDBCardImage, MDBRow, MDBCol, MDBInput } from "mdb-react-ui-kit";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

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


  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const res = await axios.post("http://127.0.0.1:7002/auth/login", formData);
      
      if (res.data.success) {
        localStorage.setItem('Admintoken', res.data.authtoken);
        alert("Logged in successfully");
        navigate('/admin/home');
      } else {
        alert(res.data.error || 'Invalid Credentials');
      }
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.error || 'Login failed. Please try again.');
    }
  };


  const handleClear = (e) => {
    setFormData({
      name: '',
      email: '',
      password: '',
    });
  }
 

  return (
    <div style={{ height: '100%', padding: '60px 80px 70px 10px' }}>
      <MDBContainer fluid>

        <MDBCard className='text-black m-5 h-100 w-100 shadow-lg' style={{ borderRadius: '25px' }}>
          <MDBCardBody>
            <MDBRow className="d-flex align-items-center justify-content-center h-100">
              <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

                <h1 style={{ fontSize: '2.3rem', fontWeight: '900' }} className="mx-1 mx-md-4 mt-4 mb-4 text-center w-100">Admin LogIn</h1>

                <div className="d-flex flex-row align-items-center mb-4" style={{width: '60%'}}>
                  <MDBIcon fas icon="user me-3" size='lg' />
                  <MDBInput onChange={handleChange} name="name" value={formData.name} label='Your Name' id='form1' type='text' className='w-100' />
                </div>

                <div className="d-flex flex-row align-items-center mb-4" style={{width: '60%'}}>
                  <MDBIcon fas icon="envelope me-3" size='lg' />
                  <MDBInput onChange={handleChange} name="email" value={formData.email} label='Your Email' id='form2' type='email' className='w-100' />
                </div>

                <div className="d-flex flex-row align-items-center mb-4" style={{width: '60%'}}>
                  <MDBIcon fas icon="lock me-3" size='lg' />
                  <MDBInput onChange={handleChange} name="password" value={formData.password} label='Password' id='form3' type='password' className='w-100' />
                </div>

                {/* <div className="d-flex flex-row align-items-center mb-4" style={{width: '60%'}}>
                  <MDBIcon fas icon="key me-3" size='lg' />
                  <MDBInput label='Repeat your password' id='form4' type='password' className='w-100' />
                </div> */}

                <MDBCol md="8">
                  <div className="d-flex justify-content-center">
                    <p>Don't have an account?</p>
                    <a className="ms-2" href="/admin/register">Register</a>
                  </div>
                </MDBCol>

                <div className="d-flex justify-content-center pt-3 pb-3">
                  <MDBBtn className="ms-2 me-4" color="danger" size='lg' onClick={handleClear}>Reset</MDBBtn>
                  <MDBBtn className="ms-2" type="submit" color="info" size="lg" onClick={handleSubmit}>Log In</MDBBtn>
                </div>
              </MDBCol>

              <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
                <MDBCardImage className="w-100 h-100"
                  src="https://plus.unsplash.com/premium_photo-1661764570116-b1b0a2da783c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Sample" style={{ borderRadius: '15px', objectFit: "cover", objectPosition: "center" }} fluid />
              </MDBCol>

            </MDBRow>
          </MDBCardBody>
        </MDBCard>

      </MDBContainer>

    </div>
  );
}    