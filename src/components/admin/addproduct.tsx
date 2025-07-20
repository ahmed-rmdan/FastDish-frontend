import React from "react"
import { useNavigate } from "react-router"

export const Addproduct:React.FC<{type:string}>=(props)=>{
let navigate=useNavigate()

function onsubmit(data:FormData){
const formdata=Object.fromEntries(data.entries())
formdata.imgeurl=''

fetch('http://localhost:3000/admin/addproduct',{
     method:'POST',
     headers:{    'Content-Type': 'application/json', 
                    'Accept': 'application/json'},
       body:JSON.stringify(formdata)

})
console.log('succed')
navigate('/admin/products')


}
    return(
        <div className="outlet">
                <div className="logincontainer ">
                      <form className="login addcontainer" action={onsubmit} >
                        <div>
                                 <p>meal name</p>
                        <input type="text" name="name" required={props.type==='add'}></input>

                        </div>
                        
                        
                        <div>
                              <p>Type meal</p>
                             <select name="type" required={props.type==='add'}>
                            <option>burger</option>
                            <option>pizzza</option>
                            <option>rice</option>
                            <option>pasta</option>
                            <option>chicken</option>
                             </select>
                        </div>
                         <div>
                             <p>ingredients</p>
                        <input type="text" name="ingredients" required={props.type==='add'}></input>
                        </div>
                        <div>
                             <p>price</p>
                        <input type="number" name="price" required={props.type==='add'}></input>
                        </div>
                        <div>
                             <p>img url</p>
                        <input type="file" name="imgeurl" ></input>
                        </div>
                              
                              <button className="login" >{props.type==='add'?'Add':'Edit'}</button>
                                 
                    </form>
                                     
                </div>   
                
                
        </div>
    )
}