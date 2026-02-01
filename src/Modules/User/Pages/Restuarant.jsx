import React, { useState, useEffect } from "react";
import { Card, CardContent, CardMedia, Typography, Button, Grid, Chip, Box, Container, TextField, Select, MenuItem, FormControlLabel, Checkbox, } from "@mui/material";
import "../css/Restaurant.css";
import Header from "../Component/layout/Header";
import RestaurantFilter from "../Component/restaurant/RestaurantFilter";
import RestaurantCard from "../Component/restaurant/RestaurantCard";
import { useRestaurants } from "../hooks/restaurants/useRestaurants";
import CardLoader from "../loader/CardLoader";

const Restaurant = () => {
  // const [search, setSearch] = useState("");
  // const [minRating, setMinRating] = useState(0);
  // const [sortOrder, setSortOrder] = useState("");
  // const [selectedFacilities, setSelectedFacilities] = useState([]);

  const { restaurants, loading } = useRestaurants();

  console.log(restaurants)

  // const handleFacilityChange = (facility) => {
  //   setSelectedFacilities((prev) =>
  //     prev.includes(facility)
  //       ? prev.filter((f) => f !== facility)
  //       : [...prev, facility]
  //   );
  // };

  // const filteredRestaurants = Array.isArray(resData)
  //   ? resData
  //     .filter(
  //       (restaurant) =>
  //         restaurant.name.toLowerCase().includes(search.toLowerCase()) &&
  //         restaurant.rating >= minRating &&
  //         (selectedFacilities.length === 0 ||
  //           selectedFacilities.every((fac) =>
  //             restaurant.facilities.includes(fac)
  //           ))
  //     )
  //     .sort((a, b) =>
  //       sortOrder === "lowToHigh" ? a.price - b.price
  //         : sortOrder === "highToLow" ? b.price - a.price
  //           : 0
  //     )
  //   : [];


  if (loading) {
    return (
      <div className="lg:px-40 lg:py-10 flex justify-center items-center flex-col gap-2 bg-[#F8FAFC] ">
        <Header title="Restaurants" description="Discover exceptional dining experiences" />
        <CardLoader />
      </div>
    )
  }

  return (
    <Container className="lg:px-40 lg:py-10 flex justify-center items-center flex-col gap-2 bg-[#F8FAFC]">
      <Header title="Restaurants" description="Discover exceptional dining experiences" />
      <div className="w-full mb-4 bg-white rounded-lg shadow-md">
        <RestaurantFilter />
      </div>
      <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-3 md:grid-cols-2">
        {
          restaurants.map((res) => (
            <RestaurantCard />
          ))
        }
        {/* <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard /> */}
      </div>


    </Container>
  );
};

export default Restaurant;