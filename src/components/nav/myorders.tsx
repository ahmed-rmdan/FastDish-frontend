
import React, { useState } from "react";
import { use } from "react";
import { Contextorders } from "../../store/contextorders";
import { Orderitem } from "./orderitem";
export const Myorders:React.FC= ()=> {
  const {orders}=use(Contextorders)
  const [isOpen, setIsOpen] = useState(false);
  console.log(orders)
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const numberorders=orders.length
  
const empty=<p>no requested Orders </p>
  return (
  <div className='myorders'  style={{ position: "relative", display: "flex", color: 'orange',alignItems:"center" }}>
        <button onClick={toggleDropdown}>
               MyOrders 
        </button>

    {isOpen && (
      <ul className="myorders-list" style={{
        position: "absolute",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        top: "130%",
        left: -100,
        backgroundColor: "rgb(53, 53, 53)",
        // border: "1px solid #ccc",
        listStyle:  "none",
        margin: 0,
        padding: 0,
        zIndex: 100,
        gap:5,
        maxHeight:'800px',
        overflow:'auto',
        
      }}>
         {numberorders===0?empty:<>
         
           {orders.map(elm=>{
                return <Orderitem totalprice={elm.totalprice} address={elm.address} state={elm.state}  details={elm.details}></Orderitem>
            })}
         
           <div className="button-orders">
                
                <button onClick={toggleDropdown}>Close</button>

          </div>
         
         </>
           }
      </ul>
    )}
  </div>
);
}