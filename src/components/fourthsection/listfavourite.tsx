import React, { use } from "react";
import type { meal } from "../global/type";
import { Listitem } from "../global/listitem";
import { Contextpage } from "../../store/contextpages";

export const LIST:React.FC<{error:null|string,meals:null|meal[],numberslice:number}>=(props)=>{
const{favouritepg}=use(Contextpage)
 let list =props.meals?.length===0||props.meals===null?<p className="none">no favourite meals has been added...</p>:props.meals.map(elm=>{
                       return <Listitem name={elm.name} quantity={1} imgeurl={elm.imgeurl} ingredients={elm.ingredients} price={elm.price} type='favourite' id={elm._id} ></Listitem>
                       }).slice((favouritepg-1)*props.numberslice,(favouritepg)*props.numberslice)
 
return(
 <ul className="list">
                       {props.error===null?list:<p style={{color:"red"}}>somthing went wrong!!!!!</p>}
                        </ul>
)

}