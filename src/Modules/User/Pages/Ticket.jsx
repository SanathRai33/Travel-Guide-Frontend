import React, { useState } from "react";
import Train from "../Component/Train";
import "../css/Ticket.css";
import Flight from "../Component/Flight";
import Header from "../Component/Header";
import TicketOptions from "../Component/TicketOptions";
import BusTicket from "../Component/BusTicket";

export default function Ticket() {
  const [activeOption, setActiveOption] = useState("");

  const handleOptionSelect = (option) => {
    setActiveOption(option);
  };

  const renderContent = () => {
    switch(activeOption) {
      case "Bus":
        return <BusTicket />;
      case "Train":
        return <Train />;
      case "Flight":
        return <Flight />;
      case "Yacht":
        return <div>Yacht Booking Component</div>;
      default:
        return <div className="shadow-md text-center bg-white rounded-2xl py-5">Select a travel mode to start booking</div>;
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