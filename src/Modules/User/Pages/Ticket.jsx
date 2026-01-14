import React, { useState } from "react";
import Train from "../Component/Train";
import "../css/Ticket.css";
import Flight from "../Component/Flight";
import Header from "../Component/Header";
import TicketOptions from "../Component/TicketOptions";

export default function Ticket() {
  const [activeOption, setActiveOption] = useState("Flight"); // Default active

  const handleOptionSelect = (option) => {
    setActiveOption(option);
  };

  const renderContent = () => {
    switch(activeOption) {
      case "Bus":
        return <div>Bus Booking Component</div>;
      case "Train":
        return <Train />;
      case "Flight":
        return <Flight />;
      case "Yacht":
        return <div>Yacht Booking Component</div>;
      default:
        return <div>Select a travel mode to start booking</div>;
    }
  };

  return (
    <div className="lg:px-40 lg:py-10 flex justify-center items-center flex-col gap-2 bg-[#F8FAFC]">
      <Header
        title="Travel Tickets"
        description="Book your journey with ease"
      />
      <div className="w-full">
        <TicketOptions 
          activeOption={activeOption} 
          onOptionSelect={handleOptionSelect} 
        />
        <div className="mt-8">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}