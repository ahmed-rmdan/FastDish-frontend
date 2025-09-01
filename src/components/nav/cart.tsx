
import React, { useState } from "react";
import { Listitem } from "../global/listitem";
import { use } from "react";
import { Contextcart } from "../../store/contextcart";
import { Contextdialog } from "../../store/dialogcontext";
import { ShoppingCart } from 'lucide-react';

export const Cart:React.FC= ()=> {
  const {cartitems}=use(Contextcart)
  const [isOpen, setIsOpen] = useState(false);
  const {setdialog}=use(Contextdialog)
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const numbercartitems=cartitems.items.length
  
const empty=<p>no meals added yet</p>
  return (
  <div className='cartlist'  style={{ position: "relative", display: "flex", color: 'orange',alignItems:"center" }}>
        <button onClick={toggleDropdown}>
              <ShoppingCart size={'0.9em'}></ShoppingCart>   cart {numbercartitems}
        </button>

    {isOpen && (
      <ul style={{
        position: "absolute",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        top: "130%",
       
        backgroundColor: "rgb(53, 53, 53)",
        // border: "1px solid #ccc",
        listStyle:  "none",
        margin: 0,
        padding: 0,
        zIndex: 100,
        gap:5,
        maxHeight:'600px',
        overflow:'auto'     
      }}>
         {cartitems.items.length===0?empty:<>
         
           {cartitems.items.map(elm=>{
                return <Listitem name={elm.name} quantity={elm.quantity} imgeurl={elm.imgeurl} ingredients={elm.ingredients} price={elm.price} type='' id={elm._id} key={elm._id }></Listitem>
            })}
         
           <div className="cart-buttons">
                <button onClick={()=>setdialog('cartdialoge')}>Purchase</button>
                <button onClick={toggleDropdown}>Close</button>

          </div>
         
         </>
           }
      </ul>
    )}
  </div>
);
}
