import React from "react"
import { useParams } from "react-router"
import { useNavigate } from "react-router"
import { Contexttoken } from "../../store/contexttoken"
import { useEffect,use } from "react"

export const Addproduct:React.FC<{type:string}>=(props)=>{
let navigate=useNavigate()
let params=useParams()
const {gettoken,token}=use(Contexttoken)

    

useEffect(()=>{
    async function adminloader(){
     gettoken()
const res=await fetch('https://fastdish-backend.onrender.com/admin/isadmin',{
     method:'POST',
       headers:{    'Content-Type': 'application/json', 
                    'Accept': 'application/json',
                      Authorization:'Beraer ' + token
                }   
})
if (!res.ok){
    navigate('/admin/login')
      return;
}

}
 adminloader()

},[token])

async function onsubmit(e:React.FormEvent<HTMLFormElement>){
     e.preventDefault()
      const data = new FormData(e.currentTarget);
const formdata=Object.fromEntries(data.entries())

let url:string;
if(props.type==='add'){
     url='https://fastdish-backend.onrender.com/admin/addproduct'
}else{
     url=`https://fastdish-backend.onrender.com/admin/editproduct/${params.productid}`
}
try{
 const res= await fetch(url,{
     method:'POST',
     headers:{    'Content-Type': 'application/json', 
                    'Accept': 'application/json'},
       body:JSON.stringify(formdata)

})
if(!res.ok){
     throw new Error('post failed')
}

navigate('/admin/products')
}catch(error){
     console.log(error)
}



}
    return(
        <div className="outlet">
                <div className="logincontainer ">
                      <form className="login addcontainer"  onSubmit={onsubmit} >
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
                        <input type="string" name="imgeurl" placeholder="https://i0.wp.com/saturdayswithfrank.com/wp-content/uploads/marg-pizza-new-1.jpg?resize=1200%2C901&ssl=1" ></input>
                        </div>
                              
                              <button className="login" >{props.type==='add'?'Add':'Edit'}</button>
                                 
                    </form>
                                     
                </div>   
                
                
        </div>
    )
}