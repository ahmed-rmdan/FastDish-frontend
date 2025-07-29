import React from "react"

import logoimg from '../../images/Gerald_G_Fast_Food_Lunch_Dinner_(FF_Menu)_6.svg'

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