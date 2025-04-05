import React, { useState, useEffect } from 'react';
import { Box, Grid, Typography, TextField, Container, Button } from "@mui/material";
import { MDBFile } from "mdb-react-ui-kit";
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

export default function HotelUpdate() {

    const navigate = useNavigate();
    const params = useParams();
    console.log(params.id, "...........................................");
    const myid = params.id;
    const [formData, setFormData] = useState([])
    const [outsideImage, setOutsideImage] = useState(null);
    const [insideImage, setInsideImage] = useState(null);


    useEffect(() => {
        axios.get(`http://localhost:7002/hotel/SingleView/${myid}`)
            .then((res) => {
                console.log(res.data)
                setFormData(res.data.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [myid]);


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleOutsideImageChange = (e) => setOutsideImage(e.target.files[0]);
    const handleInsideImageChange = (e) => setInsideImage(e.target.files[0]);


    const handleUpdate = async (e) => {

        e.preventDefault();
        if (formData.rating > 5 || formData.rating < 1) {
            alert("Rating must be between 1 and 5");
            return;
        } else {

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

            axios.put(`http://127.0.01:7002/hotel/update/${myid}`, AllData)
                .then((res) => {
                    console.log(res, 'Response.....................')
                    alert("Data Updated")
                    navigate('/admin/dash-board')
                })
                .catch((error) => {
                    console.log(error)
                })
        };
    }

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

                        <Button type="submit" variant="contained" color="primary" onClick={handleUpdate}>Update Hotel</Button>
                    </Box>
                </Container>
            </Grid>
        </Box>
    )
}
