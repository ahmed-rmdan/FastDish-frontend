import { Nav } from "./components/nav/nav"
import { First } from "./components/firstsection/first"
import { Second } from "./components/secondsection/second"
import { Third } from "./components/third section/third"
import { Fourth } from "./components/fourthsection/fourth"
import { Fifth } from "./components/fifthsection/fifth"
import { Sixth } from "./components/sixthsection/sixth"
import { Contextpageprovider } from "./store/contextpages"
import { Contextsearchprovider } from "./store/contextsearch"
import { Contextcartprovider } from "./store/contextcart"
function App() {
 

  return (
    <>
    <Contextcartprovider>
      <Contextsearchprovider>
   <Contextpageprovider>
         <Nav></Nav>
        <First></First>
        <Second></Second>
        <Third></Third>
        <Fourth></Fourth>
        <Fifth></Fifth>
        <Sixth></Sixth>
    </Contextpageprovider>
    </Contextsearchprovider>

    </Contextcartprovider>
    
 
      

    </>
  )
}

export default App
