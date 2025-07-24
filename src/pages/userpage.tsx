import { Nav } from "../components/nav/nav"
import { First } from "../components/firstsection/first"
import { Second } from "../components/secondsection/second"
import { Third } from "../components/third section/third"
import { Fourth } from "../components/fourthsection/fourth"
import { Fifth } from "../components/fifthsection/fifth"
import { Sixth } from "../components/sixthsection/sixth"
import { Search } from "../components/global/srarch"
import { Contextpageprovider } from "../store/contextpages"
import { Contextsearchprovider } from "../store/contextsearch"
import { Contextcartprovider } from "../store/contextcart"
import { Contextfavouriteprovider } from "../store/contextfavorite"
import { Contextdialogprovider } from "../store/dialogcontext"
import { Contexttokenprovider } from "../store/contexttoken"
import { Modal } from "../components/dialogs/modal"

 
export const Userpage=function Userpage() {

 

  return (
    <>
    <Contexttokenprovider>
<Contextdialogprovider>
 <Contextfavouriteprovider>
          <Contextcartprovider>
      <Contextsearchprovider>
   <Contextpageprovider>
    <Modal></Modal>
         <Nav></Nav>
        <Search></Search>
        <First></First>
        <Second></Second>
        <Third></Third>
        <Fourth></Fourth>
        <Fifth></Fifth>
        <Sixth></Sixth>
    </Contextpageprovider>
    </Contextsearchprovider>
    </Contextcartprovider>
    </Contextfavouriteprovider>
    </Contextdialogprovider>
    </Contexttokenprovider>
    
   
    
 
      

    </>
  )
}
