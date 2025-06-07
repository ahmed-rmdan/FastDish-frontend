import React from "react"
import { Search } from "../global/srarch"
import { Cart } from "./cart"
export const Nav:React.FC<{}>=()=>{
    return(
        <nav>
            <div className="name">Food Order</div>
            <div className="nav">  
              <button>Menu</button>
              <button> Favorites</button>
              <button> Locations</button>
              <button> Contact</button>
              <Cart></Cart>
              <Search></Search>

            </div>
        </nav>
    )
}