import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../Component/Navbar';
import { Box, Grid, AppBar, Toolbar, Button, Typography, Avatar, } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { CloseTwoTone, Delete } from '@mui/icons-material';
import { MDBBtn, MDBContainer, MDBCard, MDBCardBody, MDBRow, MDBCol, MDBInput, MDBIcon } from "mdb-react-ui-kit";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useNavigate } from 'react-router-dom';

export default function Home() {

  const [Deletedata, setDeletedata] = useState();
  const [admninData, setAdmninData] = useState([])
  const [register, setRegister] = useState(false)
  
  const navigate = useNavigate();


  useEffect(() => {
    const token = localStorage.getItem("Admintoken");
    if (!token) {
      navigate("/admin/login");
    }
  }, [navigate]);

  useEffect(() => {
    axios.get('http://127.0.0.1:7002/auth/get')
      .then((res) => {
        console.log(res, "Data...")
        setAdmninData(res.data);
      })
      .catch(() => {
        console.log("error")

      })
  }, [Deletedata])

  console.log(admninData)

  const handleDelete = (id) => {
    console.log("delete id", id)
    axios.delete(`http://127.0.0.1:7002/auth/delete/${id}`)

      .then((res) => {
        alert(`${res.data.name} deleted`)
        setDeletedata(res.data)
      })
      .catch((err) => {
        console.log(err);
      })
  }

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


  const handleSubmit = async (e) => {
    if (!formData.phone) {
      alert("All fields are required. Please fill out the entire form.");
      return;
    } else if (formData.phone.length !== 10) {
      alert("Enter valid Number.");
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

      await axios.post('http://127.0.01:7002/auth/insert', formData)

        .then((res) => {
          if (res.saveuser) {
            alert("Inserted Successfully");
          }
        })
        .catch((error) => {
          console.log(error)
        })
      console.log('Form Data:', formData);
    }
    alert("New admin added successfully", "Success");
    setRegister(false)
  };

  const handleClear = (e) => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      password: '',
      c_password: '',
    });
  }

  const handleState = () => {
    setTimeout(() => {
      register === true ? setRegister(false) : setRegister(true)
    }, 300);
  }

  const handleLogIn = () => {
    localStorage.removeItem('Admintoken');
    navigate("/admin/login")
  }

  return (
    <Box sx={{ display: "flex" }}>
      <Navbar />

      <Box component="main" sx={{ flexGrow: 1, p: 3, backgroundColor: "#f9f9f9", minHeight: "100vh", position: "relative", zIndex: "10", }}>
        <AppBar position="fixed" sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1, backgroundColor: "#fff", boxShadow: "none", borderBottom: "1px solid #ddd",
        }}>
          <Toolbar>
            <Typography variant="h6" noWrap component="div" color="text.primary">
              Contacts
            </Typography>
            <Box sx={{ flexGrow: 1 }} />

            <Button sx={{ backgroundColor: 'blue', color: 'black' }} onClick={handleLogIn}>LogOut</Button>
          </Toolbar>
        </AppBar>


        <Toolbar />
        <Typography variant="h5" sx={{ mb: 3, fontWeight: "bold" }}>
          Contacts
        </Typography>
        {!register &&
          <Box>
            <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 4, mb: 4 }}>
              <Button variant="contained" color="primary" startIcon={<AddIcon />} onClick={handleState}
                sx={{ borderRadius: 2, fontSize: "1rem", textTransform: "none", px: 4 }}
              >
                New Contact
              </Button>
            </Box>
            <Grid container spacing={3}>
              {admninData.map((contact, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Box
                    sx={{
                      boxShadow: 2, borderRadius: 3, p: 3, backgroundColor: "#fff", display: "flex", alignItems: "center", gap: 2, transition: "0.3s",
                      "&:hover": { boxShadow: 6 },
                    }}
                  >
                    <Avatar sx={{ bgcolor: "#6200ea", width: 56, height: 56 }}>{contact.name.charAt(0)}</Avatar>
                    <Box sx={{ position: "relative" }}>
                      <Button onClick={() => handleDelete(contact._id)} sx={{ color: "red", position: "absolute", bottom: "55px", left: "220px", borderRadius: "20%" }}>
                        <Delete />
                      </Button>
                      <Typography variant="h6" fontWeight="500">
                        {contact.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        +91 {contact.phone}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {contact.email}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        }

        {register &&
          <MDBContainer fluid className='d-flex align-items-center justify-content-center w-100'>
            <MDBCard className='text-black shadow-lg'>
              <MDBCardBody>
                <MDBRow className="d-flex align-items-center justify-content-center h-100" >
                  <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center' style={{ width: '500px' }}>
                    <Button onClick={handleState} sx={{ color: "red", borderRadius: "50%", position: "relative", bottom: "5px", left: "220px" }}>
                      <CloseTwoTone />
                    </Button>
                    <h1 style={{ fontSize: '2.3rem', fontWeight: '900' }} className="mx-1 mx-md-4 mt-4 mb-4 text-center w-100">Admin Registration</h1>

                    <div className="d-flex flex-row align-items-center mb-4" style={{ width: '60%' }}>
                      <MDBIcon fas icon="user me-3" size='lg' />
                      <MDBInput onChange={handleChange} name="name" value={formData.name} label='Your Name' id='form1' type='text' className='w-100' />
                    </div>

                    <div className="d-flex flex-row align-items-center mb-4" style={{ width: '60%' }}>
                      <MDBIcon fas icon="envelope me-3" size='lg' />
                      <MDBInput onChange={handleChange} name="email" value={formData.email} label='Email' id='form2' type='email' className='w-100' />
                    </div>

                    <div className="d-flex flex-row align-items-center mb-4" style={{ width: '60%' }}>
                      <MDBIcon fas icon="phone me-3" size='lg' />
                      <MDBInput onChange={handleChange} name="phone" value={formData.phone} label='Phone Number' id='form3' type='password' className='w-100' />
                    </div>

                    <div className="d-flex flex-row align-items-center mb-4" style={{ width: '60%' }}>
                      <MDBIcon fas icon="lock me-3" size='lg' />
                      <MDBInput onChange={handleChange} name="password" value={formData.password} label='Password' id='form4' type='password' className='w-100' />
                    </div>

                    <div className="d-flex flex-row align-items-center mb-4" style={{ width: '60%' }}>
                      <MDBIcon fas icon="key me-3" size='lg' />
                      <MDBInput onChange={handleChange} name="c_password" value={formData.c_password} label='Confirm password' id='form5' type='password' className='w-100' />
                    </div>

                    <div className="d-flex justify-content-center pt-3 pb-3">
                      <MDBBtn className="ms-2 me-4" color="danger" size='lg' onClick={handleClear}>Reset All</MDBBtn>
                      <MDBBtn className="ms-2" type="submit" color="info" size="lg" onClick={handleSubmit}>Add Admin</MDBBtn>
                    </div>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBContainer>
        }

      </Box>



    </Box>
  )
}
