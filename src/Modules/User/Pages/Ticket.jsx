import React, { useState } from "react";
import Train from "../Component/Train";
import "../css/Ticket.css";
import Flight from "../Component/Flight";

export default function Ticket() {
  const [btn, setBtn] = useState("Click here for Train");

  const handleBtn = () => {
    setBtn(btn === "Click here for Train" ? "Click here for Flight" : "Click here for Train");
  };

  return (
    <div className="AllTickets" style={{ position: "relative", paddingTop: "80px" }}>
      
      <div className="carousel-buttons" style={{ display: "flex", justifyContent: "space-between", alignItems: "center",
        position: "absolute", top: "10px", left: "50%", transform: "translateX(-50%)", width: "100%",
        maxWidth: "600px",  zIndex: 10,}}>

        <button onClick={handleBtn} className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev"
          style={{ width: 'fit-content', background: "#000000", border: "none", padding: "20px 15px", borderRadius: "10px", cursor: "pointer" }}>
          ⬅ {btn}
        </button>
        <button onClick={handleBtn} className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next"
          style={{ width: 'fit-content', background: "#000000", border: "none", padding: "20px 15px", borderRadius: "10px", cursor: "pointer" }}>
          {btn} ➡
        </button>

      </div>

      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="Flights">
              <Flight />
            </div>
          </div>
          <div className="carousel-item">
            <div className="Trains">
              <Train />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
