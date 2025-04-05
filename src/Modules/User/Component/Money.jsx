import { useParams, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Container, Typography, TextField, Button, MenuItem, Select, FormControl, InputLabel, Box } from "@mui/material";
import pay1 from "../Images/pay1.png";
import pay2 from "../Images/pay2.png";
import pay3 from "../Images/pay3.jpg";
import pay4 from "../Images/pay4.png";
import pay9 from "../Images/pay9.jpg";
import { QRCodeCanvas } from "qrcode.react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import { CircularProgress } from "@mui/material";

const Payment = [{ methodes: pay1 }, { methodes: pay2 }, { methodes: pay3 }, { methodes: pay4 }, { methodes: pay9 }];

export default function Money() {
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();
  const { totalPrice, members } = location.state || {};
  const [paymentMessage, setPaymentMessage] = useState("");
  const paymentOptions = ["UPI", "MasterCard"];
  const [hotel, setHotel] = useState(null);
  const [uniqueId, setUniqueId] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [paymentDetails, setPaymentDetails] = useState({
    paymentMethod: "UPI",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    fullName: "",
    transactionIds: "",
  });

  console.log(totalPrice)

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
    rating: "",
    // category: "",
    location: "",
  });

  
  useEffect(() => {
    const generatedId = generatedTransactionId(12);
    setUniqueId(generatedId);
    console.log("Generated uniqueId:", generatedId);
  }, [id]);

  useEffect(() => {
    console.log("id:", id); // Check if id is defined
    if (id) {
      Axios.get(`http://localhost:7002/hotel/Money/${id}`)
        .then(async (res) => {
          console.log("Backend Response:", res.data); // Log the backend response
          if (res.data) {
            setHotel(res.data); // Update hotel state
            setFormData({
              name: res.data.name || "",
              description: res.data.description || "",
              price: res.data.price || "",
              rating: res.data.rating || "",
              location: res.data.location || "",
              image: res.data.image || "",
            });
          }
        })
        .catch((err) => {
          console.log("Error fetching data:", err);
        });
    }
  }, [id]);
  
  useEffect(() => {
    console.log("Updated FormData:", formData);
  }, [formData]);
  
  useEffect(() => {
    console.log("Updated Hotel:", hotel);
  }, [hotel]);

  const generatedTransactionId = (length = 12) => {
    const prefix = "TXN-";
    const timestamp = Date.now().toString().slice(-5);
    const randomString = Math.random().toString(36).substr(2, length - 5).toUpperCase();
    return prefix + randomString + timestamp;
  };

  const datePattern = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;

  const handleChange = (e) => {
    setPaymentDetails({ ...paymentDetails, [e.target.name]: e.target.value });
  };

  const handlePayment = async (e) => {
    setIsLoading(true);


    if (paymentDetails.paymentMethod === "MasterCard") {
        if (paymentDetails.cardNumber.length !== 12 || paymentDetails.cvv.length !== 3) {
            setPaymentMessage("❌ Invalid Card Number or CVV.");
            setIsLoading(false);
        } else if (!datePattern.test(paymentDetails.expiryDate)) {
            setPaymentMessage("❌ Check the Expiry date.");
            setIsLoading(false);
        } else {
            setPaymentMessage(`✅ Payment is successfully done with ${paymentDetails.paymentMethod}!`);
            setTimeout(() => {
                setIsLoading(false);
                navigate('/packages');
            }, 3000);
        }
    } else if (paymentDetails.paymentMethod === "UPI") {
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

      const now = new Date();
      const formattedDate = now.toLocaleDateString();
      const formattedTime = now.toLocaleTimeString();

      e.preventDefault();
      const AllData = new FormData();
      AllData.append("bookBy", paymentDetails.fullName);
      AllData.append("transactionIds", paymentDetails.transactionIds);
      AllData.append("title", formData.name);
      AllData.append("description", formData.description);
      AllData.append("rating", formData.rating);
      AllData.append("location", formData.location);
      AllData.append("price", formData.price);
      AllData.append("members", members);
      AllData.append("totalPrice", totalPrice);
      AllData.append("bookedTime", formattedTime);
      AllData.append("bookedDate", formattedDate);
      if (formData.image) {
          const response = await fetch(formData.image);
          if (!response.ok) {
            throw new Error("Failed to fetch image");
          }
          const blob = await response.blob();
          const file = new File([blob], "hotel-image.jpg", { type: blob.type });
          AllData.append("image", file);
        } 

      try {
        const res = await Axios.post("http://127.0.0.1:7002/packageBooking/insert", AllData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        if (res.data.savepackagebooking) {
          alert("Inserted Successfully");
        }
      } catch (error) {
        alert("Server error. Try again later.");
      }

      setTimeout(() => {
        setIsLoading(false);
        setPaymentMessage(`✅ Payment is successfully done with ${paymentDetails.paymentMethod}!`);
        setTimeout(() => {
          setPaymentMessage("");
          navigate("/packages");
        }, 2000);
      }, 2300);
    }
  };

  return (
    <Box width="100%" sx={{ minHeight: "100vh" }}>
      <Container maxWidth="sm" sx={{ mt: 10, p: 3, borderRadius: 3, bgcolor: "rgba(255, 255, 255, 0.1)", backdropFilter: "blur(10px)", boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)" }}>
        <Typography variant="h4" fontWeight="bold" textAlign="center" gutterBottom color="primary">Secure Payment</Typography>

        {/* Payment Form */}
        <TextField placeholder="Full Name" fullWidth variant="outlined" name="fullName" value={paymentDetails.fullName} onChange={handleChange} sx={{ mb: 2, bgcolor: "white", borderRadius: 1 }} />

        <FormControl fullWidth sx={{ mb: 2, "& .MuiInputBase-root": { height: 40 } }}>
          <InputLabel>Select Method</InputLabel>
          <Select label="Select Method" name="paymentMethod" value={paymentDetails.paymentMethod} onChange={handleChange}>
            {paymentOptions.map((method) => (
              <MenuItem key={method} value={method}>{method}</MenuItem>
            ))}
          </Select>
        </FormControl>

        {paymentDetails.paymentMethod === "MasterCard" ? (
          <Box>
            <TextField placeholder="Card Number" fullWidth type="number" variant="outlined" name="cardNumber" value={paymentDetails.cardNumber} onChange={handleChange} sx={{ mb: 2, bgcolor: "white", borderRadius: 1 }} />
            <Box sx={{ display: "flex", gap: 2 }}>
              <TextField placeholder="DD/MM/YYYY" fullWidth label="Expiry Date" variant="outlined" name="expiryDate" value={paymentDetails.expiryDate} onChange={handleChange} sx={{ mb: 2, bgcolor: "white", borderRadius: 1 }} />
              <TextField placeholder="XXX" fullWidth label="CVV" variant="outlined" type="number" name="cvv" value={paymentDetails.cvv} onChange={handleChange} sx={{ mb: 2, bgcolor: "white", borderRadius: 1 }} />
            </Box>
            <Typography textAlign="center" variant="h6" fontWeight="bold" sx={{ my: 2, color: "green" }}>Amount: ${totalPrice ? totalPrice : "Loading..."}</Typography>
          </Box>
        ) : (
          <Box>
            <Box display='flex' alignItems="center" justifyContent="space-around">
              <Box p={2}>
                {uniqueId ? (
                  <QRCodeCanvas value={uniqueId} size={140} />
                ) : (
                  <Typography>Generating QR Code...</Typography>
                )}
              </Box>

              <Box display='flex'>
                {Payment.map((pay, index) => {
                  return <img src={pay.methodes} width="40px" height="40px" key={index} alt="pay" />
                })}
              </Box>
            </Box>
            <TextField placeholder="Enter Transaction ID" fullWidth label="Transaction ID" variant="outlined" name="transactionIds" value={paymentDetails.transactionIds} onChange={handleChange} sx={{ mb: 2, bgcolor: "white", borderRadius: 1 }} />
            <Typography textAlign="center" variant="h6" fontWeight="bold" sx={{ my: 2, color: "green" }}>Amount: ${totalPrice ? totalPrice : "Loading..."}</Typography>
          </Box>
        )}

        <Button fullWidth variant="contained" color="success" sx={{ mt: 3, py: 1.5, fontSize: "1.2rem", borderRadius: 3 }} onClick={handlePayment} disabled={isLoading}>
          {isLoading ? <CircularProgress size={24} color="inherit" /> : "Pay Now"}
        </Button>
      </Container>

      {/* Payment Message */}
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

      {/* Loader */}
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