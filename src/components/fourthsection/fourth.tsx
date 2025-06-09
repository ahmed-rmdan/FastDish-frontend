
import React from "react";
import { LIST } from "./listfavourite";
import { use } from "react";
import { Contextfavourite } from "../../store/contextfavorite";
import { Contextpage } from "../../store/contextpages";
import { Taps } from "./taps";

export const Fourth:React.FC<{}>=()=>{
    const {favouritetitems}=use(Contextfavourite)
    const {choosefavouritepg,favouritepg}=use(Contextpage)
    const numberofitems=favouritetitems.items.length

    let pagesarr:number[]=[]
let numpages=0
if(favouritetitems.items!==null){
      numpages=Math.ceil(favouritetitems.items!.length/4)
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
                                      { favouritepg>1&&<button className="prev" onClick={handleprevslider}>prev</button>}
                                         <div className="items-container">                                                 
                                                      <LIST meals={favouritetitems.items} error={null} ></LIST>
                                         </div>
                                        
                                      { favouritepg<numpages&&<button className="next" onClick={handlenextslider} >next</button>}
                                         
               
                    </div>
                  <Taps numberofitems={numberofitems} pagesarr={pagesarr} ></Taps>
         </section>


    )
}