import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Typography, Card, CardMedia, Box, Button, Chip, Rating } from "@mui/material";
import Axios from "axios";
import CheckIcon from "@mui/icons-material/Check";
import PeopleIcon from "@mui/icons-material/People";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import { styled } from "@mui/material/styles";
import { Oval } from 'react-loader-spinner';
import '../../User/css/RestaurantView.css'
import WifiIcon from "@mui/icons-material/Wifi";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import { Kitchen, LocalBar } from "@mui/icons-material";
import { ChefHat } from "lucide-react";

const getFacilityIcon = (facility) => {
  const lowerFacility = facility.toLowerCase();

  if (lowerFacility.includes("wifi")) return <WifiIcon style={{ color: "green" }} />;
  if (lowerFacility.includes("parking")) return <LocalParkingIcon style={{ color: "blue" }} />;
  if (lowerFacility.includes("bar")) return <LocalBar style={{ color: "blue" }} />;
  if (lowerFacility.includes("kitchen")) return <Kitchen style={{ color: "blue" }} />;
  if (lowerFacility.includes("Chef")) return <ChefHat style={{ color: "blue" }} />;

  return <CheckIcon style={{ color: "green" }} />;
};

// const ExpandMore = styled((props) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//   transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
//   transition: theme.transitions.create("transform", {
//     duration: theme.transitions.duration.shortest,
//   }),
// }));

const RestaurantView = () => {
  const { id: myid } = useParams();
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);
  const [restaurant, setRestaurant] = useState(null);
  // const [expanded, setExpanded] = useState(false);
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [time, setTime] = useState("Luanch");
  const [guests, setGuests] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (myid) {
      Axios.get(`http://localhost:7002/restaurant/SingleView/${myid}`)
        .then((res) => {
          setRestaurant(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [myid]);



  useEffect(() => {
    setTotalPrice( restaurant?.price * guests);
  }, [guests, restaurant]);

  // const handleExpandClick = () => {
  //   setExpanded(!expanded);
  // };

  const category = 3;

  const handlePayment = () => {
    setLoader(true);
    navigate(`/Payment/${restaurant._id}`, {
      state: {
        totalPrice: totalPrice,
        guests: guests,
        reserveDate : date,
        category: category,
        time : time,
      },
    });

    setTimeout(() => {
      setLoader(false);
    }, 1000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "date") setDate(value);
    if (name === "time") setTime(value);
    if (name === "guests") setGuests(value);
  };

  const timings = restaurant?.timings?.split(",") || [];

  if (!restaurant) {
    return <Typography variant="h4" align="center" sx={{ mt: 5 }}>Restaurant not available</Typography>;
  }

  return (
    <Box className="restaurant-view-container">
      <Button onClick={() => navigate("/admin/dash-board")} variant="contained" sx={{ mb: 2 }}>
        ← Back to Listings
      </Button>

      <Box className="restaurant-main-info" id="restaurant-main-info">
        <Box className="restaurant-main-top">
          <Typography variant="h4" className="restaurant-name">{restaurant.name}</Typography>
          <Box className="restaurant-rating">
            <Rating name="rating" value={restaurant.rating} precision={0.1} readOnly />
            <Typography variant="h6" style={{ fontSize: "18px" }}>
              <PeopleIcon style={{ fontSize: "20px", color: "gray", marginLeft: "15px" }} /> {restaurant.reviews}+
            </Typography>
          </Box>
        </Box>
        <Box className="restaurant-main-bottom">
          <Typography variant="h6" className="restaurant-location">{restaurant.name}, {restaurant.location}</Typography>
        </Box>
      </Box>

      <Box position="relative">
        <img src={`http://localhost:7002/api/uploads/${restaurant.image}`} alt={restaurant.name} className="restaurant-main-image" />

        <Box sx={{ position: "absolute", bottom: 16, left: 16, display: "flex", gap: 2, }} >
          <Card sx={{ width: 150, height: 150, overflow: "hidden", borderRadius: "50%" }}>
            <CardMedia component="img" height="150" image={restaurant.food1} alt="Dish 1" />
          </Card>
          <Card sx={{ width: 150, height: 150, overflow: "hidden", borderRadius: "50%" }}>
            <CardMedia component="img" height="150" image={restaurant.food2} alt="Dish 2" />
          </Card>
          <Card sx={{ width: 150, height: 150, overflow: "hidden", borderRadius: "50%" }}>
            <CardMedia component="img" height="150" image={restaurant.food3} alt="Dish 3" />
          </Card>
        </Box>
      </Box>

      <Box className="restaurant-facilities">
        {restaurant.facilities
          ?.split(",").map((facility, index) => (
            <Chip key={index} label={facility.trim()} icon={getFacilityIcon(facility.trim())} className="facility-chip" />
          ))}
      </Box>

      <Box display="flex" justifyContent="space-between" padding="0 40px" mt={4}>
        <Typography variant="h4" className="restaurant-price">₹{restaurant.price} per night</Typography>
      </Box>


      {loader && (
        <Box sx={{
          width: "100vw", height: "100vh", backgroundColor: "rgba(0, 0, 0, 0.5)", position: "fixed",
          top: 0, left: 0, display: "flex", justifyContent: "center", alignItems: "center", zIndex: 9999,
        }} >
          <Oval visible={true} height={80} width={80} color="#ffffff" secondaryColor="#ffffff" ariaLabel="oval-loading" strokeWidth={6} strokeWidthSecondary={6} />
        </Box>
      )}
    </Box>
  );
};

export default RestaurantView;