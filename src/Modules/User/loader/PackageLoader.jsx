import React from "react";

const PackageLoader = () => {
  return (
    <>
      <div className="w-full bg-white shadow-md rounded-lg mb-4 p-6 relative overflow-hidden">
        <div className="flex flex-col md:flex-row gap-4 mb-3">
          <div className="flex-1">
            <div className="h-12 bg-gray-100 rounded-lg relative overflow-hidden">
              <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
            </div>
          </div>
          <div className="w-full md:w-48">
            <div className="h-12 bg-gray-100 rounded-lg relative overflow-hidden">
              <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
            </div>
          </div>
          <div className="w-full md:w-32">
            <div className="h-12 bg-gray-100 rounded-lg relative overflow-hidden">
              <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
            </div>
          </div>
        </div>
        
        {/* <div className="pt-3 border-t border-gray-200">
          <div className="h-5 bg-gray-100 rounded w-32 mb-3 relative overflow-hidden">
            <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
          </div>
          <div className="flex flex-wrap gap-2">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-10 bg-gray-100 rounded-lg w-20 relative overflow-hidden">
                <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
              </div>
            ))}
          </div>
        </div> */}
      </div>

      <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="flex flex-col rounded-3xl overflow-hidden shadow-sm bg-white relative">
            {/* Shimmer overlay */}
            <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/50 to-transparent z-10"></div>
            
            <div className="relative h-48 bg-gray-100"></div>
            
            <div className="flex flex-col p-5 h-fit">
              <div className="h-6 bg-gray-100 rounded w-3/4 mb-3"></div>
              
              <div className="space-y-2 mb-4">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="h-4 bg-gray-100 rounded w-4"></div>
                    <div className="h-4 bg-gray-100 rounded w-32"></div>
                  </div>
                ))}
              </div>
              
              <div className="flex justify-between items-center border-t pt-4">
                <div className="flex flex-col justify-around">
                  <div className="h-3 bg-gray-100 rounded w-20 mb-2"></div>
                  <div className="h-8 bg-gray-100 rounded w-24"></div>
                </div>
                <div className="h-10 bg-gray-100 rounded-lg w-24"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default PackageLoader;