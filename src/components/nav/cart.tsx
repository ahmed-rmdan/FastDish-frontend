
import React, { useState } from "react";
import { Listitem } from "../global/listitem";
import { use } from "react";
import { Contextcart } from "../../store/contextcart";

export const Cart:React.FC= ()=> {
  const {cartitems}=use(Contextcart)
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
         
            {cartitems.items.map(elm=>{
              return <Listitem type="" imgeurl={elm.image_url} name={elm.title} price={80} quantity={elm.quantity} id={elm.id}></Listitem>
            })}
         
           <div className="cart-buttons">
                <button >Purchase</button>
                <button onClick={toggleDropdown}>Close</button>

          </div>
      </ul>
    )}
  </div>
);
}