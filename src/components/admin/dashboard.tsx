import React from "react"
import { NavLink } from "react-router"
import { use } from "react"
import { Contexttoken } from "../../store/contexttoken"
export const Dashboard:React.FC<{}>=()=>{
    const {cleartoken,gettoken,token}=use(Contexttoken)
async function logouthandle(){
   gettoken()
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
 const confirm= window.confirm('you are logging out are you sure ?')
 if(confirm)
cleartoken()
 else return;
}
    return(
        <div className="dashboard">
         
                  <NavLink to={'/admin/products'} className={({isActive})=>{return isActive?'clicked':''}} > <button >Products</button></NavLink> 
                  <NavLink to={'/admin/addproduct'} className={({isActive})=>{return isActive?'clicked':''}}><button > AddProduct</button></NavLink>  
                <NavLink to={'/admin/orders'} className={({isActive})=>{return isActive?'clicked':''}}> <button > Orders</button></NavLink>  
                 
                 <button onClick={logouthandle} style={{color:'red'}}>LogOut</button>
        </div>
    )
}