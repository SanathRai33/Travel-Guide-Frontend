import React, { useState, useEffect } from 'react';
import Navbar from '../Component/Navbar';
import { Box, Grid, AppBar, Toolbar, Typography, TextField, IconButton, Container, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBFile } from "mdb-react-ui-kit";
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import PackageUpdate from './PackageUpdate';

export default function Update() {

    const categories = [
        { category: "Luxury & Budget", },
        { category: "Beach & Relaxation" },
        { category: "Adventure" },
        { category: "Heritage & Culture" }
    ];

    const navigate = useNavigate();
    const params = useParams();
    console.log(params.id, "...........................................");
    const myid = params.id;
    const [formData, setFormData] = useState([])
    const [file, setFile] = useState()


    useEffect(() => {
        axios.get(`http://localhost:7002/package/SingleView/${myid}`)
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

    const handleChangefile = (e, index) => {
        console.log(e.target.files[0]);
        setFile(e.target.files[0]);
    }


    const handleUpdate = async (e) => {

        e.preventDefault();
         if (formData.rating > 5 || formData.rating < 1) {
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

            axios.put(`http://127.0.01:7002/package/update/${myid}`, AllData)
                .then((res) => {
                    console.log(res, 'Response.....................')
                    navigate('/admin/dash-board')
                })
                .catch((error) => {
                    console.log(error)
                })
        };
    }

    return (
        <Box sx={{ display: "flex" }}>
            <Navbar />

            <Box component="main" sx={{ flexGrow: 1, p: 3, backgroundColor: "#f9f9f9", minHeight: "100vh" }}>
                <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, backgroundColor: "#fff", boxShadow: "none", borderBottom: "1px solid #ddd", }} >
                    <Toolbar>
                        <Typography variant="h6" noWrap component="div" color="text.primary">
                            Update Packages
                        </Typography>
                        <Box sx={{ flexGrow: 1 }} />
                        <TextField variant="outlined" size="small" placeholder="Search here" InputProps={{
                            endAdornment: (
                                <IconButton>
                                    <SearchIcon />
                                </IconButton>
                            ),
                        }}
                            sx={{ width: 300, backgroundColor: "#fff", borderRadius: 1 }} />
                    </Toolbar>
                </AppBar>

                <Toolbar />
                <Typography variant="h5" sx={{ mb: 3, fontWeight: "bold", color: 'black' }}>
                    Update Form
                </Typography>

                <PackageUpdate/>
            </Box>
        </Box>
    )
}
