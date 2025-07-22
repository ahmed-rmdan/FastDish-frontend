import React, { use } from "react";
import type { meal } from "../global/type";
import { Listitem } from "../global/listitem";
import { Contextpage } from "../../store/contextpages";

export const LIST:React.FC<{error:null|string,meals:null|meal[]}>=(props)=>{
const{searchpg}=use(Contextpage)
 let list =props.meals===null?<p>please choose meal from the menu...</p>:props.meals.map(elm=>{
                       return <Listitem name={elm.name} quantity={1} imgeurl={elm.imgeurl} ingredients={elm.ingredients} price={elm.price} type='menu' id={elm._id} key={elm._id }></Listitem>
                       }).slice((searchpg-1)*6,(searchpg)*6)

return(
 <div className="list">
                       {props.error===null?list:<p style={{color:"red"}}>somthing went wrong!!!!!</p>}
                        </div>
)

}