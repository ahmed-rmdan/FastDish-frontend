
import React from "react";
import { LIST } from "./listfavourite";
import { use } from "react";
import { Contextfavourite } from "../../store/contextfavorite";
export const Fourth:React.FC<{}>=()=>{
    const {favouritetitems}=use(Contextfavourite)
    const numberofitems=favouritetitems.items.length
    return(
         <section className="fourth">
                <p>Your favourites Meals</p>
                 
                   <div className="slider">
                                         <div className="items-container">                                                 
                                                      <LIST meals={favouritetitems.items} error={null} ></LIST>
                                         </div>
                                        
                                      { numberofitems===0?'' :<button className="next">next</button>}
                                         
               
                    </div>
                   { numberofitems===0?'':<div className="taps">
                          <button></button>
                          <button></button>
                          <button></button>
                          <button></button>
                          <button></button>
                    </div>}
         </section>


    )
}