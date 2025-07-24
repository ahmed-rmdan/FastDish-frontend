
import React from "react";
      import { useInView } from "react-intersection-observer";
import { viewanimistion } from "../global/animistion";
import { useState } from "react";
export const Sixth:React.FC<{}>=()=>{
const [className,setclassname]=useState('')
 const{ref,inView}=useInView({threshold:0.5})
    viewanimistion(inView,setclassname,'sixthdisplay')
    return(
         <section className={`sixth ${className}`} ref={ref}>
                  <p>ahmed-rmdan@2025</p>
                  <p>this project made by me from scratch for training purpose</p>
                  
         </section>


    )
}