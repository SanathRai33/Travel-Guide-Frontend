import React, { useState } from "react";
import {
  MDBBtn, MDBContainer, MDBCard, MDBCardBody, MDBCardImage, MDBRow, MDBCol, MDBInput, MDBRadio,
  MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
} from "mdb-react-ui-kit";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import RegImg from '../Images/Login.avif'

export default function Register() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    email: '',
    phone: '',
    password: '',
    c_password: '',
    city: '',
    country: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleSubmit = async (e) => {
    if (
      !formData.gender || !formData.phone ||
      !formData.city || !formData.country
    ) {
      alert("All fields are required. Please fill out the entire form.");
      return;
    } else if (formData.password !== formData.c_password) {
      alert("Your password and confirm password must be the same. Please check and enter again.")
      return
    } else if (formData.password.length < 8) {
      alert("Password must be at least 8 characters long")
      return
    } else if (formData.name.length <= 3) {
      alert("Use fullname!")
      return
    } else {

      e.preventDefault();

      await axios.post('http://127.0.01:7002/api/insert', formData)

        .then((res) => {
          if (res.saveuser) {
            console.log("Inserted Successfully");
          }
        })
        .catch((error) => {
        })
      console.log('Form Data:', formData);
    }
    alert("Signed in successfully", "Success");
    navigate('/')
  };

  const handleClear = (e) => {
    setFormData({
      name: '',
      gender: '',
      email: '',
      phone: '',
      password: '',
      c_password: '',
      city: '',
      country: '',
    });
  }

  const Place = [
    { city: "New York", country: "USA" },
    { city: "Paris", country: "France" },
    { city: "Tokyo", country: "Japan" },
    { city: "London", country: "UK" },
    { city: "Dubai", country: "UAE" },
    { city: "Sydney", country: "Australia" },
    { city: "Rome", country: "Italy" },
    { city: "Bangkok", country: "Thailand" },
    { city: "Istanbul", country: "Turkey" },
    { city: "Rio de Janeiro", country: "Brazil" }
  ];


  return (
    <div className="bg-dark" style={{ height: '100%', paddingBottom: '5px' }}>
      <MDBContainer fluid>
        <MDBRow className="d-flex justify-content-center align-items-center h-100">
          <MDBCol>
            <MDBCard className="my-4 bg-secondary">
              <MDBRow className="g-0 d-flex justify-content-center">

                <MDBCol md="5" className="d-none d-md-block bg-info w-80 rounded-start overflow-hidden position-relative">
                  <MDBCardImage className="w-100 h-100"
                    src={RegImg}
                    alt="Sample" fluid style={{ objectFit: "cover", objectPosition: "center" }} />

                  <h1 className="position-absolute top-50 start-50 translate-middle text-white text-center w-100"
                    style={{ fontSize: '2.9em', fontWeight: 900, fontFamily: 'sans-serif', textShadow: '3px 3px 3px black' }} >
                    Regal Roamers
                  </h1>
                </MDBCol>


                <MDBCol md="5" style={{ height: '676px' }} className="bg-light rounded-end">
                  <MDBCardBody className="text-black d-flex flex-column justify-content-center align-items-center">
                    <h2 className="mb-5 fs-1 fw-bold text-center">Sign In</h2>



                    <MDBCol md="8">
                      <MDBInput onChange={handleChange} name="name" value={formData.name} wrapperClass="mb-3" label="Full Name" size="lg" id="form1" type="text" />
                    </MDBCol>

                    <div className="d-md-flex justify-content-start align-items-center mb-3">
                      <h6 className="fw-bold mb-0 me-4">Gender: </h6>
                      <MDBRadio name="gender" id="inlineRadio1" value="Female" label="Female" inline onChange={handleChange} checked={formData.gender === "Female"} />
                      <MDBRadio name="gender" id="inlineRadio2" value="Male" label="Male" inline onChange={handleChange} checked={formData.gender === "Male"} />
                      <MDBRadio name="gender" id="inlineRadio3" value="Other" label="Other" inline onChange={handleChange} checked={formData.gender === "Other"} />
                    </div>

                    <MDBCol md="8">
                      <MDBInput onChange={handleChange} name="email" value={formData.email} wrapperClass="mb-3" label="Email ID" size="lg" id="form3" type="email" />
                    </MDBCol>

                    <MDBCol md="8">
                      <MDBInput onChange={handleChange} name="phone" value={formData.phone} wrapperClass="mb-3" label="Phone Number" size="lg" id="form4" type="text" />
                    </MDBCol>

                    <MDBCol md="8">
                      <MDBInput onChange={handleChange} name="password" value={formData.password} wrapperClass="mb-3" label="Password" size="lg" id="form5" type="password" />
                    </MDBCol>

                    <MDBCol md="8">
                      <MDBInput onChange={handleChange} name="c_password" value={formData.c_password} wrapperClass="mb-3" label="Confirm Password" size="lg" id="form6" type="password" />
                    </MDBCol>


                    <MDBRow style={{ width: '390px' }} className="justify-content-start gx-6 gap-4">
                      <MDBCol md="5">
                        <MDBDropdown style={{ width: '180px' }}>
                          <MDBDropdownToggle className="d-flex justify-content-center align-items-center mb-3 w-100 bg-light rounded-2 shadow-0 text-muted border border-secondary" size="lg">
                            {formData.city || "Select a City"}
                          </MDBDropdownToggle>
                          <MDBDropdownMenu style={{ width: "100%" }}>
                            {Place.map((cities, index) => (
                              <MDBDropdownItem key={index} link onClick={(e) => {
                                e.preventDefault();
                                setFormData({ ...formData, city: cities.city });
                              }}>
                                {cities.city}
                              </MDBDropdownItem>
                            ))}
                          </MDBDropdownMenu>
                        </MDBDropdown>
                      </MDBCol>

                      <MDBCol md="5">
                        <MDBDropdown style={{ width: '180px' }}>
                          <MDBDropdownToggle className="d-flex justify-content-center align-items-center mb-3 w-100 bg-light rounded-2 shadow-0 text-muted border border-secondary" size="lg">
                            {formData.country || "Select a Country"}
                          </MDBDropdownToggle>
                          <MDBDropdownMenu style={{ width: "100%" }}>
                            {Place.map((countries, index) => (
                              <MDBDropdownItem key={index} link onClick={(e) => {
                                e.preventDefault();
                                setFormData({ ...formData, country: countries.country });
                              }}>
                                {countries.country}
                              </MDBDropdownItem>
                            ))}
                          </MDBDropdownMenu>
                        </MDBDropdown>
                      </MDBCol>
                    </MDBRow>



                    <div className="d-flex justify-content-center pt-3 pb-3">
                      <MDBBtn className="ms-2 me-4" color="danger" size="lg" onClick={handleClear}>Reset all</MDBBtn>
                      <MDBBtn className="ms-2" type="submit" color="info" size="lg" onClick={handleSubmit}>Register</MDBBtn>
                    </div>

                    <MDBCol md="8">
                      <div className="d-flex justify-content-center ">
                        <p>Do you have an account?</p>
                        <a className="ms-2" href="/login">Login</a>
                      </div>
                    </MDBCol>

                  </MDBCardBody>
                </MDBCol>
              </MDBRow>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}
