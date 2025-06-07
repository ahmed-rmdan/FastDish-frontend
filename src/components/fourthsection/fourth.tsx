
import React from "react";
import { Listitem } from "../global/listitem";
export const Fourth:React.FC<{}>=()=>{
    return(
         <section className="fourth">
                <p>Your favourites Meals</p>
                 
                   <div className="slider">
                                         <div className="items-container">
                                                   <Listitem name="pizza" quantity={2} imgeurl="" price={120} type='favourite'></Listitem>
                                                             <Listitem name="burger" quantity={4} imgeurl="" price={150} type='favourite'></Listitem>
                                                             <Listitem name="pasta" quantity={5} imgeurl="" price={80} type='favourite'></Listitem>
                                                             <Listitem name="pizza" quantity={2} imgeurl="" price={120} type='favourite'></Listitem>
                                                             <Listitem name="burger" quantity={4} imgeurl="" price={150} type='favourite'></Listitem>
                                                             <Listitem name="pasta" quantity={5} imgeurl="" price={80} type='favourite'></Listitem>
                                         </div>
                                        
                                        <button className="next">next</button>
                                         
               
                    </div>
                    <div className="taps">
                          <button></button>
                          <button></button>
                          <button></button>
                          <button></button>
                          <button></button>
                    </div>
         </section>


    )
}