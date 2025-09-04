
import React from "react";
import { LIST } from "./listfavourite";
import { use,useState,useEffect } from "react";
import { Contextpage } from "../../store/contextpages";
import { Taps } from "./taps";
import { ChevronsRight } from 'lucide-react';
import { ChevronsLeft } from 'lucide-react';
import { Contexttoken } from "../../store/contexttoken";
import { Contextdialog } from "../../store/dialogcontext";
import { useInView } from "react-intersection-observer";
import { viewanimistion } from "../global/animistion";


export const Fourth:React.FC<{}>=()=>{
  const [numberslider,setnuberslider]=useState<number>(4)
  
    const {choosefavouritepg,favouritepg}=use(Contextpage)
    const {token,favourites}=use(Contexttoken)
    const {setdialog}=use(Contextdialog)
    const{ref,inView}=useInView({threshold:0.5})
    const [className,setclassname]=useState('')
 
    viewanimistion(inView,setclassname,'fourthdisplay')
    const numberofitems=favourites.length

   function setslider(){
         if(favourites.length!==0){
   choosefavouritepg(1)
         }
        
          if(window.innerWidth<=1024&&window.innerWidth>768){
            console.log(window.innerWidth)
               setnuberslider(3)
               return;
          }
          if(window.innerWidth<=768&&window.innerWidth>430){
            setnuberslider(2)
            return;
          }
          if(window.innerWidth<=430){
           setnuberslider(1)
           return
          }
            else{
              setnuberslider(4)
                
            }
          
        
   }
   useEffect(()=>{
      setslider()

        window.addEventListener('resize',setslider)

   },[window.innerWidth])



 
    let pagesarr:number[]=[]
let numpages=0
if(favourites!==null){
      numpages=Math.ceil(favourites!.length/numberslider)
for(let i=1; i<=numpages;i++){
pagesarr.push(i)
}
}
function handlenextslider(){
  if(favouritepg<numpages){
    choosefavouritepg(favouritepg+1)
  }
}
function handleprevslider(){
  if(favouritepg>1){
    choosefavouritepg(favouritepg-1)
  }
}

    return(
         <section className={`fourth ${className}`} ref={ref}>
                <p>Your favourites Meals</p>
                 
                {token===''?<div className="loginfavourite">
                  <p>Please LogIn First to See Favourites !</p>
                    <button onClick={()=>setdialog('signin')}>logIn</button>

                 </div>:<><div className="slider">
                                      { favouritepg>1&&<button className="prev" onClick={handleprevslider}><ChevronsLeft size={'1.5em'}/></button>}
                                         <div className="items-container">
                                        
                                            <LIST meals={favourites} error={null} numberslice={numberslider} ></LIST>
                                                                                           
                                                      
                                         </div>
                                        
                                      { favouritepg<numpages&&<button className="next" onClick={handlenextslider} ><ChevronsRight size={'1.5em'}/></button>}
                                         
               
                    </div>
                  <Taps numberofitems={numberofitems} pagesarr={pagesarr} ></Taps></>
                  } 

                  
                     
         </section>


    )
}

