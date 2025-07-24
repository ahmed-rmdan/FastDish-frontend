import React from "react"

import logoimg from '../../images/mainicon.png'
import { Cart } from "./cart"
import { Contextdialog } from "../../store/dialogcontext"
import { Contexttoken } from "../../store/contexttoken"
import { use } from "react"

export const Nav:React.FC<{}>=()=>{
    const {setdialog}=use(Contextdialog)
    const {token}=use(Contexttoken)
    function getto(name:string){
        const section=document.querySelector<HTMLDivElement>(`.${name}`)
    section?.scrollIntoView({behavior:"smooth"})
    }
    return(
        <nav>
          
                 <div className="name">
                <img src={logoimg} />
              <p>Food Order</p>
                
                
                </div>
                <div className="container">
                    <div className="nav">  
                
                   <button onClick={()=>getto('second')}>Menu</button>
                    <button onClick={()=>getto('fourth')}> Favorites</button>
                  <button onClick={()=>getto('fifth')}> Locations</button>
                   <button onClick={()=>setdialog('contact')} > Contact</button>
                      <Cart></Cart>
               
            </div>
            {token===''?<div className="log"> 
                 <button onClick={()=>setdialog('signin')} > LogIn</button>
                 <button onClick={()=>setdialog('signup')}>SignUp</button>
              </div>:<div className="signedin"> 
                 <button  > My Orders</button>
                 <button className="signout" >SignOut</button>
              </div>}
              
                </div>
           

           
           
        </nav>
    )
}