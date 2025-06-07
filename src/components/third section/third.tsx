
import React from "react";
import { Search } from "../global/srarch";
import { LIST } from "./listshearch";
import { use } from "react";
import { Contextsearch } from "../../store/contextsearch";
import { PAGES } from "./pages";
export const Third:React.FC<{}>=()=>{
     const{searchmeals,error,isloading}=use(Contextsearch)
let pagesarr=[]
let numpages=0
if(searchmeals!==null){
      numpages=Math.ceil(searchmeals!.length/6)
for(let i=1; i<=numpages;i++){
pagesarr.push(i)
}
}

    return(
         <section className="third">
                <p>Search for your Meals</p>
                 <Search></Search>
                   <div className="items">
                                      
                                       {isloading?<button className="loading"></button>: <>
                                                                     <LIST error={error} meals={searchmeals}></LIST>
                                                      <PAGES meals={searchmeals} pagesarr={pagesarr} numpaes={numpages}></PAGES>
                                                           </>     }  
                                          
                                   </div>
               
                  
         </section>


    )
}