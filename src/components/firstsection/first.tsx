import React from "react";
import food from '../../images/food.jpg'
// import { useInView  } from "react-intersection-observer";
import { useEffect ,useState} from "react";
export const First:React.FC<{}>=()=>{
//    const{ref,inView}=useInView({threshold:0.5})
   const [classname,setclassname]=useState('intro display')
    
   useEffect(()=>{
setclassname('intro')
   })
   
    return(
         <section className="first" >
                  <img src={food}>
                  </img>
                   <p className={classname}>Welcome to our resturant <br/> We have very Delicious Food For you <br/> Order what you like </p>
         </section>


    )
}