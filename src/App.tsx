import {BrowserRouter, Route, Routes} from "react-router-dom";

import Home from './pages/home';
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from "react";
function App() {
    useEffect(() => {
        AOS.init({
            duration: 600,  // Optional: Set animation duration
            easing: 'ease-in-out',  // Optional: Set easing function
        });
    }, []);
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
