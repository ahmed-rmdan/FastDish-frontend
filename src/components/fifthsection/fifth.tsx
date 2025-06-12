
import React from "react";
import {Location} from "./location";

export const Fifth:React.FC<{}>=()=>{
   
    return(
         <section className="fifth">
                <p>Locations</p>
                <div className="locations">
                     <div className="start">
                           <p>Cairo</p>
                           <Location location={[30.045592,31.237981]}></Location>
                     </div>
                     <div className="end">
                           <p>Giza</p>
                           <Location location={[30.009107,31.200841]}></Location>
                     </div>
                     <div className="start">
                            <p>Alexandria</p>
                            <Location location={[31.198346567984313,29.894763728265215]}></Location>
                     </div>
                     <div className="end">
                             <p>Tanta</p>
                             <Location location={[30.78784930823166,31.001840190007467]}></Location>
                     </div>

                </div>
               
                  
         </section>


    )
}