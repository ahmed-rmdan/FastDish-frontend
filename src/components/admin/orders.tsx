import React, { use,useState } from "react"
import { Orderitem } from "./orderitem"
import { useEffect } from "react"
import { Contexttoken } from "../../store/contexttoken"
import { useNavigate } from "react-router"
import type  {oderadmin} from '../global/type'
export const Orders:React.FC<{}>=()=>{
    const navigate=useNavigate()
const {token}=use(Contexttoken)
const [adminorders,setadminorders]=useState<oderadmin[]>([])
useEffect(()=>{
    async function adminloader(){
const res=await fetch('http://localhost:3000/admin/isadmin',{
    method:'POST',
       headers:{    'Content-Type': 'application/json', 
                    'Accept': 'application/json',
                      Authorization:'Beraer ' + token
                }   
})
if (!res.ok){
    navigate('/admin/login')
      return;
}
    }
 adminloader()
 

async function getadminorders(){
   const res=await fetch('http://localhost:3000/admin/getadminorders',{
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