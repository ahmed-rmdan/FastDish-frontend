import React, {  useState } from "react";
import type { meal } from "../components/global/type";

export const Contexttoken=React.createContext<{token:string,settoken(value:string):void,getfavourites(value:string):void,favourites:meal[],setfavourites(items:meal[]):void}>
({token:'',settoken:()=>{},getfavourites:()=>{},favourites:[],setfavourites:()=>{}})

export const Contexttokenprovider:React.FC<{children:React.ReactNode}>=(props)=>{
const [token,settokenvalue]=useState('')
const [favourites,setfavourites]=useState<meal[]>([])


async function settoken(value:string){
settokenvalue(value)

}
async function getfavourites(tokenvalue:string){
    console.log('hello')
    
    const res=await fetch('http://localhost:3000/user/getfavourites',{ headers:{ 'Content-Type': 'application/json', 
                    'Accept': 'application/json',
                      Authorization:'Beraer ' + tokenvalue
                }                       
    })
    const data:meal[]=await res.json()
    setfavourites(data)
}



const contextvalue={token,settoken,getfavourites,favourites,setfavourites}


    return(
        <Contexttoken value={contextvalue}>
            {props.children}
        </Contexttoken>

    )
}