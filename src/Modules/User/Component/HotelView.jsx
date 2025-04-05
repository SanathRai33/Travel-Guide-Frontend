import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button, Box, Typography, Chip, TextField, Rating, Collapse, IconButton } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import PeopleIcon from "@mui/icons-material/People";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/material/styles";
import axios from "axios";
import "../css/HotelView.css";
import { Oval } from 'react-loader-spinner'
import WifiIcon from "@mui/icons-material/Wifi";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import SmokeFreeIcon from "@mui/icons-material/SmokeFree";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import PoolIcon from "@mui/icons-material/Pool";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import RoomServiceIcon from "@mui/icons-material/RoomService";
import FamilyRestroomIcon from "@mui/icons-material/FamilyRestroom";
import ElevatorIcon from "@mui/icons-material/Elevator";
import LocalLaundryServiceIcon from "@mui/icons-material/LocalLaundryService";
import LuggageIcon from "@mui/icons-material/Luggage";
import SecurityIcon from "@mui/icons-material/Security";
import { SportsEsports } from "@mui/icons-material";

const getFacilityIcon = (facility) => {
  const lowerFacility = facility.toLowerCase();

  if (lowerFacility.includes("pool")) return <PoolIcon style={{ color: "cyan" }} />;
  if (lowerFacility.includes("wifi")) return <WifiIcon style={{ color: "green" }} />;
  if (lowerFacility.includes("parking")) return <LocalParkingIcon style={{ color: "blue" }} />;
  if (lowerFacility.includes("non-smoking")) return <SmokeFreeIcon style={{ color: "red" }} />;
  if (lowerFacility.includes("air conditioning")) return <AcUnitIcon style={{ color: "blue" }} />;
  if (lowerFacility.includes("fitness")) return <FitnessCenterIcon style={{ color: "purple" }} />;
  if (lowerFacility.includes("24-hour front desk")) return <AccessTimeIcon style={{ color: "orange" }} />;
  if (lowerFacility.includes("restaurant")) return <RestaurantIcon style={{ color: "brown" }} />;
  if (lowerFacility.includes("room service")) return <RoomServiceIcon style={{ color: "goldenrod" }} />;
  if (lowerFacility.includes("family")) return <FamilyRestroomIcon style={{ color: "green" }} />;
  if (lowerFacility.includes("elevator")) return <ElevatorIcon style={{ color: "gray" }} />;
  if (lowerFacility.includes("laundry")) return <LocalLaundryServiceIcon style={{ color: "blue" }} />;
  if (lowerFacility.includes("luggage")) return <LuggageIcon style={{ color: "black" }} />;
  if (lowerFacility.includes("safety") || lowerFacility.includes("locker")) return <SecurityIcon style={{ color: "darkred" }} />;
  if (lowerFacility.includes("play")) return <SportsEsports style={{ color: "darkred" }} />;

  return <CheckIcon style={{ color: "green" }} />;
};


