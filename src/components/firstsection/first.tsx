import React from "react";
import food from '../../images/food.jpg'
import { useEffect ,useState} from "react";
export const First:React.FC<{}>=()=>{

   const [classname,setclassname]=useState('intro display')
    
   useEffect(()=>{
setclassname('intro')
   },[])
   
    return(
         <section className="first" >
                  <img src={food}>
                  </img>
                   <p className={classname}>Welcome to our resturant <br/> We have very Delicious Food For you <br/> Order what you like </p>
         </section>


    )
}