
import React from "react"
import { AdminNav } from "./adminnav"
export const Admin:React.FC<{}>=()=>{

    return(
        <div className="admin">
              <AdminNav></AdminNav>
              <div className="body">
                    
              </div>
        </div>
    )
}