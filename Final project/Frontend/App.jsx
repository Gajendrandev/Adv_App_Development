
import './App.css'
import {LoginForm} from './Pages/adminpages/LoginForm'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import {HomePage} from './Pages/adminpages/homePage';
import { Aboutpage } from './Pages/adminpages/AboutPage';
import { Eventpage } from './Pages/adminpages/Eventpage';
import { Viewbooking } from './Pages/adminpages/Viewbooking';
import { Silverpack } from './Pages/adminpages/Silverpack';
import {Goldpack} from './Pages/adminpages/Goldpack';
import { Goldevent } from './Pages/adminpages/Goldevent';
import { Goldview } from './Pages/adminpages/Goldview';
import { Platinumpack } from './Pages/adminpages/Platinumpack';
import { Platinumevent } from './Pages/adminpages/Platinumevent';
import { Platinumview } from './Pages/adminpages/Platinumview';
// import { Enquiry } from './Pages/adminpages/Enquiry';
import { Signup } from './Pages/adminpages/Signup';
import { Adminlogin } from './Pages/userpages/Adminlogin';
import { Adminhome } from './Pages/userpages/Adminhome';
import { Adminview } from './Pages/userpages/Adminview';
import { Enquiry } from './Pages/adminpages/Enquiry';
function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginForm></LoginForm>}> </Route>
        <Route path='/landing' element={<HomePage></HomePage>}></Route>
        <Route path="/Aboutus" element={<Aboutpage></Aboutpage>}></Route>
        <Route path="/Event" element={<Eventpage></Eventpage>}></Route>
        <Route path="/Home" element={<HomePage></HomePage>}></Route>
        <Route path="/Viewbook" element={<Viewbooking></Viewbooking>}></Route>
        <Route path="/Backbooking" element={<Eventpage></Eventpage>}></Route>
        <Route path="/Silver" element={<Silverpack></Silverpack>}></Route>
        <Route path="/Gold" element={<Goldpack></Goldpack>}></Route>
        <Route path="/Goldevent" element={<Goldevent></Goldevent>}></Route>
        <Route path="/Goldview" element={<Goldview></Goldview>}></Route>
        <Route path="/Backgold" element={<Goldevent></Goldevent>}></Route>
        <Route path="/Platinum" element={<Platinumpack></Platinumpack>}></Route>
        <Route path="/Platinumevent" element={<Platinumevent></Platinumevent>}></Route>
        <Route path="/Platinumview" element={<Platinumview></Platinumview>}></Route>
        <Route path="/Backplatinum" element={<Platinumevent></Platinumevent>}></Route>
         <Route path="/Enquiry" element={<Enquiry></Enquiry>}></Route>
        <Route path="/Login" element={<LoginForm></LoginForm>}></Route>
        <Route path="/Sign" element={<Signup></Signup>}></Route>
        <Route path="/Loginto" element={<LoginForm></LoginForm>}></Route>
        <Route path="/Adminlogin" element={<Adminlogin></Adminlogin>}></Route>
        <Route path="/Admin" element={<Adminhome></Adminhome>}></Route>
        <Route path="/Adminview" element={<Adminview></Adminview>}></Route>
        <Route path="/adad" element={<Adminhome></Adminhome>}></Route>


      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
