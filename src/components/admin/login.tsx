import React from "react"
import { Contexttoken } from "../../store/contexttoken"
import { use ,useState} from "react"
import { useNavigate } from "react-router"
export const Adminlogin:React.FC<{}>=()=>{
const {settoken}=use(Contexttoken)
const [errors,seterrors]=useState('')
const navigate=useNavigate()
async function handlesignin(e:React.FormEvent<HTMLFormElement>){
    
         e.preventDefault()
      const data = new FormData(e.currentTarget);
const formdata=Object.fromEntries(data.entries())

 fetch('https://fastdish-backend-production.up.railway.app/admin/signin',{
    method:'POST',
     headers:{ 'Content-Type': 'application/json', 
                    'Accept': 'application/json',
                },
                    
       body:JSON.stringify(formdata)
}).then(res=>{
    return res.json()
}).then(data=>{
    if(data.message=='signin succed'){
           console.log('sign in')
           settoken(data.token)
           navigate('/admin/products')

           return;
    }
    console.log('failed')
     seterrors(data.message) 
     return
})

}

    return(
        <div className="outlet">
                <div className="logincontainer">
                      <form className="login" onSubmit={handlesignin} >
                        <div>
                             <p> UserName</p>
                        <input type="text" name='username'></input>
                        </div>
                        <div>
                              <p> PassWord</p>
                        <input type='password' name='password'></input>
                        </div>
                           <p style={{height:'25px',alignSelf:'start',color:'red',fontSize:'0.8em'}}>{errors}</p>
                              <button type="submit" className="login">login</button>
                              
                           
                    </form>
                                     
                </div>   
                
                
        </div>
    )
}


