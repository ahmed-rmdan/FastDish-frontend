import React from "react";

import { useState } from "react";
import type { meal } from "../type";
import { LIST } from "./list";
import { PAGES } from "./pages";
export const Second:React.FC<{}>=()=>{
     const [meals,storemeals]=useState<null|meal[]>(null)
     const [error,seterror]=useState<null|string>(null)
     const [clicked,seclicked]=useState<string>('')
     const [isloading,setisloading]=useState<boolean>(false)
    function getmenu(meal:string){
      async function loadmeals(){
          setisloading(true)
          try{
const res=await fetch(`https://forkify-api.jonas.io/api/v2/recipes?search=${meal}`)  
        if(!res.ok){
  throw new Error('somthing went wrong')
        }
         const data=await res.json()
         setisloading(false)
         seclicked(meal)
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
                       <button onClick={()=>getmenu('pizza')} className={clicked==='pizza'?'clicked':''}>Pizza</button>
                       <button onClick={()=>getmenu('burger')}  className={clicked==='burger'?'clicked':''}>Burger</button>
                       <button onClick={()=>getmenu('pasta')} className={clicked==='pasta'?'clicked':''}>Pasta</button>
                       <button onClick={()=>getmenu('rice')} className={clicked==='rice'?'clicked':''}>rice</button>
                       <button onClick={()=>getmenu('chicken')} className={clicked==='chicken'?'clicked':''}>Chicken</button>

                  </div>
                  <div className="items">
                    { isloading?<button className="loading"></button>:
                    <>
                              <LIST error={error} meals={meals}></LIST>
               <PAGES meals={meals} pagesarr={pagesarr} numpaes={numpages}></PAGES>
                    </>     
                    }
                    
              
                  </div>
         </section>


    )
}