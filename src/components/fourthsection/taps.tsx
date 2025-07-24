import React from "react";
import { Contextpage } from "../../store/contextpages";
import { use } from "react";

export const Taps:React.FC<{numberofitems:number,pagesarr:number[]}>=(props)=>{
    const {choosefavouritepg,favouritepg}=use(Contextpage)
    
 
    return(
      <>
        { props.numberofitems===0?'':<div className="taps">
                          {props.pagesarr.map((elm,i)=>{
                            return <button onClick={()=>choosefavouritepg(i+1)} className={favouritepg===i+1?'clicked':''} key={i} ></button>
                          })}
                    </div>}
      </>
                 

    )
}