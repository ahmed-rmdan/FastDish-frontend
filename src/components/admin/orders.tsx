import React, { use,useState } from "react"
import { Orderitem } from "./orderitem"
import { useEffect } from "react"
import { Contexttoken } from "../../store/contexttoken"
import { useNavigate } from "react-router"
import type  {oderadmin} from '../global/type'
 type user={username:string,
    password:string,
    email:string,
    adress:string,
    telphone:number,_id:string, favourites:string[],orders:string[]}

    type order={user:user,address:string,details:string,totalprice:number,
      updatedAt:string,createdAt:string
      ,state:string,_id:string ,payment:string
      ,meals:{quantity:number,meal:string}}
export const Orders:React.FC<{}>=()=>{
    const navigate=useNavigate()
const {gettoken,token}=use(Contexttoken)
const [adminorders,setadminorders]=useState<oderadmin[]>([])
useEffect(()=>{
    async function adminloader(){
        gettoken()
const res=await fetch('https://fastdish-backend.onrender.com/admin/isadmin',{
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
  gettoken()
  console.log(token)
   const res=await fetch('https://fastdish-backend.onrender.com/admin/getadminorders',{
       headers:{    'Content-Type': 'application/json', 
                    'Accept': 'application/json',
                      Authorization:'Beraer ' + token
   
                     }   
})
if (!res.ok){
      return;
}
const {data }= await res.json()

const orders=data as order[]
console.log(orders)
 const filterorders=orders.map(order=>{
    
  return {username:order.user.username,details:order.details,address:order.address
    ,_id:order._id,telphone:order.user.telphone,state:order.state,totalprice:order.totalprice,
    payment:order.payment
   }
 })
setadminorders(filterorders)
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