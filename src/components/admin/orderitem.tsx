import React from "react"
import { use } from "react"
import { Contexttoken } from "../../store/contexttoken"
import { useNavigate } from "react-router"


export const Orderitem:React.FC<{name:string,details:string,price:number,address:string,id:string,telphone:number,state:string,payment:string}>=(props)=>{
      const {gettoken,token}=use(Contexttoken)
      const navigate=useNavigate()

   let style={color:'darkorange'}
    if(props.state=='Canceled')
     style={color:'red'}
    if(props.state=='Done')
        style={color:'green'}
    

   
       

    async function deleteorder(){
       const confirm=window.confirm(`you are deleting " ${props.name} " from Database are you sure ? `)
    if(!confirm) return;
      gettoken()
      const res=await fetch(`https://fastdish-backend.onrender.com/admin/deleteorder/${props.id}`,{
            method:'DELETE',
       headers:{    'Content-Type': 'application/json', 
                    'Accept': 'application/json',
                      Authorization:'Beraer ' + token
   
                     } 
      })
if(!res){
      console.log('deleteproblem')
      return
}
window.location.reload()


    }

async function updateorder(value:string){
gettoken()
   console.log(props.id)
      const res=await fetch(`https://fastdish-backend.onrender.com/admin/updateorder/${props.id}`,{
            method:'POST',
       headers:{    'Content-Type': 'application/json', 
                    'Accept': 'application/json',
                      Authorization:'Beraer ' + token
   
                     },
                     body:JSON.stringify({update:value})
      })

      if(!res.ok) return;
      window.location.reload()
      navigate('/admin/orders')

}




return (<li className="listitem orderitem" key={props.id}>
            <div className="iteminfo">
                  
                   <div className="maininfo">
                         <p className="name">{props.name}</p>
                         <p className="details">order : {props.details}</p>
                         <p className="address">address : {props.address} </p>
                         <p className="telphone">phone : {props.telphone} </p>
                         <p className="state" style={style} >  {props.state }.... </p>
                         <p className="payment">Payment: {props.payment} </p>
                         <p className="price">Totlaprice : {new Intl.NumberFormat("de-DE", { style: "currency", currency: "EGP" }).format(props.price)}  </p>
                   </div>
                    

             </div>
              <div className="itembuttons">
                         <button onClick={()=>{updateorder('Done')}} >Done</button>
                         <button style={{fontSize:'1.1em' , fontWeight:'bolder'}} onClick={()=>{updateorder('On Delivery')} }  >On Delivery</button>
                        <button onClick={()=>{updateorder('Canceled')} }  >Cancel</button>

                    </div>
                     <button className="delete" onClick={deleteorder} >DELETE</button>
        </li>)

}
