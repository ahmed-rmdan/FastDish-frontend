import React from "react"
import { use,useEffect} from "react"
import { Contextsearch } from "../../store/contextsearch"
import { Contextpage } from "../../store/contextpages"
export const Search:React.FC<{}>=()=>{
const{getsearchmeals,setisloading,seterror}=use(Contextsearch)
const {choosesearchpg}=use(Contextpage)
  const searchinputvalue=React.useRef<HTMLInputElement>(null)
useEffect(()=>{
featchmeals('burger',false)
},[])

  function submitsearch(ev:React.FormEvent){
ev.preventDefault()
const search=searchinputvalue.current?.value
if(search!==null&&search!==undefined&&search!==''){
 featchmeals(search,true)
}
  }


function featchmeals(search:string,togo:boolean){
  const section=document.querySelector('.third')
  if(togo)
  section?.scrollIntoView({behavior:"smooth"})

   async function loadmeals(){
          setisloading(true)
        
          try{
            
const res=await fetch(`https://fastdish-backend.onrender.com/admin/getsearchproducts?search=${search}`)  
if(!res.ok){
throw new Error('somthing went wrong')
}
const data=await res.json()
seterror(null)
setisloading(false)
choosesearchpg(1)
  getsearchmeals(data)
          }   catch(error){
               if(error instanceof Error){
                    setisloading(false)
               seterror(error.message)
               }
              
              
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
