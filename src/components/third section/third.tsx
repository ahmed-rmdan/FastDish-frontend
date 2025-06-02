
import React from "react";
import { Search } from "../nav/srarch";
import { Listitem } from "../listitem";
export const Third:React.FC<{}>=()=>{
    return(
         <section className="third">
                <p>Search for your Meals</p>
                 <Search></Search>
                   <div className="items">
                                         <div className="list">
                                                   <Listitem name="pizza" quantity={2} imgeurl="" price={120} type='menu'></Listitem>
                                                             <Listitem name="burger" quantity={4} imgeurl="" price={150} type='menu'></Listitem>
                                                             <Listitem name="pasta" quantity={5} imgeurl="" price={80} type='menu'></Listitem>
                                                             <Listitem name="pizza" quantity={2} imgeurl="" price={120} type='menu'></Listitem>
                                                             <Listitem name="burger" quantity={4} imgeurl="" price={150} type='menu'></Listitem>
                                                             <Listitem name="pasta" quantity={5} imgeurl="" price={80} type='menu'></Listitem>
                                         </div>
                                         <div className="pages">
                                                <div className="pages-container">
                                                 <button>1</button>
                                                 <button>2</button>
                                                 <button>3</button>
                                                 <button>4</button>
                                                 <button>5</button>
                 
                                                </div>
                                                <button className="next">next</button>
                                         </div>
                                   </div>
               
                  
         </section>


    )
}