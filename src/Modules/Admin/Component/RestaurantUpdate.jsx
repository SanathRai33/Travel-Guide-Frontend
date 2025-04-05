import React, { useState, useEffect } from 'react';
import { Box, Grid, Typography, TextField, Container, Button } from "@mui/material";
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBFile } from "mdb-react-ui-kit";
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

export default function RestaurantUpdate() {

    const cuisines = [
        { cuisine: "Indian" },
        { cuisine: "Chinese" },
        { cuisine: "Italian" },
        { cuisine: "Mexican" },
        { cuisine: "Continental" }
    ];

    const navigate = useNavigate();
    const params = useParams();
    console.log(params.id, "Restaurant Update ID...");
    const myid = params.id;

    const [formData, setFormData] = useState([]);
    const [file, setFile] = useState();

    useEffect(() => {
        axios.get(`http://localhost:7002/restaurant/SingleView/${myid}`)
            .then((res) => {
                console.log(res.data);
                setFormData(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [myid]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleChangeFile = (e) => {
        console.log(e.target.files[0]);
        setFile(e.target.files[0]);
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        if (formData.rating > 5 || formData.rating < 1) {
            alert("Rating must be between 1 and 5");
            return;
        } else {
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
            AllData.append('food1', formData.food1);
            AllData.append('food2', formData.food2);
            AllData.append('food3', formData.food3);

            axios.put(`http://127.0.01:7002/restaurant/update/${myid}`, AllData)
                .then((res) => {
                    console.log(res, 'Restaurant Update Response');
                    navigate('/admin/dash-board');
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    };

    return (
        <Box sx={{ display: "flex" }}>
            <Grid container spacing={3}>
                <Container maxWidth="sm" style={{ boxShadow: '1px 1px 15px 1px grey', backgroundColor: '#ffeeff', marginTop: '30px', borderRadius: '25px', padding: '20px 10px', width: '500px' }}>
                    <Typography variant="h4" fontWeight="bold" sx={{ mb: 3, textAlign: "center", color: 'black' }}>
                        Update Restaurant
                    </Typography>
                    <Box sx={{ display: "flex", alignItems: 'center', flexDirection: "column", gap: 2 }}>
                        <TextField label="Name" name="name" value={formData.name} onChange={handleChange} required size="small" sx={{ width: "400px", backgroundColor: '#ffffff' }} />
                        <MDBDropdown>
                            <MDBDropdownToggle style={{ width: "400px", backgroundColor: '#ffffff', fontSize: '16px' }} className="d-flex justify-content-center align-items-center mb-3 rounded-2 shadow-0 text-muted border border-secondary" size="sl">
                                {formData.cuisine || "Select a Cuisine"}
                            </MDBDropdownToggle>
                            <MDBDropdownMenu style={{ width: "100%", backgroundColor: '#ffffff' }}>
                                {cuisines.map((cuisine, index) => (
                                    <MDBDropdownItem key={index} link onClick={() => setFormData({ ...formData, cuisine: cuisine.cuisine })}>
                                        {cuisine.cuisine}
                                    </MDBDropdownItem>
                                ))}
                            </MDBDropdownMenu>
                        </MDBDropdown>
                        <TextField label="Location" name="location" value={formData.location} onChange={handleChange} required size="small" sx={{ width: "400px", backgroundColor: '#ffffff' }} />
                        <TextField label="Price Range" name="price" value={formData.price} onChange={handleChange} required size="small" sx={{ width: "400px", backgroundColor: '#ffffff' }} />
                        <MDBFile size='lg' style={{ width: "400px", backgroundColor: '#ffffff' }} type='file' id='customFile' onChange={handleChangeFile} fullWidth required className="form-field" />
                        <TextField label="Rating (1-5)" name="rating" type="number" value={formData.rating} onChange={handleChange} required size="small" sx={{ width: "400px" }} />
                        <TextField label="Reviews" name="reviews" type="number" value={formData.reviews} onChange={handleChange} required size="small" sx={{ width: "400px", backgroundColor: '#ffffff' }} />
                        <TextField label="Timings" name="timings" value={formData.timings} onChange={handleChange} required size="small" sx={{ width: "400px", backgroundColor: '#ffffff' }} />
                        <TextField label="Facilities" name="facilities" value={formData.facilities} onChange={handleChange} required size="small" sx={{ width: "400px", backgroundColor: '#ffffff' }} />
                        <TextField label="Food Image 1 URL" name="food1" value={formData.food1} onChange={handleChange} required size="small" sx={{ width: "400px", backgroundColor: '#ffffff' }} />
                        <TextField label="Food Image 2 URL" name="food2" value={formData.food2} onChange={handleChange} required size="small" sx={{ width: "400px", backgroundColor: '#ffffff' }} />
                        <TextField label="Food Image 3 URL" name="food3" value={formData.food3} onChange={handleChange} required size="small" sx={{ width: "400px", backgroundColor: '#ffffff' }} />

                        <Button type="submit" onClick={handleUpdate} variant="contained" color="primary">
                            Update Restaurant
                        </Button>
                    </Box>
                </Container>
            </Grid>
        </Box>
    );
}
