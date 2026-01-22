import React, { useState } from "react";
import '../css/Packages.css';
import PackageFilter from "../Component/PackageFilter";
import PackageCard from "../Component/PackageCard";
import Header from "../Component/Header";
import { usePackages } from "../hooks/packages/usePackages";


const Packages = () => {
  // const [searchPackage, setSearchPackage] = useState("");
  // const [sortBy, setSortBy] = useState("");

  const { packages, setPackages, loading, error, refetch } = usePackages();

  // const handleSearchChange = (e) => {
  //   setSearchPackage(e.target.value);
  // };

  // const handleSortChange = (e) => {
  //   setSortBy(e.target.value);
  // };

  // const filteredPackages = packages.filter(pkg =>
  //   pkg.title.toLowerCase().includes(searchPackage.toLowerCase()) ||
  //   pkg.price.toLowerCase().includes(searchPackage.toLowerCase()) ||
  //   pkg.location.toLowerCase().includes(searchPackage.toLowerCase()) ||
  //   pkg.duration.toLowerCase().includes(searchPackage.toLowerCase()) ||
  //   pkg.category.toLowerCase().includes(searchPackage.toLowerCase()) ||
  //   pkg.description.toLowerCase().includes(searchPackage.toLowerCase())
  // );


  // const sortedPackages = [...filteredPackages].sort((a, b, pkg) => {
  //   if (sortBy === "lowPrice") return a.price - b.price;
  //   else if (sortBy === "highPrice") return b.price - a.price;
  //   else if (sortBy === "lowRating") return a.rating - b.rating;
  //   else if (sortBy === "HighRating") return b.rating - a.rating;
  //   else return 0;
  // });
  
  const handleReload = () =>{
    refetch()
  }

  if (error) {
    return (
      <div className="lg:px-40 lg:py-10 flex justify-center items-center flex-col gap-2 bg-[#F8FAFC] ">
        <Header title="Tour Packages" description="Explore our curated selection of amazing tour packages" />
        <div className="mt-24 flex flex-col items-center text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-red-50">
            <span className="text-red-500 text-2xl">⚠</span>
          </div>

          <h2 className="mt-6 text-xl font-semibold text-gray-800">
            Something went wrong
          </h2>

          <p className="mt-2 max-w-md text-gray-500">
            We couldn’t load tour packages right now. Please check your connection or try again.
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



  return (
    <div className="lg:px-40 lg:py-10 flex justify-center items-center flex-col gap-2 bg-[#F8FAFC] ">
      <Header title="Tour Packages" description="Explore our curated selection of amazing tour packages" />
      <div className="w-full bg-white shadow-md rounded-lg mb-4">
        <PackageFilter />
      </div>
      <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        {
          packages.map((data, i) => (
            <PackageCard title={data?.title} id={data?._id} image={data?.images[1]} duration={data?.duration}
              location={data?.location} basePrice={data?.basePrice} category={data.categories[0]} />
          ))
        }
      </div>
    </div>
  );
};

export default Packages;