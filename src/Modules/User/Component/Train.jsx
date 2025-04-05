import React, { useState } from "react";
import { TextField, Button, MenuItem, Typography, Card, CardContent, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

const stationsList = [
  { StationName: "New Delhi", StationCode: "NDLS" },
  { StationName: "Mumbai Central", StationCode: "BCT" },
  { StationName: "Kolkata Howrah", StationCode: "HWH" },
  { StationName: "Chennai Central", StationCode: "MAS" },
  { StationName: "Bangalore City", StationCode: "SBC" },
  { StationName: "Hyderabad Deccan", StationCode: "HYB" },
  { StationName: "Manglore Central", StationCode: "MAQ" },
];

const trainInfo = [
  { name: "Rajdhani Express", number: "12951" },
  { name: "Shatabdi Express", number: "12002" },
  { name: "Garib Rath Express", number: "12203" },
  { name: "Duronto Express", number: "12269" },
  { name: "Intercity Express", number: "12411" },
  { name: "Jan Shatabdi Express", number: "12051" },
  { name: "Vande Bharat Express", number: "22439" },
  { name: "Howrah Mail", number: "12809" },
  { name: "Deccan Queen", number: "12123" },
  { name: "Karnataka Express", number: "12627" }
];

const stationDistances = {
  "NDLS-BCT": 1384, "NDLS-HWH": 1447, "NDLS-MAS": 2180, "NDLS-SBC": 2150, "NDLS-HYB": 1670, "NDLS-MAQ": 2300,
  "BCT-HWH": 1968, "BCT-MAS": 1338, "BCT-SBC": 984, "BCT-HYB": 789, "BCT-MAQ": 893,
  "HWH-MAS": 1659, "HWH-SBC": 1871, "HWH-HYB": 1545, "HWH-MAQ": 2443,
  "MAS-SBC": 358, "MAS-HYB": 705, "MAS-MAQ": 706,
  "SBC-HYB": 570, "SBC-MAQ": 352,
  "HYB-MAQ": 870
};

const ticketTypes = [
  { type: "General", rate: 0.5 },
  { type: "Sleeper", rate: 2 },
  { type: "AC", rate: 5 }
];

const Train = () => {
  const [fromStation, setFromStation] = useState("");
  const [toStation, setToStation] = useState("");
  const [numTickets, setNumTickets] = useState(1);
  const [ticketType, setTicketType] = useState("General");
  const [distance, setDistance] = useState(null);
  const [fare, setFare] = useState(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [trainName, setTrainName] = useState("");
  const [trainCode, setTrainCode] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const chargeRates = { General: 2, Sleeper: 3, AC: 5 };

  const calculateDistanceAndFare = () => {
    if (!fromStation || !toStation || fromStation === toStation) {
      alert("Please select different 'From' and 'To' stations.");
      return;
    }

    if(!date){
      alert("Please confirm your date befor check")
      return;
    }

    const key = `${fromStation.toUpperCase()}-${toStation.toUpperCase()}`;
    const reverseKey = `${toStation.toUpperCase()}-${fromStation.toUpperCase()}`;

    const selectedDistance = stationDistances[key] || stationDistances[reverseKey];

    if (selectedDistance) {
      setDistance(selectedDistance);
      setFare(selectedDistance * chargeRates[ticketType] * numTickets);

      const randomIndex = Math.floor(Math.random() * trainInfo.length);
      const randomTrain = trainInfo[randomIndex];
      setTrainName(randomTrain.name);
      setTrainCode(randomTrain.number);

      
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      setTime(`${hours}:${minutes}`);
    } else {
      alert("Distance data not available for the selected stations.");
    }
  };

  const navigate = useNavigate();

  const handleBooking = () => {
    if (phone.length !== 10) {
      alert("Enter a valid phone number");
    } else if (name && phone && fromStation && toStation && distance && fare && numTickets > 0 && date) {
      alert(`🎟️ Ticket Booked! 🎟️
      Name: ${name}
      Phone: ${phone}
      From: ${fromStation}
      To: ${toStation}
      Ticket Type: ${ticketType}
      Number of Tickets: ${numTickets}
      Distance: ${distance} km
      Total Fare: ₹${fare}
      Train Name: ${trainName}
      Train Code: ${trainCode}
      Date: ${date}
      Time: ${time}`);
      navigate(`/Payment/${fare}`);
    } else {
      alert("Please fill all fields correctly!");
    }
  };

  return (
    <Card sx={{ maxWidth: 600, margin: "auto", mb: 5, p: 3, boxShadow: 4, textAlign: "center" }}>
      <CardContent>
        <Typography variant="h5" fontWeight="bold">
          <img src="https://cdn-icons-png.flaticon.com/128/2062/2062051.png" width="40px" alt="train" /> Indian Railway Ticket Booking
        </Typography>

        <Grid container spacing={2} sx={{ mt: 2 }}>
          <Grid item xs={6}>
            <TextField fullWidth label="Full Name" value={name} onChange={(e) => setName(e.target.value)} required />
          </Grid>
          <Grid item xs={6}>
            <TextField fullWidth label="Phone Number" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
          </Grid>
        </Grid>

        <Grid container spacing={2} sx={{ mt: 2 }}>
          <Grid item xs={6}>
            <TextField fullWidth select label="From Station" value={fromStation} onChange={(e) => setFromStation(e.target.value)}>
              {stationsList.map((station) => (
                <MenuItem key={station.StationCode} value={station.StationCode}>
                  {station.StationName} ({station.StationCode})
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={6}>
            <TextField fullWidth select label="To Station" value={toStation} onChange={(e) => setToStation(e.target.value)}>
              {stationsList.map((station) => (
                <MenuItem key={station.StationCode} value={station.StationCode}>
                  {station.StationName} ({station.StationCode})
                </MenuItem>
              ))}
            </TextField>
          </Grid>
        </Grid>

        <Grid container spacing={2} sx={{ mt: 2 }}>
          <Grid item xs={6}>
            <TextField fullWidth select label="Ticket Type" value={ticketType} onChange={(e) => setTicketType(e.target.value)}>
              {ticketTypes.map((ticket) => (
                <MenuItem key={ticket.type} value={ticket.type}>
                  {ticket.type} (₹{ticket.rate}/km)
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={6}>
            <TextField fullWidth label="Number of Tickets" type="number" value={numTickets} onChange={(e) => setNumTickets(Number(e.target.value))} />
          </Grid>
        </Grid>

        <Grid container spacing={2} sx={{ mt: 2 }}>
          <Grid item xs={6}>
            <TextField fullWidth label="Available Train" value={trainName} disabled />
          </Grid>
          <Grid item xs={6}>
            <TextField fullWidth label="Train Code" value={trainCode} disabled />
          </Grid>
        </Grid>

        <Grid container spacing={2} sx={{ mt: 2 }}>
          <Grid item xs={6}>
            <TextField
              fullWidth
              type="date"
              label="Travel Date"
              InputLabelProps={{ shrink: true }}
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              type="time"
              label="Departure Time"
              InputLabelProps={{ shrink: true }}
              value={time}
              disabled
            />
          </Grid>
        </Grid>

        <Button fullWidth variant="contained" onClick={calculateDistanceAndFare} sx={{ mt: 3 }}>
          Search Train & Fare
        </Button>

        {distance && fare && (
          <Grid container spacing={2} sx={{ mt: 2 }}>
            <Grid item xs={6}>
              <Typography>Distance: <strong>{distance} km</strong></Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography>Fare: <strong>₹{fare}</strong></Typography>
            </Grid>
          </Grid>
        )}

        <Button fullWidth variant="contained" color="success" onClick={handleBooking} sx={{ mb: 3, mt: 3 }}>
          Book Ticket
        </Button>

        <Typography sx={{ mt: 3, fontSize: "14px", color: "gray", display: "inline" }}>Authorized by IRCTC</Typography>
        <img src="https://logos-world.net/wp-content/uploads/2020/11/IRCTC-Logo.png" alt="IRCTC Logo" style={{ width: "100px", marginTop: "5px" }} />
      </CardContent>
    </Card>
  );
};

export default Train;