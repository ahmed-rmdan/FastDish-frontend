import React from "react";
import { Contextcart } from "../../store/contextcart";
import { use } from "react";
import { Contextdialog } from "../../store/dialogcontext";
import { Listitem } from "../global/listitem";
import stripelogo from '../../images/stripeLogo.svg'
export const Dialog:React.FC<{open:string}>=(props)=>{
   const{cartitems} =use(Contextcart)
   const{setdialog}=use(Contextdialog)
const totalprice=cartitems.items.reduce((curr,elm)=>{
    return  curr+(elm.quantity*elm.price)
},0)

if(props.open==='cartdialoge'){
 return(
       <dialog open={props.open==='cartdialoge'} >
       <div className="overlay">
               <div className="dialog">
                    <div className="dialogitems">
                           {cartitems.items.map(elm=>{
                            return <Listitem name={elm.name} quantity={elm.quantity} imgeurl={elm.imgeurl} ingredients={elm.ingredients} price={elm.price} type='dialog' id={elm._id} key={elm._id }></Listitem>
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
                        <div>
                             <p>Your Name</p>
                        <input type="text"></input>
                        </div>
                      
                        <div>
                              <p>Email</p>
                        <input type='email'></input>
                        </div>
                        <div>
                              <p>Home Adress</p>
                        <input type='text'></input>
                        </div>
                        <div>
                              <p>Telphone Number</p>
                        <input type='number'></input>
                        </div>
                    </form>
                    <div className="button-container">
                        <button onClick={()=>setdialog('payment')}> confirm </button>
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
if(props.open==='signin'){


 return(
       <dialog open={props.open==='signin'} >
       <div className="overlay">
               <div className="dialog">
                    <form className="signindialog">
                        <div>
                             <p>Your UserName</p>
                        <input type="text"></input>
                        </div>
                        <div>
                              <p>Your PassWord</p>
                        <input type='password'></input>
                        </div>
                           <div className="logincontainer">
                              <button className="login">login</button>
                              <button className="reset">reset your password</button>
                           </div>
                           
                    </form>
                    <div className="button-container">
                        <button onClick={()=>setdialog('signup')}> SignUp </button>
                        <button onClick={()=>setdialog('')}> close</button>
                    </div>

               </div>
       </div>
       
       </dialog>
    )


}
   if(props.open==='signup'){


 return(
       <dialog open={props.open==='signup'} >
       <div className="overlay">
               <div className="dialog">
                     <button className="close" onClick={()=>setdialog('')}> X</button>
                    <form className="signupdialog">
                        <div>
                             <p>Your UserName</p>
                        <input type="text"></input>
                        </div>
                        <div>
                              <p>Your PassWord</p>
                        <input type='password'></input>
                        </div>
                    
                        <div>
                              <p>Confirm PassWord</p>
                        <input type='password'></input>
                        </div>
                        <div>
                              <p>Email</p>
                        <input type='email'></input>
                        </div>
                        <div>
                              <p>Home Adress</p>
                        <input type='text'></input>
                        </div>
                        <div>
                              <p>Telphone Number</p>
                        <input type='number'></input>
                        </div>
                          
                           
                              <button className="signup">SignUp</button>
                          
                           
                    </form>
                    

               </div>
       </div>
       
       </dialog>
    )


}
if(props.open==='payment'){
    return(
    <dialog open={props.open==='payment'} >
       <div className="overlay">
               <div className="dialog">
                            <button className="stripe">
                                <img src={stripelogo} className="stripeimg"></img>
                                Pay by using stripe
                            </button>
                            <p>OR</p>
                            <button className="delivry" onClick={()=>setdialog('thankyoudialog')}> Pay on Delivery</button>
                             
                              
                    <div className="button-container">
                        
                        <button onClick={()=>setdialog('')}> close</button>
                    </div>

               </div>
       </div>
       
       </dialog>

    )
}
}