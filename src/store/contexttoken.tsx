import React, {  useState,useRef } from "react";
import type { meal } from "../components/global/type";

export const Contexttoken=React.createContext<{token:string,cleartoken():void,gettoken():void,settoken(value:string):void,getfavourites(value:string):void,favourites:meal[],setfavourites(items:meal[]):void}>
({token:'',cleartoken:()=>{},gettoken:()=>{},settoken:()=>{},getfavourites:()=>{},favourites:[],setfavourites:()=>{}})

export const Contexttokenprovider:React.FC<{children:React.ReactNode}>=(props)=>{
    const inistialtoken:string=localStorage.getItem('token')||''

const [token,setthetoken]=useState<string>(inistialtoken)
const [favourites,setfavourites]=useState<meal[]>([])
let timeout=useRef<ReturnType<typeof setTimeout>>(null)


 function settoken(value:string){
   
  localStorage.setItem('token',value)
  console.log(localStorage.getItem('token'))
 
  timeout.current=setTimeout(()=>{
    
   localStorage.clear()
   setthetoken('')
  },500000)
      setthetoken(value)

}

async function gettoken(){
const token=await localStorage.getItem('token')

if(!token){
  setthetoken('') 
  return 
}

setthetoken(token)



}

function cleartoken(){
    localStorage.clear();
     setthetoken('')
    clearTimeout(timeout.current as number)
}


async function getfavourites(tokenvalue:string){
   console.log(tokenvalue)
    
    const res=await fetch('https://fastdish-backend.onrender.com/user/getfavourites',{ headers:{ 'Content-Type': 'application/json', 
                    'Accept': 'application/json',
                      Authorization:'Beraer ' + tokenvalue
                }                       
    })
    if(!res.ok) return;
    const data:meal[]=await res.json()
    setfavourites(data)
}



const contextvalue={token,cleartoken,gettoken,settoken,getfavourites,favourites,setfavourites}


    return(
        <Contexttoken value={contextvalue}>
            {props.children}
        </Contexttoken>

    )
}