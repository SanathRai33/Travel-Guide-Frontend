import React, { useState, useEffect } from "react";
import { Card, CardContent, CardMedia, Typography, Button, Box, Grid, MenuItem, Select, FormControl, InputLabel } from "@mui/material";
import axios from "axios";
import { Link } from "react-router-dom";
import '../css/Packages.css';
import { FaSearch } from 'react-icons/fa';
import Lottie from "lottie-react";
import errorAnimation from "../Images/error.json";
import Travel from '../Images/Travel.avif'

const Packages = () => {
  const [packageData, setPackageData] = useState([]);
  const [searchPackage, setSearchPackage] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [error, setError] = useState(false)

  useEffect(() => {
    axios.get("http://127.0.0.1:7002/package/get")
      .then((res) => {
        setPackageData(res.data)
      })
      .catch(() => {
        setError(true)
      });
  }, []);

  const handleSearchChange = (e) => {
    setSearchPackage(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  const filteredPackages = packageData.filter(pkg =>
    pkg.title.toLowerCase().includes(searchPackage.toLowerCase()) ||
    pkg.price.toLowerCase().includes(searchPackage.toLowerCase()) ||
    pkg.location.toLowerCase().includes(searchPackage.toLowerCase()) ||
    pkg.duration.toLowerCase().includes(searchPackage.toLowerCase()) ||
    pkg.category.toLowerCase().includes(searchPackage.toLowerCase()) ||
    pkg.description.toLowerCase().includes(searchPackage.toLowerCase())
  );


  const sortedPackages = [...filteredPackages].sort((a, b, pkg) => {
    if (sortBy === "lowPrice") return a.price - b.price;
    else if (sortBy === "highPrice") return b.price - a.price;
    else if (sortBy === "lowRating") return a.rating - b.rating;
    else if (sortBy === "HighRating") return b.rating - a.rating;
    else return 0;
  });

  return (
    <div className="Packages">
      <div className="top-section">
        <video loop autoPlay className="vid-section">
          <source src={Travel} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="function-section">
          <div className="search">
            <FaSearch className="search-icon" />
            <input type="search" placeholder="Search" value={searchPackage} onChange={handleSearchChange} />
          </div>
          <FormControl className="dropdown" size="small">
            <InputLabel className="sort">Sort By:</InputLabel>
            <Select value={sortBy} onChange={handleSortChange} className="selection" label="Sort By">
              <MenuItem value="">All</MenuItem>
              <MenuItem value="lowPrice">Price (Low to High)</MenuItem>
              <MenuItem value="highPrice">Price (High to Low)</MenuItem>
              <MenuItem value="lowRating">Rating (Low to High)</MenuItem>
              <MenuItem value="highRating">Rating (High to Low)</MenuItem>
              {/* <MenuItem value="Luxury & Budget">Category (Luxury & Budget)</MenuItem>
              <MenuItem value="Beach & Relaxation">Category (Beach & Relaxation)</MenuItem>
              <MenuItem value="Adventure">Category (Adventure)</MenuItem>
              <MenuItem value="Heritage & Culture">Category (Heritage & Culture)</MenuItem> */}
            </Select>
          </FormControl>
          <div className="count">Available Packages: {sortedPackages.length}</div>
        </div>
      </div>

      <Grid container spacing={4} justifyContent="center" p={2} mt={2}>

        {error ?
          (<Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100vh" backgroundColor="#f8f8f8" mixBlendMode="darken" width="1050px">
            <Lottie animationData={errorAnimation} loop={true} style={{ height: '300px', width: '300px' }} />
            <h2 className="not-found">Oops! Something went wrong</h2>
          </Box>) :
          filteredPackages.length === 0 ? (<Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' height='80vh' minWidth="1000px">
            <video width="400" autoPlay loop style={{ mixBlendMode: "darken", }}>
              <source src="https://cdnl.iconscout.com/lottie/premium/thumb/result-not-found-animation-download-in-lottie-json-gif-static-svg-file-formats--webpage-error-discovered-404-website-bug-pack-design-development-animations-6647509.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <h1 className="not-found">Result not found</h1>
          </Box>) : (<></>)}

        {sortedPackages.map((pkg, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card sx={{ maxWidth: 345, boxShadow: 4, borderRadius: 3, display: "flex", flexDirection: "column", height: "100%" }}>
              <CardMedia component="img" height="200" image={`http://localhost:7002/api/uploads/${pkg.image}`} alt={pkg.title} />
              <CardContent sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
                <Typography variant="h6" fontWeight="bold">{pkg.title}</Typography>
                <Typography variant="body2" color="text.secondary" my={1} sx={{ minHeight: "50px" }}>{pkg.description}</Typography>
                <Typography variant="body2" fontWeight="bold" color="text.primary">📍 {pkg.location}</Typography>
                <Typography variant="body2" color="text.secondary">⏳ {pkg.duration}</Typography>
                <Typography variant="body2" color="text.secondary" pb={1}>⭐ {pkg.rating} / 5</Typography>
                <Typography variant="h6" color="green" pb={1} pl={1}>${pkg.price}</Typography>
                <Link to={`/PackageView/${pkg._id}`} style={{ margin: 'auto', width: "100%" }}><Button variant="contained" sx={{ pt: "auto", backgroundColor: "#007bff", width: "100%" }}>Explore More</Button></Link>

              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Packages;