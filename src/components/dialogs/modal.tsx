import React from "react";
import { createPortal } from "react-dom";
import { Dialog } from "./dialog";
import { use } from "react";
import { Contextdialog } from "../../store/dialogcontext";
export const Modal:React.FC<{}>=()=>{
    const {dialog}=use(Contextdialog)
    const elemnt=document.getElementById('dialog')
if(elemnt===null)
    return;
else{
  return createPortal(
    <Dialog open={'formdialog'}></Dialog>


    ,elemnt
)
}
  
}
