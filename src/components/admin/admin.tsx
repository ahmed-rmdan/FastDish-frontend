
import React from "react"
import { AdminNav } from "./adminnav"
import { Dashboard } from "./dashboard"
import { Outlet, useNavigate } from "react-router"
import { Contexttoken } from "../../store/contexttoken"
import { use ,useEffect} from "react"
import { useLocation } from "react-router"
export const Admin:React.FC<{}>=()=>{
const path=useLocation()
const {gettoken,token}=use(Contexttoken)
const navigate=useNavigate()

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
console.log(path.pathname)
if(path.pathname==='/admin/login' || path.pathname=='/admin' || path.pathname=='/admin/'){
   return navigate('/admin/products')
}
navigate(path.pathname)

}
 adminloader()

},[token])

    return(
        <div className="admin">
              <AdminNav></AdminNav>
              <div className="body">
                    <Dashboard></Dashboard>
                    <Outlet></Outlet>
              </div>
        </div>
    )
}

