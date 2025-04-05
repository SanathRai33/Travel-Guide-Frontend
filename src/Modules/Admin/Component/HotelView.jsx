import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Box, Typography, Chip, Rating, Container, Button, AppBar, Toolbar, TextField, IconButton } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import PeopleIcon from "@mui/icons-material/People";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
// import "../../User/css/HotelView.css";
import Navbar from './Navbar';

const HotelView = () => {
  const { id: myid } = useParams();
  const [hotel, setHotel] = useState(null);

  useEffect(() => {
    if (myid) {
      axios.get(`http://localhost:7002/hotel/SingleView/${myid}`)
        .then((res) => {
          console.log(res.data);
          setHotel(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [myid]);

  if (!hotel) return <h2>Hotel not found.</h2>;

  const Facility = hotel.facilities.split(', ');

  return (
    <Box sx={{ display: "flex" }}>
      <Navbar />

      <Box component="main" sx={{ flexGrow: 1, p: 3, backgroundColor: "#f9f9f9", minHeight: "100vh" }}>
        <AppBar
          position="fixed"
          sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, backgroundColor: "#fff", boxShadow: "none", borderBottom: "1px solid #ddd" }}
        >
          <Toolbar>
            <Typography variant="h6" noWrap component="div" color="text.primary">
              {(!hotel) ? ("Package Not Available") : (hotel.name)}
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


        <Box className="hotel-view-container">
          {(!hotel) ? (<Typography style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography variant="h2" sx={{ textAlign: "center", mt: 5, fontWeight: '900' }}>The Package is not Available yet</Typography>
            <img src="https://cdni.iconscout.com/illustration/premium/thumb/search-not-found-illustration-download-in-svg-png-gif-file-formats--404-page-simple-empty-error-state-pack-user-interface-illustrations-6024631.png?f=webp" width='360px' height='360px' alt="error" />
          </Typography>) :
            (<Container maxWidth="md">
              <Box className="hotel-main-info" id="hotel-main-info">
                <Box className="hotel-main-top">
                  <Typography variant="h4" className="hotel-name">{hotel.name}</Typography>
                  <Box className="hotel-rating">
                    <Rating name="rating" value={hotel.rating} precision={0.1} readOnly />
                    <Typography variant="h6" style={{ fontSize: "18px" }}>
                      <PeopleIcon style={{ fontSize: "20px", color: "gray", marginLeft: "15px" }} /> {hotel.reviews}+
                    </Typography>
                  </Box>
                </Box>
                <Box className="hotel-main-bottom">
                  <Typography variant="h6" className="hotel-location">{hotel.name}, {hotel.location}</Typography>
                </Box>
              </Box>

              <Box position="relative">
                <img src={`http://localhost:7002/api/uploads/${hotel.outsideImage}`} alt={hotel.name} className="hotel-main-image" />
                <img src={`http://localhost:7002/api/uploads/${hotel.insideImage}`} alt={hotel.name} className="hotel-second-image" />
              </Box>

              <Typography variant="h6" className="hotel-description" id="description">{hotel.description}</Typography>

              <Typography variant="h6" color="black" className="hotel-facilities-heading" id="facility">Popular Facilities</Typography>
              <Box className="hotel-facilities">
                {Facility.map((facility, index) => (
                  <Chip key={index} label={facility} icon={<CheckIcon style={{ color: "green" }} />} className="facility-chip" />
                ))}
              </Box>
              <Link to="/admin/dash-board">
                <Button variant="contained" color="primary" size="large" sx={{ px: 5, py: 1.5, mb: 2 }}>
                  Back to DashBoard
                </Button>
              </Link><br />
            </Container>)}
        </Box>

      </Box>
    </Box>
  );
};

export default HotelView;