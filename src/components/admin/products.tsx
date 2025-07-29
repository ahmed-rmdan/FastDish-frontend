import React from "react"
import { Listitem } from "../global/listitem"
import { useEffect,useState } from "react"
  import { Contexttoken } from "../../store/contexttoken"
import { useNavigate } from "react-router"
import { use } from "react"
type meal={
    name:string,
    type:string,
    price:number,
    ingredients:string,
    imgeurl:string,
    _id:string
}
export const AdminProducts:React.FC<{}>=()=>{
  const [meals,setmeals]=useState<meal[]>([])
  console.log(meals)
    const navigate=useNavigate()
const {token}=use(Contexttoken)


useEffect(()=>{
      async function adminloader(){
        console.log(token)
const res=await fetch('http://localhost:3000/admin/isadmin',{
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
  
  async function getmeals(){
 const featchmeals=await fetch('http://localhost:3000/admin/products')
   const getmeals=await featchmeals.json()
   setmeals(getmeals)
}
getmeals()
}
,[token])
    return(
        <div className="outlet">
                <ul className="products">
                    {meals!==undefined?meals.map(elm=>{
                      return <Listitem imgeurl={elm.imgeurl} id={elm._id} type='admin' price={elm.price} name={elm.name} ingredients={elm.ingredients} typemeal={elm.type} quantity={1} ></Listitem>
                    }):[]}
                     
                        
                                     
                </ul>   
                
                
        </div>
    )
}