import React from "react"
import { Search } from "../global/srarch"
import { Cart } from "./cart"

export const Nav:React.FC<{}>=()=>{
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
              <button> Contact</button>
              <Cart></Cart>
              <Search></Search>

            </div>
        </nav>
    )
}