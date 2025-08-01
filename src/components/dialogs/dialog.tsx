import React from "react";
import { Contextcart } from "../../store/contextcart";
import { use ,useState,useEffect} from "react";
import { Contextdialog } from "../../store/dialogcontext";
import { Listitem } from "../global/listitem";
import stripelogo from '../../images/stripeLogo.svg'
import { Contexttoken } from "../../store/contexttoken";
import { Contextorders } from "../../store/contextorders";

export const Dialog:React.FC<{open:string}>=(props)=>{
    const [classname,setclassname]=useState('')
    console.log(classname)
   const{cartitems} =use(Contextcart)
   const{setdialog}=use(Contextdialog)
   const {settoken,getfavourites,gettoken,token}=use(Contexttoken)
   const [signuperr,setsignuperr]=useState('')
   const [deliveryaddress,setdeliveryaddress]=useState('')
    const {getorders}=use(Contextorders)


   const address=React.useRef<null|HTMLInputElement>(null)


   const totalprice=cartitems.items.reduce((curr,elm)=>{
    return  curr+(elm.quantity*elm.price)
},0)




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

 fetch('https://fastdish-backend-production.up.railway.app/user/signup',{
    method:'POST',
     headers:{    'Content-Type': 'application/json', 
                    'Accept': 'application/json'},
       body:JSON.stringify(formdata)
}).then(res=>{
    return res.json()
}).then(data=>{
    if(data.message=='signup succed'){
           settoken(data.token)
           getfavourites(data.token)
           getorders(data.token)
           setdialog('')
           return;
    }
     setsignuperr(data.message) 
     return
})


}



async function handlesignin(e:React.FormEvent<HTMLFormElement>){
    
         e.preventDefault()
      const data = new FormData(e.currentTarget);
const formdata=Object.fromEntries(data.entries())



 fetch('https://fastdish-backend-production.up.railway.app/user/signin',{
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
           getorders(data.token)
           setdialog('')
           return;
    }
    
     setsignuperr(data.message) 
     return
})

}

async function topayment(){
    if(!address.current?.value) return;
gettoken()

const res=await fetch('https://fastdish-backend-production.up.railway.app/user/continuepayment',{
       headers:{    'Content-Type': 'application/json', 
                    'Accept': 'application/json',
                      Authorization:'Beraer ' + token
                }   
})
if (!res.ok){
    setdeliveryaddress('')
     setdialog('signin')
      return;
}
   

 const addressvalue:string=address.current.value
setdeliveryaddress(addressvalue)
setdialog('payment')
}





async function ondeliveryhandle(){
   gettoken()
const res=await fetch('https://fastdish-backend-production.up.railway.app/user/createorder',{
          method:'POST',
       headers:{    'Content-Type': 'application/json', 
                    'Accept': 'application/json',
                      Authorization:'Beraer ' + token
                } ,
                body:JSON.stringify({items:cartitems.items,address:deliveryaddress,totalprice})
})
    if(!res.ok){
        setdialog('')
        return
    }    
    setdialog('thankyoudialog')
    setdeliveryaddress('')
     getorders(token)


}
async function handlestripechecout(){
    const res=await fetch('https://fastdish-backend-production.up.railway.app/user/stripecheckout',{
          method:'POST',
       headers:{    'Content-Type': 'application/json', 
                    'Accept': 'application/json',
                      Authorization:'Beraer ' + token
                } ,
                body:JSON.stringify(cartitems.items)
})
console.log(cartitems.items)
if(!res.ok) return;
const data=await res.json()
if(!data.url) return;
window.location.href=data.url

}



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
                              <p> Delivery Address</p>
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

if(props.open==='thankyoudialog'){
return(
       <dialog open={props.open==='thankyoudialog'} >
       <div className="overlay">
               <div className={`dialog ${classname}`}>
                              <p className="thankyou" style={{display:'flex' ,textAlign:'center' }}>thank you for ordering  <br/> you can track your orders state in MyOrders</p>
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
                           
                              <p className="err" style={{height:'30px'}}>{signuperr} </p>
                             
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
                        <input type="text" name="username" required minLength={5} maxLength={15}></input>
                        </div>
                        <div>
                              <p>Your PassWord</p>
                        <input type='password' name="password" required minLength={6} maxLength={15}></input>
                        </div>
                    
                        <div>
                              <p>Confirm PassWord</p>
                        <input type='password' name="confirmpassword" required minLength={6} maxLength={15}></input>
                        </div>
                        <div>
                              <p>Email</p>
                        <input type='email' name="email" required></input>
                        </div>
                        <div>
                              <p>Home Address</p>
                        <input type='text' name="adress" required minLength={6}></input>
                        </div>
                        <div>
                              <p>Telphone Number</p>
                        <input type='number' name="telphone" required minLength={11}></input>
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
                            <button className="stripe" onClick={handlestripechecout}>
                                <img src={stripelogo} className="stripeimg"></img>
                                Pay by using stripe
                            </button>
                            <p style={{fontSize:'2.5em'}}>OR</p>
                            <button className="delivry" onClick={ondeliveryhandle}> Pay on Delivery</button>
                             
                              
                    <div className="button-container">
                        
                        <button onClick={()=>setdialog('')}> close</button>
                    </div>

               </div>
       </div>
       
       </dialog>

    )
}
}