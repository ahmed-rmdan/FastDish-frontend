import React from "react"
import { Listitem } from "../global/listitem"

export const AdminProducts:React.FC<{}>=()=>{

    return(
        <div className="outlet">
                <ul className="products">
                      <Listitem imgeurl="" id="" type="admin" price={200} name="burger chease" quantity={1} ></Listitem>
                        <Listitem imgeurl="" id="" type="admin" price={200} name="burger chease" quantity={1} ></Listitem>
                          <Listitem imgeurl="" id="" type="admin" price={200} name="burger chease" quantity={1} ></Listitem>
                                     
                </ul>   
                
                
        </div>
    )
}