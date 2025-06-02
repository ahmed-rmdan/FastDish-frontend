
import React, { useState } from "react";
import { Listitem } from "../listitem";
export const Cart:React.FC= ()=> {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
  <div className='cartlist'  style={{ position: "relative", display: "inline-block", color: 'orange' }}>
        <button onClick={toggleDropdown}>
                 cart 0
        </button>

    {isOpen && (
      <ul style={{
        position: "absolute",
        display: "flex",
        width: '300px',
        flexDirection: "column",
        alignItems: "center",
        top: "130%",
        left: -100,
        backgroundColor: "rgb(53, 53, 53)",
        // border: "1px solid #ccc",
        listStyle: "none",
        margin: 0,
        padding: 0,
        zIndex: 1000,
        gap:5
      }}>
            <Listitem name="pizza" quantity={2} imgeurl="" price={120} type="cart"></Listitem>
            <Listitem name="burger" quantity={4} imgeurl="" price={150} type="cart"></Listitem>
            <Listitem name="pasta" quantity={5} imgeurl="" price={80} type="cart"></Listitem>
         
           <div className="cart-buttons">
                <button >Purchase</button>
                <button onClick={toggleDropdown}>Close</button>

          </div>
      </ul>
    )}
  </div>
);
}