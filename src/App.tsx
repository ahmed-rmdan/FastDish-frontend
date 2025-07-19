
import { Userpage } from "./pages/userpage"
 import { createBrowserRouter } from "react-router"
import { RouterProvider } from "react-router"
import { Admin } from "./components/admin/admin"
import { Adminlogin } from "./components/admin/login"
const router=createBrowserRouter([
  {index:true,element:<Userpage></Userpage>},
  {path:'/admin',element:<Admin></Admin>,children:[
    {path:'login',element:<Adminlogin></Adminlogin>}
  ]}
]
  
)


function App() {

 

  return (
    <>

   <RouterProvider router={router}></RouterProvider>
    
 
    </>
  )
}

export default App
