import React, { useState } from "react";
import type { meal } from "../components/global/type";

export const Contextsearch=React.createContext<{searchvalue:string,setsearchvalue:(ev:string)=>void,searchmeals:meal[],
    getsearchmeals:(meals:meal[])=>void,error:null|string ,seterror:(ev:null|string)=>void,isloading:boolean,setisloading:(ev:boolean)=>void}>
({searchvalue:'',setsearchvalue:()=>{},searchmeals:[],getsearchmeals:() =>{},error:null,seterror:()=>{},isloading:false,setisloading:()=>{}
})

export const Contextsearchprovider:React.FC<{children:React.ReactNode}>=(props)=>{


const [searchvalue,setsearch]=useState('')
const [searchmeals,setsearchmeals]=useState<meal[]>([])
const [error,seterror]=useState<null|string>(null)
     const [isloading,setisloading]=useState<boolean>(false)

function setsearchvalue(ev:string){
    if(ev===''){
 return;
    }
       
setsearch(ev)
}
function getsearchmeals(meals:meal[]){
    setsearchmeals(meals)    
}
const contextvalue={setsearchvalue,searchvalue,searchmeals,getsearchmeals,error,seterror,isloading,setisloading}
    return(
        <Contextsearch value={contextvalue}>
            {props.children}
        </Contextsearch>
    )
}