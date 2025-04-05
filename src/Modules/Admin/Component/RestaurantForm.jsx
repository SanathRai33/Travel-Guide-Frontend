import React, { useState } from "react";
import { MDBFile } from "mdb-react-ui-kit";
import { Box, Grid, Typography, TextField, Container, Button, MenuItem } from "@mui/material";
import axios from "axios";

export default function RestaurantForm() {
  const [file, setFile] = useState(null); 
  const [formData, setFormData] = useState({
    name: "",
    cuisine: "",
    location: "",
    rating: "",
    reviews: "",
    price: "",
    timings: [],
    facilities: "",
    food1: "",
    food2: "",
    food3: "",
  });

  const cuisineOptions = [ "Chinese", "Dhaba", "European", "Indian", "Italian", "Japaneese", "Mexican", "Punjabi", "North Indian", "South Indian",];
  const timingOptions = ["Breakfast", "Lunch", "Dinner"];

  const handleChangefile = (e) => {
    console.log(e.target.files[0]);
    setFile(e.target.files[0]);
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleMultiSelect = (e) => {
    const { value } = e.target;
    setFormData({ ...formData, timings: typeof value === "string" ? value.split(",") : value });
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    // if (!formData.name || !formData.cuisine || !formData.location || !formData.price ||
    //   !formData.rating || !formData.reviews || !formData.timings.length ||
    //   !formData.facilities || !image || !formData.food1 || !formData.food2 || !formData.food3) {
    //   alert("Please fill all fields and upload an image before submitting.");
    //   return;
    // }

    if (formData.rating > 5 || formData.rating < 1) {
      alert("Rating must be between 1 and 5");
      return;
    }

    const AllData = new FormData();
    AllData.append('name', formData.name);
    AllData.append('cuisine', formData.cuisine);
    AllData.append('location', formData.location);
    AllData.append('price', formData.price);
    AllData.append('rating', formData.rating);
    AllData.append('reviews', formData.reviews);
    AllData.append('timings', formData.timings);
    AllData.append('facilities', formData.facilities);
    AllData.append("image", file);
    AllData.append("food1", formData.food1);
    AllData.append("food2", formData.food2 || "");
    AllData.append("food3", formData.food3 || "");
    
    console.log(file)

    try {
      const res = await axios.post("http://127.0.0.1:7002/restaurant/insert", AllData);
      if (res.data) {
        alert("Restaurant Added Successfully");
      }
    } catch (error) {
      console.error(error);
      alert("Server error. Try again later.");
    }

    // handleClear();
  };

  // const handleClear = () => {
  //   setFormData({ name: "", cuisine: "", location: "", price: "", rating: "", reviews: "", timings: [], facilities: "", food1: "", food2: "", food3: "" });
  //   setImage(null);
  // };

  return (
    <Box position="relative" zIndex={1}>
      <Grid container spacing={3}>
        <Container maxWidth="sm" style={{ boxShadow: "1px 1px 15px 1px grey", backgroundColor: "#ffeeff", marginTop: "30px", borderRadius: "25px", padding: "20px 10px", width: "500px" }}>
          <Typography variant="h4" fontWeight="bold" sx={{ mb: 3, textAlign: "center", color: "black" }}>Add New Restaurant</Typography>
          <Box sx={{ display: "flex", alignItems: "center", flexDirection: "column", gap: 2 }}>
            
            <TextField label="Restaurant Name" name="name" value={formData.name} onChange={handleChange} required size="small" sx={{ width: "400px", backgroundColor: "#ffffff" }} />

            <TextField
              select
              fullWidth
              label="Cuisine Type"
              name="cuisine"
              value={formData.cuisine}
              onChange={handleChange}
              required
              sx={{ width: "400px", backgroundColor: "#ffffff" }}
            >
              {cuisineOptions.map((option, index) => (
                <MenuItem key={index} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>

            <TextField label="Location (City, Address)" name="location" value={formData.location} onChange={handleChange} required size="small" sx={{ width: "400px", backgroundColor: "#ffffff" }} />

            <TextField label="Price Range" name="price" value={formData.price} onChange={handleChange} required size="small" sx={{ width: "400px", backgroundColor: "#ffffff" }} />

            <Typography variant="body1" fontWeight="bold">Upload Restaurant Image:</Typography>
            <MDBFile type="file" style={{ width: "400px" }} onChange={handleChangefile} required />

            <TextField label="Food 1 Image URL" name="food1" value={formData.food1} onChange={handleChange} required size="small" sx={{ width: "400px", backgroundColor: "#ffffff" }} />
            <TextField label="Food 2 Image URL" name="food2" value={formData.food2} onChange={handleChange} required size="small" sx={{ width: "400px", backgroundColor: "#ffffff" }} />
            <TextField label="Food 3 Image URL" name="food3" value={formData.food3} onChange={handleChange} required size="small" sx={{ width: "400px", backgroundColor: "#ffffff" }} />

            <TextField label="Rating (1-5)" name="rating" type="number" value={formData.rating} onChange={handleChange} required size="small" sx={{ width: "400px", backgroundColor: "#ffffff" }} />

            <TextField label="Reviews Count" name="reviews" type="number" value={formData.reviews} onChange={handleChange} required size="small" sx={{ width: "400px", backgroundColor: "#ffffff" }} />

            <TextField
              select
              fullWidth
              label="Available Timings"
              name="timings"
              value={formData.timings}
              onChange={handleMultiSelect}
              SelectProps={{ multiple: true }}
              sx={{ width: "400px", backgroundColor: "#ffffff" }}
            >
              {timingOptions.map((option, index) => (
                <MenuItem key={index} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>

            <TextField label="Facilities (Comma Separated)" name="facilities" value={formData.facilities} onChange={handleChange} required size="small" sx={{ width: "400px", backgroundColor: "#ffffff" }} />

            <Button type="submit" variant="contained" color="primary" onClick={handleSubmit}>Add Restaurant</Button>
          </Box>
        </Container>
      </Grid>
    </Box>
  );
}
