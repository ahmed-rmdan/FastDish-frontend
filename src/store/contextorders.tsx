import React, {  useState } from "react";
import type { order } from "../components/global/type";

export const Contextorders=React.createContext<{getorders(value:string):void,orders:order[],setorders(items:order[]):void}>
({getorders:()=>{},orders:[],setorders:()=>{}})

export const Contextordersprovider:React.FC<{children:React.ReactNode}>=(props)=>{

const [orders,setorders]=useState<order[]>([])



async function getorders(tokenvalue:string){

    
    const res=await fetch('http://localhost:3000/user/getorders',{ headers:{ 'Content-Type': 'application/json', 
                    'Accept': 'application/json',
                      Authorization:'Beraer ' + tokenvalue
                }                       
    })
    const data=await res.json()
    if(!res.ok) return
    const orderdata:order[]=data.data
    setorders(orderdata)
}



const contextvalue={getorders,orders,setorders}


    return(
        <Contextorders value={contextvalue}>
            {props.children}
        </Contextorders>

    )
}