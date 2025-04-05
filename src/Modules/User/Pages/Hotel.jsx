import React, { useState, useEffect } from "react";
import { Button, TextField, Select, MenuItem, FormControlLabel, Checkbox, Chip } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import "../css/Hotel.css";
import axios from "axios";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import errorAnimation from "../Images/error.json";
import { CheckIcon } from "lucide-react";
import { AccessTime, People } from "@mui/icons-material";
import PoolIcon from "@mui/icons-material/Pool";
import WifiIcon from "@mui/icons-material/Wifi";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import SmokeFreeIcon from "@mui/icons-material/SmokeFree";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";

const Hotel = () => {
  const [search, setSearch] = useState("");
  const [minRating, setMinRating] = useState(0);
  const [sortOrder, setSortOrder] = useState("");
  const [hotelData, setHotelData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedFacilities, setSelectedFacilities] = useState([]);


  const getFacilityIcon = (facility) => {
    const lowerFacility = facility.toLowerCase();

    if (lowerFacility.includes("pool")) return <PoolIcon sx={{width: '15px'}} />;
    if (lowerFacility.includes("wifi")) return <WifiIcon sx={{width: '15px'}} />;
    if (lowerFacility.includes("parking")) return <LocalParkingIcon sx={{width: '15px'}} />;
    if (lowerFacility.includes("non-smoking")) return <SmokeFreeIcon sx={{width: '15px'}} />;
    if (lowerFacility.includes("air conditioning")) return <AcUnitIcon sx={{width: '15px'}} />;
    if (lowerFacility.includes("fitness")) return <FitnessCenterIcon sx={{width: '15px'}} />;
    if (lowerFacility.includes("24-hour front desk")) return <AccessTime sx={{width: '15px'}} />;
    return <CheckIcon style={{ color: "green" }} />;
  };


  useEffect(() => {
    setLoading(true);
    setError(false);
    axios.get(`http://localhost:7002/hotel/get`)
      .then((response) => {
        setHotelData(response.data);
        setLoading(false);
        console.log(response.data)
      })
      .catch((error) => {
        console.log(`Request cancelled ${error}`);
        setError(true);
        setLoading(false);
      })
  }, []);

  const count = new Array(8).fill(0);

  const handleFacilityChange = (facility) => {
    setSelectedFacilities((prev) =>
      prev.includes(facility) ? prev.filter((f) => f !== facility) : [...prev, facility]
    );
  };


  const filteredHotels = Array.isArray(hotelData)
    ? hotelData
      .filter(
        (hotel) =>
          hotel.name.toLowerCase().includes(search.toLowerCase()) &&
          hotel.rating >= minRating &&
          (selectedFacilities.length === 0 || selectedFacilities.every((fac) => hotel.facilities.includes(fac)))
      )
      .sort((a, b) => (sortOrder === "lowToHigh" ? a.price - b.price : sortOrder === "highToLow" ? b.price - a.price : 0))
    : [];

  // const getBadgeStyle = (deal) => {
  //   const styles = {
  //     "Premium Delight": { background: "#000000", color: "#ffffff" },
  //     "Ultimate Comfort": { background: "#1E90FF", color: "#FFFFFF" },
  //     "Elite Stay": { background: "#32CD32", color: "#FFFFFF" },
  //     "Romantic Getaway": { background: "crimson", color: "#FFFFFF" },
  //     "Exclusive Deal": { background: "#8B0000", color: "#FFFFFF" }
  //   };
  //   return styles[deal] || { background: "#ccc", color: "#000" };
  // };

  return (
    <div className="hotel-page">
      <div className="hotel-sidebar">
        <h6>Search by Hotel Name</h6>
        <TextField label="Search Hotel" variant="outlined" fullWidth size="small" value={search} onChange={(e) => setSearch(e.target.value)} style={{ marginBottom: "10px" }} />
        <h6>Filter by Rating</h6>
        <Select value={minRating} onChange={(e) => setMinRating(Number(e.target.value))} displayEmpty fullWidth size="small" style={{ marginBottom: "10px" }}>
          <MenuItem value={0}>All Ratings</MenuItem>
          <MenuItem value={3}>3★ & above</MenuItem>
          <MenuItem value={4}>4★ & above</MenuItem>
          <MenuItem value={4.5}>4.5★ & above</MenuItem>
        </Select>

        <h6>Facilities</h6>
        {["Air Conditioning & Heating", "Free WiFi", "Swimming Pool", "Luggage Storage", "Laundry", "Parking",
          "Restaurant", "Fitness Center", "24-hour Front Desk", "Room Service", "Non-smoking Rooms",
        ].map((facility) => (
          <FormControlLabel label={facility} key={facility}
            control={<Checkbox checked={selectedFacilities.includes(facility)} onChange={() => handleFacilityChange(facility)} />}
          />
        ))}

        <h6>Sort by Price</h6>
        <Select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)} displayEmpty fullWidth size="small" style={{ marginBottom: "10px" }}>
          <MenuItem value="">Sort by</MenuItem>
          <MenuItem value="lowToHigh">Price: Low to High</MenuItem>
          <MenuItem value="highToLow">Price: High to Low</MenuItem>
        </Select>

        <h6>Total results: {filteredHotels.length}</h6>
      </div>

      <div className="hotel-list">

        {error ?
          (<Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100vh" backgroundColor="#f8f8f8" mixBlendMode="darken" width="1050px">
            <Lottie animationData={errorAnimation} loop={true} style={{ height: '300px', width: '300px' }} />
            <h2 className="not-found">Oops! Something went wrong</h2>
          </Box>) :
          filteredHotels.length === 0 ? (<Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' height='80vh' minWidth="1000px">
            <video width="400" autoPlay loop style={{ mixBlendMode: "darken", }}>
              <source src="https://cdnl.iconscout.com/lottie/premium/thumb/result-not-found-animation-download-in-lottie-json-gif-static-svg-file-formats--webpage-error-discovered-404-website-bug-pack-design-development-animations-6647509.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <h1 className="not-found">Result not found</h1>
          </Box>) : (<></>)}

        {filteredHotels.map((hotel) => (
          <div key={hotel._id} className="hotel-card">
            <img src={`http://localhost:7002/api/uploads/${hotel.outsideImage}`} alt={hotel.name} className="hotel-image" />
            <div className="hotel-info">
              {/* <span className="deal-badge" style={getBadgeStyle(hotel.deal)}>
                {hotel.deal}
              </span> */}

              <h2 style={{ minHeight: "77px" }}>{hotel.name}</h2>
              <p className="hotel-rating">
                <StarIcon style={{ color: "gold" }} /> {hotel.rating} <People sx={{ marginLeft: "10px" }} />({hotel.reviews})
              </p>
              <div className="hotel-facilities">
                {hotel.facilities ? hotel.facilities.split(",").slice(0, 5).map((facility, index) => (
                  <span key={index} className="facility">
                    <Chip color="black" key={index} label={facility.trim()} icon={getFacilityIcon(facility.trim())} className="facility-chip" />
                  </span>

                )) : "No facilities available"}
              </div>

              <div className="hotel-footer">
                <span className="hotel-price">₹{hotel.price}</span>
                <Link to={`/HotelView/${hotel._id}`}>
                  <Button variant="contained" className="view-prices-btn">
                    View Details
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {loading && (
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
          {count.map((_, index) => (
            <Box key={index} sx={{ display: "flex", width: "500px", borderRadius: "10px", overflow: "hidden", border: "1px solid #ddd", backgroundColor: "#f5f5f5" }}>
              <Skeleton variant="rectangular" width={200} height="100%" sx={{ borderRadius: "5px" }} />
              <Box sx={{ flex: 1, padding: "15px" }}>
                <Skeleton variant="text" width="50px" height={20} sx={{ marginBottom: "5px" }} />
                <Skeleton variant="text" width="70%" height={45} sx={{ marginBottom: "5px" }} />
                <Skeleton variant="text" width="80%" />
                <Skeleton variant="text" width="70%" />
                <Skeleton variant="text" width="60%" />
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "10px" }}>
                  <Skeleton variant="text" width={80} height={30} />
                  <Skeleton variant="rectangular" width={100} height={35} sx={{ borderRadius: "5px" }} />
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      )}
    </div>
  );
};

export default Hotel;