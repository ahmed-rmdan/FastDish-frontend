
import { Userpage } from "./pages/userpage"
 import { createBrowserRouter } from "react-router"
import { RouterProvider } from "react-router"
import { Admin } from "./components/admin/admin"
const router=createBrowserRouter([
  {index:true,element:<Userpage></Userpage>},
  {path:'/admin',element:<Admin></Admin>,children:[
    
  ]}
]
  
)


function App() {

 

  return (
    <>
    {/* <Contextdialogprovider>
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
    </Contextdialogprovider> */}
   <RouterProvider router={router}></RouterProvider>
    
 
      

    </>
  )
}

export default App
