import React, { useState } from "react";


export const Contextdialog=React.createContext<{dialog:string,setdialog:(name:string)=>void}>
({
    dialog:'',
    setdialog:()=>{}
})

export const Contextdialogprovider:React.FC<{children:React.ReactNode}>=(props)=>{


const [dialog,setdialog]=useState('')





const contextvalue={dialog,setdialog}
    return(
        <Contextdialog value={contextvalue}>
            {props.children}
        </Contextdialog>
    )
}