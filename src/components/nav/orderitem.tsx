import React from "react";


export const Orderitem:React.FC<{details:string,address:string,totalprice:number,state:string}>=(props)=>{
    let style={color:'darkorange'}
    if(props.state==='Canceled')
     style={color:'red'}
    if(props.state==='Done')
        style={color:'green'}
   
        
    return(
      <div className="orderitem">
        <p className="details"> {props.details} </p>
         <p className="address"> To : {props.address} </p>
         <p className="state" style={style}> {props.state}... </p>
         <p className="price">Total price : {new Intl.NumberFormat("de-DE", { style: "currency", currency: "EGP" }).format(props.totalprice)} </p>

       </div>


    )
}