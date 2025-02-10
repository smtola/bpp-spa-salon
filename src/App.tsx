import {BrowserRouter, Route, Routes} from "react-router-dom";

import Home from './pages/home';
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />}/>
        <Route path='/about-us' element={<AboutUs />}/>
        <Route path='/contact-us' element={<ContactUs />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
