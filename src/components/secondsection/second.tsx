import React, { use } from "react";

import { useState,useEffect} from "react";
import type { meal } from "../global/type";
import { LIST } from "./list";
import { PAGES } from "./pages";
import { Contextpage } from "../../store/contextpages";
import { useInView  } from "react-intersection-observer";
import { viewanimistion } from "../global/animistion";

export const Second:React.FC<{}>=()=>{
     const [meals,storemeals]=useState<null|meal[]>(null)
     const [error,seterror]=useState<null|string>(null)
     const [clicked,seclicked]=useState<string>('')
     const [isloading,setisloading]=useState<boolean>(false)
     const{choosemenupg}=use(Contextpage)
      const{ref,inView}=useInView({threshold:0.5})
       const [className,setclassname]=useState('')

    viewanimistion(inView,setclassname,'seconddisplay')

useEffect(()=>{

     async function getallmeals(){
          console.log('start')
          setisloading(true)
          try{
const featchmeals=await fetch('https://fastdish-backend.onrender.com/admin/products')
if(!featchmeals.ok){
     throw new Error('error');
}
   const getmeals=await featchmeals.json()
   console.log(getmeals)
   setisloading(false)
   storemeals(getmeals)
          }catch(error){
              if(error instanceof Error){
               setisloading(false)
               seterror(error.message)
              }
          }
          

     }
   getallmeals()

},[])


    function getmenu(meal:string){
      async function loadmeals(){
          setisloading(true)
          seclicked(meal)
          try{
const res=await fetch(`https://fastdish-backend.onrender.com/admin/selectproducts?type=${meal}`)  
        if(!res.ok){
  throw new Error('somthing went wrong')
        }
         const data=await res.json()
         setisloading(false)
         
          storemeals(data)
         
          seterror(null)
          choosemenupg(1)   
          }catch(error){
               if(error instanceof Error){
               console.log(error.message)
               setisloading(false)
               seterror(error.message)
               }
             
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
         <section className={`second ${className}`} ref={ref} >
                  <div className="meanu">
                       <p>Menu</p>
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