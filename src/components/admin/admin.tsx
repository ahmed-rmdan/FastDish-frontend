
import React from "react"
import { AdminNav } from "./adminnav"
import { Dashboard } from "./dashboard"
import { Outlet, useNavigate } from "react-router"
import { Contexttoken } from "../../store/contexttoken"
import { use ,useEffect} from "react"

export const Admin:React.FC<{}>=()=>{

const {token}=use(Contexttoken)
const navigate=useNavigate()

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
navigate('/admin/products')
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

