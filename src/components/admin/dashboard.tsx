import React, { useState } from "react"

import { use } from "react"
import { Contexttoken } from "../../store/contexttoken"
import { useNavigate } from "react-router"
import { useEffect } from "react"
import { useLocation } from "react-router"
export const Dashboard:React.FC<{}>=()=>{
    const path=useLocation()

    const navigate=useNavigate()
    const [pathname,setpathname]=useState<string>(path.pathname)
    const {cleartoken,gettoken,token}=use(Contexttoken)
    const [adminglogin,setadminlogin]=useState<boolean>(false)

useEffect( ()=>{
    async function iflogin(){
         const res=await fetch('https://fastdish-backend.onrender.com/admin/isadmin',{
    
    method:'POST',
       headers:{    'Content-Type': 'application/json', 
                    'Accept': 'application/json',
                      Authorization:'Beraer ' + token
                }   
               })  
               if(!res.ok){
                setadminlogin(false)
                return;
               }
               setadminlogin(true)
    }
    iflogin()
    setpathname(path.pathname)
},[path.pathname])



async function logouthandle(){
   gettoken()
const res=await fetch('https://fastdish-backend.onrender.com/admin/isadmin',{
    
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

async function handelnavigate(url:string){
   gettoken()
const res=await fetch('https://fastdish-backend.onrender.com/admin/isadmin',{
    
    method:'POST',
       headers:{    'Content-Type': 'application/json', 
                    'Accept': 'application/json',
                      Authorization:'Beraer ' + token
                }   
})  

if(!res.ok){
    return;
}
 navigate(url)



}



    return(
        <div className="dashboard">
         
                  <button onClick={()=>handelnavigate('/admin/products')} className={pathname==='/admin/products'?'clicked':''} >Products</button>
                 <button  onClick={()=>handelnavigate('/admin/addproduct')} className={pathname==='/admin/addproduct'?'clicked':''} > AddProduct</button>
                 <button onClick={()=>handelnavigate('/admin/orders')} className={pathname==='/admin/orders'?'clicked':''} > Orders</button>
                 
                 {adminglogin?<button onClick={logouthandle} style={{color:'red'}}>LogOut</button>:''}
        </div>
    )
}