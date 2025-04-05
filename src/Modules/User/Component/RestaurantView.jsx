import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Typography, Card, CardContent, CardMedia, TextField, Box, Button, Chip, Collapse, IconButton, Rating, MenuItem } from "@mui/material";
import Axios from "axios";
import AspectRatio from '@mui/joy/AspectRatio';
import CheckIcon from "@mui/icons-material/Check";
import PeopleIcon from "@mui/icons-material/People";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/material/styles";
import { Oval } from 'react-loader-spinner';
import '../css/RestaurantView.css'
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

const Policy = [
  "Reservation Confirmation: All table reservations are subject to availability and will be confirmed via email or SMS.",
  "Booking Duration: Reserved tables will be held for 15 minutes from the scheduled time. If the guest does not arrive within this period, the reservation may be released.",
  "Guest Count: The number of guests specified at the time of booking should be accurate. Any changes must be informed in advance to accommodate seating arrangements.",
  "Cancellation & No-Show Policy: Cancellations should be made at least 24 hours in advance. Failure to show up without prior notice may result in a no-show charge.",
  "Payment Policy: Some bookings may require a deposit or full payment in advance, especially for large groups, private dining, or special events.",
  "Table Preference: While we try to accommodate specific table requests (e.g., outdoor, window seating), assignments are subject to availability.",
  "Late Arrivals: If you expect to be late, please inform the restaurant. We may extend the hold time depending on availability.",
  "Special Requests: Dietary preferences, allergy considerations, or special event setups must be mentioned at the time of booking and are subject to restaurant feasibility.",
  "Time Limits for Dining: During peak hours, dining time may be limited (e.g., 90 minutes per table) to ensure all guests get a chance to dine.",
  "Outside Food & Beverages: Guests are not allowed to bring outside food or drinks unless explicitly permitted by the restaurant.",
  "Children & Pets: Some restaurants may have policies regarding children and pets. Please check with the restaurant in advance if special arrangements are needed.",
  "Behavior & Conduct: Any disruptive behavior, excessive intoxication, or violation of restaurant rules may lead to refusal of service.",
  "Service Charges & Taxes: Prices are subject to applicable taxes and service charges. Additional charges may apply for special requests or premium seating.",
  "Event & Group Bookings: Large group reservations or private events may require a pre-payment and have separate cancellation policies.",
  "Modification of Terms: The restaurant reserves the right to modify these policies at any time without prior notice."
];



const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const RestaurantView = () => {
  const { id: myid } = useParams();
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);
  const [restaurant, setRestaurant] = useState(null);
  const [expanded, setExpanded] = useState(false);
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

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

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
      <Button onClick={() => navigate("/restaurants")} variant="contained" sx={{ mb: 2 }}>
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

      <Box className="restaurant-link">
        <a href="#restaurant-main-info">Overview</a>
        <a href="#facility">Facility</a>
        <a href="#policy" onClick={handleExpandClick}>Policy</a>
        <a href="#book">Book</a>
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


      <Box display="flex" justifyContent="center" gap={4} mt={3}>
        <TextField type="date" label="Book the Date" name="date" value={date} onChange={handleChange} sx={{ mt: 2 }} inputProps={{ min: new Date().toISOString().split("T")[0] }} />
        <TextField select label="Time" name="time" value={time} onChange={handleChange} sx={{ mt: 2, minWidth: "200px" }} >
        {timings.map((timing, index) => (
          <MenuItem key={index} value={timing.trim()}>
            {timing.trim()}
          </MenuItem>
        ))}
        </TextField>
        <TextField type="number" label="Number of Guests" name="guests" value={guests} onChange={handleChange} sx={{ mt: 2 }} inputProps={{ min: 1 }} />
        <Typography variant="body1" fontSize="16px" sx={{ minWidth: "200px", mt: 2 , pt: 2}} border="1px solid  #cecece" borderRadius={1}>Total Amount: ₹{totalPrice}</Typography>

      </Box>


      <Button variant="contained" onClick={handlePayment} color="primary" fullWidth sx={{ mt: 3, borderRadius: 2 }}>
        Confirm Booking
      </Button>

      <Typography id="policy" variant="h6" sx={{ textAlign: "center", marginTop: "30px", fontWeight: "bold", color: "#333" }}>
        Terms & Conditions
      </Typography>
      <ExpandMore expand={expanded} onClick={handleExpandClick}>
        <ExpandMoreIcon />
      </ExpandMore>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <Box id="policy" sx={{ maxWidth: "1000px", margin: "auto", padding: "20px", textAlign: "justify" }}>
          {Policy.map((term, index) => (
            <Typography key={index} sx={{ marginBottom: "8px", fontSize: "16px", lineHeight: "1.5", color: "#555" }}>
              <strong>{index + 1}. </strong> {term}
            </Typography>
          ))}
          <Typography sx={{ marginTop: "15px", textAlign: "center", fontWeight: "bold", color: "#e63946" }}>
            By proceeding with the booking, you acknowledge and accept these terms. If you have any questions, please contact our support team.
          </Typography>
        </Box>
      </Collapse>

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