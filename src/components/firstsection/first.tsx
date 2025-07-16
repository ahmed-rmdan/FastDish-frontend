import React from "react";
import food from '../../images/food.jpg'
import { useInView } from "react-intersection-observer";
export const First:React.FC<{}>=()=>{
   const{ref,inView}=useInView({threshold:0.5})
    return(
         <section className="first" ref={ref}>
                  <img src={food}>
                  </img>
                   <p className={inView?"intro":"intro display"}>Welcome to our resturant <br/> We have very Delicious Food For you <br/> Order what you like </p>
         </section>


    )
}