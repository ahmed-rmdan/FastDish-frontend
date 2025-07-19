
import React from "react"
import { AdminNav } from "./adminnav"
import { Dashboard } from "./dashboard"
import { Outlet } from "react-router"
export const Admin:React.FC<{}>=()=>{

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