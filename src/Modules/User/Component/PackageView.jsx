import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Axios from "axios";
import { Container, Typography, Card, CardMedia, CardContent, Button, Rating, Box, Collapse, IconButton, Tooltip } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/material/styles";
import { LocationOn, EventAvailable, Share, Add, Remove } from "@mui/icons-material";
import { DollarSign } from "lucide-react";
import { Oval } from 'react-loader-spinner'

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function SingleView() {
  const { id: myid } = useParams();
  const [loader, setLoader] = useState(false)
  const [ members, setMembers ] = useState(1)
  const [destination, setDestination] = useState(null);
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (myid) {
      Axios.get(`http://localhost:7002/package/SingleView/${myid}`)
        .then((res) => {
          setDestination(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [myid]);

  if (!destination) {
    return <Typography variant="h4" align="center" sx={{ mt: 5 }}>Package not available</Typography>;
  }

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };


  const handleBuy = () => {
    console.log("Button clicked - setting loader to true");
    setLoader(true);

    const category = 1;
    const checkIn= "";
    const checkOut= "";
  
    setTimeout(() => {
      setLoader(false);
      navigate(`/Payment/${destination._id}`, {
        state: {
          totalPrice: totalPrice, // Pass total price
          members: members,
          category: category,
          checkIn: checkIn, 
          checkOut: checkOut,
        },
      });
    }, 1000);
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Link copied to clipboard")
  };

  
  const increaseMembers = () => {
    if (members < 19) setMembers(members + 1);
  };

  const decreaseMembers = () => {
    if (members > 1) setMembers(members - 1);
  };

  const totalPrice = destination.price * members;

  return (
    <Box sx={{ minHeight: "100vh", py: 5 }}>
      <Container maxWidth="md">
        <Card sx={{ boxShadow: 8, borderRadius: 4, position: "relative"}}>
          <CardMedia component="img" height="400" image={`http://localhost:7002/api/uploads/${destination.image}`} alt={destination.title} />
          <CardContent sx={{ textAlign: "center" }}>
            <Typography variant="h4" fontWeight="bold" color="primary" sx={{ mb: 1 }}>{destination.title}</Typography>
            <Typography variant="h6" color="text.secondary" sx={{ mb: 1 }}>{destination.description}</Typography>
            <Rating name="rating" value={destination.rating} precision={0.1} readOnly sx={{ mt: 1, mb: 2 }} /><br />

            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 2, mb: 2 }}>
              <IconButton onClick={decreaseMembers} disabled={members === 1} color="primary"><Remove /></IconButton>
              <Typography variant="h6">{members} {members === 1 ? "Member" : "Members"}</Typography>
              <IconButton onClick={increaseMembers} disabled={members === 19} color="primary"><Add /></IconButton>
            </Box>


            <Typography variant="h5" fontWeight="bold" sx={{ mb: 2 }}>Total: ${totalPrice}</Typography>
            <Typography variant="h6" fontWeight="bold" sx={{ padding:"10px 15px", position:'absolute', top: "100px", right:'50px', 
              backgroundColor: 'white', borderRadius: "50%", border: "3px solid green", boxShadow: "1px 1px 10px 4px grey" }}>
              Explrore at just ${destination.price}
            </Typography>


            <Button variant="contained" color="primary" onClick={handleBuy} sx={{ mr: 2 }}>Book Now</Button><br />

            <Tooltip title="Share Package">
              <IconButton onClick={handleShare}><Share /></IconButton>
            </Tooltip>

            <ExpandMore expand={expanded} onClick={handleExpandClick}>
              <ExpandMoreIcon />
            </ExpandMore>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography variant="h6">Additional Details</Typography>
                <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
                  <Typography variant="body2" sx={{ display: "flex", alignItems: "center" }}>
                    <LocationOn sx={{ color: "red", mr: 1 }} /> {destination.location}
                  </Typography>
                  <Typography variant="body2" sx={{ display: "flex", alignItems: "center" }}>
                    <EventAvailable sx={{ color: "blue", mr: 1 }} /> {destination.duration}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "green", fontWeight: "bold" }}>
                    <DollarSign /> {destination.price}
                  </Typography>
                </Box>

                <CardContent>
                  <Box sx={{ borderTop: '1px dotted black', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px', mb: 7, p: 2 }}>
                    <img src="https://www.deepamcabs.com/images/welcome-img.jpg" alt="vehicle" width="270px" height='160px' style={{ borderRadius: '15px', boxShadow: '1px 1px 10px 1px grey', border: '3px solid black' }} />
                    <Typography variant="body2" sx={{ alignItems: "center", }}>
                      <Typography variant="h5" mb={2} fontWeight={900}>Private Transfer</Typography>
                      <Typography variant="p">
                        After your arrival at {destination.location} Airport, you will be directly transferred to your hotel in {destination.location} by a private vehicle.
                        You should exit from Gate No. 10 Exit C and reach the pickup point outside the airport as per the given flight timings.
                        The maximum waiting time will be 1.5 hours after flight touchdown. The luggage limitation per person is 1 handbag and 1 normal-sized trolley.
                        In case you exceed the same, additional charges for a separate vehicle will be levied.
                      </Typography>
                    </Typography>
                  </Box>

                  <Box sx={{ borderTop: '1px dashed black', borderBottom: '1px dashed black', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', pb: 3, pt: 3 }}>
                    <Typography variant="body2" sx={{ alignItems: "center" }}>
                      <Typography variant="h5" mb={2} fontWeight={900}>Indian Paradise Hotel {destination.location}</Typography>
                      <Typography variant="p">
                        Experience luxury and comfort at Indian Paradise Hotel, {destination.location}.
                        Nestled in the heart of the city, this elegant hotel offers world-class amenities,
                        spacious rooms, and top-notch hospitality to ensure a memorable stay.
                        Whether you're here for business or leisure, you'll enjoy a seamless blend of modern convenience and warm hospitality.
                      </Typography>
                    </Typography>
                    <img src="https://cdn-cms1.hotelrunner.com/assets/photos/large/02497519-1ac5-4bed-9d83-e49769b0498d.jpg" alt="vehicle" width="270px" height='200px' style={{ borderRadius: '15px', boxShadow: '1px 1px 10px 1px grey', border: '3px solid black' }} />
                  </Box>

                </CardContent>

                <ExpandMore expand={expanded} onClick={handleExpandClick}>
                  <ExpandMoreIcon />
                </ExpandMore>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                </Collapse>

              </CardContent>
            </Collapse>
          </CardContent>
        </Card>
      </Container>
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
}