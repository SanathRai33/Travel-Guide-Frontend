import React, { useState } from 'react';
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBFile } from "mdb-react-ui-kit";
import { Box, Grid, Typography, TextField, Container, Button } from "@mui/material";
import axios from 'axios';


export default function PackageForm() {

  const categories = [
    { category: "Luxury & Budget", },
    { category: "Beach & Relaxation" },
    { category: "Adventure" },
    { category: "Heritage & Culture" }
  ];

  const [file, setFile] = useState()
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    image: '',
    rating: '',
    category: '',
    location: '',
    duration: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleChangefile = (e) => {
    console.log(e.target.files[0]);
    setFile(e.target.files[0]);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.title && formData.description && formData.price && formData.image &&
      formData.rating && formData.category && formData.location && formData.duration) {
      alert("Insert Every Field before submitting")
    } else if (formData.rating > 5 || formData.rating < 1) {
      alert("Rating must be between 1 and 5");
      return;
    } else {

      const AllData = new FormData();
      AllData.append('title', formData.title);
      AllData.append('description', formData.description);
      AllData.append('price', formData.price);
      AllData.append('rating', formData.rating);
      AllData.append('category', formData.category);
      AllData.append('location', formData.location);
      AllData.append('duration', formData.duration);
      AllData.append('image', file);

      await axios.post('http://127.0.0.1:7002/package/insert', AllData)

        .then((res) => {
          if (res.savepackage) {
            alert("Inserted Successfully");
          }
        })
        .catch((error) => {
          alert("Server error. Try again later.");
        })
      console.log('Form Data:', formData);
    }
    alert("Package added successfully", "Success");
    handleClear()
  };

  const handleClear = (e) => {
    setFormData({
      title: '',
      description: '',
      price: '',
      image: '',
      rating: '',
      category: '',
      location: '',
      duration: '',
    });
  }

  return (
    <Box position="relative" zIndex={1}>
      <Grid container spacing={3}>
        <Container maxWidth="sm" style={{ boxShadow: '1px 1px 15px 1px grey', backgroundColor: '#ffeeff', marginTop: '30px', borderRadius: '25px', padding: '20px 10px', width: '500px' }}>
          <Typography variant="h4" fontWeight="bold" sx={{ mb: 3, textAlign: "center", color: 'black' }}>
            Add New Package
          </Typography>
          <Box sx={{ display: "flex", alignItems: 'center', flexDirection: "column", gap: 2, }}>
            <TextField label="Title" name="title" value={formData.title} onChange={handleChange} required size="small" sx={{ width: "400px", "& .MuiInputBase-root": { height: 40 }, backgroundColor: '#ffffff' }} />
            <TextField label="Description" name="description" value={formData.description} onChange={handleChange} required multiline rows={3} size="small" sx={{ width: "400px", "& .MuiInputBase-root": { height: 80 }, backgroundColor: '#ffffff' }} />
            <TextField label="Price ($)" name="price" type="number" value={formData.price} onChange={handleChange} required size="small" sx={{ width: "400px", "& .MuiInputBase-root": { height: 40 }, backgroundColor: '#ffffff' }} />
            <MDBFile size='lg' style={{ width: "400px", "& .MuiInputBase-root": { height: 40 }, backgroundColor: '#ffffff' }} type='file' id='customFile' onChange={handleChangefile} fullWidth required className="form-field" />
            <TextField label="Rating (1-5)" name="rating" type="number" value={formData.rating} onChange={handleChange} required size="small" sx={{ width: "400px", "& .MuiInputBase-root": { height: 40 } }} />

            <MDBDropdown>
              <MDBDropdownToggle style={{ width: "400px", backgroundColor: '#ffffff', fontSize: '16px' }} className="d-flex justify-content-center align-items-center mb-3 rounded-2 shadow-0 text-muted border border-secondary" size="sl">
                {formData.category || "Select a Category"}
              </MDBDropdownToggle>
              <MDBDropdownMenu style={{ width: "100%", backgroundColor: '#ffffff' }}>
                {categories.map((cat, index) => (
                  <MDBDropdownItem key={index} link onClick={() => setFormData({ ...formData, category: cat.category })}>
                    {cat.category}
                  </MDBDropdownItem>
                ))}
              </MDBDropdownMenu>
            </MDBDropdown>
            <TextField label="Location" name="location" value={formData.location} onChange={handleChange} required size="small" sx={{ width: "400px", "& .MuiInputBase-root": { height: 40 }, backgroundColor: '#ffffff' }} />
            <TextField label="Duration" name="duration" value={formData.duration} onChange={handleChange} required size="small" sx={{ width: "400px", "& .MuiInputBase-root": { height: 40 }, backgroundColor: '#ffffff' }} />

            <Button type="submit" variant="contained" color="primary" onClick={handleSubmit}>
              Add Package
            </Button>
          </Box>
        </Container>
      </Grid>
    </Box>
  )
}
