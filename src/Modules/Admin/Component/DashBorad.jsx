import React, { useState, useEffect } from 'react'
import { Box, AppBar, Toolbar, Typography, Button } from "@mui/material";
import Navbar from './Navbar';
import PackageList from './PackageList';
import HotelList from './HotelList';
import { EyeIcon } from 'lucide-react';
import RestaurantList from './RestaurantList';
import { useNavigate } from 'react-router-dom';

export default function DashBorad() {

    const [packages, setPackages] = useState(false)
    const [hotels, setHotels] = useState(false)
    const [restaurants, setRestuarants] = useState(false)
    const [viewProduct, setViewProduct] = useState(true)


    const handlePackage = () => {
        setPackages(true)
        setRestuarants(false)
        setViewProduct(false)
        setHotels(false)
    }

    const handleHotel = () => {
        setHotels(true)
        setViewProduct(false)
        setPackages(false)
        setRestuarants(false)
    }

    const handleRestuarants = () => {
        setRestuarants(true)
        setHotels(false)
        setPackages(false)
        setViewProduct(false)
    }

    const handleBack = () => {
        setViewProduct(true)
        setHotels(false)
        setRestuarants(false)
        setPackages(false)
    }

    const ViewCards = [
        { bgImg: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", text: "View Package", func: handlePackage },
        { bgImg: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", text: "View Hotel", func: handleHotel },
        { bgImg: "https://plus.unsplash.com/premium_photo-1661883237884-263e8de8869b?q=80&w=2089&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", text: "View Restaurant", func: handleRestuarants }
    ]
    
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

                {
                    !viewProduct &&
                    <Box onClick={handleBack} display="flex" width="50px" height="50px" alignItems="center" justifyContent="center" position="absolute" zIndex={5}>
                        <img src="https://cdn-icons-png.flaticon.com/512/10625/10625282.png" alt="Back Arrow" width="50px" height="50px" />
                    </Box>
                }
                {viewProduct &&
                    <Box display="flex" flexWrap="wrap" width="100%" alignItems="center" justifyContent="space-evenly"
                        gap="60px 0px" padding={5}>
                        {
                            ViewCards.map((cards, index) => {
                                return (
                                    <Typography variant='div' key={index} display="flex" flexDirection="column" overflow="hidden" borderRadius="10px">
                                        <img src={cards.bgImg} alt={cards.bgImg} width="380px" height="280px"
                                            style={{ backgroundColor: "grey" }} />
                                        <Button onClick={cards.func} textAlign="center" p={1}
                                            sx={{ backgroundColor: "black", display: "flex", alignItems: "center", justifyContent: "center", gap: "10px" }}>
                                            <h3 style={{ fontSize: "25px", fontWeight: "800", color: 'white', height: "30px" }}>
                                                {cards.text}
                                            </h3>
                                            <h3 style={{ fontSize: "25px", color: 'white' }}>
                                                <EyeIcon width="30px" height="30px" /></h3>
                                        </Button>
                                    </Typography>
                                )
                            })
                        }
                    </Box>
                }
                {
                    packages && (<PackageList />)
                }
                {
                    hotels && (<HotelList />)
                }
                {
                    restaurants && (<RestaurantList />)
                }
            </Box>
        </Box>
    )
}
