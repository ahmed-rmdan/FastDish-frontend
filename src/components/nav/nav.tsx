import React from "react"
import logoburger from '../../images/Gerald_G_Fast_Food_Lunch_Dinner_(FF_Menu)_6.svg'
import { Myorders } from "./myorders"
import { Cart } from "./cart"
import { Contextdialog } from "../../store/dialogcontext"
import { Contexttoken } from "../../store/contexttoken"
import { use,useEffect } from "react"
import { Contextorders } from "../../store/contextorders"
export const Nav:React.FC<{}>=()=>{
    const {setdialog}=use(Contextdialog)
    const {token,cleartoken,gettoken,getfavourites}=use(Contexttoken)
    const {getorders}=use(Contextorders)
   useEffect(()=>{
    async function init(){
        gettoken()
         
          if(token==='') return;
   getfavourites(token)
    getorders(token)

    }
   init()
    
   },[token])



    function getto(name:string){
        const section=document.querySelector<HTMLDivElement>(`.${name}`)
    section?.scrollIntoView({behavior:"smooth"})
    }

   async function signouthandle(){
   const alert=await window.confirm('you are loggingOut are you sure')
    if(alert)
   cleartoken()
 
   }
    return(
        <nav>
          
                 <div className="name">
                <img src={logoburger} />
              <p>FastDish</p>
                
                
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
                 <Myorders></Myorders>
                 <button className="signout" onClick={signouthandle}>SignOut</button>
              </div>}
              
                </div>
           

           
           
        </nav>
    )
}