import React, { useReducer } from "react";
import type { meal,cartmeal } from "../components/global/type";

export const Contextcart=React.createContext<{cartitems:{items:cartmeal[]},dispatchcartitems:(action:actiontype)=>void}>
({ 
    cartitems:{items:[]},
    dispatchcartitems:()=>{}
})
type actiontype={
    type:string,
    payload:meal
}
function dispatchfunction(state:{items:cartmeal[]},action:actiontype){
if(action.type==='add-item'){
    const newitem:cartmeal={...action.payload,number:1}
return{
items:[...state.items,newitem]
}
}
else{
    return{...state}
}

}
export const Contextcartprovider:React.FC<{children:React.ReactNode}>=(props)=>{
const [cartitems,dispatchcartitems]=useReducer(dispatchfunction,{items:[]})

const contextvalue={cartitems,dispatchcartitems}
    return(
        <Contextcart value={contextvalue}>
            {props.children}
        </Contextcart>

    )
}