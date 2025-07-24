import React, { useState } from "react";


export const Contexttoken=React.createContext<{token:string,settoken(value:string):void}>
({token:'',settoken:()=>{}})

export const Contexttokenprovider:React.FC<{children:React.ReactNode}>=(props)=>{
const [token,settokenvalue]=useState('')
function settoken(value:string){
settokenvalue(value)
}


const contextvalue={token,settoken}


    return(
        <Contexttoken value={contextvalue}>
            {props.children}
        </Contexttoken>

    )
}