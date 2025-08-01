import React from "react"
import { use } from "react"
import { Contextcart } from "../../store/contextcart"

import { useNavigate } from "react-router-dom"
import { ShoppingCart } from 'lucide-react';
import { Contexttoken } from "../../store/contexttoken"
import { Contextdialog } from "../../store/dialogcontext"
export const Listitem:React.FC<{imgeurl:string,name:string,quantity:number,price:number,type:string,id:string,ingredients:string,typemeal?:string}>=(props)=>{
    const {dispatchcartitems}=use(Contextcart)
    
    const {token,gettoken,setfavourites}=use(Contexttoken)
    const {setdialog}=use(Contextdialog)


    let navigate=useNavigate()
function editproduct(){
    navigate(`/admin/editproduct/${props.id}`)
}
async function deletemeal(){
fetch(`https://fastdish-backend-production.up.railway.app/admin/deleteproduct/${props.id}`,{
    method:'DELETE',
       headers:{    'Content-Type': 'application/json', 
                    'Accept': 'application/json'}
                     
    
}).then(()=>{
    console.log('deleted')
    window.location.reload()
}).catch(error=>{
    console.log(error)
})
}

async function addfafourite(){
gettoken()
    try{
   const res=await fetch(`https://fastdish-backend-production.up.railway.app/user/addfavourite/${props.id}`,{
    method:'POST',
       headers:{    'Content-Type': 'application/json', 
                    'Accept': 'application/json',
                      Authorization:'Beraer ' + token
                }                       
}) 
if(res.status===406){
                throw new Error('already exisit')
                
            }                        
if(!res.ok){
    setdialog('signin')
    return
}

    const data=await res.json()
          if(data.message==='not loggedin'){
            setdialog('signin')
          }
          
          setfavourites(data.favourites)
    }catch(err){
    console.log(err)
}

}

async function deletefavourite(){

gettoken()
 const res= await fetch(`https://fastdish-backend-production.up.railway.app/user/deletefavourite/${props.id}`,{
    method:'POST',
       headers:{    'Content-Type': 'application/json', 
                    'Accept': 'application/json',
                      Authorization:'Beraer ' + token
                }                       
})     
if(!res.ok) return;
console.log('deleted')
const data=await res.json()
setfavourites(data.favourites)


}






const mealdata={_id:props.id,name:props.name,imgeurl:props.imgeurl,price:props.price,ingredients:props.ingredients,type:props.type,quantity:1}
if(props.type==='menu'){
   
    return(

        <li className="listitem" key={props.id}>
            <div className="iteminfo">
                   <img src={props.imgeurl}>
                
                  
                   </img>
                   <div className="maininfo">
                         <p className="name">{props.name}</p>
                         <p className="ingredients">{props.ingredients} </p>
                         <p className="price">price : {new Intl.NumberFormat("de-DE", { style: "currency", currency: "EGP" }).format(props.price)} </p>
                   </div>
             

             </div>
             <div className="itembuttons">
                <button onClick={()=>dispatchcartitems({type:'add-item',payload:mealdata})}><ShoppingCart size={'1.4em'}></ShoppingCart>Add to Cart</button>
                <button onClick={addfafourite}>Add to favourite</button>

             </div>
        </li>
    )
}
if(props.type==='favourite'){

    return(

        <li className="listitem"  key={props.id} >
            <div className="iteminfo">
                   <img src={props.imgeurl}>
                
                  
                   </img>
                   <div className="maininfo">
                         <p className="name">{props.name}</p>
                         <p className="ingredients">{props.ingredients} </p>
                         <p className="price"> {new Intl.NumberFormat("de-DE", { style: "currency", currency: "EGP" }).format(props.price)} </p>
                   </div>
             </div>
             <div className="itembuttons">
                <button onClick={()=>dispatchcartitems({type:'add-item',payload:mealdata})} ><ShoppingCart size={'1.3em'}></ShoppingCart>Add to Cart</button>
                <button   onClick={deletefavourite} >remove</button>

             </div>
        </li>
    )

}
if(props.type==='dialog'){
    return(
        <li className="listitem"  key={props.id}>
            <div className="iteminfo">
                   <img src={props.imgeurl} >
                   </img>
                   <div className="maininfo">
                         <p className="name">{props.name}</p>
                         <p className="quntity">quantity : {props.quantity}  </p>
                         
                         <p className="price">price : {new Intl.NumberFormat("de-DE", { style: "currency", currency: "EGP" }).format(props.price*props.quantity)}  </p>
                   </div>
                     

             </div>
        </li>
    )
}
if(props.type==='admin'){
    return(
        <li className="listitem" key={props.id}>
            <div className="iteminfo">
                   <img src={props.imgeurl} >
                   </img>
                   <div className="maininfo">
                         <p className="name">{props.name}</p>
                         <p className="type">Type : {props.typemeal}</p>
                         <p className="ingredients">{props.ingredients} </p>
                         <p className="price">price : {new Intl.NumberFormat("de-DE", { style: "currency", currency: "EGP" }).format(props.price)}  </p>
                   </div>
             </div>
              <div className="itembuttons">
                         <button onClick={deletemeal} >Delete</button>
                        <button onClick={editproduct}> Edit  </button>

                    </div>
        </li>
    )
}

else{
return(
        <li className="listitem" key={props.id}>
            <div className="iteminfo">
                   <img src={props.imgeurl} >
                   </img>
                   <div className="maininfo">
                         <p className="name">{props.name}</p>
                         <p className="quntity">Quantity: {props.quantity}  </p>
                         <p className="price">price : {new Intl.NumberFormat("de-DE", { style: "currency", currency: "EGP" }).format(props.price*props.quantity)}  </p>
                   </div>
             

             </div>
             <div className="itembuttons">
                <button onClick={()=>dispatchcartitems({type:'increase',payload:mealdata})} >+</button>
                <button onClick={()=>dispatchcartitems({type:'decrease',payload:mealdata})}>-</button>
                <button onClick={()=>dispatchcartitems({type:'remove-item',payload:mealdata})}>remove</button>

             </div>
        </li>
    )
}
    
}