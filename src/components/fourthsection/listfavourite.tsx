import React, { use } from "react";
import type { meal } from "../global/type";
import { Listitem } from "../global/listitem";
import { Contextpage } from "../../store/contextpages";

export const LIST:React.FC<{error:null|string,meals:null|meal[],numberslice:number}>=(props)=>{
const{favouritepg}=use(Contextpage)
 let list =props.meals?.length===0||props.meals===null?<p className="none">no favourite meals has been added...</p>:props.meals.map(elm=>{
                       return <Listitem name={elm.title} quantity={1} imgeurl={elm.image_url} price={80} type='favourite' key={elm.id} id={elm.id}></Listitem>
                       }).slice((favouritepg-1)*props.numberslice,(favouritepg)*props.numberslice)

return(
 <ul className="list">
                       {props.error===null?list:<p style={{color:"red"}}>somthing went wrong!!!!!</p>}
                        </ul>
)

}