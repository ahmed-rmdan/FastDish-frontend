import React, { type FormEvent } from "react";
import { Contextcart } from "../../store/contextcart";
import { use ,useState,useEffect} from "react";
import { Contextdialog } from "../../store/dialogcontext";
import { Listitem } from "../global/listitem";
import stripelogo from '../../images/stripeLogo.svg'
import { Contexttoken } from "../../store/contexttoken";

export const Dialog:React.FC<{open:string}>=(props)=>{
    const [classname,setclassname]=useState('')
    console.log(classname)
   const{cartitems} =use(Contextcart)
   const{setdialog}=use(Contextdialog)
   const {settoken,getfavourites}=use(Contexttoken)
   const [signuperr,setsignuperr]=useState('')
   const [deliveryaddress,setdeliveryaddress]=useState('')
   const address=React.useRef<null|HTMLInputElement>(null)
      useEffect(()=>{
 
    setclassname('dialogdisplay')

    return ()=>{
        setclassname('')
    }
   },[props.open])
   
   console.log(classname)
   

  
console.log(classname)
async function handlesignup(e:React.FormEvent<HTMLFormElement>){
         e.preventDefault()
      const data = new FormData(e.currentTarget);
const formdata=Object.fromEntries(data.entries())
if(formdata.password!==formdata.confirmpassword){
    setsignuperr('Password Are Not Similiar')
return;
}

 fetch('http://localhost:3000/user/signup',{
    method:'POST',
     headers:{    'Content-Type': 'application/json', 
                    'Accept': 'application/json'},
       body:JSON.stringify(formdata)
}).then(res=>{
    return res.json()
}).then(data=>{
    if(data.message=='signup succed'){
           window.location.reload(); 
           return;
    }
     setsignuperr(data.message) 
     return
})


}



async function handlesignin(e:React.FormEvent<HTMLFormElement>){
    console.log('sign in')
         e.preventDefault()
      const data = new FormData(e.currentTarget);
const formdata=Object.fromEntries(data.entries())
console.log(formdata)


 fetch('http://localhost:3000/user/signin',{
    method:'POST',
     headers:{ 'Content-Type': 'application/json', 
                    'Accept': 'application/json',
                },
                    
       body:JSON.stringify(formdata)
}).then(res=>{
    return res.json()
}).then(data=>{
    if(data.message=='signin succed'){
           
           settoken(data.token)
           getfavourites(data.token)
           setdialog('')
           return;
    }
    console.log('failed')
     setsignuperr(data.message) 
     return
})

}

function topayment(){
    
    if(!address.current?.value) return;

 const addressvalue:string=address.current.value
setdeliveryaddress(addressvalue)
setdialog('payment')

}

async function createorder(e:React.FormEvent<HTMLFormElement>){
   
         e.preventDefault()
      const data = new FormData(e.currentTarget);
const formdata=Object.fromEntries(data.entries())



}







const totalprice=cartitems.items.reduce((curr,elm)=>{
    return  curr+(elm.quantity*elm.price)
},0)

if(props.open==='cartdialoge'){
 return(
       <dialog open={props.open==='cartdialoge'} >
       <div className="overlay">
               <div className={`dialog ${classname}`}>
                    <div className="dialogitems">
                           {cartitems.items.map(elm=>{
                            return <Listitem name={elm.name} quantity={elm.quantity} imgeurl={elm.imgeurl} ingredients={elm.ingredients} price={elm.price} type='dialog' id={elm._id} key={elm._id }></Listitem>
                           })}
                    </div>
                    <p className="totalprice"> Your TotalPrice : {new Intl.NumberFormat("de-DE", { style: "currency", currency: "EGP" }).format(totalprice)} </p>
                      <div className="deliveryadress">
                              <p> Delivery Adress</p>
                        <input type='text' required ref={address} ></input>
                        </div>
                    <div className="button-container button-container-cartitems">
                        <button onClick={topayment} className="ContinuetoPayment"> Continue to Payment</button>
                        <button onClick={()=>setdialog('')} className="close"> close</button>
                    </div>

               </div>
       </div>
       
       </dialog>
    )

}
// if(props.open==='formdialog'){


//  return(
//        <dialog open={props.open==='formdialog'} >
//        <div className="overlay">
//                <div className={`dialog ${classname}`}>
//                     <form className="formdialog" onSubmit={createorder}>
//                         <div>
//                              <p>Your Name</p>
//                         <input type="text" required></input>
//                         </div>
                      
//                         <div>
//                               <p>Email</p>
//                         <input type='email' required></input>
//                         </div>
//                         <div>
//                               <p> Delivery Adress</p>
//                         <input type='text' required></input>
//                         </div>
//                         <div>
//                               <p>Telphone Number</p>
//                         <input type='number' required></input>
//                         </div>
//                         <div className="button-container">
//                         <button   type="submit"  > confirm </button>
//                         <button onClick={()=>setdialog('')}> close</button>
//                     </div>
//                     </form>
                    

//                </div>
//        </div>
       
//        </dialog>
//     )


// }
if(props.open==='thankyoudialog'){
return(
       <dialog open={props.open==='thankyoudialog'} >
       <div className="overlay">
               <div className={`dialog ${classname}`}>
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
               <div className={`dialog ${classname}`}>
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
               <div className={`dialog ${classname}`}>
                    <form className="signindialog" onSubmit={handlesignin}>
                        <div>
                             <p>UserName</p>
                        <input type="text" name="username"></input>
                        </div>
                        <div>
                              <p>PassWord</p>
                        <input type='password' name='password'></input>
                        </div>
                           <div className="logincontainer">
                              <button className="login" >login</button>
                              {signuperr===''?'':<p className="err">{signuperr}</p>}
                             
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
               <div className={`dialog ${classname}`}>
                     <button className="close" onClick={()=>setdialog('')}> X</button>
                    <form className="signupdialog" onSubmit={handlesignup}>
                        <div>
                             <p>Your UserName</p>
                        <input type="text" name="username" required></input>
                        </div>
                        <div>
                              <p>Your PassWord</p>
                        <input type='password' name="password" required ></input>
                        </div>
                    
                        <div>
                              <p>Confirm PassWord</p>
                        <input type='password' name="confirmpassword" required></input>
                        </div>
                        <div>
                              <p>Email</p>
                        <input type='email' name="email" required></input>
                        </div>
                        <div>
                              <p>Home Adress</p>
                        <input type='text' name="adress" required></input>
                        </div>
                        <div>
                              <p>Telphone Number</p>
                        <input type='number' name="telphone" required></input>
                        </div>
                       {signuperr===''?'': <p className="err"> {signuperr}</p>}
                          
                           
                              <button className="signup" >SignUp</button>
                          
                           
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
               <div className={`dialog ${classname}`}>
                            <button className="stripe">
                                <img src={stripelogo} className="stripeimg"></img>
                                Pay by using stripe
                            </button>
                            <p style={{fontSize:'2.5em'}}>OR</p>
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