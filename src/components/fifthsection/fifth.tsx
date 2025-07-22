
import React from "react";
import {Location} from "./location";

export const Fifth:React.FC<{}>=()=>{
   
    return(
         <section className="fifth">
                <p>Branch Locations</p>
                <div className="locations">
                     <div className="start">
                           <p>Cairo</p>
                           <Location capital="Cairo" location={[30.045592,31.237981] }></Location>
                     </div>
                     <div className="end">
                           <p>Giza</p>
                           <Location capital="Giza" location={[30.009107,31.200841]}></Location>
                     </div>
                     <div className="start">
                            <p>Alexandria</p>
                            <Location capital="Alexandria" location={[31.198346567984313,29.894763728265215]}></Location>
                     </div>
                     <div className="end">
                             <p>Tanta</p>
                             <Location capital="Tanta" location={[30.78784930823166,31.001840190007467]}></Location>
                     </div>

                </div>
               
                  
         </section>


    )
}