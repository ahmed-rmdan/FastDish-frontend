import React from "react"
export const Listitem:React.FC<{imgeurl:string,name:string,quantity:number,price:number,type:string}>=(props)=>{
if(props.type==='menu'){
    return(

        <li className="listitem">
            <div className="iteminfo">
                   <img >
                
                  
                   </img>
                   <div className="maininfo">
                         <p className="name">{props.name}</p>
                         <p className="price">price : {props.price*props.quantity} </p>
                   </div>
             

             </div>
             <div className="itembuttons">
                <button>Add to Cart</button>
                <button>Add to favourite</button>

             </div>
        </li>
    )
} else{


return(
        <li className="listitem">
            <div className="iteminfo">
                   <img >
                
                  
                   </img>
                   <div className="maininfo">
                         <p className="name">{props.name}</p>
                         <p className="quntity">quantity : {props.quantity}  </p>
                         <p className="price">price : {props.price*props.quantity} </p>
                   </div>
             

             </div>
             <div className="itembuttons">
                <button>+</button>
                <button>-</button>
                <button>remove</button>

             </div>
        </li>
    )









}
    
}