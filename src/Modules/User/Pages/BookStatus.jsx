import React, { useState } from "react";
import Header from "../Component/Header";
import StatusBar from "../../Admin/Component/StatusBar";
import BookedCard from "../Component/BookedCard";
import StatusCount from "../../Admin/Component/StatusCount";

const BookStatus = () => {
  const [status, setStatus] = useState("Booked");

  function handleStatus(s) {
    setStatus(s);
  }

  return (
    <div className="lg:px-40 lg:pt-10 lg:pb-20 flex justify-center items-center flex-col lg:gap-5 bg-[#F8FAFC]">
      <Header
        title="My Bookings"
        description="Manage all your travel bookings in one place"
      />

      <div className="w-full shadow-sm ">
        <StatusBar status={status} handleStatus={handleStatus} />
      </div>

      <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 w-full lg:gap-6">
        {status && (
          <>
            <BookedCard status={status} />
            <BookedCard status={status} />
          </>
        )}
      </div>
      <div className="w-full mt-4">
        <StatusCount booked={2} completed={5} cancelled={0} />
      </div>
    </div>
  );
};

export default BookStatus;
