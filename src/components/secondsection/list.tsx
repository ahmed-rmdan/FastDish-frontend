import React, { use } from "react";
import type { meal } from "../global/type";
import { Listitem } from "../global/listitem";
import { Contextpage } from "../../store/contextpages";

export const LIST:React.FC<{error:null|string,meals:null|meal[]}>=(props)=>{
const{menupg}=use(Contextpage)

 let list =props.meals===null?<p>please choose meal from the menu...</p>:props.meals.map(elm=>{
   
                       return <Listitem name={elm.title} quantity={1} imgeurl={elm.image_url} price={80} type='menu' id={elm.id} key={elm.id}></Listitem>
                       }).slice((menupg-1)*6,(menupg)*6)

return(
 <div className="list">
                       {props.error===null?list:<p style={{color:"red"}}>somthing went wrong!!!!!</p>}
                        </div>

)



}