const HotelView = () => {
  const { id: myid } = useParams();
  const navigate = useNavigate();
  const [hotel, setHotel] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expanded, setExpanded] = useState(false);
  const [nights, setNights] = useState(0);
  const [number, setNumber] = useState(1);
  const [loader, setLoader] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  const today = new Date().toISOString().split("T")[0];
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minCheckOut = tomorrow.toISOString().split("T")[0];

  const [checkIn, setCheckIn] = useState(today);
  const [checkOut, setCheckOut] = useState(minCheckOut);

  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  }));

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const Policy = [
    "Booking Confirmation: All reservations are subject to availability and will be confirmed via email or SMS.",
    "Payment Policy: Full or partial payment may be required at the time of booking. We accept credit/debit cards, UPI, and other online payment methods.",
    "Cancellation & Refund: Cancellations made before 48 hours of check-in are eligible for a refund (subject to hotel policy). Late cancellations or no-shows may incur charges.",
    "Check-in & Check-out: Check-in time is 2:00 PM, and check-out is 11:00 AM. Early check-in or late check-out requests are subject to availability and additional charges.",
    "Guest Requirements: A valid government ID must be presented at the time of check-in. The booking name must match the ID provided.",
    "Pricing & Taxes: Prices shown include applicable taxes unless stated otherwise. Extra charges may apply for additional services or facilities.",
    "Hotel Policies: Each hotel has its own policies regarding pets, smoking, visitors, and extra guests. Please check the hotel’s rules before booking.",
    "Liability Disclaimer: We act as a booking platform and are not responsible for hotel service quality, cancellations, or disputes between the guest and the hotel.",
    "Changes & Modifications: We reserve the right to modify these terms, update pricing, or make changes to hotel policies at any time.",
    "User Conduct: Any fraudulent bookings, misuse of our platform, or violation of terms may result in account suspension or legal action.",
  ];

  useEffect(() => {
    if (myid) {
      setLoading(true);
      axios.get(`http://localhost:7002/hotel/SingleView/${myid}`)
        .then((response) => {
          setHotel(response.data.data);
          console.log(response.data.data)
          setLoading(false);
        })
        .catch((err) => {
          setError("Failed to load hotel details.");
          setLoading(false);
        })
    }
  }, [myid]);

  const handleCheckInChange = (e) => {
    const selectedDate = e.target.value;
    setCheckIn(selectedDate);
    if (checkOut && checkOut <= selectedDate) {
      const nextDay = new Date(selectedDate);
      nextDay.setDate(nextDay.getDate() + 1);
      setCheckOut(nextDay.toISOString().split("T")[0]);
    }
  };

  const handleCheckOutChange = (e) => {
    const selectedDate = e.target.value;
    if (selectedDate > checkIn) {
      setCheckOut(selectedDate);
    } else {
      alert("Check-out date must be after Check-in date!");
    }
  };

  useEffect(() => {
    const calculateNights = () => {
      if (checkIn && checkOut) {
        const nightsCount = Math.max(
          (new Date(checkOut) - new Date(checkIn)) / (1000 * 60 * 60 * 24),
          1
        );
        setNights(nightsCount);
      }
    };
    calculateNights();
  }, [checkIn, checkOut]);


  useEffect(() => {
    setTotalPrice(number * hotel?.price * nights);
  }, [number, nights, hotel]);

  if (loading) return <h2>Loading Hotel Details...</h2>;
  if (error) return <h2>{error}</h2>;
  if (!hotel) return <h2>Hotel not found.</h2>;

  const handleChange = (e) => {
    if (number >= 1) {
      setNumber(e.target.value);
      // } else if(number <= 19){
      //   setNumber(e.target.value)
    } else {
      setNumber(1);
    }
  };

  const category = 2;

  const handlePayment = () => {
    setLoader(true);
    navigate(`/Payment/${hotel._id}`, {
      state: {
        totalPrice: totalPrice,
        rooms: number,
        checkIn: checkIn,
        checkOut: checkOut,
        category: category
      },
    });

    console.log(checkIn, checkOut)
    setTimeout(() => {
      setLoader(false);
    }, 1000);
  };

  return (
    <Box className="hotel-view-container" >
      <Button onClick={() => navigate("/hotels")} variant="contained" className="back-button">
        ← Back to Listings
      </Button>

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

      <Box className="hotel-link">
        <a href="#hotel-main-info">Overview</a>
        <a href="#description">Description</a>
        <a href="#facility">Facility</a>
        <a href="#policy" onClick={handleExpandClick}>Policy</a>
        <a href="#book">Book</a>
      </Box>

      <Typography variant="body1" className="hotel-description" id="description">{hotel.description}</Typography>

      <Box className="hotel-facilities">
        {hotel.facilities
          ?.split(",").map((facility, index) => (
            <Chip key={index} label={facility.trim()} icon={getFacilityIcon(facility.trim())} className="facility-chip" />
          ))}
      </Box>

      <Box display="flex" justifyContent="space-between" padding="0 40px" mt={4}>
        <Typography variant="h4" className="hotel-price">₹{hotel.price} per night</Typography>
        <Chip label={hotel.deal} color="primary" className="hotel-deal" />
      </Box>

      <Typography variant="h6" fontWeight="900" textAlign="start" p={2} color="black">Select your date</Typography>
      <Box className="hotel-dates" id="book">
        <TextField label="Check-in Date" type="date" value={checkIn} fullWidth onChange={handleCheckInChange} inputProps={{ min: today }} />
        <TextField label="Check-out Date" type="date" value={checkOut} fullWidth onChange={handleCheckOutChange} inputProps={{ min: minCheckOut }} />
      </Box>

      <Box display="flex" justifyContent="center" gap={4} mt={3}>
        <TextField label="Total room" type="number" min="1" InputLabelProps={{ shrink: true }} value={number} onChange={handleChange} />
        <Typography variant="h6" fontSize="16px" border="1px solid #cecece" p={1} borderRadius={1}>Total Nights: {nights}</Typography>
        <Typography variant="h6" fontSize="16px" border="1px solid #cecece" p={1} borderRadius={1}>Total Amount: ₹{totalPrice}</Typography>
      </Box>
      <Button variant="contained" color="primary" onClick={handlePayment} sx={{ mr: 2, mt: 3 }}>Book Now</Button>
      <br />

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

export default HotelView;