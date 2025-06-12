import React from "react"
import { Search } from "../global/srarch"
import { Cart } from "./cart"
import { Contextdialog } from "../../store/dialogcontext"
import { use } from "react"
export const Nav:React.FC<{}>=()=>{
    const {setdialog}=use(Contextdialog)
    function getto(name:string){
        const section=document.querySelector<HTMLDivElement>(`.${name}`)
    section?.scrollIntoView({behavior:"smooth"})
    }
    return(
        <nav>
            <div className="name">Food Order</div>
            <div className="nav">  
              <button onClick={()=>getto('second')}>Menu</button>
              <button onClick={()=>getto('fourth')}> Favorites</button>
              <button onClick={()=>getto('fifth')}> Locations</button>
              <button onClick={()=>setdialog('contact')} > Contact</button>
              <Cart></Cart>
              <Search></Search>

            </div>
        </nav>
    )
}