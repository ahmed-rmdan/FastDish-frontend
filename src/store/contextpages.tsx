import React, { useState } from "react";


export const Contextpage=React.createContext<{menupg:number,searchpg:number,choosemenupg:(num:number)=>void,choosesearchpg:(num:number)=>void}>({menupg:1,searchpg:1,choosemenupg:()=>{},choosesearchpg:()=>{}})

export const Contextpageprovider:React.FC<{children:React.ReactNode}>=(props)=>{
const [menupg,setmenupg]=useState(1)
const [searchpg,setsearchpg]=useState(1)
function choosemenupg(num:number){
    console.log(num)
    setmenupg(num)
    
}
function choosesearchpg(num:number){
    setsearchpg(num)
}
const contextvalue={menupg,searchpg,choosemenupg,choosesearchpg}
    return(
        <Contextpage value={contextvalue}>
            {props.children}
        </Contextpage>

    )
}