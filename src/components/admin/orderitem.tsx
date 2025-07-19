import React from "react"




export const Orderitem:React.FC<{name:string,quantity:number,price:number,address:string,id:string,telphone:number}>=(props)=>{

return (<li className="listitem orderitem">
            <div className="iteminfo">
                  
                   <div className="maininfo">
                         <p className="name">{props.name}</p>
                         <p className="address"> 1xburger + 2pizza + 2chease burger</p>
                         <p className="address">{props.address} </p>
                         <p className="address">{props.telphone} </p>
                         
                         <p className="price">Totlaprice : {new Intl.NumberFormat("de-DE", { style: "currency", currency: "EGP" }).format(props.price*props.quantity)}  </p>
                   </div>
                    

             </div>
              <div className="itembuttons">
                         <button >Done</button>
                        <button  >Cancel</button>

                    </div>
        </li>)

}