import React from "react"
import { use} from "react"
import { Contextsearch } from "../../store/contextsearch"
import { Contextpage } from "../../store/contextpages"
export const Search:React.FC<{}>=()=>{
const{getsearchmeals,setisloading,seterror}=use(Contextsearch)
const {choosesearchpg}=use(Contextpage)
  const searchinputvalue=React.useRef<HTMLInputElement>(null)
  function submitsearch(ev:React.FormEvent){
ev.preventDefault()
const search=searchinputvalue.current?.value
if(search!==null&&search!==undefined&&search!==''){
 featchmeals(search)
}
  }
function featchmeals(search:string){
  const section=document.querySelector('.third')
  section?.scrollIntoView({behavior:"smooth"})
   async function loadmeals(){
          setisloading(true)
        
          try{
            
const res=await fetch(`https://forkify-api.jonas.io/api/v2/recipes?search=${search}`)  
if(!res.ok){
throw new Error('somthing went wrong')
}
const data=await res.json()
seterror(null)
setisloading(false)
choosesearchpg(1)
  getsearchmeals(data.data.recipes)
          }   catch(error){
               if(error instanceof Error)
               seterror(error.message)
              
              }                            
}
loadmeals()

  }
    return(
      <form className="search-form" onSubmit={submitsearch}>
           <input type="text"  placeholder="YOUR MEAL" ref={searchinputvalue}/>
           <button > search</button>
      </form>
    )
}
