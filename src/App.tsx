import { Nav } from "./components/nav/nav"
import { First } from "./components/firstsection/first"
import { Second } from "./components/secondsection/second"
import { Third } from "./components/third section/third"
import { Fourth } from "./components/fourthsection/fourth"
import { Fifth } from "./components/fifthsection/fifth"
import { Sixth } from "./components/sixthsection/sixth"
import { Contextpageprovider } from "./store/contextpages"
import { Contextsearchprovider } from "./store/contextsearch"
function App() {
 

  return (
    <>
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
 
      

    </>
  )
}

export default App
