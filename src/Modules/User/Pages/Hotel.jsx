import React from "react";
import "../css/Hotel.css";
import HotelFilter from "../Component/hotel/HotelFilter";
import Header from "../Component/layout/Header";
import HotelCard from "../Component/hotel/HotelCard";
import { useHotels } from '../hooks/hotels/useHotels'

const Hotel = () => {
  // const [search, setSearch] = useState("");
  // const [minRating, setMinRating] = useState(0);
  // const [sortOrder, setSortOrder] = useState("");
  // const [hotelData, setHotelData] = useState([]);
  // const [selectedFacilities, setSelectedFacilities] = useState([]);

  const { hotels, refetch, loading, error } = useHotels()

  // const filteredHotels = Array.isArray(hotelData)
  //   ? hotelData
  //     .filter(
  //       (hotel) =>
  //         hotel.name.toLowerCase().includes(search.toLowerCase()) &&
  //         hotel.rating >= minRating &&
  //         (selectedFacilities.length === 0 ||
  //           selectedFacilities.every((fac) => hotel.facilities.includes(fac)))
  //     )
  //     .sort((a, b) =>
  //       sortOrder === "lowToHigh"
  //         ? a.price - b.price
  //         : sortOrder === "highToLow"
  //           ? b.price - a.price
  //           : 0
  //     )
  //   : [];



  return (
    <div className="lg:px-40 lg:py-10 flex justify-center items-center flex-col gap-2 bg-[#F8FAFC]">
      <Header title="Hotels" description="Find the perfect accommodation for your stay" />
      <div className="w-full bg-white shadow-md rounded-lg mb-4">
        <HotelFilter />
      </div>
      <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        {
          hotels &&
          hotels.map((hotel, i) => (
            <HotelCard id={hotel?._id} name={hotel?.name} image={hotel?.featuredImage} location={hotel?.location?.address}
              category={hotel?.category} amenities={hotel?.popularAmenities} />
          ))
        }
      </div>
    </div>
  );
};

export default Hotel;
