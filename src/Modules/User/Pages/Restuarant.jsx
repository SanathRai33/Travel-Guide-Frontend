import React, { useState, useEffect } from "react";
import { Container } from "@mui/material";
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

  const { restaurants, loading, error, refetch } = useRestaurants();

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

  const handleReload = () => {
    refetch()
  }

  
  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-full gap-2 lg:px-40 lg:py-10">
        <Header title="Restaurants" description="Find the perfect accommodation for your stay" />
        <div className="flex flex-col items-center text-center bg-[#FFFFFF] w-[90%] h-full lg:py-20 rounded-xl shadow-sm">
          <div className="flex items-center justify-center rounded-full h-14 w-14 bg-red-50">
            <span className="text-2xl text-red-500">⚠</span>
          </div>

          <h2 className="mt-6 text-xl font-semibold text-red-600">
            Something went wrong
          </h2>

          <p className="max-w-md mt-2 text-red-500">
            We couldn’t load tour restaurants right now. Please check your connection or try again.
          </p>

          <button onClick={handleReload}
            className="mt-6 rounded-lg bg-blue-600 px-6 py-2.5 text-white font-medium hover:bg-blue-700 transition"
          >
            Retry
          </button>
        </div>
      </div>
    )
  }

  if (loading) {
    return (
      <div className="lg:px-40 lg:py-10 flex justify-center items-center flex-col gap-2 bg-[#F8FAFC] ">
        <Header title="Restaurants" description="Discover exceptional dining experiences" />
        <CardLoader />
      </div>
    )
  }

  console.log("amenities", restaurants?.amenities);

  return (
    <Container className="lg:px-40 lg:py-10 flex justify-center items-center flex-col gap-2 bg-[#F8FAFC]">
      <Header title="Restaurants" description="Discover exceptional dining experiences" />
      <div className="w-full mb-4 bg-white rounded-lg shadow-md">
        <RestaurantFilter />
      </div>
      <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-3 md:grid-cols-2">
        {
          restaurants?.map((res, idx) => (
            <RestaurantCard key={idx} id={res?._id} name={res?.name} location={res?.location?.address}
            image={res?.featuredImage} price={res?.priceTier?.averagePricePerPerson} amenities={res?.amenities} 
            badge={res?.primaryCuisine} />
          ))
        }
      </div>


    </Container>
  );
};

export default Restaurant;