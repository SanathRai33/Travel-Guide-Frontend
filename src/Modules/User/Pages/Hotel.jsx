import React from "react";
import "../css/Hotel.css";
import HotelFilter from "../Component/hotel/HotelFilter";
import Header from "../Component/layout/Header";
import HotelCard from "../Component/hotel/HotelCard";
import { useHotels } from '../hooks/hotels/useHotels'
import CardLoader from "../loader/CardLoader";

const Hotel = () => {
  // const [search, setSearch] = useState("");
  // const [minRating, setMinRating] = useState(0);
  // const [sortOrder, setSortOrder] = useState("");
  // const [hotelData, setHotelData] = useState([]);
  // const [selectedFacilities, setSelectedFacilities] = useState([]);

  const { hotels, refetch, loading, error } = useHotels()

  const handleReload = () => {
    refetch()
  }

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

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-full gap-2 lg:px-40 lg:py-10">
        <Header title="Hotels" description="Find the perfect accommodation for your stay" />
        <div className="flex flex-col items-center text-center bg-[#FFFFFF] w-[90%] h-full lg:py-20 rounded-xl shadow-sm">
          <div className="flex items-center justify-center rounded-full h-14 w-14 bg-red-50">
            <span className="text-2xl text-red-500">⚠</span>
          </div>

          <h2 className="mt-6 text-xl font-semibold text-red-600">
            Something went wrong
          </h2>

          <p className="max-w-md mt-2 text-red-500">
            We couldn’t load tour hotels right now. Please check your connection or try again.
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
        <Header title="Hotels" description="Find the perfect accommodation for your stay" />
        <CardLoader />
      </div>
    )
  }

  return (
    <div className="lg:px-40 lg:py-10 flex justify-center items-center flex-col gap-2 bg-[#F8FAFC]">
      <Header title="Hotels" description="Find the perfect accommodation for your stay" />
      <div className="w-full mb-4 bg-white rounded-lg shadow-md">
        <HotelFilter />
      </div>
      <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-3 md:grid-cols-2">
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
