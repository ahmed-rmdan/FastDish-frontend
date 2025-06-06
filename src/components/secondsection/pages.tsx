import React from "react";
import type { meal } from "../type";
export const PAGES:React.FC<{meals:null|meal[],pagesarr:number[],numpaes:number}>=(props)=>{



return(
   <div className="pages">
                               <div className="pages-container">
                                {props.meals===null?'':props.pagesarr.map(elm=>{
                                   return <button key={elm}>{elm}</button>
                                })}

                               </div>
                               {props.meals!==null&&props.numpaes>5?<button className="next">next</button>:''}
                        </div>

)



}