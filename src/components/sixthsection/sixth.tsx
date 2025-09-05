
import React from "react";
      import { useInView } from "react-intersection-observer";
import { viewanimistion } from "../global/animistion";
import { useState } from "react";
import facelogo from '../../images/SOCIAL MEDIA/Facebook-Logosu.png'
import githublogo from '../../images/SOCIAL MEDIA/GitHub_Invertocat_Logo.svg.png'
import linkedlogo from '../../images/SOCIAL MEDIA/linkdin.png'
export const Sixth:React.FC<{}>=()=>{
const [className,setclassname]=useState('')
 const{ref,inView}=useInView({threshold:0.2})
    viewanimistion(inView,setclassname,'sixthdisplay')
    return(
         <section className={`sixth ${className}`} ref={ref}>
                 <h3> ContactMe</h3>
                  <div className="contactme">
                           <a href="https://github.com/ahmed-rmdan">  <img src={githublogo}></img>    </a>
                            <a href="www.linkedin.com/in/ahmed-ramadan-5a7493382">  <img src={linkedlogo}></img>    </a>
                             <a href="https://www.facebook.com/ahmed.ramadan.439597/">  <img src={facelogo}></img>    </a>
                        
                        </div>      

               <div className="footer"><p>https://fastdish.netlify.app@2025</p>
                  <p>ahmedrmadan251998@gmail.com</p></div>
                       
                 
                
                  
         </section>


    )
}