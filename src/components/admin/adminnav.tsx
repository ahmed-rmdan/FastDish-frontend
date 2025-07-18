import React from "react"

import logoimg from '../../images/mainicon.png'

export const AdminNav:React.FC<{}>=()=>{

    return(
        <nav>
          
                 <div className="name">
                <img src={logoimg} />
              <p>Food Order</p>
                
                
                </div>
                <div className="container">
                    <p>Admin Dashboard</p>
                    
                </div>
           

           
           
        </nav>
    )
}