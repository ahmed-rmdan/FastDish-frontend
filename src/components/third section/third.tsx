
import React from "react";
import { Search } from "../global/srarch";
import { LIST } from "./listshearch";
import { use,useState } from "react";
import { Contextsearch } from "../../store/contextsearch";
import { PAGES } from "./pages";
import { useInView  } from "react-intersection-observer";
import { viewanimistion } from "../global/animistion";
export const Third:React.FC<{}>=()=>{
     const{searchmeals,error,isloading}=use(Contextsearch)
       const [className,setclassname]=useState('')
      
const{ref,inView}=useInView({threshold:0.5})


viewanimistion(inView,setclassname,'thirddisplay')

let pagesarr=[]
let numpages=0
if(searchmeals!==null){
      numpages=Math.ceil(searchmeals!.length/6)
for(let i=1; i<=numpages;i++){
pagesarr.push(i)
}
}

    return(
         <section className={`third ${className}`} ref={ref}>
                <p>Search for your Meals</p>
                 <Search></Search>
                   <div className="items">
                                      
                                       {isloading?<button className="loading"></button>: <>
                                                                      { searchmeals.length!==0?
                                                                      <LIST error={error} meals={searchmeals}></LIST>:
                                                                         <p >  Found No meals !  </p>
                                                                      }
                                                                     
                                                                     
                                                      <PAGES meals={searchmeals} pagesarr={pagesarr} numpaes={numpages}></PAGES>
                                                           </>     }  
                                          
                                   </div>
               
                  
         </section>


    )
}