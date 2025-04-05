import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Typography, Table, TableHead, TableRow, Button, TableCell, TableBody, Paper, Box } from "@mui/material";
import Navbar from "../../Admin/Component/Navbar";
import { AppBar, Toolbar } from "@mui/material";
import { useNavigate } from "react-router-dom";

const BookStatus = () => {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:7002/booking/get")
            .then((res) => {
                setBookings(res.data);
                console.log("Response", res);
                console.log("Response Data", res.data);
            })
            .catch(() => console.error("Error fetching bookings:"));
    }, []);

        
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("Admintoken");
        if (!token) {
          navigate("/login"); // Redirect to login page if not logged in
        }
      }, [navigate]);
    
  const handleLogIn = () => {
    navigate("/admin/login")
    localStorage.removeItem('Admintoken');
  }

    // Filter bookings based on category
    const hotelBookings = bookings.filter((book) => book.category === "Hotel");
    const packageBookings = bookings.filter((book) => book.category === "Package");
    const restaurantBookings = bookings.filter((book) => book.category === "Restaurant");

    return (
        <Box sx={{ display: "flex" }}>
            <Navbar />

            <Box component="main" sx={{ flexGrow: 1, p: 3, backgroundColor: "#f9f9f9", minHeight: "100vh" }}>
                <AppBar
                    position="fixed"
                    sx={{
                        zIndex: (theme) => theme.zIndex.drawer + 1,
                        backgroundColor: "#fff",
                        boxShadow: "none",
                        borderBottom: "1px solid #ddd",
                    }}
                >
                    <Toolbar>
                        <Typography variant="h6" noWrap component="div" color="text.primary">
                            Add New Packages
                        </Typography>
                        <Box sx={{ flexGrow: 1 }} />
                        
          <Button sx={{ backgroundColor: 'blue', color: 'black'}} onClick={handleLogIn}>LogOut</Button>
                    </Toolbar>
                </AppBar>

                <Toolbar />
                <Typography variant="h5" sx={{ mb: 1, fontWeight: "bold", color: 'black' }}>
                    Admin Dashboard
                </Typography>
        <Container sx={{ minHeight: "90vh", minWidth: "75vw", display: 'flex', flexDirection: 'column', gap: '30px', paddingBottom: '50px' }}>
            <Typography variant="h4" fontWeight="bold" textAlign="center" gutterBottom pt={2} color="black">
                Booking Status
            </Typography>


            <Box boxShadow='1px 1px 7px 1px grey' borderRadius='12px' overflow='hidden'>
                <Typography variant="h5" fontWeight="bold" textAlign="center" gutterBottom pt={2}>
                    Package Bookings
                </Typography>
                <Paper sx={{ overflow: "hidden", mt: 3, p: 2, width: "100%" }}>

                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{ textAlign: "center" }}><b>S No</b></TableCell>
                                <TableCell sx={{ textAlign: "center" }}><b>Booked Date</b></TableCell>
                                <TableCell sx={{ textAlign: "center" }}><b>Book By</b></TableCell>
                                <TableCell sx={{ textAlign: "center" }}><b>Transaction ID</b></TableCell>
                                <TableCell sx={{ textAlign: "center" }}><b>Package Name</b></TableCell>
                                <TableCell sx={{ textAlign: "center" }}><b>Price</b></TableCell>
                                <TableCell sx={{ textAlign: "center" }}><b>Members</b></TableCell>
                                <TableCell sx={{ textAlign: "center" }}><b>Total Amount</b></TableCell>
                                <TableCell sx={{ textAlign: "center" }}><b>Status</b></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {packageBookings.length > 0 ? (
                                packageBookings.map((book, index) => (
                                    <TableRow key={book._id}>
                                        <TableCell sx={{ textAlign: "center" }}>{index + 1}</TableCell>
                                        <TableCell sx={{ textAlign: "center" }}>{book.bookedDate}</TableCell>
                                        <TableCell sx={{ textAlign: "center" }}>{book.bookBy}</TableCell>
                                        <TableCell sx={{ textAlign: "center" }}>{book.transactionIds}</TableCell>
                                        <TableCell sx={{ textAlign: "center" }}>{book.title}</TableCell>
                                        <TableCell sx={{ textAlign: "center" }}>${book.price}</TableCell>
                                        <TableCell sx={{ textAlign: "center" }}>{book.numbers}</TableCell>
                                        <TableCell sx={{ textAlign: "center" }}>${book.totalPrice}</TableCell>
                                        <TableCell>
                                            <Box sx={{ color: "green", fontWeight: "bold" }}>
                                                ✅ Paid
                                            </Box>
                                        </TableCell>
                                    </TableRow>
                                ))) : (<TableRow>
                                    <TableCell colSpan={9} align="center">No Package Bookings Found</TableCell>
                                </TableRow>)}
                        </TableBody>
                    </Table>
                </Paper>
            </Box>


            <Box boxShadow='1px 1px 7px 1px grey' borderRadius='12px' overflow='hidden'>
                <Typography variant="h5" fontWeight="bold" textAlign="center" gutterBottom pt={2}>
                    Hotel Bookings
                </Typography>
                <Paper sx={{ overflow: "hidden", mt: 3, p: 2, width: "100%", }} >
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{ textAlign: "center" }}><b>S No</b></TableCell>
                                <TableCell sx={{ textAlign: "center" }}><b>Check In</b></TableCell>
                                <TableCell sx={{ textAlign: "center" }}><b>Check Out</b></TableCell>
                                <TableCell sx={{ textAlign: "center" }}><b>Book By</b></TableCell>
                                <TableCell sx={{ textAlign: "center" }}><b>Transaction ID</b></TableCell>
                                <TableCell sx={{ textAlign: "center" }}><b>Hotel Name</b></TableCell>
                                <TableCell sx={{ textAlign: "center" }}><b>Price</b></TableCell>
                                <TableCell sx={{ textAlign: "center" }}><b>Room</b></TableCell>
                                <TableCell sx={{ textAlign: "center" }}><b>Total Amount</b></TableCell>
                                <TableCell sx={{ textAlign: "center" }}><b>Status</b></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {hotelBookings.length > 0 ? (
                                hotelBookings.map((book, index) => (
                                    <TableRow key={book._id}>
                                        <TableCell sx={{ textAlign: "center" }}>{index + 1}</TableCell>
                                        <TableCell sx={{ textAlign: "center" }}>{book.checkIn}</TableCell>
                                        <TableCell sx={{ textAlign: "center" }}>{book.checkOut}</TableCell>
                                        <TableCell sx={{ textAlign: "center" }}>{book.bookBy}</TableCell>
                                        <TableCell sx={{ textAlign: "center" }}>{book.transactionIds}</TableCell>
                                        <TableCell sx={{ textAlign: "center" }}>{book.title}</TableCell>
                                        <TableCell sx={{ textAlign: "center" }}>${book.price}</TableCell>
                                        <TableCell sx={{ textAlign: "center" }}>{book.numbers}</TableCell>
                                        <TableCell sx={{ textAlign: "center" }}>${book.totalPrice}</TableCell>
                                        <TableCell>
                                            <Box sx={{ color: "green", fontWeight: "bold" }}>
                                                ✅ Paid
                                            </Box>
                                        </TableCell>
                                    </TableRow>
                                ))
                            ) : (<TableRow>
                                <TableCell colSpan={9} align="center">No Hotel Bookings Found</TableCell>
                            </TableRow>)}
                        </TableBody>
                    </Table>
                </Paper>
            </Box>


            <Box boxShadow='1px 1px 7px 1px grey' borderRadius='12px' overflow='hidden'>
                <Typography variant="h5" fontWeight="bold" textAlign="center" gutterBottom pt={2}>
                    Restaurant Bookings
                </Typography>
                <Paper sx={{ overflow: "hidden", mt: 3, p: 2, width: "100%", }} >
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{ textAlign: "center" }}><b>S No</b></TableCell>
                                <TableCell sx={{ textAlign: "center" }}><b>Reserved Date</b></TableCell>
                                <TableCell sx={{ textAlign: "center" }}><b>Time Slot</b></TableCell>
                                <TableCell sx={{ textAlign: "center" }}><b>Book By</b></TableCell>
                                <TableCell sx={{ textAlign: "center" }}><b>Transaction ID</b></TableCell>
                                <TableCell sx={{ textAlign: "center" }}><b>Resaurant Name</b></TableCell>
                                <TableCell sx={{ textAlign: "center" }}><b>Price</b></TableCell>
                                <TableCell sx={{ textAlign: "center" }}><b>Guests</b></TableCell>
                                <TableCell sx={{ textAlign: "center" }}><b>Total Amout</b></TableCell>
                                <TableCell sx={{ textAlign: "center" }}><b>Status</b></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {restaurantBookings.length > 0 ? (
                                restaurantBookings.map((book, index) => (
                                    <TableRow key={book._id}>
                                        <TableCell sx={{ textAlign: "center" }}>{index + 1}</TableCell>
                                        <TableCell sx={{ textAlign: "center" }}>{book.bookedDate}</TableCell>
                                        <TableCell sx={{ textAlign: "center" }}>{book.time}</TableCell>
                                        <TableCell sx={{ textAlign: "center" }}>{book.bookBy}</TableCell>
                                        <TableCell sx={{ textAlign: "center" }}>{book.transactionIds}</TableCell>
                                        <TableCell sx={{ textAlign: "center" }}>{book.title}</TableCell>
                                        <TableCell sx={{ textAlign: "center" }}>${book.price}</TableCell>
                                        <TableCell sx={{ textAlign: "center" }}>{book.numbers}</TableCell>
                                        <TableCell sx={{ textAlign: "center" }}>${book.totalPrice}</TableCell>
                                        <TableCell>
                                            <Box sx={{ color: "green", fontWeight: "bold" }}>
                                                ✅ Paid
                                            </Box>
                                        </TableCell>
                                    </TableRow>
                                ))
                            ) : (<TableRow>
                                <TableCell colSpan={9} align="center">No Restaurant Bookings Found</TableCell>
                            </TableRow>)}
                        </TableBody>
                    </Table>
                </Paper>
            </Box>
        </Container>
        </Box>
        </Box>
    );
};

export default BookStatus;