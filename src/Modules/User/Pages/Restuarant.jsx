import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Card, CardContent, CardMedia, Typography, Button, Grid, Chip, Box, Container, TextField, Select, MenuItem, FormControlLabel, Checkbox, } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import WifiIcon from "@mui/icons-material/Wifi";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import OutdoorGrillIcon from "@mui/icons-material/OutdoorGrill";
import { LiveTvOutlined, SetMeal, SoupKitchen, WineBar, } from "@mui/icons-material";
import SpaIcon from "@mui/icons-material/Spa";
import RoofingIcon from "@mui/icons-material/Roofing";
import { ChefHat, MicIcon } from "lucide-react";
import "../css/Restaurant.css";
import Lottie from "lottie-react";
import errorAnimation from "../Images/error.json";
import Header from "../Component/Header";
import RestaurantFilter from "../Component/RestaurantFilter";
import RestaurantCard from "../Component/RestaurantCard";

const Restaurant = () => {
  const [resData, setResData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [minRating, setMinRating] = useState(0);
  const [sortOrder, setSortOrder] = useState("");
  const [selectedFacilities, setSelectedFacilities] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const response = await axios.get(`http://localhost:7002/restaurant/get`);
        setResData(response.data);
        console.log(response.data);
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log(`Request cancelled ${error.message}`);
          return;
        }
        setError(true);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) {
    return <div>Loading</div>
  }

  const handleFacilityChange = (facility) => {
    setSelectedFacilities((prev) =>
      prev.includes(facility)
        ? prev.filter((f) => f !== facility)
        : [...prev, facility]
    );
  };

  const filteredRestaurants = Array.isArray(resData)
    ? resData
      .filter(
        (restaurant) =>
          restaurant.name.toLowerCase().includes(search.toLowerCase()) &&
          restaurant.rating >= minRating &&
          (selectedFacilities.length === 0 ||
            selectedFacilities.every((fac) =>
              restaurant.facilities.includes(fac)
            ))
      )
      .sort((a, b) =>
        sortOrder === "lowToHigh" ? a.price - b.price
          : sortOrder === "highToLow" ? b.price - a.price
            : 0
      )
    : [];

  return (
    <Container className="lg:px-40 lg:py-10 flex justify-center items-center flex-col gap-2 bg-[#F8FAFC]">
      <Header title="Restaurants" description="Discover exceptional dining experiences" />
      <div className="w-full bg-white shadow-md rounded-lg mb-4">
        <RestaurantFilter/>
      </div>
      <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>



      {/* <Box className="restaurant-sidebar">
        <h6> Search by Restaurant Name </h6>
        <TextField label="Search Restaurant" variant="outlined" fullWidth size="small" value={search} onChange={(e) => setSearch(e.target.value)} />

        <h6>
          Filter by Rating
        </h6>
        <Select value={minRating} onChange={(e) => setMinRating(Number(e.target.value))} displayEmpty fullWidth size="small">
          <MenuItem value={0}>All Ratings</MenuItem>
          <MenuItem value={3}>3★ & above</MenuItem>
          <MenuItem value={4}>4★ & above</MenuItem>
          <MenuItem value={4.5}>4.5★ & above</MenuItem>
        </Select>

        <h6>
          Facilities
        </h6>
        <Box>
          {["WiFi", "Parking", "Outdoor Seating", "Bar", "TV Screening", "Vegan Option", "Rooftop Dining", "Open Kitchen", "Special Chefs", "Karaoke Nights", "Sea Food",
          ].map((facility) => (
            <FormControlLabel key={facility} label={facility} control={
              <Checkbox checked={selectedFacilities.includes(facility)} onChange={() => handleFacilityChange(facility)} />
            } />
          ))}
        </Box>

        <h6>
          Sort by Price
        </h6>
        <Select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)} displayEmpty fullWidth size="small"
        >
          <MenuItem value="">Sort by</MenuItem>
          <MenuItem value="lowToHigh">Price: Low to High</MenuItem>
          <MenuItem value="highToLow">Price: High to Low</MenuItem>
        </Select>

        <h6>
          Total results: {filteredRestaurants.length}
        </h6>
      </Box>

      <Box className="restaurant-list">
        {error ?
          (<Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100vh" backgroundColor="#f8f8f8" mixBlendMode="darken" width="1050px">
            <Lottie animationData={errorAnimation} loop={true} style={{ height: '300px', width: '300px' }} />
            <h2 className="not-found">Oops! Something went wrong</h2>
          </Box>) :
          filteredRestaurants.length === 0 ? (<Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' height='80vh' minWidth="1000px">
            <video width="400" autoPlay loop style={{ mixBlendMode: "darken", }}>
              <source src="https://cdnl.iconscout.com/lottie/premium/thumb/result-not-found-animation-download-in-lottie-json-gif-static-svg-file-formats--webpage-error-discovered-404-website-bug-pack-design-development-animations-6647509.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <h1 className="not-found">Result not found</h1>
          </Box>) : (<></>)}

        <Grid container spacing={3}>
          {filteredRestaurants.map((restaurant, index) => (
            <Grid item xs={12} sm={6} md={4} key={index} minWidth="300px">
              <Card>
                <CardMedia component="img" image={`http://localhost:7002/api/uploads/${restaurant.image}`} alt={restaurant.name} />
                <CardContent>
                  <Typography variant="h6" fontWeight="bold">
                    {restaurant.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {restaurant.cuisine} • {restaurant.location}
                  </Typography>

                  <Typography variant="body2">
                    <StarIcon style={{ color: "gold", fontSize: 18, marginRight: "0.5rem" }} />
                    {restaurant.rating} ({restaurant.reviews} reviews)
                  </Typography>

                  <Typography variant="body2" color="text.secondary">
                    🕒 Available: {restaurant.timings}
                  </Typography>

                  <Typography variant="body2" fontWeight="bold">
                    💰 Price: ₹ {restaurant.price}
                  </Typography>

                  <Box display='flex' gap={2} mb={2} mt={2}>
                    <CardMedia component="img" image={restaurant.food1} alt={restaurant.name} className="disesh" />
                    <CardMedia component="img" image={restaurant.food2} alt={restaurant.name} className="disesh" />
                    {restaurant.food3 && (<CardMedia component="img" image={restaurant.food3} alt={restaurant.name} className="disesh" />)}
                  </Box>

                  <Box>
                    {restaurant.facilities.includes("WiFi") && (<Chip icon={<WifiIcon />} label="WiFi" />)}
                    {restaurant.facilities.includes("Parking") && (<Chip icon={<LocalParkingIcon />} label="Parking" />)}
                    {restaurant.facilities.includes("Bar") && (<Chip icon={<WineBar />} label="Bar" />)}
                    {restaurant.facilities.includes("Outdoor Seating") && (<Chip icon={<OutdoorGrillIcon />} label="Outdoor" />)}
                    {restaurant.facilities.includes("TV Screening") && (<Chip icon={<LiveTvOutlined />} label="TV Screening" />)}
                    {restaurant.facilities.includes("Vegan Option") && (<Chip icon={<SpaIcon />} label="Vegan Option" />)}
                    {restaurant.facilities.includes("Rooftop Dining") && (<Chip icon={<RoofingIcon />} label="Rooftop Dining" />)}
                    {restaurant.facilities.includes("Open Kitchen") && (<Chip icon={<SoupKitchen />} label="Open Kitchen" />)}
                    {restaurant.facilities.includes("Special Chefs") && (<Chip icon={<ChefHat />} label="Special Chefs" />)}
                    {restaurant.facilities.includes("Karaoke Nights") && (<Chip icon={<MicIcon />} label="Karaoke Nights" />)}
                    {restaurant.facilities.includes("Sea Food") && (<Chip icon={<SetMeal />} label="Sea Food" />)}
                  </Box>

                  <Link to={`/RestaurantView/${restaurant._id}`}>
                    <Button variant="contained" className="view-prices-btn">
                      View Details
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box> */}
    </Container>
  );
};

export default Restaurant;