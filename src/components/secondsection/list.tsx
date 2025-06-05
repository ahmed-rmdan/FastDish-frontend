import React from "react";
import type { meal } from "../type";
import { Listitem } from "../listitem";
export const LIST:React.FC<{error:null|string,meals:null|meal[]}>=(props)=>{

 let list =props.meals===null?<p>please choose meal from the menu...</p>:props.meals.map(elm=>{
                       return <Listitem name={elm.title} quantity={1} imgeurl={elm.image_url} price={80} type='menu' key={elm.id}></Listitem>
                       }).slice(0,6)

return(
 <div className="list">
                       {props.error===null?list:<p style={{color:"red"}}>somthing went wrong!!!!!</p>}
                        </div>

)



}
