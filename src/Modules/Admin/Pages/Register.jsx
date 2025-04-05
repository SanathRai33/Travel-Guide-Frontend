import React, { useState } from "react";
import { MDBBtn, MDBContainer, MDBCard, MDBCardBody, MDBCardImage, MDBRow, MDBCol, MDBInput, MDBIcon } from "mdb-react-ui-kit";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import RegisterImg from '../Images/Register.avif'

export default function Register() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    c_password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  
  const handleSubmit = async(e) => {
    if (!formData.phone) {
      alert("All fields are required. Please fill out the entire form.");
      return;
    }else if (formData.phone.length !== 10) {
      alert("Enter valid Number.");
      return;
    }else if(formData.password!==formData.c_password){
      alert("Your password and confirm password must be the same. Please check and enter again.")
      return
    }else if(formData.password.length < 8){
      alert("Password must be at least 8 characters long")
      return
    }else if(formData.name.length <= 3){
        alert("Use fullname!")
        return
    }else{
      
    e.preventDefault();

    await axios.post('http://127.0.01:7002/auth/insert', formData)

    .then((res)=>{
     if(res.saveuser){
      alert("Inserted Successfully");
     }
    })
    .catch((error)=>{
    })
    console.log('Form Data:', formData);
    }
    alert("Signed in successfully", "Success");
    navigate('/admin/home')
  };

  const handleClear = (e) =>{
    setFormData({
      name: '',
      email: '',
      phone: '',
      password: '',
      c_password: '',
    });
  }

  return (
      <div style={{ height: '100%', padding: '40px 80px 30px 10px' }}>
      <MDBContainer fluid>

        <MDBCard className='text-black m-5 h-100 w-100 shadow-lg' style={{ borderRadius: '25px' }}>
          <MDBCardBody>
            <MDBRow className="d-flex align-items-center justify-content-center h-100">
              <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

                <h1 style={{ fontSize: '2.3rem', fontWeight: '900' }} className="mx-1 mx-md-4 mt-4 mb-4 text-center w-100">Admin Registration</h1>

                <div className="d-flex flex-row align-items-center mb-4" style={{width: '60%'}}>
                  <MDBIcon fas icon="user me-3" size='lg' />
                  <MDBInput onChange={handleChange} name="name" value={formData.name} label='Your Name' id='form1' type='text' className='w-100' />
                </div>

                <div className="d-flex flex-row align-items-center mb-4" style={{width: '60%'}}>
                  <MDBIcon fas icon="envelope me-3" size='lg' />
                  <MDBInput onChange={handleChange} name="email" value={formData.email} label='Email' id='form2' type='email' className='w-100' />
                </div>

                <div className="d-flex flex-row align-items-center mb-4" style={{width: '60%'}}>
                  <MDBIcon fas icon="phone me-3" size='lg' />
                  <MDBInput onChange={handleChange} name="phone" value={formData.phone} label='Phone Number' id='form3' type='password' className='w-100' />
                </div>

                <div className="d-flex flex-row align-items-center mb-4" style={{width: '60%'}}>
                  <MDBIcon fas icon="lock me-3" size='lg' />
                  <MDBInput onChange={handleChange} name="password" value={formData.password} label='Password' id='form4' type='password' className='w-100' />
                </div>

                <div className="d-flex flex-row align-items-center mb-4" style={{width: '60%'}}>
                  <MDBIcon fas icon="key me-3" size='lg' />
                  <MDBInput onChange={handleChange} name="c_password" value={formData.c_password} label='Confirm password' id='form5' type='password' className='w-100' />
                </div>

                <MDBCol md="8">
                  <div className="d-flex justify-content-center">
                    <p>Do you have an account?</p>
                    <a className="ms-2" href="/admin/login">Login</a>
                  </div>
                </MDBCol>

                <div className="d-flex justify-content-center pt-3 pb-3">
                  <MDBBtn className="ms-2 me-4" color="danger" size='lg' onClick={handleClear}>Reset All</MDBBtn>
                  <MDBBtn className="ms-2" type="submit" color="info" size="lg" onClick={handleSubmit}> Sign In</MDBBtn>
                </div>
              </MDBCol>

              <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
                <MDBCardImage className="w-100 h-100"
                  src={RegisterImg}
                  alt="Sample" style={{ borderRadius: '15px', objectFit: "cover", objectPosition: "center" }} fluid />
              </MDBCol>

            </MDBRow>
          </MDBCardBody>
        </MDBCard>

      </MDBContainer>

    </div>
  );
}
