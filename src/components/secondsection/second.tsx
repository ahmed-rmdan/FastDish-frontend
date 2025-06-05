import React from "react";

import { useState } from "react";
import type { meal } from "../type";
import { LIST } from "./list";
export const Second:React.FC<{}>=()=>{
     const [meals,storemeals]=useState<null|meal[]>(null)
     const [error,seterror]=useState<null|string>(null)
     
    function getmenu(meal:string){
      async function loadmeals(){
          try{
const res=await fetch(`https://forkify-api.jonas.io/api/v2/recipes?search=${meal}`)  
        if(!res.ok){
  throw new Error('somthing went wrong')
        }
         const data=await res.json()
          storemeals(data.data.recipes)
          seterror(null)   
          }catch(error){
               if(error instanceof Error)
               seterror(error.message)
          }
      }
    loadmeals()
    }
let pagesarr=[]
let numpages=0
if(meals!==null){
      numpages=Math.ceil(meals!.length/6)
for(let i=1; i<=numpages;i++){
pagesarr.push(i)
}
}

    return(
         <section className="second">
                  <div className="meanu">
                       <p>menu</p>
                       <button onClick={()=>getmenu('pizza')}>Pizza</button>
                       <button onClick={()=>getmenu('burger')}>Burger</button>
                       <button onClick={()=>getmenu('pasta')}>Pasta</button>
                       <button onClick={()=>getmenu('rice')}>rice</button>
                       <button onClick={()=>getmenu('chicken')}>Chicken</button>

                  </div>
                  <div className="items">
                         <LIST error={error} meals={meals}></LIST>
                        <div className="pages">
                               <div className="pages-container">
                                {meals===null?'':pagesarr.map(elm=>{
                                   return <button key={elm}>{elm}</button>
                                })}

                               </div>
                               {meals!==null&&numpages>5?<button className="next">next</button>:''}
                        </div>
                  </div>
         </section>


    )
}