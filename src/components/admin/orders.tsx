import React from "react"
import { Orderitem } from "./orderitem"

export const Orders:React.FC<{}>=()=>{

    return(
        <div className="outlet">
                <ul className="products">
                       <Orderitem name="ahmed" price={300} address="street-cairo-st alharm" id="sad" quantity={5} telphone={201066985452}></Orderitem>
                      <Orderitem name="ahmed" price={300} address="street-cairo-st alharm" id="sad" quantity={5} telphone={201066985452}></Orderitem>
                       <Orderitem name="ahmed" price={300} address="street-cairo-st alharm" id="sad" quantity={5} telphone={201066985452}></Orderitem>
                        <Orderitem name="ahmed" price={300} address="street-cairo-st alharm" id="sad" quantity={5} telphone={201066985452}></Orderitem>
                         <Orderitem name="ahmed" price={300} address="street-cairo-st alharm" id="sad" quantity={5} telphone={201066985452}></Orderitem>
                                     
                </ul>   
                
                
        </div>
    )
}