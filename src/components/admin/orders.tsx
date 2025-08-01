import React, { use,useState } from "react"
import { Orderitem } from "./orderitem"
import { useEffect } from "react"
import { Contexttoken } from "../../store/contexttoken"

import type  {oderadmin} from '../global/type'
export const Orders:React.FC<{}>=()=>{
   
const {gettoken,token}=use(Contexttoken)
const [adminorders,setadminorders]=useState<oderadmin[]>([])
useEffect(()=>{
    async function adminloader(){
       await gettoken()
const res=await fetch('https://fastdish-backend-production.up.railway.app/admin/isadmin',{
    method:'POST',
       headers:{    'Content-Type': 'application/json', 
                    'Accept': 'application/json',
                      Authorization:'Beraer ' + token
                }   
})
if (!res.ok){
 
      return;
}
    }
 adminloader()
 

async function getadminorders(){
   await gettoken()
   const res=await fetch('https://fastdish-backend-production.up.railway.app/admin/getadminorders',{
       headers:{    'Content-Type': 'application/json', 
                    'Accept': 'application/json',
                      Authorization:'Beraer ' + token
   
                     }   
})
if (!res.ok){
      return;
}
const {data}= await res.json()
setadminorders(data)
console.log(adminorders)

}
getadminorders()





},[token])
    return(
        <div className="outlet">
                <ul className="products">

                    {adminorders.map(order=>{
                        return <Orderitem name={order.username} price={order.totalprice} address={order.address} id={order._id} telphone={order.telphone}
                                 details={order.details} payment={order.payment} state={order.state}
                        ></Orderitem>
                    })}
                
                                     
                </ul>   
                
                
        </div>
    )
}