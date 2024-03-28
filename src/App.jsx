import Navbar from './Components/Navbar'
import './index.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Home from "./Pages/Home"
import About from "./Pages/About"
import Blog from "./Pages/Blog"
import ContactUs from "./Pages/ContactUs";
import Shop from "./Pages/Shop";

function App() {
  const router = createBrowserRouter( 
    createRoutesFromElements( 
      <Route path="/" element={<Root />}> 
        <Route index element={<Home />} /> 
        <Route path="/About" element={<About />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/Shop" element={<Shop />} />
      </Route>
    )
  );

  return (
    <div>
      <RouterProvider router={router}/> 
    </div>
  );
}
export default App;

const Root = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div> 
        <Outlet />
      </div>
    </>
  );
};
