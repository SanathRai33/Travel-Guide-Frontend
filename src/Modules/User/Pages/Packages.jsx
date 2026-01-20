import React, { useState } from "react";
import '../css/Packages.css';
import PackageFilter from "../Component/PackageFilter";
import PackageCard from "../Component/PackageCard";
import Header from "../Component/Header";
import { usePackages } from "../hooks/usePackages";


const Packages = () => {
  // const [searchPackage, setSearchPackage] = useState("");
  // const [sortBy, setSortBy] = useState("");

  const { packages, setPackages, loading, error } = usePackages();

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
        {/* <PackageCard />
        <PackageCard />
        <PackageCard /> */}
      </div>


      {/* <Grid container spacing={4} justifyContent="center" p={2} mt={2}> */}

        {/* {error ?
          (<Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100vh" backgroundColor="#f8f8f8" mixBlendMode="darken" width="1050px">
            <Lottie animationData={errorAnimation} loop={true} style={{ height: '300px', width: '300px' }} />
            <h2 className="not-found">Oops! Something went wrong</h2>
          </Box>) :
          filteredPackages.length === 0 ? (<Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' height='80vh' minWidth="1000px">
            <video width="400" autoPlay loop style={{ mixBlendMode: "darken", }}>
              <source src="https://cdnl.iconscout.com/lottie/premium/thumb/result-not-found-animation-download-in-lottie-json-gif-static-svg-file-formats--webpage-error-discovered-404-website-bug-pack-design-development-animations-6647509.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <h1 className="not-found">Result not found</h1>
          </Box>) : (<></>)} */}
      {/* </Grid> */}
    </div>
  );
};

export default Packages;