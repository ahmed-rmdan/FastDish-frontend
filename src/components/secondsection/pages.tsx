import React from "react";
import type { meal } from "../global/type";
import { useState ,use} from "react";
import { Contextpage } from "../../store/contextpages";
export const PAGES:React.FC<{meals:null|meal[],pagesarr:number[],numpaes:number}>=(props)=>{
   const[pagenum,setpagenum]=useState<number>(0)
   const{choosemenupg,menupg}=use(Contextpage)
function handlenext(){
setpagenum(prev=>prev+1)  
}
function handleprev(){
   setpagenum(prev=>prev-1)  
}

return(
                         <div className="pages">
                              <div style={{alignSelf:"center",marginTop:'-5px'}}>
                               { props.meals!==null&&pagenum!==0&&<button className="prev" onClick={handleprev}>prev</button>}
                              </div>
                           
                               <div className="pages-container"  >
                                
                               
                                {props.meals===null?'':props.pagesarr.map(elm=>{
                                   return <button key={elm} style={{transform:`translateX(${pagenum*-30}px)`}} onClick={()=>choosemenupg(elm)} className={elm===menupg?'clicked':''}>{elm}</button> 
                                })}

                               </div>
                               <div style={{alignSelf:"center",marginTop:'-5px'}}>
                                {props.meals!==null&&props.numpaes>5&&pagenum<props.numpaes-5?<button className="next" onClick={handlenext}>next</button>:''}
                               </div>
                               
                        </div>

)



}