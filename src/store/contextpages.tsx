import React, { useState } from "react";


export const Contextpage=React.createContext<{menupg:number,searchpg:number,favouritepg:number,choosemenupg:(num:number)=>void,choosesearchpg:(num:number)=>void ,choosefavouritepg:(num:number)=>void}>
({menupg:1,searchpg:1,favouritepg:1,choosemenupg:()=>{},choosesearchpg:()=>{} ,choosefavouritepg:()=>{} 
})

export const Contextpageprovider:React.FC<{children:React.ReactNode}>=(props)=>{
const [menupg,setmenupg]=useState(1)
const [searchpg,setsearchpg]=useState(1)
const [favouritepg,setfavouritepg]=useState(1)
function choosemenupg(num:number){
    setmenupg(num)
    
}
function choosesearchpg(num:number){
    setsearchpg(num)
}
function choosefavouritepg(num:number){
    setfavouritepg(num)
}

const contextvalue={menupg,searchpg,favouritepg,choosemenupg,choosesearchpg,choosefavouritepg}
    return(
        <Contextpage value={contextvalue}>
            {props.children}
        </Contextpage>

    )
}