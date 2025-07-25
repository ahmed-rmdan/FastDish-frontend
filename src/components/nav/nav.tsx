import React from "react"
import logoburger from '../../images/Gerald_G_Fast_Food_Lunch_Dinner_(FF_Menu)_6.svg'

import { Cart } from "./cart"
import { Contextdialog } from "../../store/dialogcontext"
import { Contexttoken } from "../../store/contexttoken"
import { use } from "react"

export const Nav:React.FC<{}>=()=>{
    const {setdialog}=use(Contextdialog)
    const {token,settoken}=use(Contexttoken)
    function getto(name:string){
        const section=document.querySelector<HTMLDivElement>(`.${name}`)
    section?.scrollIntoView({behavior:"smooth"})
    }

   async function signouthandle(){
   const alert=await window.confirm('you are loggingOut are you sure')
    if(alert)
    settoken('')
   }
    return(
        <nav>
          
                 <div className="name">
                <img src={logoburger} />
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
                 <button onClick={()=>setdialog('signin')} > SignIn</button>
                 <button onClick={()=>setdialog('signup')}>SignUp</button>
              </div>:<div className="signedin"> 
                 <button  > My Orders</button>
                 <button className="signout" onClick={signouthandle}>SignOut</button>
              </div>}
              
                </div>
           

           
           
        </nav>
    )
}