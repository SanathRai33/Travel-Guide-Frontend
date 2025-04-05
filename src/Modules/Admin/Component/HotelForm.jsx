import React, { useState } from "react";
import {  MDBFile } from "mdb-react-ui-kit";
import { Box, Grid, Typography, TextField, Container, Button } from "@mui/material";
import axios from "axios";

export default function HotelForm() {
  const [outsideImage, setOutsideImage] = useState(null);
  const [insideImage, setInsideImage] = useState(null);
  const [formData, setFormData] = useState({
    name: "", description: "", price: "", rating: "", reviews: "",
    location: "", facilities: "",
  });

  
  const handleOutsideImageChange = (e) => setOutsideImage(e.target.files[0]);
  const handleInsideImageChange = (e) => setInsideImage(e.target.files[0]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.description || !formData.price || !formData.rating ||
      !formData.reviews || !formData.location || !formData.facilities ||
      !outsideImage || !insideImage)
       {
      alert("Please fill all fields and upload both images before submitting.");
      return;
    }

    if (formData.rating > 5 || formData.rating < 1) {
      alert("Rating must be between 1 and 5");
      return;
    }

    const AllData = new FormData();
    AllData.append('name', formData.name);
    AllData.append('description', formData.description);
    AllData.append('price', formData.price);
    AllData.append('rating', formData.rating);
    AllData.append('reviews', formData.reviews);
    AllData.append('location', formData.location);
    AllData.append('facilities', formData.facilities);
    AllData.append("outsideImage", outsideImage);
    AllData.append("insideImage", insideImage);

    for (let pair of AllData.entries()) {
      console.log(pair[0], pair[1]);
    }

    try {
      const res = await axios.post("http://127.0.0.1:7002/hotel/insert", AllData);
      if (res.data) {
        alert("Inserted Successfully");
      }
    } catch (error) {
      console.error(error);
      alert("Server error. Try again later.");
    }

    handleClear();
  };

  const handleClear = () => {
    setFormData({ name: "", description: "", price: "", rating: "", reviews: "", location: "", facilities: "" });
    setOutsideImage(null);
    setInsideImage(null);
  };

  return (
    <Box position="relative" zIndex={1}>
      <Grid container spacing={3}>
        <Container maxWidth="sm" style={{ boxShadow: "1px 1px 15px 1px grey", backgroundColor: "#ffeeff", marginTop: "30px", borderRadius: "25px", padding: "20px 10px", width: "500px" }}>
          <Typography variant="h4" fontWeight="bold" sx={{ mb: 3, textAlign: "center", color: "black" }}>Add New Hotel</Typography>
          <Box sx={{ display: "flex", alignItems: "center", flexDirection: "column", gap: 2 }}>
            <TextField label="Hotel Name" name="name" value={formData.name} onChange={handleChange} required size="small" sx={{ width: "400px", backgroundColor: "#ffffff" }} />
            <TextField label="Description" name="description" value={formData.description} onChange={handleChange} required multiline rows={3} size="small" sx={{ width: "400px", backgroundColor: "#ffffff" }} />
            <TextField label="Price ($)" name="price" type="number" value={formData.price} onChange={handleChange} required size="small" sx={{ width: "400px", backgroundColor: "#ffffff" }} />

            <Typography variant="body1" fontWeight="bold">Upload Outside Image:</Typography>
            <MDBFile type="file" style={{ width: "400px" }} onChange={handleOutsideImageChange} required />
            <Typography variant="body1" fontWeight="bold">Upload Inside Image:</Typography>
            <MDBFile type="file" style={{ width: "400px" }} onChange={handleInsideImageChange} required />

            <TextField label="Rating (1-5)" name="rating" type="number" value={formData.rating} onChange={handleChange} required size="small" sx={{ width: "400px", backgroundColor: "#ffffff" }} />
            <TextField label="Reviews Count" name="reviews" type="number" value={formData.reviews} onChange={handleChange} required size="small" sx={{ width: "400px", backgroundColor: "#ffffff" }} />

            <TextField label="Location" name="location" value={formData.location} onChange={handleChange} required size="small" sx={{ width: "400px", backgroundColor: "#ffffff" }} />
            <TextField label="Facilities (Comma Separated)" name="facilities" value={formData.facilities} onChange={handleChange} required size="small" sx={{ width: "400px", backgroundColor: "#ffffff" }} />

            <Button type="submit" variant="contained" color="primary" onClick={handleSubmit}>Add Hotel</Button>
          </Box>
        </Container>
      </Grid>
    </Box>
  );
}
