import React, {  useState } from "react";
import type { order } from "../components/global/type";


import { io } from "socket.io-client";
export const Contextorders=React.createContext<{getorders(value:string):void,orders:order[],setorders(items:order[]):void,initSocket(token:string):any,socket:any}>
({getorders:()=>{},orders:[],setorders:()=>{},initSocket:()=>{},socket:null})

export const Contextordersprovider:React.FC<{children:React.ReactNode}>=(props)=>{

const [orders,setorders]=useState<order[]>([])

let socket :any;


async function getorders(tokenvalue:string){    

    const res=await fetch('https://fastdish-backend.onrender.com/user/getorders',{ headers:{ 'Content-Type': 'application/json', 
                    'Accept': 'application/json',
                      Authorization:'Beraer ' + tokenvalue
                }                       
    })
    const data=await res.json()
    if(!res.ok) return
    const orderdata:order[]=data.data
    const userid:string=data.userid
    console.log(userid)
    setorders(orderdata)
    console.log(socket?.id)
  
}

 const  initSocket = (token: string) => {
  
    socket = io("https://fastdish-backend.onrender.com", {
      auth: { token },
    });

    socket.on("connect", () => {
      console.log("socket connected:", socket.id);
      socket.emit("joinUserRoom");
    });

    socket.on("getorders", (data:any) => {
      console.log("got getorders:", data);
      setorders(data.orders)
    
    });
  
  return socket;
};





const contextvalue={getorders,orders,setorders,initSocket,socket} 


    return(
        <Contextorders value={contextvalue}>
            {props.children}
        </Contextorders>

    )
}