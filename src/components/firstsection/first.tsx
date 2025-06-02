import React from "react";
import food from '../../images/food.jpg'
export const First:React.FC<{}>=()=>{
    return(
         <section className="first">
                  <img src={food}>
                  </img>
                   <p>Welcome to out resturant <br/> Burger-Pizza-Pasta-Meat-Chicken <br/> Order what you like </p>
         </section>


    )
}