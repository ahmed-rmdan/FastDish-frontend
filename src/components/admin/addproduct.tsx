import React from "react"


export const Addproduct:React.FC<{type:string}>=(props)=>{

    return(
        <div className="outlet">
                <div className="logincontainer ">
                      <form className="login addcontainer" >
                        <div>
                             <p>meal name</p>
                        <input type="text"></input>
                        </div>
                        <div>
                              <p>Type meal</p>
                             <select>
                            <option>burger</option>
                            <option>pizzza</option>
                            <option>rice</option>
                            <option>pasta</option>
                            <option>chicken</option>
                             </select>
                        </div>
                         <div>
                             <p>ingredients</p>
                        <input type="text"></input>
                        </div>
                        <div>
                             <p>price</p>
                        <input type="number"></input>
                        </div>
                        <div>
                             <p>img url</p>
                        <input type="file"></input>
                        </div>
                              
                              <button className="login">{props.type==='add'?'Add':'Edit'}</button>
                                 
                    </form>
                                     
                </div>   
                
                
        </div>
    )
}