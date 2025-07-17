import React from "react";
import { Contextcart } from "../../store/contextcart";
import { use } from "react";
import { Contextdialog } from "../../store/dialogcontext";
import { Listitem } from "../global/listitem";
export const Dialog:React.FC<{open:string}>=(props)=>{
   const{cartitems} =use(Contextcart)
   const{setdialog}=use(Contextdialog)
const totalprice=cartitems.items.reduce((curr,elm)=>{
    return  curr+(elm.quantity*80)
},0)

if(props.open==='cartdialoge'){
 return(
       <dialog open={props.open==='cartdialoge'} >
       <div className="overlay">
               <div className="dialog">
                    <div className="dialogitems">
                           {cartitems.items.map(elm=>{
                           return <Listitem type="dialog" imgeurl={elm.image_url} name={elm.title} price={80} quantity={elm.quantity} id={elm.id}></Listitem>
                           })}
                    </div>
                    <p className="totalprice"> Your TotalPrice : {new Intl.NumberFormat("de-DE", { style: "currency", currency: "EGP" }).format(totalprice)} </p>
                    <div className="button-container">
                        <button onClick={()=>setdialog('formdialog')}> proceed</button>
                        <button onClick={()=>setdialog('')}> close</button>
                    </div>

               </div>
       </div>
       
       </dialog>
    )

}
if(props.open==='formdialog'){


 return(
       <dialog open={props.open==='formdialog'} >
       <div className="overlay">
               <div className="dialog">
                    <form className="formdialog">
                        <p>your name</p>
                        <input type="text"></input>
                        <p>your address</p>
                        <input type="text"></input>
                    </form>
                    <div className="button-container">
                        <button onClick={()=>setdialog('thankyoudialog')}> confirm </button>
                        <button onClick={()=>setdialog('')}> close</button>
                    </div>

               </div>
       </div>
       
       </dialog>
    )


}
if(props.open==='thankyoudialog'){
return(
       <dialog open={props.open==='thankyoudialog'} >
       <div className="overlay">
               <div className="dialog">
                              <p className="thankyou">thank for your purchasing</p>
                    <div className="button-container">
                        
                        <button onClick={()=>setdialog('')}> close</button>
                    </div>

               </div>
       </div>
       
       </dialog>
    )
}
if(props.open==='contact'){
    return(
    <dialog open={props.open==='contact'} >
       <div className="overlay">
               <div className="dialog">
                            <div className="contact">
                                  <p> E-MAIL : FOOD-ORDER@gmail.com</p>
                              <p> TELPHONE : 021111000000</p>
                              <p>HOTLINE : 19088</p>
                            </div>
                             
                              
                    <div className="button-container">
                        
                        <button onClick={()=>setdialog('')}> close</button>
                    </div>

               </div>
       </div>
       
       </dialog>

    )
}
   
}