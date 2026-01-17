import React from "react";

const StatusBar = ({status, handleStatus}) => {
  return (
    <div className="flex justify-start gap-1 w-full">
      <button
        className="px-6 py-3 font-medium transition-colors relative text-gray-600 hover:text-gray-900 border-b-2 border-transparent"
        style={{
          color: status === "Booked" ? "#3b82f6" : "",
          borderColor: status === "Booked" ? "#3b82f6" : "",
        }}
        onClick={() => handleStatus("Booked")}
      >
        Booked
      </button>
      <button
        className="px-6 py-3 font-medium transition-colors relative text-gray-600 hover:text-gray-900 border-b-2 border-transparent"
        style={{
          color: status === "Done" ? "#3b82f6" : "",
          borderColor: status === "Done" ? "#3b82f6" : "",
        }}
        onClick={() => handleStatus("Done")}
      >
        Done
      </button>
      <button
        className="px-6 py-3 font-medium transition-colors relative text-gray-600 hover:text-gray-900 border-b-2 border-transparent"
        style={{
          color: status === "Cancelled" ? "#3b82f6" : "",
          borderColor: status === "Cancelled" ? "#3b82f6" : "",
        }}
        onClick={() => handleStatus("Cancelled")}
      >
        Cancelled
      </button>
    </div>
  );
};

export default StatusBar;
