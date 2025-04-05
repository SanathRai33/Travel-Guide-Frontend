import { useParams, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Container, Typography, TextField, Button, MenuItem, Select, FormControl, InputLabel, Box } from "@mui/material";
import pay1 from "../Images/pay1.png";
import pay2 from "../Images/pay2.png";
import pay3 from "../Images/pay3.jpg";
import pay4 from "../Images/pay4.png";
import pay9 from "../Images/pay9.jpg";
import { QRCodeCanvas } from "qrcode.react";
import { useNavigate } from "react-router-dom";
import { CircularProgress } from "@mui/material";

const Payment = [{ methodes: pay1 }, { methodes: pay2 }, { methodes: pay3 }, { methodes: pay4 }, { methodes: pay9 }];

export default function PaymentPage() {
  const navigate = useNavigate();
  const { id: myid } = useParams();
  const location = useLocation();
  const { totalPrice, members, rooms, checkIn, checkOut, category, reserveDate, time, guests } = location.state || {};
  const [paymentMessage, setPaymentMessage] = useState("");
  const paymentOptions = ["UPI", "MasterCard"];
  const [uniqueId, setUniqueId] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [paymentDetails, setPaymentDetails] = useState({
    paymentMethod: "UPI",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    fullName: "",
    transactionIds: "",
  });

  const [formData, setFormData] = useState({
    title: "",
    price: "",
    location: "",
  });


  useEffect(() => {
    setUniqueId(generatedTransactionId(12));
  }, []);


  useEffect(() => {
    if (myid) {
      console.log('myid', myid)
      let endpoint;
      if (category === 1) {
        endpoint = `http://localhost:7002/package/Payment/${myid}`;
      } else if (category === 3) {
        endpoint = `http://localhost:7002/restaurant/Payment/${myid}`;
      } else {
        endpoint = `http://localhost:7002/hotel/Payment/${myid}`;
      }
          Axios.get(endpoint)
          .then((res)=>{
            setFormData(res.data.data);
            console.log("Data we got finally",res.data.data)
          })
          .catch((err)=>{
            setError(true)
            console.log(err)
          })
    }
  }, [myid, category]);


  useEffect(() => {
    console.log("Updated formData:", formData);
    console.log(uniqueId)
  }, [formData]);


  const generatedTransactionId = (length = 12) => {
    const prefix = "TXN-";
    const timestamp = Date.now().toString().slice(-5);
    const randomString = Math.random().toString(36).substr(2, length - 5).toUpperCase();
    return prefix + randomString + timestamp;
  };

  const handleChange = (e) => {
    setPaymentDetails({ ...paymentDetails, [e.target.name]: e.target.value });
  };

  const handlePayment = async (e) => {
    e.preventDefault();
    setIsLoading(true);
  
    if (paymentDetails.paymentMethod === "UPI") {
      if (!paymentDetails.fullName || typeof paymentDetails.fullName !== "string" || !paymentDetails.fullName.trim() || paymentDetails.fullName.trim().length < 3) {
        setPaymentMessage("❌ Enter a valid name.");
        setTimeout(() => setPaymentMessage(""), 2000);
        setIsLoading(false);
        return;
      }
  
      if (paymentDetails.transactionIds !== uniqueId) {
        setPaymentMessage("❌ Invalid UPI Transaction ID.");
        setTimeout(() => setPaymentMessage(""), 2000);
        setIsLoading(false);
        return;
      }
  
      console.log("Form Data", formData);
  
      const now = new Date();
      const formattedDate = now.toLocaleDateString();
  
      const AllData = new FormData();
      AllData.append("bookBy", paymentDetails.fullName);
      AllData.append("transactionIds", paymentDetails.transactionIds);
      AllData.append("title", formData.title || formData.name);
      AllData.append("location", formData.location);
      AllData.append("price", formData.price); 
      AllData.append("totalPrice", totalPrice);
      AllData.append("bookedDate", formattedDate);
      AllData.append("time", time );
      AllData.append("numbers", members || rooms || guests );
      AllData.append("checkIn", checkIn || reserveDate || "");
      AllData.append("checkOut", checkOut || "");
      AllData.append("category", category === 1 ? "Package" : category === 2 ? "Hotel" : "Restaurant");
  
      try {
        const response = await Axios.post("http://127.0.0.1:7002/booking/insert", AllData);
      
        if (response.data.savebooking) { 
          console.log("Response from Database", response.data);
        }
      } catch (error) {
        console.error("Error inserting data:", error);
        alert("Server error. Try again later.");
      } finally {
        setIsLoading(false);
        setPaymentMessage(`✅ Payment is successfully done with ${paymentDetails.paymentMethod}!`);
        setTimeout(() => {
          setPaymentMessage("");
          navigate('/');
        }, 2000);
      }
    }
  }

  return (
    <Box width="100%" sx={{ minHeight: "100vh" }}>
      <Container maxWidth="sm" sx={{ mt: 10, p: 3, borderRadius: 3, bgcolor: "rgba(255, 255, 255, 0.1)", backdropFilter: "blur(10px)", boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)" }}>
        <Typography variant="h4" fontWeight="bold" textAlign="center" gutterBottom color="primary">Secure Payment</Typography>


        <TextField placeholder="Full Name" fullWidth variant="outlined" name="fullName" value={paymentDetails.fullName} onChange={handleChange} sx={{ mb: 2, bgcolor: "white", borderRadius: 1 }} />

        <FormControl fullWidth sx={{ mb: 2, "& .MuiInputBase-root": { height: 40 } }}>
          <InputLabel>Select Method</InputLabel>
          <Select label="Select Method" name="paymentMethod" value={paymentDetails.paymentMethod} onChange={handleChange}>
            {paymentOptions.map((method) => (
              <MenuItem key={method} value={method}>{method}</MenuItem>
            ))}
          </Select>
        </FormControl>

          <Box>
            <Box display="flex" alignItems="center" justifyContent="space-around">
              <Box p={2}>
                {uniqueId ? <QRCodeCanvas value={uniqueId} size={140} /> : <Typography>Generating QR Code...</Typography>}
              </Box>
              <Box display="flex">
                {Payment.map((pay, index) => (
                  <img src={pay.methodes} width="40px" height="40px" key={index} alt="pay" />
                ))}
              </Box>
            </Box>
            <TextField placeholder="Enter Transaction ID" fullWidth label="Transaction ID" variant="outlined" name="transactionIds" value={paymentDetails.transactionIds} onChange={handleChange} sx={{ mb: 2, bgcolor: "white", borderRadius: 1 }} />
            <Typography textAlign="center" variant="h6" fontWeight="bold" sx={{ my: 2, color: "green" }}>Amount: ${totalPrice ? totalPrice : "Loading..."}</Typography>
          </Box>

        <Button fullWidth variant="contained" color="success" sx={{ mt: 3, py: 1.5, fontSize: "1.2rem", borderRadius: 3 }} onClick={handlePayment} disabled={isLoading}>
          {isLoading ? <CircularProgress size={24} color="inherit" /> : "Pay Now"}
        </Button>
      </Container>


      {paymentMessage && (
        <Box sx={{
          width: "100vw", height: "100vh", backgroundColor: "rgba(0, 0, 0, 0.5)", position: "fixed",
          top: 0, left: 0, display: "flex", justifyContent: "center", alignItems: "center", zIndex: 9999,
        }}>
          <Typography textAlign="center" sx={{
            color: paymentMessage.includes("❌") ? "red" : "green",
            backgroundColor: "white", padding: "10px 20px", borderRadius: "8px", boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
            zIndex: 10000, width: "400px", height: "200px", display: "flex", justifyContent: "center", alignItems: "center"
          }}>
            <Typography fontWeight="bold" fontSize="20px">{paymentMessage}</Typography>
          </Typography>
        </Box>
      )}


      {isLoading && (
        <Box sx={{
          width: "100vw", height: "100vh", backgroundColor: "rgba(0, 0, 0, 0.5)", position: "fixed",
          top: 0, left: 0, display: "flex", justifyContent: "center", alignItems: "center", zIndex: 9999,
        }}>
          <CircularProgress size={60} color="primary" />
        </Box>
      )}
    </Box>
  );
}