import React from "react"

export const Search:React.FC<{}>=()=>{
    return(
      <form className="search-form">
           <input type="text"  placeholder="YOUR MEAL"/>
           <button> search</button>
      </form>
    )
}