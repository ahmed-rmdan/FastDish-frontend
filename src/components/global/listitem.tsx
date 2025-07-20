import React from "react"
import { use } from "react"
import { Contextcart } from "../../store/contextcart"
import { Contextfavourite } from "../../store/contextfavorite"
import { useNavigate } from "react-router"

export const Listitem:React.FC<{imgeurl:string,name:string,quantity:number,price:number,type:string,id:string}>=(props)=>{
    const {dispatchcartitems}=use(Contextcart)
    const {dispatchfavouriteitems }=use(Contextfavourite)
    let navigate=useNavigate()
function editproduct(){
    navigate(`/admin/editproduct/${props.id}`)
}
if(props.type==='menu'){
   
    return(

        <li className="listitem" >
            <div className="iteminfo">
                   <img src={props.imgeurl}>
                
                  
                   </img>
                   <div className="maininfo">
                         <p className="name">{props.name}</p>
                         <p className="ingredients">mashrom+chease+onions+katshup+spicy+ </p>
                         <p className="price">price : {new Intl.NumberFormat("de-DE", { style: "currency", currency: "EGP" }).format(80)} </p>
                   </div>
             

             </div>
             <div className="itembuttons">
                <button onClick={()=>dispatchcartitems({type:'add-item',payload:{id:props.id,title:props.name,image_url:props.imgeurl,publisher:props.name}})}>Add to Cart</button>
                <button onClick={()=>dispatchfavouriteitems({type:'add-item',payload:{id:props.id,title:props.name,image_url:props.imgeurl,publisher:props.name}})}>Add to favourite</button>

             </div>
        </li>
    )
}
if(props.type==='favourite'){

    return(

        <li className="listitem" >
            <div className="iteminfo">
                   <img src={props.imgeurl}>
                
                  
                   </img>
                   <div className="maininfo">
                         <p className="name">{props.name}</p>
                         <p className="ingredients">mashrom+chease+onions+katshup+spicy+ </p>
                         <p className="price"> {new Intl.NumberFormat("de-DE", { style: "currency", currency: "EGP" }).format(80)} </p>
                   </div>
             </div>
             <div className="itembuttons">
                <button onClick={()=>dispatchcartitems({type:'add-item',payload:{id:props.id,title:props.name,image_url:props.imgeurl,publisher:props.name}})} >Add to Cart</button>
                <button   onClick={()=>dispatchfavouriteitems({type:'remove-item',payload:{id:props.id,title:props.name,image_url:props.imgeurl,publisher:props.name}})} >remove</button>

             </div>
        </li>
    )

}
if(props.type==='dialog'){
    return(
        <li className="listitem">
            <div className="iteminfo">
                   <img src={props.imgeurl} >
                   </img>
                   <div className="maininfo">
                         <p className="name">{props.name}</p>
                         <p className="quntity">quantity : {props.quantity}  </p>
                         
                         <p className="price">price : {new Intl.NumberFormat("de-DE", { style: "currency", currency: "EGP" }).format(props.price*props.quantity)}  </p>
                   </div>
                     

             </div>
        </li>
    )
}
if(props.type==='admin'){
    return(
        <li className="listitem">
            <div className="iteminfo">
                   <img src={props.imgeurl} >
                   </img>
                   <div className="maininfo">
                         <p className="name">{props.name}</p>
                         <p className="type">Type : burger</p>
                         <p className="ingredients">mashrom+chease+onions+katshup+spicy </p>
                         <p className="price">price : {new Intl.NumberFormat("de-DE", { style: "currency", currency: "EGP" }).format(props.price*props.quantity)}  </p>
                   </div>
                    

             </div>
              <div className="itembuttons">
                         <button >Delete</button>
                        
                        <button onClick={editproduct}> Edit  </button>

                    </div>
        </li>
    )
}

else{
return(
        <li className="listitem">
            <div className="iteminfo">
                   <img src={props.imgeurl} >
                
                  
                   </img>
                   <div className="maininfo">
                         <p className="name">{props.name}</p>
                         <p className="quntity">quantity : {props.quantity}  </p>
                         <p className="price">price : {new Intl.NumberFormat("de-DE", { style: "currency", currency: "EGP" }).format(props.price*props.quantity)}  </p>
                   </div>
             

             </div>
             <div className="itembuttons">
                <button onClick={()=>dispatchcartitems({type:'increase',payload:{id:props.id,title:props.name,image_url:props.imgeurl,publisher:props.name}})} >+</button>
                <button onClick={()=>dispatchcartitems({type:'decrease',payload:{id:props.id,title:props.name,image_url:props.imgeurl,publisher:props.name}})}>-</button>
                <button onClick={()=>dispatchcartitems({type:'remove-item',payload:{id:props.id,title:props.name,image_url:props.imgeurl,publisher:props.name}})}>remove</button>

             </div>
        </li>
    )
}
    
}