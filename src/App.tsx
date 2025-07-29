
import { Userpage } from "./pages/userpage"
 import { createBrowserRouter } from "react-router"
import { RouterProvider } from "react-router"
import { Admin } from "./components/admin/admin"
import { Adminlogin } from "./components/admin/login"
import { AdminProducts } from "./components/admin/products"
import { Addproduct } from "./components/admin/addproduct"
import { Orders } from "./components/admin/orders"
import { Contexttokenprovider } from "./store/contexttoken"


const router=createBrowserRouter([
  {index:true,element:<Userpage></Userpage>},
  {
    path:'/admin',element:<Admin></Admin>,children:[
    {path:'login',element:<Adminlogin></Adminlogin>},
    {path:'products',element:<AdminProducts></AdminProducts>},
    {path:'addproduct',element:<Addproduct type="add"></Addproduct>},
    {path:'editproduct/:productid',element:<Addproduct type=""></Addproduct>},
    {path:'orders',element:<Orders/>}
  ]}
]
  
)


function App() {

 

  return (
    <>
<Contexttokenprovider>

<RouterProvider router={router}></RouterProvider>
</Contexttokenprovider>
   
    
 
    </>
  )
}

export default App
