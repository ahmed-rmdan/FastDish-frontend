
import React from "react";
      import { useInView } from "react-intersection-observer";
import { viewanimistion } from "../global/animistion";
import { useState } from "react";
import facelogo from '../../images/SOCIAL MEDIA/Facebook-Logosu.png'
import githublogo from '../../images/SOCIAL MEDIA/GitHub_Invertocat_Logo.svg.png'
import linkedlogo from '../../images/SOCIAL MEDIA/linkdin.png'
import youtubelogo from '../../images/SOCIAL MEDIA/YouTube_full-color_icon_(2024).svg.png'
export const Sixth:React.FC<{}>=()=>{
const [className,setclassname]=useState('')
 const{ref,inView}=useInView({threshold:0.2})
    viewanimistion(inView,setclassname,'sixthdisplay')
    return(
         <section className={`sixth ${className}`} ref={ref}>
                 <h3> ContactMe</h3>
                  <div className="contactme">
                           <a href="https://github.com/ahmed-rmdan">  <img src={githublogo}></img>    </a>
                            <a href="https://www.linkedin.com/in/ahmed-ramadan-63a4272b9/">  <img src={linkedlogo}></img>    </a>
                             <a href="https://www.facebook.com/ahmed.ramadan.439597/">  <img src={facelogo}></img>    </a>
                             <a href="https://www.youtube.com/@ahmedrmadan2406">  <img src={youtubelogo}></img>    </a>
                        
                        </div>      

               <div className="footer"><p>fastdish.netlify.app@2025</p>
                  <p>ahmedrmadan251998@gmail.com</p></div>
                       
                 
                
                  
         </section>


    )
}