import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Axios from "axios";
import { Container, Typography, Card, CardMedia, CardContent, Button, Rating } from "@mui/material";
import { Box, AppBar, Toolbar, TextField, IconButton } from "@mui/material";
import Navbar from './Navbar';
import SearchIcon from "@mui/icons-material/Search";
import { Link } from 'react-router-dom';



export default function PackageView() {
    const { id: myid } = useParams();
    const [destination, setDestination] = useState(null);

    useEffect(() => {
        if (myid) {
            Axios.get(`http://localhost:7002/package/SingleView/${myid}`)
                .then((res) => {
                    console.log(res.data);
                    setDestination(res.data.data);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }, [myid]);

    return (
        <Box sx={{ display: "flex" }}>
            <Navbar />

            <Box component="main" sx={{ flexGrow: 1, p: 3, backgroundColor: "#f9f9f9", minHeight: "100vh" }}>
                <AppBar
                    position="fixed"
                    sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, backgroundColor: "#fff", boxShadow: "none", borderBottom: "1px solid #ddd" }}
                >
                    <Toolbar>
                        <Typography variant="h6" noWrap component="div" color="text.primary">
                            {(!destination) ? ("Package Not Available") : (destination.title)}
                        </Typography>
                        <Box sx={{ flexGrow: 1 }} />
                        <TextField variant="outlined" size="small" placeholder="Search here" InputProps={{
                            endAdornment: (
                                <IconButton>
                                    <SearchIcon />
                                </IconButton>
                            ),
                        }}
                            sx={{ width: 300, backgroundColor: "#fff", borderRadius: 1 }} />
                    </Toolbar>
                </AppBar>
                <Toolbar />

                <Box sx={{ minHeight: "100vh", py: 5 }}>
                    {(!destination) ? (<Typography style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Typography variant="h2" sx={{ textAlign: "center", mt: 5, fontWeight: '900' }}>The Package is not Available yet</Typography>
                        <img src="https://cdni.iconscout.com/illustration/premium/thumb/search-not-found-illustration-download-in-svg-png-gif-file-formats--404-page-simple-empty-error-state-pack-user-interface-illustrations-6024631.png?f=webp" width='360px' height='360px' alt="error" />
                    </Typography>) :
                        (<Container maxWidth="md">
                            <Card sx={{ boxShadow: 8, borderRadius: 4, overflow: "hidden" }}>
                                <CardMedia component="img" height="400" image={`http://localhost:7002/api/uploads/${destination.image}`} alt={destination.title} />
                                <CardContent sx={{ textAlign: "center" }}>
                                    <Typography variant="h4" fontWeight="bold" color="primary" sx={{ mb: 1 }}>
                                        {destination.title}
                                    </Typography>
                                    <Typography variant="h6" color="text.secondary" sx={{ mb: 1 }}>
                                        {destination.description}
                                    </Typography>
                                    <Typography variant="h5" sx={{ color: "green", fontWeight: "bold" }}>
                                        {destination.price}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" sx={{ mt: 1, mb: 3 }}>
                                        <Rating name="half-rating-read" defaultValue={destination.rating} precision={0.1} readOnly />
                                    </Typography>
                                    <Link to="/admin/dash-board">
                                        <Button variant="contained" color="primary" size="large" sx={{ px: 5, py: 1.5, mb: 2 }}>
                                            Back to DashBoard
                                        </Button>
                                    </Link><br />
                                </CardContent>
                            </Card>
                        </Container>)
                    }
                </Box>
            </Box>
        </Box>
    );
}
