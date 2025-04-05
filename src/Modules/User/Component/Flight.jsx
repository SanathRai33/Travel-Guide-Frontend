import React, { useState } from "react";
import { TextField, Button, MenuItem, Typography, Card, CardContent, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

const airports = [
  { name: "New York (JFK)", code: "JFK" },
  { name: "Los Angeles (LAX)", code: "LAX" },
  { name: "Chicago (ORD)", code: "ORD" },
  { name: "London Heathrow (LHR)", code: "LHR" },
  { name: "Dubai International (DXB)", code: "DXB" },
];

const flightInfo = [
  { name: "Vistara Airlines", color: 'rgb(80 23 74)', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqkl1_I_pkH0_hvh-yYW7i2_C_WBdjsIMF7Q&s" },
  { name: "Delta Airlines", color: '#1f07a5', image: "https://logos-world.net/wp-content/uploads/2021/08/Delta-Emblem.png" },
  { name: "American Airlines", color: '#45596a', image: "https://is2-ssl.mzstatic.com/image/thumb/Purple123/v4/e5/3a/b0/e53ab0eb-5430-b84b-fa15-77e0f4958fc2/source/200x200bb.jpg" },
  { name: "Emirates Airlines", color: 'gold', image: "https://logos-world.net/wp-content/uploads/2020/03/Emirates-Logo.png" },
  { name: "China Southern Airlines", color: 'rgb(0 147 208)', image: "https://companieslogo.com/img/orig/600029.SS-e7ea2d1d.png?t=1720244490" },
];

const ticketPrices = {
  Economy: 100,
  Business: 250,
  FirstClass: 500,
};

const FlightBooking = () => {
  const [passenger, setPassenger] = useState({
    name: "",
    phone: "",
    from: "",
    to: "",
    date: "",
    time: "",
    ticketType: "Economy",
    numTickets: 1,
  });

  const [fare, setFare] = useState(0);
  const [random, setRandom] = useState(null);

  const handleChange = (e) => {
    setPassenger({ ...passenger, [e.target.name]: e.target.value });
  };

  const getCurrentDateTime = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate() + 1).padStart(2, "0");
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");

    return {
      date: `${year}-${month}-${day}`,
      time: `${hours}:${minutes}`,
    };
  };

  const calculateFare = () => {
    if (!passenger.from || !passenger.to || passenger.from === passenger.to) {
      alert("Please select valid departure and destination airports.");
      return;
    }

    // Automatically fill date and time
    const { date, time } = getCurrentDateTime();
    setPassenger((prev) => ({ ...prev, date, time }));

    const totalFare = ticketPrices[passenger.ticketType] * passenger.numTickets;
    setFare(totalFare);
    setRandom(Math.floor(Math.random() * flightInfo.length));
  };

  const navigate = useNavigate();

  const handleBooking = () => {
    if (
      passenger.name &&
      passenger.phone &&
      passenger.from &&
      passenger.to &&
      passenger.date &&
      passenger.time &&
      fare > 0
    ) {
      alert(`Welcome to ${flightInfo[random].name}. Your ticket booked!\nPassenger: ${passenger.name}\nPhone: ${passenger.phone}\nFrom: ${passenger.from}\nTo: ${passenger.to}\nDate: ${passenger.date}\nTime: ${passenger.time}\nClass: ${passenger.ticketType}\nTickets: ${passenger.numTickets}\nTotal Fare: $${fare}`);
      navigate(`/Payment/${fare}`);
    } else {
      alert("Please fill all fields correctly!");
    }
  };

  return (
    <Card className="flight-ticket" style={{ maxWidth: "1200px", margin: "auto", padding: "5px 10px" }}>
      <CardContent>
        {random !== null && flightInfo.length > 0 ? (
          <Typography sx={{ display: "flex", alignItems: "center", justifyContent: "center", pb: "5", minHeight: '105px' }} gutterBottom>
            <img
              src={flightInfo[random].image}
              alt={flightInfo[random].name}
              style={{ maxHeight: '100px', width: "100px", marginTop: "5px", paddingBottom: "10px" }}
            />
            <Typography
              style={{ paddingBottom: "10px" }}
              variant="h4"
              fontWeight={900}
              color={flightInfo[random].color}
              fontStyle={"oblique"}
              align="center"
              gutterBottom
            >
              {flightInfo[random].name}
            </Typography>
          </Typography>
        ) : (
          <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
            <img src="https://cdn-icons-png.flaticon.com/128/10521/10521422.png" alt="No Data" style={{ maxWidth: "50px" }} />
            <Typography variant="h5" align="center" color="black" fontWeight={900}>Enter full detail to check flight availability</Typography>
          </CardContent>
        )}

        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField fullWidth label="Passenger Name" name="name" value={passenger.name} onChange={handleChange} sx={{ '& .MuiInputBase-root': { height: '40px' } }} />
          </Grid>
          <Grid item xs={6}>
            <TextField fullWidth label="Phone Number" name="phone" value={passenger.phone} onChange={handleChange} sx={{ '& .MuiInputBase-root': { height: '40px' } }} />
          </Grid>

          <Grid item xs={6}>
            <TextField select fullWidth label="From" name="from" value={passenger.from} onChange={handleChange} sx={{ '& .MuiInputBase-root': { height: '40px' } }}>
              {airports.map((airport) => (
                <MenuItem key={airport.code} value={airport.name}>{airport.name}</MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={6}>
            <TextField select fullWidth label="To" name="to" value={passenger.to} onChange={handleChange} sx={{ '& .MuiInputBase-root': { height: '40px' } }}>
              {airports.map((airport) => (
                <MenuItem key={airport.code} value={airport.name}>{airport.name}</MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item xs={6}>
            <TextField fullWidth type="date" label="Travel Date" name="date" InputLabelProps={{ shrink: true }} value={passenger.date} onChange={handleChange} sx={{ '& .MuiInputBase-root': { height: '40px' } }} disabled/>
          </Grid>
          <Grid item xs={6}>
            <TextField fullWidth type="time" label="Departure Time" name="time" InputLabelProps={{ shrink: true }} value={passenger.time} onChange={handleChange} sx={{ '& .MuiInputBase-root': { height: '40px' } }} disabled/>
          </Grid>

          <Grid item xs={6}>
            <TextField select fullWidth label="Class" name="ticketType" value={passenger.ticketType} onChange={handleChange} sx={{ '& .MuiInputBase-root': { height: '40px' } }}>
              {Object.keys(ticketPrices).map((type) => (
                <MenuItem key={type} value={type}>{type}</MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={6}>
            <TextField fullWidth type="number" label="Tickets" name="numTickets" value={passenger.numTickets} onChange={handleChange} sx={{ '& .MuiInputBase-root': { height: '40px' } }} />
          </Grid>

          <Grid item xs={6}>
            <Button fullWidth variant="contained" color="primary" onClick={calculateFare}>Check Availability & Fare</Button>
          </Grid>
          <Grid item xs={6}>
            <Button fullWidth variant="contained" color="success" onClick={handleBooking}>Book Ticket</Button>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h6" align="center">Total Fare: ${fare}</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default FlightBooking;