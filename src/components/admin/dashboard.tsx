import React from "react"
import { NavLink } from "react-router"

export const Dashboard:React.FC<{}>=()=>{

    return(
        <div className="dashboard">
         
                  <NavLink to={'/admin/products'} className={({isActive})=>{return isActive?'clicked':''}} > <button >Products</button></NavLink> 
                  <NavLink to={'/admin/addproduct'} className={({isActive})=>{return isActive?'clicked':''}}><button > AddProduct</button></NavLink>  
                <NavLink to={'/admin/orders'} className={({isActive})=>{return isActive?'clicked':''}}> <button > Orders</button></NavLink>  
                 
                 <button >LogOut</button>
        </div>
    )
}