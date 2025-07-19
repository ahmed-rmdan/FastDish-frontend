import React from "react"




export const Orderitem:React.FC<{imgeurl:string,name:string,quantity:number,price:number,type:string,id:string}>=(props)=>{

return <li className="listitem">
            <div className="iteminfo">
                   <img src={props.imgeurl} >
                   </img>
                   <div className="maininfo">
                         <p className="name">{props.name}</p>
                         <p className="ingredients">mashrom+chease+onions+katshup+spicy </p>
                         <p className="price">price : {new Intl.NumberFormat("de-DE", { style: "currency", currency: "EGP" }).format(props.price*props.quantity)}  </p>
                   </div>
                    

             </div>
              <div className="itembuttons">
                         <button >Delete</button>
                        <button  >Edit</button>

                    </div>
        </li>

}