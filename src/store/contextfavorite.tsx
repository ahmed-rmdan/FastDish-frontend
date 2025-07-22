import React, { useReducer} from "react";
import type { meal } from "../components/global/type";

export const Contextfavourite=React.createContext<{favouritetitems:{items:meal[]},dispatchfavouriteitems:(action:actiontype)=>void 
}>
({ 
     favouritetitems:{items:[]},
    dispatchfavouriteitems:()=>{},
   
})
type actiontype={
    type:string,
    payload:meal
}
function dispatchfunction(state:{items:meal[]},action:actiontype){
if(action.type==='add-item'){
    
   
return{
items:[...state.items,action.payload]
}
}
if(action.type==='remove-item'){
    
    const newcartmeals=[...state.items].filter(elm=>elm._id!==action.payload._id)
 
    return{
        items:newcartmeals
    }
}

else{
    return{...state}
}

}
export const Contextfavouriteprovider:React.FC<{children:React.ReactNode}>=(props)=>{
const [ favouritetitems,dispatchfavouriteitems]=useReducer(dispatchfunction,{items:[]})


const contextvalue={favouritetitems,dispatchfavouriteitems}
    return(
        <Contextfavourite value={contextvalue}>
            {props.children}
        </Contextfavourite>

    )
}