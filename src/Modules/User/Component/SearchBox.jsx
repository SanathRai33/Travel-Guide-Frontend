import React from "react";

const SearchBox = () => {
  return (
    <div className="w-full px-5 py-2 flex flex-col gap-5">
      <div className="bg-white rounded-xl shadow-lg p-6">
      <h1 className="font-md text-black text-bold mulish">Search Everything</h1>
      <div className="relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-search absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400"
          data-fg-blic27="2.14:2.6377:/components/home/AllSection.tsx:105:11:4286:85:e:Search::::::D4QS"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <path d="m21 21-4.3-4.3"></path>
        </svg>
        <input
          className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          type="search"
          name="search"
          id="search"
          placeholder="Search for packages, hotels, restaurants, or tickets..."
        />
      </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 scrollbar-hidden">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white cursor-pointer hover:shadow-lg transition-shadow">
            <h4>Tour Packages</h4>
            <p>150+ destinations</p>
        </div>
        <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 text-white cursor-pointer hover:shadow-lg transition-shadow">
            <h4>Hotels</h4>
            <p>500+ properties</p>
        </div>
        <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-6 text-white cursor-pointer hover:shadow-lg transition-shadow">
            <h4>Restaurants</h4>
            <p>200+ venues</p>
        </div>
        <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white cursor-pointer hover:shadow-lg transition-shadow">
            <h4>Travel Tickets</h4>
            <p>All modes</p>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
