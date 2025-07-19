import React from "react"


export const Adminlogin:React.FC<{}>=()=>{

    return(
        <div className="outlet">
                <div className="logincontainer">
                      <form className="login" >
                        <div>
                             <p>Your UserName</p>
                        <input type="text"></input>
                        </div>
                        <div>
                              <p>Your PassWord</p>
                        <input type='password'></input>
                        </div>
                           
                              <button className="login">login</button>
                              
                           
                    </form>
                                     
                </div>   
                
                
        </div>
    )
}