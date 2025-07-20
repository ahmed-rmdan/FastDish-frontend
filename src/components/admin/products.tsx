import React from "react"
import { Listitem } from "../global/listitem"
import { useEffect,useState } from "react"
type meal={
    name:string,
    type:string,
    price:number,
    ingredients:string,
    imgeurl:string,
    _id:string
}
export const AdminProducts:React.FC<{}>=()=>{
  const [meals,setmeals]=useState<[meal]>()
  console.log(meals)
useEffect(()=>{async function getmeals(){
 const featchmeals=await fetch('http://localhost:3000/admin/products')
   const getmeals=await featchmeals.json()
   setmeals(getmeals)
}
getmeals()
}
,[])
    return(
        <div className="outlet">
                <ul className="products">
                    {meals!==undefined?meals.map(elm=>{
                      return <Listitem imgeurl={elm.imgeurl} id={elm._id} type='admin' price={elm.price} name={elm.name}  quantity={1} ></Listitem>
                    }):[]}
                     
                        
                                     
                </ul>   
                
                
        </div>
    )
}