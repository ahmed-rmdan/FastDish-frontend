
import React from "react";
import { LIST } from "./listfavourite";
import { use,useState,useEffect } from "react";
import { Contextfavourite } from "../../store/contextfavorite";
import { Contextpage } from "../../store/contextpages";
import { Taps } from "./taps";
import { ChevronsRight } from 'lucide-react';
import { ChevronsLeft } from 'lucide-react';


export const Fourth:React.FC<{}>=()=>{
  const [numberslider,setnuberslider]=useState<number>(4)
    const {favouritetitems}=use(Contextfavourite)
    const {choosefavouritepg,favouritepg}=use(Contextpage)
console.log(numberslider)
   useEffect(()=>{
        window.addEventListener('resize',()=>{
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
          
        })

   })


    const numberofitems=favouritetitems.items.length

    let pagesarr:number[]=[]
let numpages=0
if(favouritetitems.items!==null){
      numpages=Math.ceil(favouritetitems.items!.length/numberslider)
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
         <section className="fourth">
                <p>Your favourites Meals</p>
                 
                   <div className="slider">
                                      { favouritepg>1&&<button className="prev" onClick={handleprevslider}><ChevronsLeft size={'1.5em'}/></button>}
                                         <div className="items-container">                                                 
                                                      <LIST meals={favouritetitems.items} error={null} numberslice={numberslider} ></LIST>
                                         </div>
                                        
                                      { favouritepg<numpages&&<button className="next" onClick={handlenextslider} ><ChevronsRight size={'1.5em'}/></button>}
                                         
               
                    </div>
                  <Taps numberofitems={numberofitems} pagesarr={pagesarr} ></Taps>
         </section>


    )
}